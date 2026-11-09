(function(){
 const toggle=document.getElementById('languageToggle');
 const menu=document.getElementById('menuToggle');
 let lang=localStorage.getItem('km-language')||'en';
 function applyLanguage(){
   document.documentElement.lang=lang;
   document.documentElement.dir=lang==='ar'?'rtl':'ltr';
   document.querySelectorAll('[data-en][data-ar]').forEach(el=>{
     const value=el.getAttribute('data-'+lang);
     if(value!==null) el.innerHTML=value;
   });
   document.querySelectorAll('.features-en').forEach(el=>el.style.display=lang==='en'?'block':'none');
   document.querySelectorAll('.features-ar').forEach(el=>el.style.display=lang==='ar'?'block':'none');
   if(toggle) toggle.textContent=lang==='en'?'العربية':'English';
 }
 if(toggle) toggle.addEventListener('click',()=>{lang=lang==='en'?'ar':'en';localStorage.setItem('km-language',lang);applyLanguage();});
 if(menu) menu.addEventListener('click',()=>{const nav=document.querySelector('.nav-links');if(nav)nav.classList.toggle('open');});
 applyLanguage();
})();
