import { Resource } from './resource';

export interface Starship {
  name: string;
  model: number;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: Resource[];
  films: Resource[];
  url: string;
  imageUrl: string;
}
