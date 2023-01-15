import { Component } from "../../models/component-base.js";
import { Header } from "./header.js";
import { SubjectList } from "./subject-list.js";
import { Tab } from "./tab.js";
export class MainPage extends Component {
    constructor() {
        super("main-page", "app", false, "user-input");
        this.configure();
        this.renderContent();
    }
    configure() { }
    renderContent() {
        new SubjectList();
        new Tab("first");
        new Tab("last");
        new Header();
    }
}
