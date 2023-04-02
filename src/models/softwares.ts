import { Item } from './item';

/**
 * Software interface defines information about a programming software
 */
export interface Software extends Item {}

export const softwares = [
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
] as Software[];
