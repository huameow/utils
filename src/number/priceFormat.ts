import toPrice from "./toPrice";

// const toUSD = (amount: any) => amount.toLocaleString('en-US', {
//   style: 'currency',
//   currency: 'USD',
// });

// const toRMB = (amount: any) => amount.toLocaleString('zh-CH', {
//   style: 'currency',
//   currency: 'CNY',
// });

export default function priceFormat(
  value: string | number,
  local = "zh"
): string {
  const number = toPrice(value);
  let currencyDisplay = "¥";
  if (local === "en") {
    currencyDisplay = "$";
  }
  return `${currencyDisplay}${number}`;
}
