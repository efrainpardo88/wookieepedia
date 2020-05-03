import { Resource } from './resource';

export interface Starship {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  species: Resource[];
  starships: Resource[];
  vehicles: Resource[];
  people: Resource[];
  planets: Resource[];
  url: string;
  imageUrl: string;
}
