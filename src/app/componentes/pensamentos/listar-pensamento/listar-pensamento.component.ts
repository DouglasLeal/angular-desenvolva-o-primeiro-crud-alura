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
      conteudo: "Viagem espacial é a realização de um sonho ancestral da humanidade, a busca por desvendar os mistérios do universo e expandir nossas fronteiras. É uma jornada que desafia nossos limites tecnológicos e humanos, mas que também nos inspira a imaginar possibilidades infinitas para o futuro da humanidade.",
      autoria: "ChatGPT",
      modelo: "modelo2"
    },
    {
      conteudo: "C# >>>>> Java",
      autoria: "DL",
      modelo: "modelo1"
    },
  ]
}
