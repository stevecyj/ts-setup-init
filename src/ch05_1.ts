function get(a: number, b: string) {
  return a + b;
}

// 可選參數
function get2(a: number, b?: string) {
  if (typeof b === 'string') {
    return a + b;
  }
}

function getNum() {
  return 1;
}

// type
type Info = {
  name: string;
  age: number;
};

function createUserInfo(info: Info) {
  console.log(info);
}

// nenver
function getUserData(): never {
  throw new Error('error');
}

// void
function sayHello() {
  console.log('hello');
}

// 構建函式 new

// function car() {
//   this.name = '';
// }

// const c1 = new car();

type CardObj = {
  name: string;
};

type CardCreator = {
  new (): CardObj;
};

function createCard(cardCreator: CardCreator) {
  return new cardCreator();
}

// return []，避免 union 發生
function getArr() {
  return [0, 1, 'coco'] as [number, number, string];
}

const [id, age, userName] = getArr();
