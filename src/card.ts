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
   * The source of the icon
   */
  source?: string;

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
    source: 'Info icons created by Stockio - Flaticon https://www.flaticon.com/free-icons/info',
    description: 'Learn more information about me',
  },
  {
    id: 1,
    icon: 'assets/coding.png',
    title: 'Coding Projects',
    source: 'Coding icons created by Kiranshastry - Flaticon https://www.flaticon.com/free-icons/coding',
    description: 'A look into my coding projects',
  },
  {
    id: 2,
    icon: 'assets/contact.png',
    title: 'Contact Info',
    source: 'Contact icons created by Cuputo - Flaticon https://www.flaticon.com/free-icons/contact',
    description: 'How to get in touch with me',
  },
  {
    id: 3,
    icon: 'assets/resume.png',
    title: 'Resume',
    source: 'Portfolio icons created by Freepik - Flaticon https://www.flaticon.com/free-icons/portfolio',
    description: 'Click here to view my resume',
  }
] as Card[];
