import { GenericSchema } from './generic';

export interface ObjectSchema extends GenericSchema<object> {
  type: 'object';
  properties?: Record<string, any>;
  required?: string[];
  minProperties?: number;
  maxProperties?: number;
  additionalProperties?: boolean | { type: 'string' | 'boolean' | 'number' | 'array' | 'object' };
}
