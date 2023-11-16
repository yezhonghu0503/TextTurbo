import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import "../components/menu";
@customElement("my-element")
export class MyElement extends LitElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    @property({ type: String })
    version = "STARTING";

    @property({ type: Boolean, reflect: true })
    menuState: boolean = true;

    getMenuState = (state: boolean) => {
        this.menuState = state;
        this.requestUpdate();
    };
    render() {
        const mainStyles = {
            width: this.menuState ? "54px" : "750px",
        };
        return html`
            <div class="tt_main" style=${styleMap(mainStyles)} draggable="true">
                <div class="tt_tool_main"></div>
                <div class="tt_bar">
                    <div class="tt_logo">
                        <img style="width:45px" src="https://blog.al2p.xyz/upload/logo-mgia.png" />
                    </div>
                    <tt-menu .onMenu=${this.getMenuState} class="tt_menu"></tt-menu>
                </div>
            </div>
        `;
    }

    static styles = css`
        .tt_main {
            width: 54px;
            height: 70vh;
            background-color: rgba(255, 255, 255, 0.4); /* 半透明黑色作为背景 */
            position: fixed;
            top: 10%;
            right: 15px;
            z-index: 100;
            border-radius: 10px;
            display: flex;
            justify-content: space-between;
            /* 使用 backdrop-filter 实现毛玻璃效果 */
            backdrop-filter: blur(10px);
            overflow: hidden; /* 为了确保子元素不溢出 */
            padding: 0 2px 2px 0;
            transition: width 0.5s cubic-bezier(0.04, 0.93, 0.53, 1);
        }
        .tt_main_close {
            width: 54px;
        }
        .tt_main_open {
            width: 150px;
        }

        .tt_bar {
            width: 52px;
            height: 100%;
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            align-items: flex-end;
            transition: width 0.5s ease-in-out;
        }
        .tt_logo {
            width: 52px;
            height: 45px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .tt_menu {
            width: 52px;
            height: 65vh;
            background: rgb(22, 38, 59);
            background: linear-gradient(
                180deg,
                rgba(22, 38, 59, 1) 0%,
                rgba(16, 34, 52, 1) 19%,
                rgba(13, 34, 55, 1) 36%,
                rgba(15, 34, 52, 1) 55%,
                rgba(6, 32, 47, 1) 74%
            );
            color: white;
            border-radius: 10px;
        }
        .tt_tool_main {
            /* width: 640px; */
            height: 68vh;
            background-color: #a9d5ff;
            transition: width 0.5s ease-in-out;
        }
    `;
}
