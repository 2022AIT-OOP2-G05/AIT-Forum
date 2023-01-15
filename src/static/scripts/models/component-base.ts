export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateEl: HTMLTemplateElement;
  hostEl: T;
  el: U;
  constructor(
    templateId: string,
    hostElId: string,
    insertBefore: boolean,
    newId?: string
  ) {
    this.templateEl = document.getElementById(
      templateId
    )! as HTMLTemplateElement;
    this.hostEl = document.getElementById(hostElId)! as T;

    const importedNode = document.importNode(this.templateEl.content, true);
    this.el = importedNode.firstElementChild as U;

    if (newId) {
      this.el.id = newId;
    }

    this.attach(insertBefore);
  }

  abstract configure(): void;
  abstract renderContent(): void;

  attach(insertBefore: boolean) {
    this.hostEl.insertAdjacentElement(
      insertBefore ? "afterbegin" : "beforeend",
      this.el
    );
  }
}
