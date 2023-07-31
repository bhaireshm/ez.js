/* eslint-disable no-undef */
import { resolve } from "path";
import { ESLint } from "eslint";

export default {
  "**/*.{js,json}": (fileNames) => {
    const escapedFileNames = fileNames.map((fileName) => escape(fileName)).join(" ");
    const eslint = new ESLint();

    return [
      `prettier --relative --write ${escapedFileNames}`,
      `eslint --no-ignore --max-warnings=0 --fix ${fileNames
        .filter((f) => !eslint.isPathIgnored(f))
        .map((f) => `"${f}"`)
        .join(" ")}`,
      `git add ${escapedFileNames}`,
    ];
  },
};

function escape(str) {
  return resolve(str);
}
