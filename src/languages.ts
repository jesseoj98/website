/**
 * Language interface defines information about a programming language
 */
export interface Language {
  /**
   * The name of the programming language
   */
  name: string;
}

export const languages = [
  {
    name: 'Java',
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
