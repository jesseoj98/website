import { Item } from './item';

/**
 * Tool interface defines information about a programming tool
 */
export interface Tool extends Item {}

export const tools = [
  {
    name: 'Git',
  },
  {
    name: 'Jenkins',
  },
  {
    name: 'SonarQube',
  },
  {
    name: 'Agile / Scrum',
  },
] as Tool[];
