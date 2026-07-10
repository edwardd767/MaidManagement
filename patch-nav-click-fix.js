(function(){
  function ready(fn){ if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',fn); else fn(); }
  function page(id){ return document.getElementById(id); }
  function show(id){
    var target=page(id);
    if(!target) return;
    if(typeof window.openPage==='function'){
      window.openPage(target);
      return;
    }
    document.querySelectorAll('.page').forEach(function(p){ p.classList.remove('active'); p.style.display='none'; });
    target.classList.add('active');
    target.style.display='block';
  }
  function bindOne(id, pageId){
    var node=page(id);
    if(!node) return;
    node.style.pointerEvents='auto';
    node.style.cursor='pointer';
    node.onclick=function(e){ e.preventDefault(); e.stopPropagation(); show(pageId); return false; };
  }
  function fix(){
    var sidebar=document.querySelector('.sidebar');
    if(sidebar){ sidebar.style.pointerEvents='auto'; sidebar.style.zIndex='20'; }
    document.querySelectorAll('.nav-item').forEach(function(n){ n.style.pointerEvents='auto'; n.style.cursor='pointer'; });
    bindOne('maidMenu','maidPage');
    bindOne('businessInsightsMenu','businessInsightsPage');
    bindOne('digitalMenu','digitalPage');
    bindOne('hotelMenu','hotelSettingsPage');
    bindOne('roomTypeCard','roomTypePage');
    bindOne('roomSetupCard','roomsPage');
    bindOne('roomStatusPolicyCard','roomStatusPolicyPage');
    bindOne('reportCard','reportPage');
  }
  ready(function(){ fix(); setTimeout(fix,500); setTimeout(fix,1200); setTimeout(fix,2500); });
})();
