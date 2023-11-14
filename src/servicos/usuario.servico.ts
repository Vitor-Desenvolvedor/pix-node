import { Usuario } from "src/entidades/usuario.entidade";

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
}