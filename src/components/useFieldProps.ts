import { FIELD_KEYS } from "./constants";
import { getProperties } from "./getProperties";
import { onSave, updateSettings } from "./onSave";

export const LAYOUT = {
  direction: "vertical",
  name: FIELD_KEYS.name,
  operations: FIELD_KEYS.operations,
};

export const useFieldProps = (values: any) => {
  const initialValues = {
    [FIELD_KEYS.name]: values[FIELD_KEYS.name],
    [FIELD_KEYS.operations]: values[FIELD_KEYS.operations],
  };
  return {
    id: FIELD_KEYS.name,
    onSubmit: ({ value }: { value: any }) =>
      onSave({
        name: value[FIELD_KEYS.name],
        operations: value[FIELD_KEYS.operations],
        settings: updateSettings(
          value[FIELD_KEYS.settings],
          value[FIELD_KEYS.operations]
        ),
      }),
    initialValues,
    [FIELD_KEYS.name]: values[FIELD_KEYS.name],
    [FIELD_KEYS.operations]: values[FIELD_KEYS.operations],
    updated: getProperties(values),
    layout: LAYOUT,
  };
};
