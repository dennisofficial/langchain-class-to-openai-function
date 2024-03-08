import { PropertyOptions } from '../types';
import { pushClassKey } from '../utils/push-class-key';
import { titleCase } from '../utils/title-case';
import { KEY_PROP_OPTIONS } from '../constants/metadata';
import { NullSchema } from '../types/null';

export const AiNull =
  (description: string, options?: PropertyOptions<NullSchema>): PropertyDecorator =>
  (target: object, propertyKey: string | symbol) => {
    pushClassKey(target, propertyKey);

    let json_schema: NullSchema = {
      type: 'null',
      title: titleCase(propertyKey.toString()),
      description,
      ...options,
    };

    // Set OpenAI properties
    Reflect.defineMetadata(KEY_PROP_OPTIONS, json_schema, target, propertyKey);
  };
