import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("tt-menu")
export class TtMain extends LitElement {
    @property({ type: Array })
    menuList: any = [
        { iconUrl: "", name: "预览" },
        { iconUrl: "", name: "视频" },
        { iconUrl: "", name: "音频" },
    ];
    @property({ type: Boolean }) menuState: boolean = false;
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    @property({ type: Object, attribute: false }) onMenu: any;

    @property({ type: Function })
    modifMenuState() {
        this.menuState = !this.menuState;
        this.onMenu(!this.menuState);
    }

    render() {
        return html`
            <div class="tt_menu">
                ${this.menuList.map((item: any) => {
                    return html`<div @click=${this.modifMenuState} class="tt_menu_item">${item.name}</div>`;
                })}
            </div>
        `;
    }
    static styles = css`
        .tt_menu {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 5px 0;
        }
        .tt_menu_item {
            width: 48px;
            height: 48px;
            text-align: center;
        }
    `;
}
