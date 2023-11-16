import { Usuario } from "src/entidades/usuario.entidade";
import { CriarUsuarioRequest } from "src/requests/criar-usuario.request";

export class UsuarioServico {
    getUsuarioPorId(id: number) {
        throw new Error("Method not implemented.");
    }

    public getUsuario(): Usuario[]{
        var usuarios = [
            new Usuario({
            
                email: 'vl',
                id:1
                
            }),
        ];

        return usuarios;
    }

    public incluirUsuario(request: CriarUsuarioRequest): Usuario {
        var usuario = new Usuario()
    }

    private checarNomeUsuario(user: Usuario, nome: string): boolean {
        var userNomeNormalizado = user.nome.toLowerCase();
        var nomeBuscaNormalizado = nome.toLowerCase();

        var contemTextoNONome = userNomeNormalizado.includes(nomeBuscaNormalizado);

        return contemTextoNONome;
    }


    private checarEmailUsuario(user: Usuario, email: string): boolean {
        

    }
}