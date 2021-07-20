import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gratis',
  templateUrl: './gratis.component.html',
  styleUrls: ['./gratis.component.css']
})
export class GratisComponent implements OnInit {

  indice: number = 0

  gratis = [
    {
      indice: 0,
      nome: 'Genshin Impact',
      capa: 'assets/gratis/g1.jpg',
      state : 'Gratis'
    },
    {
      indice: 1,
      nome: 'Control',
      capa: 'assets/gratis/g2.jpg',
      state : 'Gratis'
    },
    {
      indice: 2,
      nome: 'Hell Is other demons',
      capa: 'assets/gratis/g3.jpg',
      state : 'Em Breve'
    },
    {
      indice: 3,
      nome: 'Overcooked! 2',
      capa: 'assets/gratis/g4.jpg',
      state : 'Em Breve'
    }
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
