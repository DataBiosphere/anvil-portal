/**
 * Model of search partner to be used as props for site search.
 */
export interface Partner {
  label: string;
  value: string;
}

/**
 * Model of search to be used as props for the site search.
 */
export interface Search {
  partners: Partner[];
  searchEngineId?: string;
  searchPath: string;
}
