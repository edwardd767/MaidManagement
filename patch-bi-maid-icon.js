(function(){
  function ready(fn){ if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',fn); else fn(); }
  var maidSvg='<svg class="mbi-maid-simple-svg" viewBox="0 0 64 64" aria-hidden="true" style="width:46px;height:46px;color:#f58220;display:block" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><circle cx="28" cy="9" r="5.2"/><circle cx="27" cy="4.4" r="3"/><path d="M20 18c2.3-4.2 5.8-6 9.7-6 3.8 0 6.8 1.9 8.8 6H20z"/><path d="M22 19h15l4 25H18l4-25z"/><path d="M22.8 43.5h5.5v14.8h-5.5zM33.2 43.5h5.5v14.8h-5.5z"/><path d="M20.5 22.5c-4.2 3.7-6.2 8.1-7.1 13.4l5.2.9c.6-3.9 2.1-6.9 4.8-9.5l-2.9-4.8z"/><path d="M39 20.8c3.1 2.5 5.5 3.7 9.1 4.2l.7-5.2c-2.6-.4-4.1-1.2-6.8-3.2l-3 4.2z"/><path d="M50 10.8h3.8v41H50z"/><path d="M45.2 51h13.4l-1.9 7.8H47.1z"/><path d="M9.6 35h9.4l-1.5 14H8z"/></g><path d="M23 19l6.8 8.2L36.4 19" fill="#fff3e6"/><path d="M23.2 36.5h15.7" stroke="#fff3e6" stroke-width="3" stroke-linecap="round"/><path d="M9.9 35.2c2 2.3 6.6 2.3 8.8 0" stroke="#fff3e6" stroke-width="2.2" stroke-linecap="round" fill="none"/><path d="M47.3 54h9.2M48 56.4h7.8" stroke="#fff3e6" stroke-width="1.7" stroke-linecap="round"/><path d="M53.8 47.8h1.9v4H48v-4h2V14.2h3.8v33.6z" fill="currentColor" opacity=".92"/></svg>';
  function applyMaidIcon(){
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
  ready(function(){
    applyMaidIcon();
    setTimeout(applyMaidIcon,500);
    setTimeout(applyMaidIcon,1200);
    setTimeout(applyMaidIcon,2200);
    var obs=new MutationObserver(applyMaidIcon);
    obs.observe(document.body,{childList:true,subtree:true});
  });
})();
