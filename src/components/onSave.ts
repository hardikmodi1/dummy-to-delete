import { FIELD_KEYS } from "./constants";

export const onSave = (temp: any) => {
  console.log(temp[FIELD_KEYS.name]);
};

export const updateSettings = (temp: any, temp1: any) => {
  console.log(temp, temp1[FIELD_KEYS.operations]);
};
