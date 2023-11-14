import { Controller, Get } from "@nestjs/common";
import { Usuario } from "src/entidades/usuario.entidade";
import { UsuarioServico } from "src/servicos/usuario.servico";

@Controller({
    path: "usuarios"
})
export class UsuarioController {

    constructor(private usuarioServico: UsuarioServico){

    }
    
    @Get("listarUsuarios")
    public listarUsuarios(): Usuario[]{
       
        return this.usuarioServico.getUsuario();
    }
}