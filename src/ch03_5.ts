// unknown
let name1: unknown = 'jojo';

// 斷言
let name2: unknown = 'mary';
let name3 = name2 as string;

// 斷言應用
async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = (await res.json()) as {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
  console.log(data);
}
getData();
// any, unknown
// unknown 是比較安全的 any

const liveStatus = false;
function getLiveName() {
  let liveName: unknown;
  if (liveStatus) {
    liveName = 'jojo';
  } else {
    liveName = null;
  }
  return liveName;
}

const result = getLiveName();
if (typeof result === 'string') {
  result.split('');
}
