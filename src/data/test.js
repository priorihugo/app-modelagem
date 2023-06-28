import Usuario from "./classes/User.js"

var user = new Usuario()

let uid = "FMOVbF1vZnbEsqPvBpny9J1dcgJ3"

user.realizarLogin("gustavo.furtado@estudante.ufjf.br", "123456789")
    .then(() => {
        console.log(JSON.stringify(user))
    })

user.puxarDados(uid)
    .then(() => {
        console.log(JSON.stringify(user))
    })
