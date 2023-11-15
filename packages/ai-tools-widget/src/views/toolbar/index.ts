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
                    <div class="tt_logo">
                        <img style="width:40px" src="https://blog.al2p.xyz/upload/logo-mgia.png"></img>
                    </div>
                    <div class="tt_menu"></div>
                </div>
            </div>
        `;
    }

    static styles = css`
        .tt_main {
            width: 54px;
            height: 70vh;
            background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色作为背景 */
            position: fixed;
            top: 10%;
            right: 5px;
            z-index: 100;
            border-radius: 10px;
            display: flex;
            justify-content: space-around;
            /* 使用 backdrop-filter 实现毛玻璃效果 */
            backdrop-filter: blur(10px);
            overflow: hidden; /* 为了确保子元素不溢出 */
        }
        .tt_bar {
            width: 54px;
            height: 100%;
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            align-items: flex-end;
        }
        .tt_logo {
            width: 54px;
            height: 45px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .tt_menu {
            width: 54px;
            height: 65vh;
            background-color: white;
            border-radius: 10px;
        }
        .tt_tool_main {
            width: 640px;
            background-color: #a9d5ff;
        }
    `;
}
