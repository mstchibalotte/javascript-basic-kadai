//HTML要素を取得し、定数に代入
const text = document.getElementById('text');
const btn = document.getElementById('btn');

//クリックされたらイベント処理を実行する
btn.addEventListener('click' , () => {
  //もしクリックされたらテキストを変更
  if (btn.click){
    text.textContent = 'ボタンをクリックしました'
  }
})