import 'reflect-metadata';
import { OpenAIFunction } from './decorators/open-ai-function';
import { OpenAiProperty } from './decorators/open-ai-property';
import { KEY_CLASS_KEYS, KEY_FUNC_OPTIONS, KEY_PROP_OPTIONS } from './constants/metadata';

@OpenAIFunction({
  description:
    'Use this function to provide the content of the article with the associated sections.',
})
class GetArticle {
  @OpenAiProperty({ description: 'Header of the article' })
  header!: string;

  @OpenAiProperty({ description: 'This is the content.' })
  content!: string;
}

const bootstrap = (target: any) => {
  const proto_keys: string[] = Reflect.getMetadata(KEY_CLASS_KEYS, target.prototype);

  const properties = proto_keys.reduce(
    (acc, key) => {
      acc[key] = Reflect.getMetadata(KEY_PROP_OPTIONS, target.prototype, key);
      return acc;
    },
    {} as Record<string, any>,
  );

  console.log({
    ...Reflect.getMetadata(KEY_FUNC_OPTIONS, target),
    properties,
  });
};

void bootstrap(GetArticle);
