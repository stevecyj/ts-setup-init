const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, '10'];

const arr3: string[] = ['a', 'b', 'c', 'd', 'e'];

const arr4: Array<string> = ['a', 'b', 'c', 'd', 'e'];

const arr5: (string | boolean)[] = ['a', 'b', 'c', 'd', 'e', true];

arr5.push(false);

// Tuple

const tu1: [number, string, boolean] = [1, 'a', true];
const tu2: [number, number][] = [
  [1, 2],
  [3, 4],
  [5, 6],
];
