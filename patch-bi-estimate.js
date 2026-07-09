(function(){
  function ready(fn){ if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',fn); else fn(); }
  function addEstimateItem(){
    var page=document.getElementById('businessInsightsPage');
    if(!page) return;
    var summary=page.querySelector('.bi-summary');
    if(!summary) return;
    if(summary.querySelector('.bi-estimate')) return;
    var item=document.createElement('div');
    item.className='bi-summary-item bi-estimate';
    item.innerHTML='<div class="bi-icon"><span class="material-symbols-rounded">timer</span></div><div><div class="bi-summary-label">Est. vs Avg Cleaning Time</div><div class="bi-summary-value">20 / 24<span class="bi-small"> min</span></div></div>';
    summary.appendChild(item);
  }
  ready(function(){ addEstimateItem(); setTimeout(addEstimateItem,700); setTimeout(addEstimateItem,1500); });
})();
