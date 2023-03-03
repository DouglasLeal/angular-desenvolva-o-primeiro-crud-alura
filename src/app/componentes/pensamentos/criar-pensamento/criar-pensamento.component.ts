import { Component } from '@angular/core';
import { Pensamento } from 'src/app/models/pensamento';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss']
})
export class CriarPensamentoComponent {

  pensamento: Pensamento = {
    conteudo: "",
    autoria: "",
    modelo: ""
  }

  criarPensamento(){
    
  }

  cancelar(){
    
  }
}
