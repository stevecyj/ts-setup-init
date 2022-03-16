// 泛型，自訂名稱
// T, type

function print<T>(data: T) {
  console.log(data);
}

// 使用的時候再決定 T 的型態
print<string>('coco');

print<number>(123);
