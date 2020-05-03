import { Resource } from './resource';

export interface People {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: Resource[];
  species: Resource[];
  vehicles: Resource[];
  starships: Resource[];
  created: Date;
  edited: Date;
  url: string;
  imageUrl: string;
}
