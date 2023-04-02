import { Item } from './item';

/**
 * Technology interface defines information about a programming technology
 */
export interface Technology extends Item {}

export const technologies = [
  {
    name: 'JUnit',
  },
  {
    name: 'ELK Stack',
  },
  {
    name: 'RESTful APIs',
  },
] as Technology[];
