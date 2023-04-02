import { Item } from './item';

/**
 * Technology interface defines information about a programming technology
 */
export interface Technology extends Item {}

export const technologies = [
  {
    name: 'Eclipse',
  },
  {
    name: 'Postman',
  },
  {
    name: 'Visual Studio',
  },
  {
    name: 'Visual Studio Code',
  },
] as Technology[];
