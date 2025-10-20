interface Tip1 {
  tip: number;
}

interface ExtendsTip extends Tip1 {
  // 에러
  // tip: string;
  tip: number;
}

const obj: ExtendsTip = {
  tip: 2,
};

// type Tip2 = {
//   tip: number;
// };

// type ExtendsTip2 = Tip2 & {
//   tip: string;
// };

// const obj2: ExtendsTip2 = {
// tip: => never type;
// }

console.log(obj);
