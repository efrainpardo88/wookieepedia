import { Injectable } from '@angular/core';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor() { }

  getResourceWithCards(resource) {
    if (resource.films)
      resource.films = this.getCards(resource.films);
    if (resource.people)
      resource.people = this.getCards(resource.people);
    if (resource.planets)
      resource.planets = this.getCards(resource.planets);
    if (resource.species)
      resource.species = this.getCards(resource.species);
    if (resource.species)
      resource.vehicles = this.getCards(resource.vehicles);
    if (resource.vehicles)
      resource.starships = this.getCards(resource.starships);
    if (resource.pilots)
      resource.pilots = this.getCards(resource.pilots);

    return resource;
  }

  private getCards(data): Card[] {
    const cards: Card[] = [];
    data.forEach(item => {
      const dataUrl = item.split("/");
      cards.push({
        url: "/" + dataUrl[4] + "/" + dataUrl[5],
        imageUrl: "/assets/categories/" + dataUrl[4] + "/" + dataUrl[5] + ".jpg"
      });
    });
    return cards;
  }
}
