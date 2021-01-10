import { Injectable } from '@angular/core';
//import { House } from '../_models/house.model';
//import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  //housesSubject = new Subject<any[]>();

  houses = [
    {
      title: 'Un bel appartement',
      owner: 'Moi',
      adress: '120 rue Pasteur',
      price: '150',
      picture: 'bel-appartement.webp',
      size: '60',
      nbBedRoom: '2',
      nbRoom: '4',
      about: 'Bel appartement, lumineux. Avec décor epuré et élégant !',
    },
    {
      title: 'Petit nid douillet',
      owner: 'Maître Corbeau',
      adress: 'Sur un arbre perché',
      price: '1',
      picture: 'nid.jpeg',
      size: '0.5',
      nbBedRoom: '1',
      nbRoom: '1',
      about: 'Cui cui cui cui, cui cui ? CUI !'
    },
    {
      title: 'Case Bleue',
      owner: 'Monopoly',
      adress: 'Rue de la Paix',
      price: '400',
      picture: 'rue-de-la-paix.jpeg',
      size: '100',
      nbBedRoom: '7',
      nbRoom: '10',
      about: 'J\'espère que vous l\'achèterez avant de tomber dessus'
    },
    {
      title: 'Maison Blanche',
      owner: 'D. Trump',
      adress: '1600 Pennsylvania Ave NW, Washington, DC 20500, États-Unis.',
      price: '1 Milliard',
      picture: 'maison-blanche.jpeg',
      size: '1500',
      nbBedRoom: '75',
      nbRoom: '200',
      about: 'Oui oui vous pouvez acheter la maison blanche !! L\'ancien propriétaire déménage bientôt !'
    }
  ];

  addHouse(house: any){
    this.houses.push(house);
  }

  constructor() { }
}
