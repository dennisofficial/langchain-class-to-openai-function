import { KEY_CLASS_KEYS, KEY_FUNC_OPTIONS } from '../constants/metadata';

export interface OpenAiFunctionOptions {
  name?: string;
  description: string;
}

export const FunctionCall =
  (options: OpenAiFunctionOptions): ClassDecorator =>
  (target: Function) => {
    Reflect.defineMetadata(KEY_FUNC_OPTIONS, { name: target.name, ...options }, target);
  };
