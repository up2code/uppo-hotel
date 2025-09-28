import path from "path";

const buildEslintCommand = (filenames) => {
  return `next lint --fix --file ${filenames
    .filter((f) => f.includes("/src/"))
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;
};

const config = {
  "*.{ts,tsx}": [buildEslintCommand, () => "tsc --noEmit"],
  "*.{json,md,yml,yaml}": ["prettier --write"],
};

export default config;
