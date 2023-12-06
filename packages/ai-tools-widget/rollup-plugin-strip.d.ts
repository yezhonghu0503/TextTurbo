// rollup-plugin-strip.d.ts
declare module "@rollup/plugin-strip" {
    import { Plugin } from "rollup";

    interface RollupStripOptions {
        include?: string | string[];
        exclude?: string | string[];
        strip: string | string[] | RegExp | RegExp[];
        // 可以添加其他属性，具体取决于插件的版本和配置
    }

    export default function strip(options?: RollupStripOptions): Plugin;
}
