// 擴充
// type Animal = {
//   name: string;
// };

// type Dog = Animal & {
//   age: number;
// };

// type Cat = Animal;

// let dog: Dog = {
//   name: '',
//   age: 99,
// };

// let cat: Cat = {
//   name: '',
// };

// 用 interface 擴充
// interface Animal {
//   name: string;
// }

// interface Dog extends Animal {}

// let dog: Dog = {};

// 用 interface 合併
interface Animal {
  name: string;
}

interface Animal {
  age: number;
}

// let dog: Animal = {};
