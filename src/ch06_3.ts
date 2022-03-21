// extends
// class 之間的 extends
// class Animal {
//   name: string;
//   constructor(name1: string) {
//     this.name = name1;
//   }

//   run() {
//     console.log('Animal is running...', this.name);
//   }
// }

// class Dog extends Animal {
//   run() {
//     super.run();
//     console.log('Dog is running...');
//   }
// }
// class Cat extends Animal {}

// const d1 = new Dog('dd1');
// d1.run();

// 抽象類別,abstract
abstract class Animal {
  run() {
    console.log('Animal is running...', this.name);
  }

  abstract hello(): void;
}

class Dog extends Animal {
  hello() {
    console.log('Dog is running...');
  }
}

// const d1 = new Dog();
// d1.run();
