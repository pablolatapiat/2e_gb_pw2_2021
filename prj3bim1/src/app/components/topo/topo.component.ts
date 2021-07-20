import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  navresp: any = ['Descobrir','Navegar']

  constructor() { }

  ngOnInit(): void {
    this.navresp = 'Descobrir'
  }

  getdesc() {
    this.navresp = 'Descobrir'
  }

  getnav(){
    this.navresp = 'Navegar'
  }
}
