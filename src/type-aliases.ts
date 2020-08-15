export {};

type Mojiretsu = string;
const foo: Mojiretsu = 'Hello';

const example1 = {
  name: 'Ham',
  age: 43,
};

type profile = {
  name: string;
  age: number;
};

const exaple2: profile = {
  name: 'Ham',
  age: 43,
};

type profile2 = typeof example1;
