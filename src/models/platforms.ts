import { Item } from './item';

/**
 * Platform interface defines information about a programming platform
 */
export interface Platform extends Item {}

export const platforms = [
  {
    name: 'Windows',
  },
  {
    name: 'Unix',
  },
] as Platform[];
