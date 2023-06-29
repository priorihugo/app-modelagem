import Usuario from "./classes/User.js"

var user = new Usuario()

let uid = "FMOVbF1vZnbEsqPvBpny9J1dcgJ3"

await user.realizarLogin("gustavo.furtado@estudante.ufjf.br", "123456789")
    .then(() => {
        console.log(user.email)
    })

await user.puxarDados()
    .then(() => {
        console.log("saldo é: " + user.carteirinha.balance)
        console.log("historico é: "+ JSON.stringify(user.carteirinha.transactions))
    })

await user.registrarTrasacao(500, 'spdkapw')
    .then(() => {
        console.log("Após adicionar saldo...")
        console.log("Saldo: " + user.carteirinha.balance)
        console.log("Histórico")
        console.log(user.carteirinha.transactions)
    })