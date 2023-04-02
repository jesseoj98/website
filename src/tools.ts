/**
 * Tool interface defines information about a programming tool
 */
export interface Tool {
  /**
   * The name of the programming tool
   */
  name: string;
}

export const tools = [
  {
    name: 'Git',
  },
  {
    name: 'Jenkins',
  },
  {
    name: 'SonarQube',
  },
  {
    name: 'Agile / Scrum',
  },
] as Tool[];
