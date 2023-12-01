import { NgModel } from "@angular/forms"

export class Cliente{

    id: string ;
    nome: string;
    cpf: string;
    email: string;
    telefone: string;
    endereco: string;
    
    constructor( id: string, nome: string, cpf:string, email: string, telefone: string, endereco: string ){

        this.id = id,
        this.nome = nome,
        this.cpf = cpf,
        this.email = email,
        this.telefone = telefone,
        this.endereco = endereco
    }
}