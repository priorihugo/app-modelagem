import { getData, updateData } from '../Store/userData.js'

export default class Catraca {
    static async validarCarteirinha(uid) {
        getData(uid).then((data) => {
            if(data == undefined) return false
            return true
        })
    }

    static async debitarUsuario(uid) {
        let balance
        let valid = await this.validarCarteirinha(uid)
        if (!valid) return "Invalida"
        getData(uid).then((data) => {
            result = data.data()
            balance = result.wallet.balance
            history = result.wallet.transactions
            if (balance > -2.8) {
                balance -= 2.8
                updateData(uid, {
                    "wallet.balance": balance - 1.4,
                    "wallet.trasactions": history.push({
                        "value": 1.4,
                        "type": "pagamento"
                    })
                })
                permitirEntrada()
            } else return "Sem saldo"
        })
    }

    async permitirEntrada() {
        return true
    }
}