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
            <div class="tt_main" draggable="true">
                <div class="tt_logo"></div>
                <div class="tt_menu"></div>
            </div>
        `;
    }

    static styles = css`
        .tt_main {
            width: 60px;
            height: 60vh;
            background-color: #0058aa;
            position: fixed;
            top: 20%;
            right: 5px;
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            align-items: center;
            z-index: 100;
            padding: 5px 0;
            border-radius: 5px;
        }
        .tt_logo {
            width: 50px;
            height: 40px;
            background-color: #a9d5ff;
        }
        .tt_menu {
            width: 50px;
            height: 55vh;
            background-color: black;
            border-radius: 5px;
        }
    `;
}
