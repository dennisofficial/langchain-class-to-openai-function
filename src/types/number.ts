import { GenericSchema } from './generic';

export interface NumberSchema extends GenericSchema<number> {
  type: 'number' | 'integer' | 'float';
  multipleOf?: number;
  minimum?: number;
  maximum?: number;
  exclusiveMaximum?: boolean;
}
