import { getData, updateData } from "../Store/userData";
export default class CardapioDataBase {
  constructor() {}

  async fetch() {
    const pratosData = await (
      await getData("menu", "eYlkYDkwstonUkfcb0Wz")
    ).data();
    this.pratos = pratosData.pratos;
    console.log("pratos ", pratosData.pratos);
  }

  async registrarPrato({ tipo, nome, foto, descricao, ingredientes }) {
    const pratosData = await (
      await getData("menu", "eYlkYDkwstonUkfcb0Wz")
    ).data();
    let obj = { ...pratosData.pratos };
    obj[tipo] = {
      nome: nome,
      foto: foto,
      descricao: descricao,
      ingredientes: ingredientes,
    };
    await updateData("menu", "eYlkYDkwstonUkfcb0Wz", { 'pratos': obj });
    await this.fetch();
  }

  async registrarAvaliacoes() {}
}
