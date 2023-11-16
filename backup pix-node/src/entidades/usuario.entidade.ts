export class Usuario {

    public id: number;
    public nome: string;
    public senha: string;
    public email: string;
    
    constructor (user: Partial<Usuario>){
        this.id = user?.id ?? 0;
        this.nome = user?.nome ?? '';
        this.email = user?.email ?? '';
        this.senha = user?.senha ?? '';
    }
}