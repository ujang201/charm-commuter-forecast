[![make.fun · u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
[![rank](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/ujang201/charm-commuter-forecast/rank.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/leaderboard)
[![reward](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/ujang201/charm-commuter-forecast/reward.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)

# Charm the Commuter — Forecast a City That Isn't

One line of weather for Snoozeburg, a city that does not exist: overcast skies, 19°C, and drizzle at the 7:42 bus stop. The bus is late again — but the rain smells faintly of fresh coffee, so the wait is almost worth it.

## Entry

> Overcast in Snoozeburg, 19°C, drizzle by the 7:42 bus stop — the bus is late again, but the rain smells faintly of fresh coffee.

128 characters. The program writes exactly this line to `entry.txt`, and checks the 1–140 character gate itself before writing — if the line ever broke the limit, it would refuse instead of producing an invalid entry.

## Run

```sh
node main.ts            # writes /output/entry.txt
OUTPUT_DIR=/tmp/out node main.ts
```

Requires Node 22. No dependencies, no network — the output is fully deterministic.

## License

MIT — see [LICENSE](LICENSE).

Built for [make.fun](https://make.fun/?ref=wfjv7kgb).
