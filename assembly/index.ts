import { getTickSpacing, renderULMResult } from "@steerprotocol/concentrated-liquidity-strategy/assembly";
import { parseCandles, Position, trailingStop } from "@steerprotocol/strategy-utils/assembly";
import { JSON } from "json-as/assembly";
import { ceilDiv, floorDiv } from "./util";

const logTable: i32[] = [0, 23027, 46054, 69081, 92109, 115136, 138163, 161190, 184216, 207243, 230270, 253297, 276324, 299351, 322378, 345405, 368431, 391458, 414485, 437512]
function roundLog10(value: u64): i32 {
  let count = 0;

  while (value >= 10) {
    value >>= 1;
    count++;
  }

  return logTable[count];
}

// @ts-ignore: Decorators valid here
@serializable
class Config {
  poolFee: i32 = 0;
  percent: i32 = 0;
  isValid(): boolean {
    if (this.poolFee < 0) return false;
    if (this.percent < 0) return false;
    return true;
  }
}

let configObj: Config = new Config();

export function initialize(config: string): void {
  configObj = JSON.parse<Config>(config);
  if (!configObj.isValid()) throw new Error("Invalid configuration");
}

function closestDivisibleNumber(num: i32, divisor: i32, floor: boolean): i32 {
  console.log(`Performing operation ${floor ? "floor" : "ceil"}\n  num: ${num} divisor: ${divisor}\n  Floor: ${floorDiv(num, divisor)} === ${Math.floor(num / divisor)}`)
  if (floor) return floorDiv(num, divisor) * divisor;
  return ceilDiv(num, divisor) * divisor;
}

function getTickFromPrice(price: f64): i32 {
  const tick = Math.log(price) / Math.log(f64(1.0001));
  return i32(tick);
}

function getTickFromPriceNoLog(price: u64): i32 {
  let tick = 1.0001;
  let result = -1;

  while (u64(tick) < price) {
    tick /= 1.0001;
    result++;
  }

  return result;
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
