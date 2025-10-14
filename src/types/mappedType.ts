type Example = {
  a: number;
  b: string;
  c: boolean;
};

type Subset<T> = {
  [K in keyof T]?: T[K];
};

const aExample: Subset<Example> = { a: 2 };
const bExample: Subset<Example> = { b: "b" };

console.log(aExample);
console.log(bExample);