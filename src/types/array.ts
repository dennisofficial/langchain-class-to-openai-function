import { GenericSchema } from './generic';

export interface ArraySchema extends GenericSchema<any[]> {
  type: 'array';
  items: Record<string, any>;
  prefixItems?: Record<string, any>[];
}
