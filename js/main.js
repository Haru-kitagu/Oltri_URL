//リロード時
window.onload = function () {
  window.scrollTo(0, 0);
};



document.addEventListener("DOMContentLoaded", function () {
  console.log("ページが読み込まれました");
});


//headerハンバーガーメニュー
// メニューボタンとメニューを取得
const toggleBtn = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// クリックしたらメニュー表示ON/OFF
toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
});
