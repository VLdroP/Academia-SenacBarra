import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import Typed from 'typed.js'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  ngOnInit(): void {
    const options = {
      stringsElement: '#typed-string',
      strings: ['Conquiste seus objetivos..', 'Foco no seu corpo', 'Um novo conceito de academia'],
      typeSpeed: 200,
      backSpeed: 100,
      backDelay: 200,
      smartBackspace: true,
      fadeOut: true,
      showCursor: false,
      startDelay: 1000,
      loop: true
    };

      const typed = new Typed('.typing-element', options)
    }

    constructor(private router: Router){ }

    gotoCadastroClientes(){

      this.router.navigate(['cadastro-clientes'])
    }

    gotoPlanos(){
      this.router.navigate(['planos'])
      
    }
  



}
