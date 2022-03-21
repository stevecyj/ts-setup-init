// over load 重載
// 多個一樣名稱的函式，但是參數不同

function getData(data: string): void;
function getData(data: number): void;
function getData(data: string | number) {}

getData(99);
getData('99');
