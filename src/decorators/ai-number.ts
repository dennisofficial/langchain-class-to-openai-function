import { PropertyOptions } from '../types';
import { pushClassKey } from '../utils/push-class-key';
import { titleCase } from '../utils/title-case';
import { KEY_PROP_OPTIONS } from '../constants/metadata';
import { NumberSchema } from '../types/number';

/**
 * There are two numeric types in JSON Schema: integer and number. They share the same validation keywords.
 *
 * @param {string} description - The description of the property.
 * @param {PropertyOptions<NumberSchema>} [options] - The additional options for the property.
 * @returns {PropertyDecorator} - The decorator function.
 */
export const AiNumber =
  (
    description: string,
    options?: PropertyOptions<NumberSchema> & { type?: 'number' | 'integer' },
  ): PropertyDecorator =>
  (target: object, propertyKey: string | symbol) => {
    pushClassKey(target, propertyKey);

    let json_schema: NumberSchema = {
      type: 'number',
      title: titleCase(propertyKey.toString()),
      description,
      ...options,
    };

    // Set OpenAI properties
    Reflect.defineMetadata(KEY_PROP_OPTIONS, json_schema, target, propertyKey);
  };
