import { Fetch } from "../../libs/fetch.js";
import { Component } from "../../models/component-base.js";
import { detailState } from "../../state/detail-state.js";
import { initializeFormInput } from "../../types/inputType.js";
import { toast } from "../toast.js";
import { Total } from "./form-total.js";
import { FormInputList } from "./formInputList.js";
import { formState } from "./formState.js";
import { SubmitBtn } from "./submit-btn.js";
export class Form extends Component {
    constructor() {
        super("form_list", "form", false, "main-form");
        this.detail = detailState.getDetails();
        this.inputField = this.inputFormProcessing();
        this.configure();
        this.renderContent();
        this.renderList();
    }
    configure() {
        this.el.addEventListener("submit", this.submitHandler.bind(this));
        this.createInitialForm();
    }
    createInitialForm() {
        formState.setFormState({
            ...formState.getFormState(),
            lesson_name: this.detail.lesson_name,
            teacher_name: this.detail.teacher_name,
            day_of_week: this.detail.day_of_week,
            time: this.detail.time,
            number_of_credits: this.detail.number_of_credits,
        });
    }
    inputFormProcessing() {
        const { lesson_name, teacher_name, day_of_week, time, number_of_credits, total, ...inputField } = initializeFormInput;
        return inputField;
    }
    renderContent() { }
    formValidation() {
        const inputs = formState.getFormState();
        for (const key in inputs) {
            if (inputs[key] === 0 || inputs[key] === "") {
                return false;
            }
        }
        return true;
    }
    async submitHandler(event) {
        event.preventDefault();
        if (!this.formValidation()) {
            toast.error({
                message: "入力されていない項目があります",
            });
        }
        else {
            const res = await Fetch.post(`detail/${location.pathname}`, formState.getFormState());
            if (res.error) {
                toast.error({
                    message: "予期せぬエラーが発生しました",
                });
            }
            else {
                toast.success({
                    message: "評価を送信しました",
                });
                detailState.fetchDetails();
            }
            formState.resetFormState();
            this.createInitialForm();
            this.clearChild();
            this.renderList();
            const modal = document.querySelector(".form_BG");
            modal.classList.add("hidden");
            modal.classList.remove("visible");
        }
    }
    clearChild() {
        while (this.el.firstChild) {
            this.el.removeChild(this.el.firstChild);
        }
    }
    renderList() {
        for (const key in this.inputField) {
            const isStar = key !== "hit_level" && key !== "carry" && key !== "attendance";
            new FormInputList(isStar ? `star-${key}` : `select-${key}`, key, isStar);
        }
        new Total();
        new SubmitBtn();
    }
}
