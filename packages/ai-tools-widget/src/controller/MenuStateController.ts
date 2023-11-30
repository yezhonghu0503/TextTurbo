import { ReactiveController, ReactiveControllerHost } from "lit";

export class MenuStateController implements ReactiveController {
    host: ReactiveControllerHost;
    private menuState: boolean = false;
    constructor(host: ReactiveControllerHost) {
        (this.host = host).addController(this);
    }
    changeMenuState() {
        this.menuState = !this.menuState;
        this.host.requestUpdate();
    }
    getMenuState() {
        return this.menuState;
    }
    hostConnected(): void {
        console.log("连接成功");
    }
    // hostDisconnected() {}
}
