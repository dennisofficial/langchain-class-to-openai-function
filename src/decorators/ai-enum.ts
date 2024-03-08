import { KEY_PROP_OPTIONS } from '../constants/metadata';
import { pushClassKey } from '../utils/push-class-key';
import { StringSchema } from '../types/string';
import { PropertyOptions } from '../types';
import { titleCase } from '../utils/title-case';
import { GenericSchema } from '../types/generic';

/**
 * The string type is used for strings of text. It may contain Unicode characters.
 *
 * @param {string} description - The description of the property.
 * @param enum_type
 * @param {PropertyOptions<StringSchema>} options - The options for the property (optional).
 * @returns {PropertyDecorator} A function used to decorate the property.
 */
export const AiEnum =
  (
    description: string,
    enum_type: any,
    options?: PropertyOptions<StringSchema>,
  ): PropertyDecorator =>
  (target: object, propertyKey: string | symbol) => {
    pushClassKey(target, propertyKey);

    let json_schema: GenericSchema<string | number> = {
      title: titleCase(propertyKey.toString()),
      description,
      enum: Object.values(enum_type),
      ...options,
    };

    // Set OpenAI properties
    Reflect.defineMetadata(KEY_PROP_OPTIONS, json_schema, target, propertyKey);
  };
