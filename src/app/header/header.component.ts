import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  ngOnInit(): void {
   }

   cpf: String = ""
   formLogin = new FormGroup({
    cpf: new FormControl('', [Validators.maxLength(14), 
                        Validators.required, Validators.minLength(14)])
   })

   constructor(private fb: FormBuilder){}

   consultar(){
      alert("Testando a consulta!")
   }

   mascara_cpf(cpf: any){

    if(this.cpf.length ==3){
    this.cpf = this.cpf + '.';
    }

    if(this.cpf.length == 7){
      this.cpf = this.cpf + '.';
    }
    if(this.cpf.length ==11){
      this.cpf = this.cpf + '-';
     }
   }
}
