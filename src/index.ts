import 'reflect-metadata';
import { KEY_CLASS_KEYS, KEY_FUNC_OPTIONS } from './constants/metadata';
import { ChatOpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import { JsonOutputFunctionsParser } from 'langchain/output_parsers';
import { getProperties } from './utils/get_properties';
import { TestingJSON } from './testing-class';

const toFunction = (target: any) => {
  const proto_keys: string[] = Reflect.getMetadata(KEY_CLASS_KEYS, target.prototype) ?? [];

  const { properties, required } = getProperties(proto_keys, target.prototype);

  const output = {
    ...Reflect.getMetadata(KEY_FUNC_OPTIONS, target),
    parameters: {
      type: 'object',
      properties,
      required,
    },
  };

  // console.log(JSON.stringify(output, undefined, 2));

  return output;
};

const bootstrap = async () => {
  const prompt = PromptTemplate.fromTemplate(
    'This is a test. Make the function call, and fill in the required parameters with random data. Some parameters may have questions for you. Answer them.',
  );

  const llm = new ChatOpenAI({
    openAIApiKey: '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',
  });

  const chain = prompt
    .pipe(
      llm.bind({
        functions: [toFunction(TestingJSON)],
        function_call: { name: toFunction(TestingJSON).name },
      }),
    )
    .pipe(new JsonOutputFunctionsParser());

  const result = await chain.invoke({});

  console.log('RESULT: ', result);
};

void bootstrap();
