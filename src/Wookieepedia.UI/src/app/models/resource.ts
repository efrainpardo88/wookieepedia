import { Card } from './card';

export interface Resource {
  count: string;
  next: string;
  previous: string;
  results: Card[];
  resourceType: string;
  page: string;
}
