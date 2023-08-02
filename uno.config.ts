import { defineConfig, presetAttributify, presetIcons } from "unocss";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { FileSystemIconLoader } from "@iconify/utils/lib/loader/node-loaders";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const iconDirectory = resolve(__dirname, "src/assets/icons");

export default defineConfig({
  presets: [
    presetAttributify(),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
      collections: {
        custom: FileSystemIconLoader(iconDirectory),
      },
    }),
  ],
});
