// @flow

import { readInput } from "../utils";

const parseInput = input =>
  input.split("\n").map(x => x.split("x").map(Number));

export const first = (input: string) =>
  parseInput(input).reduce((acc, [l, w, h]) => {
    const areas = [l * w, w * h, h * l];
    return (
      acc + areas.reduce((acc, area) => acc + 2 * area, 0) + Math.min(...areas)
    );
  }, 0);

export const second = (input: string) =>
  parseInput(input).reduce((acc, [l, w, h]) => {
    const [x, y] = [l, w, h].sort((a, b) => a - b);
    return acc + 2 * (x + y) + l * w * h;
  }, 0);

const input = readInput();
console.log("Part one:", first(input));
console.log("Part two:", second(input));
