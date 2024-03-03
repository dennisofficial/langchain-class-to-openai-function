import {
  KEY_CLASS_KEYS,
  KEY_DESIGN_TYPE,
  KEY_FUNC_OPTIONS,
  KEY_PROP_OPTIONAL,
  KEY_PROP_OPTIONS,
} from '../constants/metadata';

export const Property =
  (description: string): PropertyDecorator =>
  (target: object, propertyKey: string | symbol) => {
    // Push property list to prototype metadata
    // This helps getting class keys, since they are not accessible on a non-initialized class
    const class_props: (string | symbol)[] = Reflect.getMetadata(KEY_CLASS_KEYS, target) ?? [];
    class_props.push(propertyKey);
    Reflect.defineMetadata(KEY_CLASS_KEYS, class_props, target);

    // Get property type
    const designType = Reflect.getMetadata(KEY_DESIGN_TYPE, target, propertyKey);

    console.log(designType.name);
    console.log(Reflect.getMetadataKeys(designType));

    // Set OpenAI properties
    Reflect.defineMetadata(
      KEY_PROP_OPTIONS,
      {
        type: designType.name.toLowerCase(),
        description,
      },
      target,
      propertyKey,
    );
  };
