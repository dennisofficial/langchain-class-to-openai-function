import { KEY_PROP_OPTIONAL, KEY_PROP_OPTIONS } from '../constants/metadata';

export function getProperties(proto_keys: string[], target: any) {
  const properties = proto_keys.reduce(
    (acc, key) => {
      acc[key] = Reflect.getMetadata(KEY_PROP_OPTIONS, target, key);
      return acc;
    },
    {} as Record<string, any>,
  );

  const required = Object.keys(properties).filter(
    (key) => !Reflect.getMetadata(KEY_PROP_OPTIONAL, target, key),
  );

  return { properties, required };
}
