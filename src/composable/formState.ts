import { reactive, toRefs } from "vue";

type FormState<T> = {
  [fieldName in keyof T]: {
    value: T[fieldName];
    valid: boolean;
    invalid: boolean;
    dirty: boolean;
    errors: string[];
  };
};
type Validators<T> = {
  [fieldName in keyof T]?: {
    [validatorName: string]: (value: T[fieldName]) => boolean;
  };
};

export const useFormState = <T extends Record<string, unknown>>(
  initialValues: T,
  validators: Validators<T>,
) => {
  const buildFormState = () => {
    return Object.entries(initialValues).reduce((state, [fieldName, value]) => {
      return {
        ...state,
        [fieldName]: {
          value,
          valid: false,
          invalid: false,
          dirty: false,
          errors: [],
        },
      };
    }, {}) as FormState<T>;
  };

  const formState = reactive(buildFormState());

  const applyValidators = (
    validators: Record<string, (value: any) => boolean>,
    value: any,
  ) => {
    return Object.entries(validators).reduce(
      (errors: string[], [validatorName, validator]) => {
        return validator(value) ? errors : [...errors, validatorName];
      },
      [],
    );
  };

  const set = (fieldName: keyof T) => {
    return (value: T[keyof T]) => {
      const targetField = { ...formState[fieldName] };
      targetField.value = value;
      targetField.dirty = true;

      const targetValidators = validators[fieldName];
      if (targetValidators) {
        targetField.errors = applyValidators(targetValidators, value);
        targetField.valid = targetField.errors.length === 0;
        targetField.invalid = targetField.errors.length > 0;
      }

      formState[fieldName] = targetField;
    };
  };

  return { set, ...toRefs(formState) };
};
