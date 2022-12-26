

// Unios Type 

type Binary = true | false

const a: Binary = true

type WindowsStates = "running" | "stoped" | "restating"

type LockStates = "open" | "closed"

type PositiveOddNumberUnderTen = 2 | 4 | 6 | 8

function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${typeof padding}'.`);
}

padLeft("Hello world", 4); // returns "    Hello world"

















