import { Card } from './card';

export interface Starship {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: Date;
    species: Card[];
    starships: Card[];
    vehicles: Card[];
    people: Card[];
    planets: Card[]; 
}
