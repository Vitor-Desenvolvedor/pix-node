import { Controller, Get } from "@nestjs/common";
import {response} from
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


    
    @Get('getPorNome')
    public getPorNome(@Query('nome') nome ){
        console.log(nome);
    }


    @Get(':id')
    public getUsuarioPorid(@Param() params: any, @Res() res:Response) {
        var usuarioEncontrado = this.usuarioServico.getUsuarioPorId(params.id);

        if(usuarioEncontrado != undefined) {
            res.status(HttpStatus.OK).json(usuarioEncontrado);
        } else {
            res.status(HttpStatus.BAD_REQUEST);
        }

        return usuarioEncontrado;

    }

    catch (exception) {
        res.status(HttpStatus.CONFLICT).json(exception);
    }

    res.send();

}