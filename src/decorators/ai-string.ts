import { KEY_PROP_OPTIONS } from '../constants/metadata';
import { pushClassKey } from '../utils/push-class-key';
import { StringSchema } from '../types/string';
import { PropertyOptions } from '../types';
import { titleCase } from '../utils/title-case';

/**
 * The string type is used for strings of text. It may contain Unicode characters.
 *
 * @param {string} description - The description of the property.
 * @param {PropertyOptions<StringSchema>} options - The options for the property (optional).
 * @returns {PropertyDecorator} A function used to decorate the property.
 */
export const AiString =
  (description: string, options?: PropertyOptions<StringSchema>): PropertyDecorator =>
  (target: object, propertyKey: string | symbol) => {
    pushClassKey(target, propertyKey);

    let json_schema: StringSchema = {
      type: 'string',
      title: titleCase(propertyKey.toString()),
      description,
      ...options,
    };

    // Convert pattern from RegExp to String if needed
    if (json_schema.pattern) {
      json_schema.pattern = String(json_schema.pattern) as unknown as RegExp;
    }

    // Validate min_length and max_length
    if ((json_schema.minLength ?? 0) < 0) {
      throw new Error('The minLength value cannot be less than 0');
    }

    if (json_schema.minLength !== undefined && json_schema.maxLength !== undefined) {
      if (json_schema.minLength >= json_schema.maxLength) {
        throw new Error(
          'The minLength value cannot be greater than or equal to the maxLength value',
        );
      }
    }

    // Set OpenAI properties
    Reflect.defineMetadata(KEY_PROP_OPTIONS, json_schema, target, propertyKey);
  };
