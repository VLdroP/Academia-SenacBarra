import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { clienteService } from '../servicos/cliente.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../model/cliente-model';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {

  cliente = {} as Cliente;
  clientes: Cliente[] = []

  nome: String = "";
  email: String = "";
  cpf: String = "";
  telefone: String = "";
  endereco: String = "";

  

  ngOnInit(){
    this.formCadastro = this.fb.group({
      nome: "",
      cpf: "",
      email: "",
      telefone: "",
      endereco: ""

    })



  }

  constructor(private fb: FormBuilder, private service: clienteService,
    private router: Router){}

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required]),
    telefone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    endereco: new FormControl('', [Validators.required]),
  })

   cadastro(){

    if(this.cliente.id == undefined){
      this.service.inserirCliente(this.cliente).subscribe(() => {
        alert("Dados cliente" + this.cliente)
      });
    } else {

      alert("Cadastro não realizado.")
   };

  }

   mascara_cpf(cpf: any){
    if(this.cpf.length == 3){
      this.cpf = this.cpf + '.';
    }
    if(this.cpf.length == 7){
      this.cpf = this.cpf + '.';
    }

    if(this.cpf.length == 11){
      this.cpf = this.cpf + '-';
    } }
  
mascara_tel(telefone: any){
  if(this.telefone.length==0){
    this.telefone = this.telefone + '(';
  }
  if(this.telefone.length==3){
    this.telefone = this.telefone + ')';
  }
  if(this.telefone.length== 8){
    this.telefone = this.telefone + '-';
  }
}
}




