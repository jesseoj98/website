import { Item } from './item';

/**
 * Language interface defines information about a programming language
 */
export interface Language extends Item {}

export const languages = [
  {
    name: 'Java / C#',
  },
  {
    name: 'HTML / CSS / SCSS',
  },
  {
    name: 'JavaScript / TypeScript',
  },
  {
    name: 'SQL',
  },
] as Language[];
