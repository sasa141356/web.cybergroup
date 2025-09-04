document.getElementById('year').textContent = new Date().getFullYear();
const cookieBanner=document.querySelector('.cookie-banner');const btnCookie=document.getElementById('cookie-accept');
if(btnCookie){btnCookie.addEventListener('click',()=>{try{localStorage.setItem('cookie-consent','yes')}catch(e){}cookieBanner.classList.add('hide')});try{if(localStorage.getItem('cookie-consent')==='yes')cookieBanner.classList.add('hide')}catch(e){}}
