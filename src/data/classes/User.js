import AsyncStorage from "@react-native-async-storage/async-storage"

import { signIn } from "../Auth/login.js"
import { getData } from "../Store/userData.js"

export default class Usuario {

    constructor() {
        this.uid = ""
        this.nome = ""
        this.email = ""
        this.cpf = ""
        this.endereco = ""
        this.telefone = ""
        this.dataRegistro = ""
        this.validade = ""
        this.matricula = ""
        this.carteirinha = null
    }

    async realizarLogin(username, password) {
        try { 
            // TODO: realiza login
            await signIn(username, password)
                .then(async data => {
                    this.uid = data.uid
                    console.log(this.uid)
                    // retorna os dados do usuario de acordo com o uid
                    await getData("users", this.uid)
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
                            this.carteirinha = result.wallet
                        })
                    return false
                })
        } catch (error) {
        
        }
    }

    async puxarDados(uid = this.uid) {
        await getData("users", uid)
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
                this.carteirinha = result.wallet

                return
            })
    }
}