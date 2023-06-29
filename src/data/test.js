import Usuario from "./classes/User.js"

var user = new Usuario()

await user.realizarLogin("gustavo.furtado@estudante.ufjf.br", "123456789")
    .then(async () => {
        let uidDest = await Usuario.buscarUsuarioPorCPF('22233344455')
        uidDest = uidDest.info.uid
        console.log("ID destino: " + uidDest) 
        user.compartilharSaldo(50, uidDest)
    })

let uidDest = await Usuario.buscarUsuarioPorCPF('22233344455')
uidDest = uidDest.info.uid
console.log("ID destino: " + uidDest) 
user.compartilharSaldo(50, uidDest)

//ou  user.puxaDados(uid)
await user.puxarDados()
    .then(() => {
        console.log("saldo é: " + user.carteirinha.balance)
        console.log("historico é: "+ JSON.stringify(user.carteirinha.transactions))
    })

// não permite transações de o saldo for ficar abaixo de 2.80
await user.registrarTrasacao(-800, 'debito')
    .then(() => {
        console.log("Após adicionar saldo...")
        console.log("Saldo: " + user.carteirinha.balance)
        console.log("Histórico")
        console.log(user.carteirinha.transactions)
    })