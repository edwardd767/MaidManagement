(function(){
  function ready(fn){ if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',fn); else fn(); }
  var maidSvg='<svg class="mbi-maid-duty-svg" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M18.5 21.5c.6-8 6.2-14.2 13.5-14.2s12.9 6.2 13.5 14.2c3.7 2.8 6 7.4 6 12.8v22.2H41.2v-7.8c0-4.7-18.4-4.7-18.4 0v7.8H12.5V34.3c0-5.4 2.3-10 6-12.8z" opacity=".98"/><path d="M13.7 56.5c1.1-10.1 8.6-17.2 18.3-17.2s17.2 7.1 18.3 17.2H13.7z"/><path d="M20.2 21.2c1.8-7 6.1-11 11.8-11s10 4 11.8 11c-7.6-3.1-16-3.1-23.6 0z"/><circle cx="22" cy="18" r="4.1"/><circle cx="29" cy="13.3" r="4.6"/><circle cx="35" cy="13.1" r="4.4"/><circle cx="42" cy="17.6" r="4.2"/></g><path d="M21.4 24.7c1.9-1.6 4.8-2.7 7.7-5.1 1.7-1.4 2.8-2.9 3.7-4.8 2.1 3.8 5.2 6.6 9.8 9.2v7.8c0 7.7-4.7 14.8-10.6 14.8s-10.6-7.1-10.6-14.8v-7.1z" fill="#fff3e6"/><path d="M24.2 43.8v6.8c0 4 3.3 7.2 7.8 7.2s7.8-3.2 7.8-7.2v-6.8" fill="#fff3e6"/><path d="M21.4 23.8c4.2-1 8.1-3.4 11.4-7.7 2.8 3.9 6.3 6.6 10.8 8.5v-7.1H21.4z" fill="currentColor"/><path d="M18.3 23.9c2.7-8.9 7.6-13.3 13.7-13.3s11 4.4 13.7 13.3" fill="none" stroke="#fff3e6" stroke-width="2.8" stroke-linecap="round"/><path d="M23.6 47.6l-5.2 8.9h27.2l-5.2-8.9h-4.2c-1.6 3.3-6.8 3.3-8.4 0z" fill="currentColor"/><path d="M22.9 47.6h7.3v8.9H19.1v-5.1c0-2.1 1.7-3.8 3.8-3.8zM33.8 47.6h7.3c2.1 0 3.8 1.7 3.8 3.8v5.1H33.8z" fill="currentColor"/><path d="M24.2 48.4v8.1M39.8 48.4v8.1" stroke="#fff3e6" stroke-width="2.4" stroke-linecap="round"/><path d="M23.3 49.7h17.4" stroke="#fff3e6" stroke-width="3" stroke-linecap="round"/></svg>';
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
