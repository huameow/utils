# utils
## how to use
### 1. install it
```
yarn add @huameow/utils
```

### 2. import it
```
import {formatDate} from '@huameow/utils';

formatDate("2020-01", 'YY-MM-DD') => 2020-01-01
```
## api

| 方法 | 说明 |
| --- | --- |
| formatDate |  (<br />  value?: string | number | Date,<br />  formatStr = "YY-MM-DD hh:mm:ss"<br />): string |
| isDate | (value: string | number | Date): boolean |
| toDate | <br />(value: string | number | Date): number<br /> |
| getDuration | <br />(<br />  start: number | string | Date,<br />  end: number | string | Date = new Date(),<br />  formatStr = "hh:mm:ss"<br />): string<br /> |
| copy | (text, id): Promise<unknown> |
| downloadedImage | (id: string): Promise<unknown> |
| drawImage | ({ url, width, height }, id: string, hasRadius = false): void |
| hasFlash | (): boolean |
| isRetina | <br />(): boolean<br /> |
| loadScript | <br />(src: string): Promise<unknown><br /> |
| validImage | <br />(url: string, successFn: Function, failFn: Function): void<br /> |
| b64toBlob | <br />(b64Data: string, contentType: string = "", sliceSize = 512): Blob<br /> |
| <br />createObjectURL<br /> | <br />(blob: Blob): string<br /> |
| <br />crypto<br /> | <br />(data: unknown, needJoin = false): string<br /> |
| <br />getSuffix<br /> | <br />(fileName: string): string<br /> |
| <br />floatFix<br /> | <br />(<br />  value: string | number,<br />  decimal: number = 2,<br />  isRounding: boolean = true<br />): string<br /> |
| <br />formatLargeNumber<br /> | <br />(value: number | string): string<br /> |
| <br />isNumber<br /> | <br />(value: string | number | unknown): boolean<br /> |
| <br />nonRounding<br /> | <br /> (value: number, decimal: number): number<br /> |
| <br />priceFormat<br /> | (<br />  value: string | number,<br />  local = Languages.ZH<br />): string |
| <br />rounding<br /> | <br />(value: number, decimal: number): string<br /> |
| <br />switchCentAndYuanProps<br /> | <br />(<br />  value: string,<br />  stage: Stage = PriceStage.YUAN<br />): number<br /> |
| <br />toPrice<br /> | <br />(value: string | number): number<br /> |
| <br />decodeHTMLEntities<br /> | <br />(str: string): string<br /> |
| <br />escape<br /> | <br />(text: string | number): string<br /> |
| <br />unescape<br /> | <br /> (text: string): string<br /> |
| <br />getStrLength<br /> | <br />(str: string, charset = "gbk"): number<br /> |
| <br />randomString<br /> | <br />(length: number): string<br /> |
| <br />setSpaces<br /> | <br />(num: number): string<br /> |
| <br />toCamelCase<br /> | <br />(str: string): string<br /> |
| <br />toSnakeCase<br /> | <br /> (str: string): string<br /> |
| <br />hasChinese<br /> | <br />(value: string): boolean<br /> |
| <br />isChinaMobile<br /> | <br />(value: number | string): boolean<br /> |
| <br />isEmail<br /> | <br />(value: string): boolean<br /> |
| <br />isID<br /> | <br />(value: string): boolean<br /> |
| <br />isMobile<br /> | <br />(value: number | string): boolean<br /> |
| <br />isPhone<br /> | <br />(value: number | string): boolean<br /> |
| <br />isPostalCode<br /> | <br />(value: number | string): boolean<br /> |
| <br />isQQ<br /> | <br />(value: number | string): boolean<br /> |
| <br />isURL<br /> | <br />(value: string): boolean<br /> |
| <br />checkHasProperty<br /> | <br /><T, K extends Extract<keyof T, string \| string[]>>(value: T[K], key: K, items: T[]): boolean<br /> |
