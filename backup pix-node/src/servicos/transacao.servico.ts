import { Transacao } from "src/entidades/transacao.entidade";

export class TransacaoServico {

    getTransacao(): Transacao[] {
        var trans = [
            // new Transacao(new Date(2023,10,13),1500,"Marcelo Reis","Jeremias Boa Morte","13789947821","Pix realizado")
        ];
        return trans;
    }
}