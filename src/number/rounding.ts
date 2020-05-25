export default function rounding(value: number, decimal: number): string {
  return parseFloat(String(value)).toFixed(decimal);
}
