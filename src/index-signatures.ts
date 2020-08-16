export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'Ham', underTwenty: false };

// How to write index signatures
// { [ index: typeforindex ]: typeforvalue }
profile.name = 'Ham';
profile.age = 43;
profile.nationarity = 'Japna';
