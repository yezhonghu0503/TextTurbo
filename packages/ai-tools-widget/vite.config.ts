import { defineConfig } from "vite";
// import strip from "@rollup/plugin-strip";
import replace from "@rollup/plugin-replace";
const pluginEntryName = "PluginStarter";

export default ({ mode }: { mode: string }) => {
    const outDir = "../../src/main/resources/static";

    return defineConfig({
        build: {
            outDir,
            emptyOutDir: true,
            rollupOptions: {
                plugins: [
                    replace({
                        "process.env.NODE_ENV": JSON.stringify("production"),
                        preventAssignment: true,
                    }),
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
