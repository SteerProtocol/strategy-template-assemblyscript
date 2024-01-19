export function floorDiv(dividend: u32, divisor: u32): u32 {
  if (divisor === 0) throw new Error("Division by 0 is undefined!");
  let result: i32 = 0;
  while (dividend >= divisor) {
    dividend -= divisor;
    result++;
  }
  return result;
}

export function ceilDiv(dividend: u32, divisor: u32): u32 {
  if (divisor === 0) throw new Error("Division by 0 is undefined!");
  let result: i32 = 1;
  while (dividend > divisor) {
    dividend -= divisor;
    result++;
  }
  return result;
}

