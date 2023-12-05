import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import anime from "animejs";
import { store } from "../../store";

@customElement("tt-menu")
export class TtMain extends LitElement {
    @property({ type: Array })
    menuList: any = [
        { iconUrl: "/upload/openai.png", name: "", backgroudColor: "#F39800", dataX: 35 },
        { iconUrl: "/upload/send.png", name: "", backgroudColor: "#2A52BE", dataX: -35 },
        { iconUrl: "/upload/send.png", name: "", backgroudColor: "#C0EBD7", dataX: 35 },
        { iconUrl: "/upload/send.png", name: "", backgroudColor: "#C0EBD7", dataX: -35 },
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
        this.menuAnime(this.menuState);
        console.log(store);
        // console.log(this.menuStateController.menuState);
    }
    // protected update(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    //     console.log(this.menuStateController.menuState);
    // }
    menuAnime(state: boolean) {
        // this.menuList.forEach((element: any) => {
        //     element.dataX = 0;
        // });
        anime({
            targets: Array.from(this.shadowRoot?.querySelectorAll(".tt_menu_item") as any).slice(0, 4),
            translateY: function (_el: any, i: any, l: any) {
                const baseDistance = 10; // 基础的位移距离
                const additionalSpacing = 4; // 附加的间距
                return state ? 0 : `${baseDistance * (l - i) + additionalSpacing * i}vh`;
            },
            translateX: function (el: any) {
                return el.getAttribute("data-x");
            },
            scale: function (_el: any, i: any, l: any) {
                return state ? 1 : (l - i) * 0.4;
            },
            rotate: function () {
                return state ? 0 : anime.random(-360, 360);
            },
            borderRadius: function () {
                return state ? "10px" : ["50%", anime.random(10, 35) + "%"];
            },
            duration: function () {
                return anime.random(1200, 1800);
            },
            delay: function () {
                return anime.random(0, 400);
            },
        });
    }

    render() {
        // const ttViceMenu = {
        //     height: this.menuState ? "0" : "70%",
        // };
        // const ttMainMenu = {
        //     width: this.menuState ? "40px" : "100%",
        // };
        return html`
            <div class="tt_menu">
                <div class="tt_vice_menu"></div>
                <div class="tt_main_menu">
                    ${this.menuList.map((item: any) => {
                        return html`<div
                            @click=${this.modifMenuState}
                            style="background:${item.backgroudColor}"
                            data-x=${this.menuState ? item.dataX : 0}
                            class="tt_menu_item"
                        >
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
        }
        .tt_menu_item {
            width: 35px;
            height: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            margin-top: 5px;
        }
        .tt_main_menu {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        /* .tt_main_menu > * {
            flex: 0 1 calc(33.333% - 10px);
            margin: 5px;
        } */

        .tt_vice_menu {
            width: 100%;
        }
    `;
}
