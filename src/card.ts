/**
 * Card interface defines information about a card
 */
export interface Card {
  /**
   * The id of the card
   */
  id: number;

  /**
   * The path to the icon for the card
   */
  icon?: string;

  /**
   * The title of the card
   */
  title: string;

  /**
   * The description of the card
   */
  description: string;
}

export const cards = [
  {
    id: 0,
    title: 'About Me',
    description: 'Learn more about me',
  },
  {
    id: 1,
    title: 'Coding Projects',
    description: 'A look into my coding projects',
  },
  {
    id: 2,
    title: 'Contact Info',
    description: 'How to get in touch',
  },
  {
    id: 3,
    title: 'Blog',
    description: 'Read my personal thoughts',
  },
] as Card[];
