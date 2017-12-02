// @flow

import { readInput } from "../utils";

export const first = (input: string) =>
  [...input, input[0]].reduce(
    (acc: number, x, i, arr) => (x === arr[i - 1] ? acc + Number(x) : acc),
    0,
  );

export const second = (input: string) =>
  [...input].reduce(
    (acc: number, x, i, arr) =>
      x === arr[(i + arr.length / 2) % arr.length] ? acc + Number(x) : acc,
    0,
  );

const input = readInput();
console.log("Part one:", first(input));
console.log("Part two:", second(input));
