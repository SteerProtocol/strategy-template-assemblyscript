import { getTickFromPrice, getTickSpacing, renderULMResult } from "@steerprotocol/concentrated-liquidity-strategy/assembly";
import { parseCandles, Position, trailingStop } from "@steerprotocol/strategy-utils/assembly";
import { JSON } from "json-as/assembly";

// @ts-ignore: Decorators valid here
@serializable
class Config {
  poolFee: i32 = 0;
  percent: f64 = 0;
}

function isValidConfig(config: Config): boolean {
  if (config.poolFee < 0) return false;
  if (config.percent < 0) return false;
  return true;
}

let configObj: Config = new Config();

export function initialize(config: string): void {
  configObj = JSON.parse<Config>(config);

  if (!isValidConfig(configObj)) throw new Error("Invalid configuration");
}

function closestDivisibleNumber(num: i32, divisor: i32, floor: boolean): i32 {
  if (floor) return i32(Math.floor(num / divisor) * divisor);
  return i32(Math.ceil(num / divisor) * divisor);
}

export function execute(_prices: string): string {
  const prices = parseCandles(_prices);
  if (prices.length == 0) throw new Error("Expected to find candles, but found none!");

  const lowerLimit = trailingStop(configObj.percent, prices);
  const upperLimit = prices[prices.length - 1].close;

  const upperTick = closestDivisibleNumber(getTickFromPrice(upperLimit), getTickSpacing(configObj.poolFee), false);
  const lowerTick = closestDivisibleNumber(getTickFromPrice(lowerLimit), getTickSpacing(configObj.poolFee), true);

  const positions = [new Position(lowerTick, upperTick, 100)];

  return renderULMResult(positions, 10000);
}

export function config(): string {
  return `{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Strategy Config",
    "type": "object",
    "expectedDataTypes": ["OHLC"],
    "properties": {
      "percent": {
        "type": "number",
        "description": "Percent for trailing stop order (must be greater than pool fee)",
        "default": 5.0
    },
      "poolFee": {
        "description": "Pool fee percent for desired Uniswapv3 pool",
        "enum" : [10000, 3000, 500, 100],
        "enumNames": ["1%", "0.3%", "0.05%", "0.01%"]
      }
    },
    "required": ["percent", "poolFee"]
  }`;
}

export function version(): i32 {
  return 1;
}
