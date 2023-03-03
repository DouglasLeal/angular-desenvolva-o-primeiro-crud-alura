import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from 'src/app/models/pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.scss']
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamento: Pensamento = {id: 0, conteudo: "", autoria: "", modelo: ""}

  constructor(private service: PensamentoService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get("id"));
      this.service.buscarPorId(id).subscribe((pensamento) => {
        this.pensamento = pensamento;
      });
  }

  excluir(){
    this.service.excluir(this.pensamento.id!).subscribe(result => {
      this.router.navigate(["/"]);
    });
  }

  cancelar(){
    this.router.navigate(["/"]);
  }
}
