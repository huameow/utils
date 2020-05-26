import toPrice from "./toPrice";

enum PriceStage {
  CENT = "cent",
  YUAN = "yuan",
}

type Stage = PriceStage.YUAN | PriceStage.CENT;

export default function switchCentAndYuanProps(
  value: string,
  stage: Stage = PriceStage.YUAN
): number {
  if (stage === PriceStage.CENT) {
    return toPrice(value) / 100;
  } else {
    return toPrice(value) * 100;
  }
}
