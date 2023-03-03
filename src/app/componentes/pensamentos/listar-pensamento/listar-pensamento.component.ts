import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss']
})
export class ListarPensamentoComponent {
  public listaPensamentos = [
    {
      conteudo: "I love Angular",
      autoria: "Nay",
      modelo: "modelo3"
    },
    {
      conteudo: "C# >>>>> Java",
      autoria: "DL",
      modelo: "modelo1"
    },
  ]
}
