import 'reflect-metadata';
import { FunctionCall } from './decorators/function-call';
import { Property } from './decorators/property';
import {
  KEY_CLASS_KEYS,
  KEY_FUNC_OPTIONS,
  KEY_PROP_OPTIONAL,
  KEY_PROP_OPTIONS,
} from './constants/metadata';

class ArticleSection {
  @Property('Header of the article')
  header!: string;

  @Property('This is the content.')
  content!: string;
}

@FunctionCall({
  description:
    'Use this function to provide the content of the article with the associated sections.',
})
class GetArticle {
  @Property('List of article sections')
  article_sections!: ArticleSection[];
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

  const required = Object.keys(properties).filter(
    (key) => !Reflect.getMetadata(KEY_PROP_OPTIONAL, target.prototype, key),
  );

  console.log({
    ...Reflect.getMetadata(KEY_FUNC_OPTIONS, target),
    properties,
    required,
  });
};

void bootstrap(GetArticle);
