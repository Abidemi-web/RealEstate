let menus = document.querySelector('.menu');
let deleteButton = document.querySelector('.close');
let navbars = document.querySelector('.navbar');
let get =  document.getElementById('get');

menus.addEventListener('click', function(){
  
  navbars.classList.add('Active2');
});

deleteButton.addEventListener('click', function(){
  
  navbars.classList.remove('Active2');
});

get.onclick = function () {
  alert('Working on it')
}