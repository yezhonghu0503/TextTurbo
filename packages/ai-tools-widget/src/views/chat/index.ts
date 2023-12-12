import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import anime from "animejs";
import { store } from "../../store";
@customElement("tt-chat")
export class TtChat extends LitElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    firstUpdated() {
        // 订阅Redux存储的更改
        store.subscribe(() => this.updateMenuState(store.getState()));
    }
    updateMenuState(state: any) {
        anime({
            targets: this.shadowRoot?.querySelector(".tt_chat"),
            width: state ? "100%" : "0",
            easing: "easeInOutExpo",
        });
        this.requestUpdate();
    }
    render() {
        return html`
            <div class="tt_chat">
                <div class="tt_chat_content">
                    <div>12333</div>
                </div>
                <div style="width: auto; display: flex; justify-content: center;padding:0 20px">
                    <div class="tt_chat_textarea">
                        <textarea name="" id="" cols="30" rows="2"></textarea>
                        <div class="tt_chat_send">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    static styles = css`
        .tt_chat {
            width: 0;
            height: 100%;
        }
        .tt_chat_content {
            width: 100%;
            height: 85%;
        }
        .tt_chat_textarea {
            width: 100%;
            height: 52px;
            display: flex;
            color: white;
            border-radius: 10px;
            overflow: hidden;
            border: 2px solid rgba(255, 255, 255, 0.4);
            background-color: rgb(6, 32, 47);
        }

        .tt_chat_textarea textarea {
            color: white;
            width: 520px;
            background: none;
            border: none;
            resize: none;
            font-size: 16px;
            padding: 15px 10px;
            overflow: auto;
            scrollbar-width: thin;
            /* Firefox 支持 */
            scrollbar-color: transparent transparent;
            /* Firefox 支持 */
        }

        .tt_chat_textarea textarea:focus {
            outline: none;
        }

        .tt_chat_send {
            width: 74px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .tt_chat_send img {
            width: 30px;
            height: 30px;
        }
    `;
}
