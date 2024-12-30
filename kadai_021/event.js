const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click' , () => {
  //もしクリックされたらh2テキストを追加
  if (btn.click){
    setTimeout(() => {
      //新しくh2要素を作成し、定数に代入
      const h2 =document.createElement('h2');
      //作成したh2要素にテキストを新しく追加
      h2.textContent = 'ボタンをクリックしました';
      //HTML要素を追加
      document.querySelector('h2').before(h2);
      //既存のHTML要素の消去
      text.style.display = 'none';
    } , 2000);
  }
})