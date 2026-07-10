(function(){
  function ready(fn){ if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',fn); else fn(); }
  var maidSvg='<svg class="mbi-maid-duty-svg" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M31.5 7.5c-6.2 0-11.4 4.6-12.2 10.7h24.4C42.9 12.1 37.8 7.5 31.5 7.5z" opacity=".95"></path><path d="M18.2 18.4c-3.8 4.3-5.4 9.6-5.4 16.9 0 5.8 1.6 10.9 4.7 15.3h9.7V38.8h8.7v11.8h9.7c3.1-4.4 4.7-9.5 4.7-15.3 0-7.3-1.7-12.6-5.4-16.9l-5.4 4.7c1.8 2.4 2.7 5.4 2.7 9.3v10.7h-5.3V31.2H26.2v11.9h-5.3V32.4c0-3.9.9-6.9 2.7-9.3l-5.4-4.7z"></path><path d="M22.6 50.6h6.1v7.9h-6.1zM34.3 50.6h6.1v7.9h-6.1z"></path></g><path d="M22.1 20.2c1.9-5 5.3-7.4 9.4-7.4s7.5 2.4 9.4 7.4h-6.6l-2.8-4.1-2.8 4.1h-6.6z" fill="#fff3e6"></path><path d="M25 28.3h13.1v10.6H25z" fill="#fff3e6"></path><path d="M25 45.1h13.1" stroke="#fff3e6" stroke-width="3.2" stroke-linecap="round"></path><path d="M18.3 31.6v10.1M44.7 31.6v10.1" stroke="#fff3e6" stroke-width="2.8" stroke-linecap="round"></path></svg>';
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
