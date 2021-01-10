import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  houses = [
    {
      title: 'Un bel appartement',
      owner: 'Proprio',
      adress: '120 rue Pasteur',
      price: '3',
      picture: 'test'
    },
    {
      title: 'Petit nid douillet',
      owner: 'Moi',
      adress: 'Quelque part',
      price: '99',
      picture: 'test'
    },
    {
      title: 'Case Bleue',
      owner: 'Monopoly',
      adress: 'Rue de la Paix',
      price: '100',
      picture: 'test'
    },
    {
      title: 'Bientôt chez vous',
      owner: 'D. Trump',
      adress: 'Maison Blanche',
      price: '1 Milliard',
      picture: 'test'
    }
  ];
  
  constructor() { }
}
