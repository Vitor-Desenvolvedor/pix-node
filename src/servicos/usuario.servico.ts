import { Usuario } from "src/entidades/usuario.entidade";

export class UsuarioServico {

    public getUsuario(): Usuario[]{
        var usuarios = [
            new Usuario("Matheus","mmg01.2003@gmail.com","bebe"),
        ];

        return usuarios;
    }
}