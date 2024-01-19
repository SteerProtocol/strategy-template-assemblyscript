import { loadWasm } from "@steerprotocol/app-loader";
import { prices } from "./tests/utils";

(async () => {
  const bundle = await loadWasm("./build/debug.wasm", {});
  const version = bundle.version();
  console.log("Version: " + version);

  bundle.initialize(`{ "percent": 5, "poolFee": 3000 }`);

  console.log("Executing Bundle...");
  const transformed = await bundle.execute(JSON.stringify(prices));
  console.log("Executed Bundle.");
  console.log("Finished Transformation. ", transformed);
});

function customRoundLog10(value) {
  const logTable = [
    0, 23027, 46054, 69081, 92109, 115136, 138163, 161190, 184216, 207243,
    230270, 253297, 276324, 299351, 322378, 345405, 368431, 391458, 414485, 437512,
    // Add more values as needed
  ];

  let count = 0;

  // Find the closest precomputed logarithmic value using bit manipulation
  while (value >= 10) {
    value >>= 1; // Right shift is equivalent to division by 2
    count++;
  }

  // Perform rounding based on the lookup table
  return logTable[count];
}

// Example usage
let result = customRoundLog10(10);
console.log("result: " +result); // Output: true
