let text = document.querySelector('.text-intro__animated');
let subTitle = document.querySelector('.text-intro__sub-title');
window.addEventListener('load', () => {
  document.addEventListener('visibilitychange', () => {
     text.classList.add('load');
     subTitle.classList.add('load');
  })
  
})