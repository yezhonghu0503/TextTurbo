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
        const barStyles = {
            width: this.menuState ? "52px" : "150px",
        };
        const toolMainStyles = {
            width: this.menuState ? "0" : "600px",
        };
        const toolContentMainStyles = {
            width: this.menuState ? "0" : "596px",
        };
        const logoStyles = {
            width: this.menuState ? "45px" : "150px",
        };
        return html`
            <div class="tt_main" style=${styleMap(mainStyles)} draggable="true">
                <div class="tt_tool_main" style=${styleMap(toolMainStyles)}>
                    <div class="tt_tool_content" style=${styleMap(toolContentMainStyles)}></div>
                </div>
                <div class="tt_bar" style=${styleMap(barStyles)}>
                    <div class="tt_logo">
                        <img
                            style=${styleMap(logoStyles)}
                            src=${this.menuState
                                ? "https://blog.al2p.xyz/upload/logo-mgia.png"
                                : "https://blog.al2p.xyz/upload/ttlogo.png"}
                        />
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

        .tt_bar {
            height: 100%;
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            align-items: flex-end;
            transition: width 0.5s cubic-bezier(0.04, 0.93, 0.53, 1);
        }
        .tt_logo {
            width: 100%;
            height: 45px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .tt_menu {
            width: 100%;
            height: 66vh;
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
            height: 70vh;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            transition: width 0.5s cubic-bezier(0.04, 0.93, 0.53, 1);
        }
        .tt_tool_content {
            height: 68vh;
            border-radius: 10px;
            background: linear-gradient(
                180deg,
                rgba(22, 38, 59, 1) 0%,
                rgba(16, 34, 52, 1) 19%,
                rgba(13, 34, 55, 1) 36%,
                rgba(15, 34, 52, 1) 55%,
                rgba(6, 32, 47, 1) 74%
            );
            transition: width 0.5s cubic-bezier(0.04, 0.93, 0.53, 1);
        }
    `;
}
