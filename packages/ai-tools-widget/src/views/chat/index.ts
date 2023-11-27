import { LitElement, html, css, PropertyValueMap } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("tt-chat")
export class TtChat extends LitElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    @property({ type: Boolean }) menuState: any;

    protected update(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
        if (changedProperties.has("menuState")) {
            console.log(this.menuState);
        }
    }
    render() {
        return html`
            <div class="tt_chat">
                <div class="tt_chat_content"></div>
                <div style="width: auto; display: flex; justify-content: center;padding:0 ">
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
