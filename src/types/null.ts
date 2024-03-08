import { GenericSchema } from './generic';

export interface NullSchema extends GenericSchema<null> {
  type: 'null';
}
