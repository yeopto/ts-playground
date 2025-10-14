// arrow function 예시 .tsx에서는 T에대해 타입추론이 잘 안되서 명시적으로 타입을 써줘야 함
const arrowExampleFunc = <T extends { length: number }>(arg: T): number => {
  return arg.length;
};

// 제한된 제네릭 예제
type ErrorCodeType = "400" | "401" | "403" | "404" | "500";
type ErrorRecord<key extends string> = Exclude<key, ErrorCodeType> extends never
  ? Partial<Record<key, boolean>>
  : never;

const errorRecord: ErrorRecord<"400" | "401" | "403" | "404" | "500"> = {
  "400": true,
  "401": true,
  "403": true,
  "404": true,
  "500": true,
  // 에러
  // "600": true,
};

console.log(arrowExampleFunc([1, 2, 3]));
console.log(arrowExampleFunc("hello"));
console.log(arrowExampleFunc({ length: 3 }));
console.log(errorRecord);