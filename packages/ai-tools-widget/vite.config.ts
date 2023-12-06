import { defineConfig } from "vite";
// import strip from "@rollup/plugin-strip";
import replace from "@rollup/plugin-replace";
const pluginEntryName = "PluginStarter";

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
    // const isProduction = mode === "production";
    const outDir = "../../src/main/resources/static";

    return defineConfig({
        build: {
            outDir,
            emptyOutDir: true,
            rollupOptions: {
                // 自定义 Rollup 配置
                // 例如，配置输出多个入口文件
                // input: {
                //     main: "src/index.ts",
                //     // other: "src/other.js",
                // },
                plugins: [
                    replace({
                        "process.env.NODE_ENV": JSON.stringify("production"),
                        preventAssignment: true,
                    }),
                    // 添加 Rollup 插件以移除副作用
                    // strip({
                    //     include: "./node_modules/immer/src/plugins/*.ts", // 根据你的项目结构配置
                    //     strip: /if \(process\.env\.NODE_ENV !== "production"\) {[\s\S]*?}/,
                    // }),
                ],
            },
            lib: {
                entry: "src/index.ts",
                name: pluginEntryName,
                formats: ["iife"],
                fileName: () => "main.js",
            },
        },
    });
};
