export class Usuario {

    public id: number;
    public nome: string;
    public senha: string;
    public email: string;
    
    constructor (nome: string, email: string, senha: string){
        this.nome = nome;
        this.email = email
    }
}