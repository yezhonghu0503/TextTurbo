import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-element")
export class MyElement extends LitElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    @property()
    version = "STARTING";

    render() {
        return html`
            <div class="tt_main">
                <div class="tt_menu"></div>
            </div>
        `;
    }

    static styles = css`
        .tt_main {
            width: 100px;
            height: 600px;
            background-color: white;
            position: fixed;
            top: 30%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .tt_menu {
            width: 80px;
            height: 500px;
            background-color: black;
        }
    `;
}
