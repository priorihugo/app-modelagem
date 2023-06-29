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

// não permite transações de o saldo for ficar abaixo de 2.80

const trasacoes = ['debito', 'credito', 'transferencia']

await user.registrarTrasacao(-800, 'debito')
    .then(() => {
        console.log("Após adicionar saldo...")
        console.log("Saldo: " + user.carteirinha.balance)
        console.log("Histórico")
        console.log(user.carteirinha.transactions)
    })