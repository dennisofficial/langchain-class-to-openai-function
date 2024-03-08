export interface GenericSchema<T> {
  title?: string;
  description?: string;
  default?: T;
  examples?: T[];
}
