/**
 * Framework interface defines information about a framework
 */
export interface Framework {
  /**
   * The name of the framework
   */
  name: string;
}

export const frameworks = [
  {
    name: 'Angular & NodeJS',
  },
  {
    name: 'Spring Boot',
  },
  {
    name: 'Spring Batch',
  },
  {
    name: 'Oracle Database',
  },
] as Framework[];
