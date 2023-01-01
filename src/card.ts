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
    icon: 'assets/info.png',
    title: 'About Me',
    description: 'Learn more information about me',
  },
  {
    id: 1,
    icon: 'assets/coding.png',
    title: 'Coding Projects',
    description: 'A look into my coding projects',
  },
  {
    id: 2,
    icon: 'assets/contact.png',
    title: 'Contact Info',
    description: 'How to get in touch with me',
  },
  {
    id: 3,
    icon: 'assets/blog.png',
    title: 'Blog',
    description: 'Read my personal thoughts',
  },
] as Card[];
