import { GenericSchema } from './generic';

export interface BooleanSchema extends GenericSchema<boolean> {
  type: 'boolean';
}
