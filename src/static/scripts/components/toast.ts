type ToastArg = {
  message: string;
};

class Toast {
  private el = document.querySelector("#toast")!;
  private iconEL: HTMLDivElement;
  private messageEl: HTMLDivElement;
  private timer: NodeJS.Timeout | null = null;
  constructor() {
    this.iconEL = this.el.querySelector(".toast-icon")!;
    this.messageEl = this.el.querySelector(".toast-text")!;
  }

  error({ message }: ToastArg) {
    this.iconEL.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>`;
    if (!this.timer) {
      this.iconEL.classList.add("error");
      this.messageEl.textContent = message;
      this.el.classList.add("show");
      this.timer = setTimeout(() => {
        this.el.classList.remove("show");
        this.el.classList.remove("error");

        this.timer = null;
      }, 3000);
    }
  }

  success({ message }: ToastArg) {
    this.iconEL.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    if (!this.timer) {
      this.iconEL.classList.add("success");
      this.messageEl.textContent = message;
      this.el.classList.add("show");
      this.timer = setTimeout(() => {
        this.el.classList.remove("show");
        this.el.classList.remove("success");

        this.timer = null;
      }, 3000);
    }
  }
}
export const toast = new Toast();
