import { GenericSchema } from './generic';

export type PropertyOptions<Schema extends GenericSchema<any>> = Partial<
  Omit<Schema, 'type' | 'description' | 'enum'>
>;
