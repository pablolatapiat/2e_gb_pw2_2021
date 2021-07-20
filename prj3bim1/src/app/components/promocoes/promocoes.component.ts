import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.css']
})
export class PromocoesComponent implements OnInit {

  indice: number = 0

  promocao = [
    {
      indice: 0,
      nome: 'HITMAN 3',
      capa: 'assets/promo/d1.jpg',
      tm: 'IO Interactive',
      promo: '-25%',
      precoAnt: 'R$ 113,99',
      preco: 'R$ 85,49'
    },
    {
      indice: 1,
      nome: 'Warframe: Initiate Pack',
      capa: 'assets/promo/d2.jpg',
      tm: 'Digital Extremes | Dig...',
      promo: '-50%',
      precoAnt: 'R$ 22,99',
      preco: 'R$ 14,99'
    },
    {
      indice: 2,
      nome: 'The Flower Collectors',
      capa: 'assets/promo/d3.jpg',
      tm: "Mi'pu'mi Games",
      promo: '-40%',
      precoAnt: 'R$ 37,99',
      preco: 'R$ 22,79'
    },
    {
      indice: 3,
      nome: 'Fortnite',
      capa: 'assets/promo/d4.jpg',
      tm: 'Epic Games',
      promo: '',
      precoAnt: '',
      preco: 'Gratuito'
    },
    {
      indice: 4,
      nome: 'Through the Darkest of...',
      capa: 'assets/promo/d5.jpg',
      tm: 'Paitbucker Games | Handy...',
      promo: '-50%',
      precoAnt: 'R$ 22,99',
      preco: 'R$ 14,99'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
