/**
 * Software interface defines information about a programming software
 */
export interface Software {
  /**
   * The name of the programming software
   */
  name: string;
}

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
