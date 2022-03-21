// 什麼是物件導向
// 一種規則

// class
// 會員功能的物件
// 物件的設計圖
class User {
  constructor(name1: string) {
    // 建構子
    console.log('建立物件之前');
    this.name = name1;
  }
  // 成員(屬性 variable，功能 function )
  // 屬性
  name: string;
  age: number;
  addres: string;

  // 會員功能
  add() {}
  update() {}
  delete() {}
}

const u1 = new User('jojo1');
const u2 = new User('jojo2');
const u3 = new User('jojo3');

// u1.name = 'jojo1';
// u2.name = 'jojo1';
// u3.name = 'jojo3';

console.log('u1', u1);
console.log('u2', u2);
console.log('u3', u3);

// constructor
// 畫設計圖前做的事
