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
        title: 'About Me',
        description: 'Learn more about me',
    },
    {
        title: 'Coding Projects',
        description: 'A look into my coding projects',
    },
    {
        title: 'Contact Info',
        description: 'How to reach me',
    },
    {
        title: 'Blog',
        description: 'Read my personal thoughts',
    }
];