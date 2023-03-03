import { Component, OnInit } from '@angular/core';
import { Pensamento } from 'src/app/models/pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss']
})
export class ListarPensamentoComponent implements OnInit{
  public listaPensamentos: Pensamento[] = []

  constructor(private service: PensamentoService){

  }

  ngOnInit(): void {
      this.service.listar().subscribe(result => {
        this.listaPensamentos = result;
      });
  }
}
