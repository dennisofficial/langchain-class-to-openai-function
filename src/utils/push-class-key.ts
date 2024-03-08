import { KEY_CLASS_KEYS } from '../constants/metadata';

export const pushClassKey = (target: object, propertyKey: string | symbol) => {
  // Push property list to prototype metadata
  // This helps getting class keys, since they are not accessible on a non-initialized class
  const class_props: (string | symbol)[] = Reflect.getMetadata(KEY_CLASS_KEYS, target) ?? [];
  class_props.push(propertyKey);
  Reflect.defineMetadata(KEY_CLASS_KEYS, class_props, target);
};
