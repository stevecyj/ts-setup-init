// union
const arry7: (string | boolean)[] = [];
arry7.push(false);
arry7.push('');

let liveName: string | number;
liveName = 'jojo';
liveName = 123;
// liveName = false;

// never
if (typeof liveName === 'string') {
  // liveName.split('');
}

// 強制斷言
let liveName2 = 999;
let liveName3 = liveName2 as unknown as string;
