// vite.config.ts
import react from "file:///S:/vite-react/node_modules/@vitejs/plugin-react/dist/index.js";
import path from "path";
import { defineConfig } from "file:///S:/vite-react/node_modules/vite/dist/node/index.js";
import tailwindcss from "file:///S:/vite-react/node_modules/@tailwindcss/vite/dist/index.mjs";
import vercel from "file:///S:/vite-react/node_modules/vite-plugin-vercel/dist/index.js";
var __vite_injected_original_dirname = "S:\\vite-react";
var vite_config_default = defineConfig({
  base: "/",
  server: {
    port: process.env.PORT
  },
  plugins: [react(), tailwindcss(), vercel()],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  build: {
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/widget.tsx"),
      name: "ReactWidget",
      fileName: "react-widget-uv",
      formats: ["iife"]
    },
    rollupOptions: {
      // Remove external dependencies to bundle them
      // external: ['react', 'react-dom'],
      output: {
        // Remove globals mapping since React and ReactDOM will be bundled
        // globals: {
        //   react: 'React',
        //   'react-dom': 'ReactDOM',
        // },
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJTOlxcXFx2aXRlLXJlYWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJTOlxcXFx2aXRlLXJlYWN0XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9TOi92aXRlLXJlYWN0L3ZpdGUuY29uZmlnLnRzXCI7Ly8gaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuLy8gaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG4vLyBpbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSBcIkB0YWlsd2luZGNzcy92aXRlXCI7XHJcblxyXG4vLyAvLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG4vLyBleHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4vLyAgIHBsdWdpbnM6IFtyZWFjdCgpLCB0YWlsd2luZGNzcygpXSxcclxuLy8gfSk7XHJcblxyXG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XHJcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tIFwiQHRhaWx3aW5kY3NzL3ZpdGVcIjtcclxuaW1wb3J0IHZlcmNlbCBmcm9tIFwidml0ZS1wbHVnaW4tdmVyY2VsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIGJhc2U6IFwiL1wiLFxyXG4gIHNlcnZlcjoge1xyXG4gICAgcG9ydDogcHJvY2Vzcy5lbnYuUE9SVCBhcyB1bmtub3duIGFzIG51bWJlcixcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtyZWFjdCgpLCB0YWlsd2luZGNzcygpLCB2ZXJjZWwoKV0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIGxpYjoge1xyXG4gICAgICBlbnRyeTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvd2lkZ2V0LnRzeFwiKSxcclxuICAgICAgbmFtZTogXCJSZWFjdFdpZGdldFwiLFxyXG4gICAgICBmaWxlTmFtZTogXCJyZWFjdC13aWRnZXQtdXZcIixcclxuICAgICAgZm9ybWF0czogW1wiaWlmZVwiXSxcclxuICAgIH0sXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIC8vIFJlbW92ZSBleHRlcm5hbCBkZXBlbmRlbmNpZXMgdG8gYnVuZGxlIHRoZW1cclxuICAgICAgLy8gZXh0ZXJuYWw6IFsncmVhY3QnLCAncmVhY3QtZG9tJ10sXHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIC8vIFJlbW92ZSBnbG9iYWxzIG1hcHBpbmcgc2luY2UgUmVhY3QgYW5kIFJlYWN0RE9NIHdpbGwgYmUgYnVuZGxlZFxyXG4gICAgICAgIC8vIGdsb2JhbHM6IHtcclxuICAgICAgICAvLyAgIHJlYWN0OiAnUmVhY3QnLFxyXG4gICAgICAgIC8vICAgJ3JlYWN0LWRvbSc6ICdSZWFjdERPTScsXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFTQSxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sWUFBWTtBQWJuQixJQUFNLG1DQUFtQztBQWV6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsSUFDTixNQUFNLFFBQVEsSUFBSTtBQUFBLEVBQ3BCO0FBQUEsRUFDQSxTQUFTLENBQUMsTUFBTSxHQUFHLFlBQVksR0FBRyxPQUFPLENBQUM7QUFBQSxFQUMxQyxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxPQUFPLEtBQUssUUFBUSxrQ0FBVyxnQkFBZ0I7QUFBQSxNQUMvQyxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixTQUFTLENBQUMsTUFBTTtBQUFBLElBQ2xCO0FBQUEsSUFDQSxlQUFlO0FBQUE7QUFBQTtBQUFBLE1BR2IsUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU1SO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
