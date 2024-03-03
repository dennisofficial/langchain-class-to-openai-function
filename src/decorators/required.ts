import { KEY_PROP_OPTIONAL } from '../constants/metadata';

export const Required: PropertyDecorator = (target: Object, propertyKey: string | symbol) => {
  Reflect.defineMetadata(KEY_PROP_OPTIONAL, true, target, propertyKey);
};
