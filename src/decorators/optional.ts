import { KEY_PROP_OPTIONAL } from '../constants/metadata';

export const Optional: PropertyDecorator = (target: Object, propertyKey: string | symbol) => {
  Reflect.defineMetadata(KEY_PROP_OPTIONAL, false, target, propertyKey);
};
