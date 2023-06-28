import AsyncStorage from "@react-native-async-storage/async-storage"

import { signIn } from "../Auth/login.js"
import { getData } from "../Store/userData.js"
import Carteirinha from "./Carteirinha.js"

export default class Usuario {

    constructor() {
        data = null
    }

    async realizarLogin(username, password) {
        try { 
            // TODO: realiza login
            await signIn(username, password)
                // retorno o usuario logado
                .then(data => {
                    this.uid = data.uid
                    // retorna os dados do usuario de acordo com o uid
                    getData("user", this.uid)
                        .then(data => {
                            let result = data.data()

                            // leitura dos dados de cadastro
                            this.nome = result.info.name
                            this.email = result.info.email
                            this.cpf = result.info.cpf
                            this.endereco = result.info.address
                            this.telefone = result.info.phone 
                            this.dataRegistro = result.info.registerDate
                            this.validade = result.info.validityDate
                            this.matricula = result.info.matricula

                            // leitura dos dados da carteira
                            this.carteirinha = new Carteirinha(result.wallet.balance, result.wallet.transaction)
                        })
                })
        } catch (error) {
        
        }
    }

    async puxarDados() {
        getData("user", this.uid)
            .then(data => {
                let result = data.data()

                // leitura dos dados de cadastro
                this.nome = result.info.name
                this.email = result.info.email
                this.cpf = result.info.cpf
                this.endereco = result.info.address
                this.telefone = result.info.phone 
                this.dataRegistro = result.info.registerDate
                this.validade = result.info.validityDate
                this.matricula = result.info.matricula

                // leitura dos dados da carteira
                this.carteirinha = new Carteirinha(result.wallet.balance, result.wallet.transaction)
            })
    }
}