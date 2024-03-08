import { PropertyOptions } from '../types';
import { pushClassKey } from '../utils/push-class-key';
import { titleCase } from '../utils/title-case';
import {
  KEY_CLASS_KEYS,
  KEY_DESIGN_TYPE,
  KEY_PROP_OPTIONAL,
  KEY_PROP_OPTIONS,
} from '../constants/metadata';
import { ObjectSchema } from '../types/object';

/**
 * Objects are the mapping type in JSON. They map "keys" to "values". In JSON, the "keys" must always be strings. Each of these pairs is conventionally referred to as a "property".
 *
 * @param {string} description - The description of the property.
 * @param {PropertyOptions<ObjectSchema>} [options] - The options for the property.
 * @returns {PropertyDecorator} - The decorator function.
 */
export const AiObject =
  (description: string, options?: PropertyOptions<ObjectSchema>): PropertyDecorator =>
  (target: object, propertyKey: string | symbol) => {
    pushClassKey(target, propertyKey);

    let json_schema: ObjectSchema = {
      type: 'object',
      properties: {},
      title: titleCase(propertyKey.toString()),
      description,
      ...options,
    };

    // Get property type
    const designType = Reflect.getMetadata(KEY_DESIGN_TYPE, target, propertyKey);

    // Get class proto keys
    const proto_keys: string[] = Reflect.getMetadata(KEY_CLASS_KEYS, designType.prototype) ?? [];

    // Consolidate properties json_schema
    json_schema.properties = proto_keys.reduce(
      (acc, key) => {
        const prop_schema = Reflect.getMetadata(KEY_PROP_OPTIONS, designType.prototype, key);
        if (prop_schema) {
          acc[key] = prop_schema;
        }
        return acc;
      },
      {} as Record<string, any>,
    );

    // Get required feilds from properties (Check if the properties are not marked optional)
    json_schema.required = Object.keys(json_schema.properties).filter(
      (key) => !Reflect.getMetadata(KEY_PROP_OPTIONAL, target, key),
    );

    // Set OpenAI properties
    Reflect.defineMetadata(KEY_PROP_OPTIONS, json_schema, target, propertyKey);
  };
