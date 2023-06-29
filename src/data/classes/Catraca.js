import { getData } from '../Store/userData.js'

import Usuario from './User.js'

export default class Catraca {
    static async validarCarteirinha(uid) {
        getData(uid).then((data) => {
            if(data == undefined) return false
            return true
        })
    }

    static async debitarUsuario(uid) {
        let valid = await this.validarCarteirinha(uid)
        if (!valid) return "Invalida"
        Usuario.registrarTrasacao(-2.80, "debito", uid)
        .then( result => {
            if(result) permitirEntrada()
            return emitirErro()
        })
    }

    async permitirEntrada() {
        return true
    }

    async emitirErro(){
        return false
    }
}