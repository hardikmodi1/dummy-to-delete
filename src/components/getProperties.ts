import { FIELD_KEYS } from "./constants";

export const getProperties = (values: any) => ({
  [FIELD_KEYS.name]: values[FIELD_KEYS.name],
});
