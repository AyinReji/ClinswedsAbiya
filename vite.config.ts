// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Vercel/static deployment:
// - cloudflare: false  → disables Cloudflare Workers output, produces a plain static build
// - spa: {}            → enables TanStack Start's SPA mode, which pre-renders an HTML shell
//                        to dist/client/_shell/index.html during build.
//                        vercel.json rewrites all routes to that shell so client-side
//                        routing takes over (no server required, no 404s).
export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    spa: {},
  },
});
