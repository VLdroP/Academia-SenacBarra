
/**Serviço de interação como o banco de dados */
import { ErrorHandler, Injectable } from "@angular/core";
import { HttpHeaders, HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Cliente } from "../model/cliente-model";
import { Observable } from "rxjs";
import { throwError } from "rxjs";
import { catchError } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class clienteService{

    /* Conexão com o banco de dados*/

    private API_URL = 'http://localhost:3000';

    /*Indicar o tipo de dados que será passado pelo Header*/

    httpOptions = {hearders: new HttpHeaders(
        { 'Content-Type': 'application/json; charset=utf-8'}
    )}

    constructor(private http: HttpClient){}


   

    /* Métodos CRUD */

    //Inserir um cliente na tabela
    

 inserirCliente(cliente: any): Observable<Cliente>{

    return this.http.post<Cliente>(this.API_URL + '/cliente/',
    JSON.stringify(cliente))
    .pipe(
      catchError(this.errorHandler)
    )
  }

  //Listar todos os clientes

  listarCliente(){
    return this.http.get<Cliente[]>('${API_URL}/cliente')
  }

  //Listar cliente pelo CPF

  pesquisaCliente(cpf: String){

    return this.http.get<Cliente>('${API_URL}/cliente?cpf=${cpf}')
  }

  //Atualiza dados do cliente

  atualizarCliente(cliente: Cliente){

    return this.http.put('${API_URL}/cliente', cliente)
  }

  //Apagar cliente

  apagarCliente(cpf: String){

    return this.http.delete<Cliente>('${API_URL}/cliente/${cpf}')
  }



  //Verificar os tipos de erros
  errorHandler(error: any){
    let errorMessage ="Erro ao cadastrar";

    if(error.error instanceof ErrorEvent){

        //Quando o erro for no client-side(lado do cliente)
        errorMessage = error.error.message
    } else{

        //Quando o error for do lado do servidor server-side
    errorMessage = 'Error Code: ${error.status}\nMessage: ${error.message}';
    }
console.log(errorMessage);
return throwError(errorMessage)
}}