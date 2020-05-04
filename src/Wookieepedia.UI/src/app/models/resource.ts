import { Card } from './card';

export interface Resource {
  count: number;
  next: string;
  previous: string;
  results: Card[];
  resourceType: string;
  page: string;
}
