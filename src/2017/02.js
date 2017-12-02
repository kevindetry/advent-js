// @flow

import { readInput } from "../utils";

const parseInput = (input: string) =>
  input.split("\n").map(x => x.split(/\s/).map(Number));

const permutations = function*<T>(arr: T[]): Iterable<[T, T]> {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      if (i === j) continue;
      yield [arr[i], arr[j]];
    }
  }
};

export const first = (input: string) =>
  parseInput(input).reduce((acc, x) => {
    const [min, max] = x.reduce(
      ([min, max], x) => [Math.min(x, min), Math.max(x, max)],
      [+Infinity, -Infinity],
    );
    return acc + max - min;
  }, 0);

export const second = (input: string) =>
  parseInput(input).reduce((acc, x) => {
    for (const [dividend, divisor] of permutations(x)) {
      if (dividend % divisor === 0) return acc + dividend / divisor;
    }
  }, 0);

const input = readInput();
console.log("Part one:", first(input));
console.log("Part two:", second(input));
