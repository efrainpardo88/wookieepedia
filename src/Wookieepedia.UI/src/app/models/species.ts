import { Resource } from './resource';

export interface Species {
  title: string;
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  average_lifespan: string;
  eye_colors: string;
  hair_colors: string;
  skin_colors: string;
  language: string;
  homeworld: string;
  people: Resource[];
  films: Resource[];
  url: string;
  imageUrl: string;
  residents: Resource[];
  species: Resource[];
  vehicles: Resource[];
  starships: Resource[];
  characters: Resource[];
  release_date:string[];
  planets: Resource[];
  opening_crawl: string;
}
