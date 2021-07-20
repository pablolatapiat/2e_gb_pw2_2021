import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novos-populares',
  templateUrl: './novos-populares.component.html',
  styleUrls: ['./novos-populares.component.css']
})
export class NovosPopularesComponent implements OnInit {

  indice: number = 0

  lancamentos = [
    {
      indice: 0,
      nome: 'Chivalry 2',
      capa: 'assets/lancamentos/l1.jpg',
      promo: '',
      precoAnt: '',
      preco: 'R$ 75,99'
    },
    {
      indice: 1,
      nome: 'Open Country',
      capa: 'assets/lancamentos/l2.jpg',
      promo: '',
      precoAnt: '',
      preco: 'R$ 56,99'
    },
    {
      indice: 2,
      nome: 'Chicory: A Colorful Tale',
      capa: 'assets/lancamentos/l3.jpg',
      promo: '',
      precoAnt: '',
      preco: 'R$ 37,99'
    },
    {
      indice: 3,
      nome: 'Galactic Civilizations IV',
      capa: 'assets/lancamentos/l4.jpg',
      promo: '',
      precoAnt: '',
      preco: 'R4 75,49'
    },
    {
      indice: 4,
      nome: 'Edge Of Eternity',
      capa: 'assets/lancamentos/l5.jpg',
      promo: '-15%',
      precoAnt: 'R$ 63,99',
      preco: 'R$ 54,39'
    }
  ]

  vendidos = [
    {
      indice: 0,
      nome: 'NBA 2K21',
      capa: 'assets/vendidos/v1.jpg',
      promo: '-74%',
      precoAnt: 'R$ 249,90',
      preco: 'R$ 64,97'
    },
    {
      indice: 1,
      nome: 'Chivalry 2',
      capa: 'assets/vendidos/v2.jpg',
      promo: '',
      precoAnt: '',
      preco: 'R$ 75,99'
    },
    {
      indice: 2,
      nome: 'Red Dead Redemption 2',
      capa: 'assets/vendidos/v3.jpg',
      promo: '-33%',
      precoAnt: 'R$ 69,99',
      preco: 'R$ 160,13'
    },
    {
      indice: 3,
      nome: 'Grand Theft Auto V',
      capa: 'assets/vendidos/v4.jpg',
      promo: '-33%',
      precoAnt: 'R$ 239',
      preco: 'R$ 160,13'
    },
    {
      indice: 4,
      nome: "Assassin's Creed Valhalla",
      capa: 'assets/vendidos/v5.jpg',
      promo: '-25%',
      precoAnt: 'R$ 199,99',
      preco: 'R$ 149,99'
    }
  ]

  breve = [
    {
      indice: 0,
      nome: 'Jurassic World 2',
      capa: 'assets/breve/b1.jpg',
      promo: '',
      precoAnt: '',
      preco: 'Em breve'
    },
    {
      indice: 1,
      nome: "Tiny Tina's Wonderlands",
      capa: 'assets/breve/b2.jpg',
      promo: '',
      precoAnt: '',
      preco: 'Em breve'
    },
    {
      indice: 2,
      nome: 'Diciples: Liberation',
      capa: 'assets/breve/b3.jpg',
      promo: '-10%',
      precoAnt: 'R$ 79',
      preco: '71,10'
    },
    {
      indice: 3,
      nome: 'Pathfinder: Wrath ',
      capa: 'assets/breve/b4.jpg',
      promo: '',
      precoAnt: '',
      preco: 'Em breve'
    },
    {
      indice: 4,
      nome: 'Yakuza Empire',
      capa: 'assets/breve/b5.jpg',
      promo: '',
      precoAnt: '',
      preco: 'Em breve'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
