(function(){
  function ready(fn){ if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',fn); else fn(); }
  function fixLabel(){
    var page=document.getElementById('businessInsightsPage');
    if(!page) return;
    page.querySelectorAll('.mbi-mini-label,.mbi-kpi-title').forEach(function(label){
      var text=label.textContent.trim();
      if(text==='Est. vs Avg Cleaning Time' || text==='Estimate cleaning time vs avg cleaning time' || text==='Estimate Cleaning Time vs Avg Cleaning Time'){
        label.textContent='Avg Cleaning Time [Expected vs Actual]';
      }
    });
    page.querySelectorAll('.mbi-tip').forEach(function(icon){
      var card=icon.closest('.mbi-mini,.mbi-kpi');
      var label=card ? card.querySelector('.mbi-mini-label,.mbi-kpi-title') : null;
      if(label && label.textContent.trim()==='Avg Cleaning Time [Expected vs Actual]'){
        var tip='Avg Cleaning Time [Expected vs Actual] = room type expected cleaning time compared with actual average cleaning time. Example: 20 / 24 min means actual is 4 minutes slower than expected.';
        icon.setAttribute('data-tip',tip);
        icon.removeAttribute('title');
      }
    });
  }
  ready(function(){ fixLabel(); setTimeout(fixLabel,800); setTimeout(fixLabel,1800); setInterval(fixLabel,2500); });
})();
