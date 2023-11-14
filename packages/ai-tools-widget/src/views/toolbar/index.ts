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
                <div class="tt_tool_main"></div>
                <div class="tt_bar">
                    <div class="tt_logo"></div>
                    <div class="tt_menu"></div>
                </div>
            </div>
        `;
    }

    static styles = css`
        .tt_main {
            width: 700px;
            height: 70vh;
            background-color: #0065c4;
            position: fixed;
            top: 10%;
            right: 5px;
            z-index: 100;
            border-radius: 5px;
            display: flex;
            justify-content: space-around;
            padding: 5px 0;
        }
        .tt_bar {
            width: 46px;
            height: 100%;
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            align-items: flex-end;
        }
        .tt_logo {
            width: 46px;
            height: 45px;
            background-color: #a9d5ff;
        }
        .tt_menu {
            width: 46px;
            height: 65vh;
            background-color: black;
            border-radius: 5px;
        }
        .tt_tool_main {
            width: 640px;
            background-color: #a9d5ff;
        }
    `;
}
