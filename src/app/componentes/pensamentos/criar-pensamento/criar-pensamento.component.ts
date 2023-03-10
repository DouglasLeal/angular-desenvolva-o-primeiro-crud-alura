import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pensamento } from 'src/app/models/pensamento';
import { PensamentoService } from '../pensamento.service';

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

  constructor(private service: PensamentoService, private router: Router) { }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(result => {
      this.router.navigate(['/']);
    });
  }
}
