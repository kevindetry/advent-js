// @flow

import { readFileSync } from "fs";
import getCallerFile from "get-caller-file";

export const readInput = () =>
  readFileSync(getCallerFile().replace(/src\/(.*)\.js/, "input/$1.txt"), {
    encoding: "utf-8",
  }).trim();
