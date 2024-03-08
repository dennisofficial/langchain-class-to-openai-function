import { FunctionCall } from './decorators/function-call';
import { AiString } from './decorators/ai-string';
import { EStringFormat } from './types/string';
import { AiNumber } from './decorators/ai-number';
import { AiObject } from './decorators/ai-object';
import { AiArray } from './decorators/ai-array';
import { AiBoolean } from './decorators/ai-boolean';
import { AiNull } from './decorators/ai-null';
import { AiEnum } from './decorators/ai-enum';

class TestingStrings {
  @AiString('A testing string', { pattern: /^(\\([0-9]{3}\\))?[0-9]{3}-[0-9]{4}$/ })
  test_regex!: string;

  @AiString('A testing string', {
    minLength: 3,
    maxLength: 6,
    examples: ['qwer', 'asdf', 'zxcv'],
    default: '12as',
  })
  test_length!: string;

  @AiString('A testing string', { format: EStringFormat.DATE_TIME })
  test_datetime!: string;

  @AiString('A testing string', { format: EStringFormat.DATE })
  test_date!: string;

  @AiString('A testing string', { format: EStringFormat.TIME })
  test_time!: string;

  @AiString('A testing string', { format: EStringFormat.EMAIL })
  test_email!: string;

  @AiString('A testing string', { format: EStringFormat.HOSTNAME })
  test_hostname!: string;

  @AiString('A testing string. Point to a real absolute JSON pointer in this object', {
    format: EStringFormat.JSON_POINTER,
  })
  test_json_pointer!: string;

  @AiString('A testing string.', {
    format: EStringFormat.UUID,
  })
  test_uuid!: string;

  @AiString('What are the example strings I gave you in test_length?')
  test_examples!: string;
}

class TestingNumbers {
  @AiNumber('A testing number')
  test_number!: number;

  @AiNumber('lowest number', { minimum: 12, maximum: 25 })
  testing_range!: number;

  @AiNumber('A testing number', { minimum: 10, maximum: 100, multipleOf: 3 })
  testing_range_multiple!: number;

  @AiNumber('A testing number', { multipleOf: 5 })
  testing_multiple!: number;

  @AiNumber('A testing float')
  testing_float!: number;
}

class TestingArrays {
  @AiArray('testing strings', [String])
  strings!: string[];

  @AiArray('testing strings', [Boolean])
  booleans!: string[];

  @AiArray('testing strings', [Number])
  numbers!: string[];

  @AiArray('testing strings', [Object])
  objects!: string[];

  @AiBoolean('a testing true boolean')
  true_boolean!: boolean;

  @AiBoolean('a testing false boolean')
  false_boolean!: boolean;

  @AiBoolean('a testing random boolean')
  random_boolean!: boolean;
}

enum TestingE {
  YES = 'yessssiiirrr!!',
  NO = 'nahhhhh!',
  MAYBE = 'maybeeee?',
}

@FunctionCall({
  name: 'testing_function_call',
  description: 'A testing function call.',
})
export class TestingJSON {
  @AiObject('Testing strings class')
  strings!: TestingStrings;

  @AiObject('Testing number class')
  numbers!: TestingNumbers;

  @AiObject('Testing object class')
  arrays!: TestingArrays;

  @AiNull('a null type?')
  ['a null variable?']!: null;

  @AiEnum('some enum', TestingE)
  testing_enum!: TestingE;
}
