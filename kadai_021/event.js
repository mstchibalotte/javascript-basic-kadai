const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click' , () => {
  if (btn.click){
    setTimeout(() => {
      text.textContent = 'ボタンをクリックしました';
    } , 2000);
  }
})
