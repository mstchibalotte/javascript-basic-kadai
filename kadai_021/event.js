const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click' , () => {
  //もしクリックされたらh2テキストを追加
  if (btn.click){
    setTimeout(() => {
      text.textContent = 'ボタンをクリックしました';
    } , 2000);
  }
})