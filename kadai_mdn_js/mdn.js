//現在の日時
const now = new Date();
//確認用
console.log(now);


//年月日の定義
const year = now.getFullYear();
const month = 1 + (now.getMonth());
const date = now.getDate();

//年月日の出力
console.log(year + '年', month + '月' , date + '日');