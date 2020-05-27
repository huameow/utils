import toPrice from "./toPrice";

enum Languages {
  ZH = "zh",
  EN = "en",
}

type Language = Languages.ZH | Languages.EN;

export default function priceFormat(
  value: string | number,
  local: Language = Languages.ZH
): string {
  const number = toPrice(value);
  let currencyDisplay = "¥";
  if (local === Languages.EN) {
    currencyDisplay = "$";
  }
  return `${currencyDisplay}${number}`;
}
