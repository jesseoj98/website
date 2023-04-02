import { Item } from './item';

/**
 * Framework interface defines information about a framework
 */
export interface Framework extends Item {}

export const frameworks = [
  {
    name: 'Angular & NodeJS',
  },
  {
    name: 'Spring Boot',
  },
  {
    name: 'Spring Batch',
  },
  {
    name: 'Oracle Database',
  },
] as Framework[];
