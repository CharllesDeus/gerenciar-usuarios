const { adicionarNovoUsuario, retornarUsuarios } = require('../src/gerenciarUsuarios');
const { expect } = require('chai');


describe('testar as funções de Gestão de Usuario', function () {
    it('Validar que posso adicionar um novo nome de usuario na lista ', function(){
        
    //1° adicionar um novo nome na lisra de usuarios
        adicionarNovoUsuario('Charlles');
    //2° Retornar a lista de usurios na caixa lista de usuarios
        const listaDeUsuarios = retornarUsuarios();
    //3° comparar se o novo adicionado esta no final da lista
        expect(listaDeUsuarios.at(-1)).to.equal('Maria');
    });

});