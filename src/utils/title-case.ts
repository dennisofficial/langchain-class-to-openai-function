export const titleCase = (str: string): string =>
  str
    .toLowerCase()
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (s) => s.toUpperCase());
