(function(){
  function ready(fn){ if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',fn); else fn(); }
  var maidSvg='<svg class="mbi-maid-simple-svg" viewBox="0 0 64 64" aria-hidden="true" style="width:44px;height:44px;color:#f58220;display:block" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><circle cx="29" cy="8" r="5.4"/><circle cx="26" cy="4.3" r="3.2"/><path d="M20 18c2.2-4.1 5.9-5.9 9.8-5.9 3.9 0 7 1.8 9.2 5.9H20z"/><path d="M23.5 20h14.8l4.4 25.8H19.2L23.5 20z"/><path d="M22.4 45.5h6v13h-6zM33.5 45.5h6v13h-6z"/><path d="M19.5 23.2c-4.6 4-6.8 8.5-7.6 14l5.2.8c.6-4.2 2.1-7.3 5.2-10.1l-2.8-4.7z"/><path d="M38.7 22.5c3.5 2.8 6.5 4.2 10 4.5l.4-5.4c-2.7-.3-4.7-1.4-7.6-3.8l-2.8 4.7z"/><path d="M49.4 13.5h3.8v35.6h-3.8z"/><path d="M44.6 49h13.4l-1.7 8.6h-10z"/><path d="M10.6 36h8.5l-1.3 12.8H8.9z"/></g><path d="M25 20l5.8 9.6L36.5 20" fill="#fff3e6"/><path d="M23.4 37.8h16" stroke="#fff3e6" stroke-width="3" stroke-linecap="round"/><path d="M10.6 36.2c1.8 2 6.1 2 8.4 0" stroke="#fff3e6" stroke-width="2.3" fill="none" stroke-linecap="round"/><path d="M46.2 52.1h10.7M47 54.8h9.2" stroke="#fff3e6" stroke-width="1.8" stroke-linecap="round"/></svg>';
  function applyMaidIcon(){
    var page=document.getElementById('businessInsightsPage');
    if(!page) return;
    page.querySelectorAll('.mbi-kpi').forEach(function(card){
      var label=card.querySelector('.mbi-kpi-title');
      var icon=card.querySelector('.mbi-icon');
      if(label && icon && label.textContent.trim()==='Maid On Duty' && !icon.querySelector('.mbi-maid-simple-svg')){
        icon.innerHTML=maidSvg;
      }
    });
  }
  ready(function(){
    applyMaidIcon();
    setTimeout(applyMaidIcon,500);
    setTimeout(applyMaidIcon,1200);
    setTimeout(applyMaidIcon,2200);
    var obs=new MutationObserver(applyMaidIcon);
    obs.observe(document.body,{childList:true,subtree:true});
  });
})();
