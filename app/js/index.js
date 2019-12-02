let sidebar = document.querySelector('.sidebar');
let button = document.querySelector('.menu__btn');

button.onclick = () => {
    sidebar.classList.toggle('sidebar--x0');
}

// Sticky header

let header = document.querySelector('.content__header');
let sticky = header.offsetTop;

if(window.innerWidth <= 1024 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  window.onscroll = () => {
    addStickyClass();
  }
  
  const addStickyClass = () => {
    if(window.pageYOffset > sticky)
      header.classList.add('sticky');
    else
      header.classList.remove('sticky');
  }
} else {
  header.classList.remove('sticky');
}