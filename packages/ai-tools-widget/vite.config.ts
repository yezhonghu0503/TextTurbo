import { defineConfig } from "vite";

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
