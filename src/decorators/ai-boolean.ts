import { PropertyOptions } from '../types';
import { pushClassKey } from '../utils/push-class-key';
import { titleCase } from '../utils/title-case';
import { KEY_PROP_OPTIONS } from '../constants/metadata';
import { BooleanSchema } from '../types/boolean';

export const AiBoolean =
  (description: string, options?: PropertyOptions<BooleanSchema>): PropertyDecorator =>
  (target: object, propertyKey: string | symbol) => {
    pushClassKey(target, propertyKey);

    let json_schema: BooleanSchema = {
      type: 'boolean',
      title: titleCase(propertyKey.toString()),
      description,
      ...options,
    };

    // Set OpenAI properties
    Reflect.defineMetadata(KEY_PROP_OPTIONS, json_schema, target, propertyKey);
  };
