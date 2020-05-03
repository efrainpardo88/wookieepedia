import { Resource } from './resource';

export interface Planet {
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
  url: string;
  imageUrl: string;
}
