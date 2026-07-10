(function(){
  function ready(fn){ if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',fn); else fn(); }
  var maidSvg='<svg class="mbi-maid-duty-svg" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><circle cx="27" cy="10" r="5" fill="currentColor" stroke="none"/><path d="M20 18c2-4 5-6 9-6s7 2 9 6" fill="currentColor" stroke="none"/><path d="M22 20h14l5 25H17l5-25z" fill="currentColor" stroke="none"/><path d="M25 20l4 8 4-8" stroke="#fff3e6"/><path d="M19 24c-4 4-6 8-7 14"/><path d="M39 22c3 3 6 4 10 4"/><path d="M50 11v39"/><path d="M45 51h13l-2 8H47z" fill="currentColor" stroke="none"/><path d="M47 55h9" stroke="#fff3e6" stroke-width="2"/><path d="M12 37h9l-1 13h-9z" fill="currentColor" stroke="none"/><path d="M12 38c2 2 6 2 8 0" stroke="#fff3e6" stroke-width="2"/><path d="M24 45v14M35 45v14"/></g></svg>';
  function applyIcon(){
    var page=document.getElementById('businessInsightsPage');
    if(!page) return;
    page.querySelectorAll('.mbi-kpi').forEach(function(card){
      var label=card.querySelector('.mbi-kpi-title');
      var icon=card.querySelector('.mbi-icon');
      if(label && icon && label.textContent.trim()==='Maid On Duty' && !icon.querySelector('.mbi-maid-duty-svg')){
        icon.innerHTML=maidSvg;
      }
    });
  }
  ready(function(){ applyIcon(); setTimeout(applyIcon,600); setTimeout(applyIcon,1500); setTimeout(applyIcon,2600); });
})();
