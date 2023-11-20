import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
@customElement("tt-menu")
export class TtMain extends LitElement {
    @property({ type: Array })
    menuList: any = [
        { iconUrl: "/upload/openai.png", name: "" },
        { iconUrl: "/upload/send.png", name: "" },
        { iconUrl: "/upload/send.png", name: "" },
        { iconUrl: "/upload/send.png", name: "" },
        { iconUrl: "/upload/send.png", name: "" },
        { iconUrl: "/upload/send.png", name: "" },
    ];
    @property({ type: Boolean }) menuState: boolean = true;
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    @property({ type: Object, attribute: false }) onMenu: any;
    @property({ type: Function })
    modifMenuState() {
        this.menuState = !this.menuState;
        this.onMenu(this.menuState);
    }

    render() {
        const ttViceMenu = {
            height: this.menuState ? "0" : "70%",
        };
        const ttMainMenu = {
            width: this.menuState ? "40px" : "100%",
        };
        return html`
            <div class="tt_menu">
                <div style=${styleMap(ttViceMenu)} class="tt_vice_menu"></div>
                <div style=${styleMap(ttMainMenu)} class="tt_main_menu">
                    ${this.menuList.map((item: any) => {
                        return html`<div @click=${this.modifMenuState} class="tt_menu_item">
                            <img style="width:25px" src=https://blog.al2p.xyz${item.iconUrl} />
                        </div>`;
                    })}
                </div>
            </div>
        `;
    }
    static styles = css`
        .tt_menu {
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: all 0.5s cubic-bezier(0.04, 0.93, 0.53, 1);
        }
        .tt_menu_item {
            width: 35px;
            height: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            margin-top: 5px;
            background-color: #0058aa;
            transition: all 0.5s cubic-bezier(0.04, 0.93, 0.53, 1);
        }
        .tt_main_menu {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
        }

        .tt_main_menu > * {
            flex: 0 1 calc(33.333% - 10px); /* 10px 是元素之间的间距 */
            margin: 5px; /* 设置元素间距 */
        }

        .tt_vice_menu {
            width: 100%;
            transition: all 0.5s cubic-bezier(0.04, 0.93, 0.53, 1);
        }
    `;
}
