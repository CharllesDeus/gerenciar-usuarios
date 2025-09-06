// conte caixa = 'nomes'
const usuario = ['Matheus','Marcos','Lucas','João'];

    function retornarUsuarios() {
    return usuario;
}

    function adicionarNovoUsuario ( nome){
        usuario.push(nome);
    }

module.exports = { 
     retornarUsuarios,
     adicionarNovoUsuario

};