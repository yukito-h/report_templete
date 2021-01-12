const hName = document.getElementById('header_name');
const hAddress =document.getElementById('header_address');
const hDate = document.getElementById('header_date')


const samary = document.querySelector(".samary");
const main = document.querySelector('main');
const img = document.querySelector('input');
const prev = document.querySelector('#preview');



//1set 追加する関数
function addSamary() {
  const main2 =samary.cloneNode(true);
  main.appendChild(main2);
}

img.addEventListener('change',function(e) {
 let reader = new FileReader();
 reader.onload = function(e) {
  prev.attr('src',e.terget.result);
  
 
  }

  reader.readAsDataURL(e.target.file[0]);
  });


