// 枚舉，多種狀態
// 0 1 2
// 0 關播
// 1 開播
// 2 多人連線開播

enum LiveStatus {
  'streaming' = 0,
  'closed' = 1,
  'multi' = 2,
}

let LIVEStatus = 0;
if (LIVEStatus === LiveStatus.streaming) {
  console.log('關播');
}
