export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

//const MonthsJs = {
//  January: 0,
//  February: 1,
//};
//
//console.log(MonthsJs.January);

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  //  YELLO = '#FFFF00',
  BLACK = '#000000',
}
let green = COLORS.GREEN;
console.log({ green });
enum COLORS {
  YELLO = '#FFFF00',
  GRAY = '#808080',
}
COLORS.YELLO;
