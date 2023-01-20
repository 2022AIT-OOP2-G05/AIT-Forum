import { FormHeader } from "./components/form/form-header.js";
import { Total } from "./components/form/form-total.js";
import { Form } from "./components/form/form.js";
import { SubmitBtn } from "./components/form/submit-btn.js";
export class FormMain {
    constructor() {
        new FormHeader();
        new Form();
        new Total();
        new SubmitBtn();
    }
}
