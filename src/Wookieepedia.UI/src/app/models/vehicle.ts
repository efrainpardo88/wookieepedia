import { Resource } from './resource';

export interface Vehicle {
  name: string;
  model: string;
  vehicle_class: string;
  manufacturer: string;
  length: string;
  cost_in_credits: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  cargo_capacity: string;
  consumables: string;
  films: Resource[];
  pilots: Resource[];
  url: string;
  imageUrl: string; 
}
