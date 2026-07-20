(function(){
  function applyBIHeader(){
    var page=document.getElementById('businessInsightsPage');
    if(!page)return;

    var headerDate=page.querySelector('.mbix-heading .mbix-date');
    if(headerDate)headerDate.remove();

    var dateFilter=page.querySelector('.mbix-filters .mbix-filter');
    if(dateFilter){
      var value=dateFilter.querySelector('b');
      if(value)value.textContent='01 May 2026 - 09 Jul 2026';
      dateFilter.setAttribute('aria-label','Selected date range: 01 May 2026 to 09 July 2026');
    }
  }

  function ready(fn){
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fn);
    else fn();
  }

  ready(function(){
    applyBIHeader();
    setTimeout(applyBIHeader,600);
    setTimeout(applyBIHeader,1500);
    setTimeout(applyBIHeader,2800);
  });
})();