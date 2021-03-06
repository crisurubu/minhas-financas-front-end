import React from 'react'
import ApiService from '../apiservice'
import ErroValidacao from '../exception/ErroValidacao';

class UsuarioService extends ApiService{
    constructor(){
        super('/api/usuarios')
    }

    autenticar(credenciais){
       return this.post('/autenticar', credenciais)
    }
    obterSaldoPorUsuario(id){
        return this.get(`/${id}/saldo`);
    }
    salvar(usuario){
        return this.post('', usuario);
    }

    validar(usuario){
        const erros = []
        if(!usuario.nome){ erros.push('O Campo Nome é Obrigatório.')}
       
        if(!usuario.email){
            erros.push('O Campo Email é Obrigatório.')
        }else if(!usuario.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)){
            erros.push('Informe um Email válido.')

        }

        if(!usuario.senha || !usuario.senhaRepeticao){ 
            erros.push('Digite a Senha 2x')
        }else if(usuario.senha !== usuario.senhaRepeticao){
            erros.push('As Senhas não são iguais.')
        }

        if(erros && erros.length > 0){
            throw new ErroValidacao(erros);
        }
    }

}
export default UsuarioService;