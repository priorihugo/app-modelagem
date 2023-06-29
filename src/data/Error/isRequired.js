export default isRequired = arg => {
    if (arg)
        throw Error("É necessário inserir " + arg + "!");
    else 
        throw Error("É necessário inserir todas as informações!");
}