/**
 * Technology interface defines information about a programming technology
 */
export interface Technology {
  /**
   * The name of the programming technology
   */
  name: string;
}

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
