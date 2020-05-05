import { Resource } from './resource';

export interface Planet {
  title: string;
  name: string;
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: Resource[];
  films: Resource[];
  species: Resource[];
  vehicles: Resource[];
  starships: Resource[];
  people: Resource[];
  planets: Resource[];
  url: string;
  imageUrl: string;
  release_date:string;
}
