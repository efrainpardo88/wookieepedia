import { Card } from './card';

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
  films: Card[];
  species: Card[];
  vehicles: Card[];
  starships: Card[];
  created: Date;
  edited: Date;
  url: LinkStyle;
}
