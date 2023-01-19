import { initializeFormInput } from "../../types/inputType.js";
class FormState {
    constructor() {
        this.formInput = initializeFormInput;
    }
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
    setFormState(FormInput) {
        this.formInput = FormInput;
    }
}
export const formState = FormState.getInstance();
