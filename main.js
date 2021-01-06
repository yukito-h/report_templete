const hName = document.getElementById('header_name');
const hAddress =document.getElementById('header_address');
const hDate = document.getElementById('header_date')


const samary = document.querySelector(".samary");
const main = document.querySelector('main');

//1set 追加する関数
function addSamary() {
  const main2 =samary.cloneNode(true);
  main.appendChild(main2);
}



// addSamary();
