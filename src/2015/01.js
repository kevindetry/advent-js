// @flow

import { readInput } from "../utils";

const floors = function*(input): Iterable<number> {
  let floor = 0;
  for (const x of input) {
    switch (x) {
      case "(":
        floor += 1;
        break;
      case ")":
        floor -= 1;
        break;
    }
    yield floor;
  }
};

export const first = (input: string) => {
  let result;
  for (result of floors(input));
  return result;
};

export const second = (input: string) => {
  let result = 0;
  for (const floor of floors(input)) {
    result += 1;
    if (floor === -1) return result;
  }
};

const input = readInput();
console.log("Part one:", first(input));
console.log("Part two:", second(input));
