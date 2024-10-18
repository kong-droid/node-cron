import esbuild from "esbuild";
import EnvSetup from "./src/setup/env-setup.js";
import {environment} from "./src/utils/extensions.js";

EnvSetup();

// cjs: commonJS 지원, esm: es6 이상 지원
const esBuildOptions = {
  bundle: true,       // 번들화
  treeShaking: true,  // 사용되지 않는 코드 제거
  minify: true,       // 코드 축소화
  platform: "node",
  entryPoints: ["src/index.js"],
  outdir: "dist",
  format: "cjs",
  outExtension: {".js" : ".cjs"},
  define: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    "process.env.NODE_ENV_PORT": JSON.stringify(process.env.NODE_ENV_PORT),
    "process.env.NODE_ENV_API_URL": JSON.stringify(process.env.NODE_ENV_API_URL),
    "process.env.NODE_ENV_LOG_FILE_DIR": JSON.stringify(process.env.NODE_ENV_LOG_FILE_DIR),
    "process.env.NODE_ENV_LOG_FONT_COLOR": JSON.stringify(process.env.NODE_ENV_LOG_FONT_COLOR),
    "process.env.npm_lifecycle_event": JSON.stringify(environment())
  }
};
esbuild.build(esBuildOptions).catch(() => process.exit(1));