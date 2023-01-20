import { FormInput, initializeFormInput } from "../../types/inputType.js";

class FormState {
  private static instance: FormState;
  private formInput: FormInput = initializeFormInput;

  private constructor() {}

  static getInstance() {
    if (FormState.instance) {
      return FormState.instance;
    }
    FormState.instance = new FormState();
    return FormState.instance;
  }

  getFormState() {
    return { ...this.formInput };
  }

  resetFormState() {
    this.formInput = initializeFormInput;
  }

  setFormState(FormInput: FormInput) {
    this.formInput = FormInput;
  }
}

export const formState = FormState.getInstance();
