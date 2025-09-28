// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "prettier",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    rules: {
      "no-console": "warn",
      "no-var": "error",
      "prefer-const": "warn",
      "import/no-restricted-paths": [
        "error",
        {
          zones: [
            // Feature isolation - prevent cross-feature imports
            {
              target: "./src/features/room-types",
              from: "./src/features",
              except: ["./room-types"],
            },
            {
              target: "./src/features/bookings",
              from: "./src/features",
              except: ["./bookings"],
            },
            {
              target: "./src/features/auth",
              from: "./src/features",
              except: ["./auth"],
            },

            // Unidirectional architecture
            {
              target: "./src/features",
              from: "./src/app",
            },
            {
              target: [
                "./src/components",
                "./src/hooks",
                "./src/lib",
                "./src/types",
                "./src/utils",
              ],
              from: ["./src/features", "./src/app"],
              message:
                "Shared modules cannot import from features or app. Move shared code to appropriate location.",
            },
          ],
        },
      ],
    },
  },
  ...storybook.configs["flat/recommended"],
];

export default eslintConfig;
