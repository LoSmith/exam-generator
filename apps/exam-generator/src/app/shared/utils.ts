import { FormArray, FormControl } from "@angular/forms";

export function getKeysFromEnum<T>(object: T): string[] {
  return Object.keys(object).slice(
    Object.keys(object).length / 2,
    Object.keys(object).length
  );
}

export function trySetFormControl(
  targetFormControl: FormControl | FormArray,
  value: any
): void {
  if (value) {
    targetFormControl.setValue(value);
  } else {
    console.log(`could not set formControl, because value was undefined`);
  }
}
