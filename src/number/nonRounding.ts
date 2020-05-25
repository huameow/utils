export default function nonRounding(value: number, decimal: number): number {
  const step = Math.pow(10, decimal);
  return Math.floor(value * step) / step;
}
