import { AbstractControl, FormArray } from "@angular/forms";

export function trySetFormValue(
  targetFormControl: AbstractControl | undefined,
  value: any,
  nameOfTheFormControl: string = ""
): void {
  if (targetFormControl && value !== undefined) {
    targetFormControl.setValue(value);
  } else {
    console.log(
      `Could not set formControl ${nameOfTheFormControl}, because value was undefined`,
      [value, targetFormControl]
    );
  }
}
