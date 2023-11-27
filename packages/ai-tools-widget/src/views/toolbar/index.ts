import { LitElement, html, css, PropertyValueMap } from "lit";
import { customElement, property } from "lit/decorators.js";
import anime from "animejs";

import "../components/menu";
import "../chat/index";
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
        anime({
            targets: this.shadowRoot?.querySelector(".tt_main"),
            width: state ? "54px" : "750px",
            easing: "easeInOutExpo",
            delay: state ? 200 : 0,
        });
        anime({
            targets: this.shadowRoot?.querySelector(".tt_bar"),
            width: state ? "52px" : "150px",
            easing: "easeInOutExpo",
        });
        anime({
            targets: this.shadowRoot?.querySelector(".tt_tool_main"),
            width: state ? "0" : "600px",
            easing: "easeInOutExpo",
            delay: state ? 0 : 200,
        });
        anime({
            targets: this.shadowRoot?.querySelector(".tt_tool_content"),
            width: state ? "0" : "596px",
            easing: "easeInOutExpo",
            delay: state ? 0 : 200,
        });
        anime({
            targets: this.shadowRoot?.querySelector(".tt_logo_img"),
            width: state ? "45px" : "150px",
            easing: "easeInOutExpo",
        });
        this.requestUpdate();
    };
    render() {
        return html`
            <div class="tt_main">
                <div class="tt_tool_main">
                    <div class="tt_tool_content">
                        <tt-chat .menuState=${this.menuState}></tt-chat>
                    </div>
                </div>

                <div class="tt_bar">
                    <div class="tt_logo">
                        <img
                            class="tt_logo_img"
                            src=${this.menuState
                                ? "https://blog.al2p.xyz/upload/logo-mgia.png"
                                : "https://blog.al2p.xyz/upload/ttlogo.png"}
                            min-width="45px"
                        />
                    </div>
                    <tt-menu .onMenu=${this.getMenuState} class="tt_menu"></tt-menu>
                </div>
            </div>
            <div>...</div>
        `;
    }

    static styles = css`
        .tt_main {
            width: 54px;
            height: 50vh;
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
            /* transition: width 0.5s cubic-bezier(0.04, 0.93, 0.53, 1); */
        }

        .tt_bar {
            width: 52px;
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
            height: 46vh;
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
            height: 50vh;
            display: flex;
            justify-content: center;
            align-items: flex-end;
        }
        .tt_tool_content {
            height: 48vh;
            border-radius: 10px;
            background: linear-gradient(
                180deg,
                rgba(22, 38, 59, 1) 0%,
                rgba(16, 34, 52, 1) 19%,
                rgba(13, 34, 55, 1) 36%,
                rgba(15, 34, 52, 1) 55%,
                rgba(6, 32, 47, 1) 74%
            );
        }
        .tt_logo_img {
            width: 45px;
        }
    `;
}
