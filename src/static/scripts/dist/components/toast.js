class Toast {
    constructor() {
        this.el = document.querySelector("#toast");
        this.iconEL = this.el.querySelector(".toast-icon");
        this.messageEl = this.el.querySelector(".toast-text");
    }
    error({ message }) {
        this.iconEL.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>`;
        this.iconEL.classList.add("error");
        this.messageEl.textContent = message;
        this.el.classList.add("show");
        setTimeout(() => {
            this.el.classList.remove("show");
            this.el.classList.remove("error");
        }, 3000);
    }
    success({ message }) {
        this.iconEL.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        this.iconEL.classList.add("success");
        this.messageEl.textContent = message;
        this.el.classList.add("show");
        setTimeout(() => {
            this.el.classList.remove("show");
            this.el.classList.remove("success");
        }, 3000);
    }
    renderContent() { }
    configure() { }
}
export const toast = new Toast();
