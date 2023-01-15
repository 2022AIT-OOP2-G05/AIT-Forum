import { MainPage } from "./components/main-page.js";
import { Tab } from "./components/tab.js";

class Main {
  constructor() {
    this.init();
  }

  private init() {
    new MainPage();
    new Tab("first");
    new Tab("last");
  }
}

new Main();
