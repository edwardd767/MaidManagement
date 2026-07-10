(function(){
  function ready(fn){ if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',fn); else fn(); }
  var maidSvg='<svg class="mbi-maid-duty-svg" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><circle cx="20" cy="17" r="4.2"></circle><circle cx="25.5" cy="11.5" r="4.8"></circle><circle cx="32" cy="8.5" r="5.2"></circle><circle cx="38.5" cy="11.5" r="4.8"></circle><circle cx="44" cy="17" r="4.2"></circle><path d="M17 24c0-10.7 6.6-17.6 15-17.6s15 6.9 15 17.6v10.7c0 7.9-6.5 15.1-15 15.1S17 42.6 17 34.7V24z"></path><path d="M9 59c1.7-9.6 10-16.2 23-16.2S53.3 49.4 55 59H9z"></path><path d="M21 45.3h22v13.8H21z"></path></g><path d="M22.1 25.5c4.3-.8 8.7-4.1 12.3-8.8 3.1 4.1 7.2 7.2 12.1 8.8v8.2c0 7.7-6.4 14.4-14.4 14.4s-14-6.7-14-14.4v-8.2z" fill="#fff3e6"></path><path d="M24.8 44.8v5.6c0 4.2 3.1 7.3 7.2 7.3s7.2-3.1 7.2-7.3v-5.6" fill="#fff3e6"></path><path d="M18.6 24.1c5.1-.8 10.1-3.6 14.6-8.8 3.7 4.7 8.2 7.6 13.6 8.9v-5.1H18.6v5z" fill="currentColor"></path><path d="M23.5 46.5l-4.4 12.5h9.8v-8.6h6.2V59h9.8l-4.4-12.5H23.5z" fill="currentColor"></path><path d="M23 46.5h7.5v12.5H19.3v-6.3c0-3.4 1.9-6.2 3.7-6.2zM33.5 46.5H41c1.8 0 3.7 2.8 3.7 6.2V59H33.5V46.5z" fill="currentColor"></path><path d="M23.7 48.1v10.3M40.3 48.1v10.3M24.9 45.9h14.2" stroke="#fff3e6" stroke-width="2.4" stroke-linecap="round"></path><path d="M18.7 22.1c2.7-8.3 7.8-12.4 13.3-12.4s10.6 4.1 13.3 12.4" fill="none" stroke="#fff3e6" stroke-width="2.7" stroke-linecap="round"></path></svg>';
  function applyIcon(){
    var page=document.getElementById('businessInsightsPage');
    if(!page) return;
    page.querySelectorAll('.mbi-kpi').forEach(function(card){
      var label=card.querySelector('.mbi-kpi-title');
      var icon=card.querySelector('.mbi-icon');
      if(label && icon && label.textContent.trim()==='Maid On Duty'){
        icon.innerHTML=maidSvg;
      }
    });
  }
  ready(function(){ applyIcon(); setTimeout(applyIcon,600); setTimeout(applyIcon,1500); setTimeout(applyIcon,2600); });
})();
