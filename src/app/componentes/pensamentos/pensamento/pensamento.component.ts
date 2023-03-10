import { Component, Input } from '@angular/core';
import { Pensamento } from 'src/app/models/pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.scss']
})
export class PensamentoComponent {
  @Input() pensamento : Pensamento = {conteudo: "", autoria: "", modelo: ""};

  public larguraPensamento(): string{
    if(this.pensamento.conteudo.length >= 256){
      return "pensamento-g";
    }

    return "pensamento-p";
  }
}
