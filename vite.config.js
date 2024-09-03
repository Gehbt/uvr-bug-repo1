// @ts-check
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueRouter from "unplugin-vue-router/vite";
import vueDevtools from "vite-plugin-vue-devtools";
// ! use node:path will be Error. (in Windows)
import { join } from "pathe";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vueRouter({
      beforeWriteFiles: (root) => {
        root.insert(
          "/from-root",
          join(__dirname, "./src/components/HelloWorld.vue")
          // ! ^^^^^^^^^  return backslash style path string. (in Windows)
        );
      },
    }),
    vue(),
    vueDevtools(),
  ],
});
