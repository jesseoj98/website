import { Item } from './item';

/**
 * Tool interface defines information about a programming tool
 */
export interface Tool extends Item {}

export const tools = [
  {
    name: 'Git', // I'd argue that Git isn't a skill, but w/e
  },
  {
    name: 'Jenkins',
  },
  {
    name: 'SonarQube',
  },
  {
    name: 'Agile / Scrum Methodologies',
  },
  {
    name: 'SOLID Principles',
  },
] as Tool[];
