/**
 * Card interface defines information about a card
 */
export interface Card {
  /**
   * The id of the card
   */
  id: number;

  /**
   * The source of the icon
   */
  source?: string;

  /**
   * The path to the icon for the card
   */
  icon?: string;

  /**
   * What to display for the title/hover of the icon and if icon cannot be loaded
   */
  alt?: string;

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
    source: 'https://www.flaticon.com/free-icons/info',
    alt: 'Info icons created by Stockio - Flaticon',
    description: 'Learn more information about me',
  },
  {
    id: 1,
    icon: 'assets/coding.png',
    title: 'Coding Projects',
    source: 'https://www.flaticon.com/free-icons/coding',
    alt: 'Coding icons created by Kiranshastry - Flaticon',
    description: 'A look into my coding projects',
  },
  {
    id: 2,
    icon: 'assets/contact.png',
    title: 'Contact Info',
    source: 'https://www.flaticon.com/free-icons/contact',
    alt: 'Contact icons created by Cuputo - Flaticon',
    description: 'How to get in touch with me',
  },
  {
    id: 3,
    icon: 'assets/resume.png',
    title: 'Resume',
    source: 'https://www.flaticon.com/free-icons/portfolio',
    alt: 'Portfolio icons created by Freepik - Flaticon',
    description: 'Click here to view my resume',
  },
] as Card[];
