import { PropertyOptions } from '../types';
import { pushClassKey } from '../utils/push-class-key';
import { titleCase } from '../utils/title-case';
import { KEY_CLASS_KEYS, KEY_PROP_OPTIONS } from '../constants/metadata';
import { ArraySchema } from '../types/array';

const handleType = (type: any) => {
  const type_name = type.name.toLowerCase();

  if (!['string', 'boolean', 'number', 'array'].includes(type_name)) {
    const proto_keys: string[] = Reflect.getMetadata(KEY_CLASS_KEYS, type.prototype) ?? [];

    const properties = proto_keys.reduce(
      (acc, key) => {
        acc[key] = Reflect.getMetadata(KEY_PROP_OPTIONS, type.prototype, key);
        return acc;
      },
      {} as Record<string, any>,
    );

    return {
      type: 'object',
      properties,
    };
  }

  return {
    type: type_name,
  };
};

export const AiArray =
  (description: string, type: any[], options?: PropertyOptions<ArraySchema>): PropertyDecorator =>
  (target: object, propertyKey: string | symbol) => {
    pushClassKey(target, propertyKey);

    if (type.length == 0) {
      throw new Error('The provided type array is empty. Provide at least one type for the array.');
    }

    let json_schema: ArraySchema = {
      type: 'array',
      title: titleCase(propertyKey.toString()),
      items: {},
      description,
      ...options,
    };

    if (type.length > 1) {
      throw new Error(
        'Tuples are not supported. If you need a tuple styled response, better to use AiObject.',
      );
    } else {
      json_schema.items = handleType(type[0]);
    }

    if (type?.length)
      // Set OpenAI properties
      Reflect.defineMetadata(KEY_PROP_OPTIONS, json_schema, target, propertyKey);
  };
