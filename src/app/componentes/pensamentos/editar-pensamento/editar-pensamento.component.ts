import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from 'src/app/models/pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.scss']
})
export class EditarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {id: 0, conteudo: "", autoria: "", modelo: ""}

  constructor(private service: PensamentoService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get("id"));
      this.service.buscarPorId(id).subscribe((pensamento) => {
        this.pensamento = pensamento;
      });
  }

  editar(){
    this.service.editar(this.pensamento).subscribe(result => {
      this.router.navigate(["/"]);
    });
  }

  cancelar(){
    this.router.navigate(["/"]);
  }
}
