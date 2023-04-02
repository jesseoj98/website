/**
 * Platform interface defines information about a programming platform
 */
export interface Platform {
  /**
   * The name of the programming platform
   */
  name: string;
}

export const platforms = [
  {
    name: 'Windows',
  },
  {
    name: 'Unix',
  },
] as Platform[];
