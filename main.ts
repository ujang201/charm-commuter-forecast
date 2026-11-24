// Charm the Commuter — one-line weather forecast for a city that isn't.
//
// This program writes a single forecast line to entry.txt inside the output
// directory (OUTPUT_DIR, or /output by default). The line is a fixed,
// hand-written string: deterministic by design, so every run produces the
// exact same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORECAST =
  "Overcast in Snoozeburg, 19°C, drizzle by the 7:42 bus stop — the bus is late again, but the rain smells faintly of fresh coffee.";

function main(): void {
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  // Gate check, same limits as the sealed scorer: 1–140 characters, one line.
  const length = [...FORECAST].length;
  if (length < 1 || length > 140 || FORECAST.includes("\n")) {
    throw new Error(`Forecast fails the gate: ${length} characters`);
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), FORECAST, "utf8");
}

main();
