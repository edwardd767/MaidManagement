(function(){
  function ready(fn){if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fn);else fn();}
  function getTip(){var tip=document.getElementById('mbiFloatingTip');if(!tip){tip=document.createElement('div');tip.id='mbiFloatingTip';tip.className='mbi-floating-tip';tip.setAttribute('role','tooltip');document.body.appendChild(tip);}return tip;}
  function hideTip(){var tip=document.getElementById('mbiFloatingTip');if(tip){tip.classList.remove('show');tip.removeAttribute('data-owner');}}
  function positionTip(target){
    var tip=getTip();
    var r=target.getBoundingClientRect();
    var margin=10;
    var viewportW=window.innerWidth;
    var viewportH=window.innerHeight;
    tip.style.width=viewportW<=720?'min(290px, calc(100vw - 20px))':'330px';
    tip.style.left='0px';tip.style.top='0px';tip.classList.add('show');
    var tr=tip.getBoundingClientRect();
    var placeBelow=(r.bottom+12+tr.height<=viewportH-margin)||r.top<tr.height+22;
    var top=placeBelow?r.bottom+12:r.top-tr.height-12;
    var left=r.left+(r.width/2)-(tr.width/2);
    left=Math.max(margin,Math.min(left,viewportW-tr.width-margin));
    top=Math.max(margin,Math.min(top,viewportH-tr.height-margin));
    var arrowLeft=(r.left+r.width/2)-left-5;
    arrowLeft=Math.max(12,Math.min(arrowLeft,tr.width-22));
    tip.style.left=Math.round(left)+'px';
    tip.style.top=Math.round(top)+'px';
    tip.style.setProperty('--arrow-left',Math.round(arrowLeft)+'px');
    tip.setAttribute('data-placement',placeBelow?'bottom':'top');
  }
  function showTip(target){var text=target.getAttribute('data-tip');if(!text)return;var tip=getTip();tip.textContent=text;tip.setAttribute('data-owner','active');positionTip(target);}
  function attach(target){
    if(!target||target.dataset.tooltipBound==='1')return;
    target.dataset.tooltipBound='1';
    target.removeAttribute('title');
    target.setAttribute('tabindex',target.getAttribute('tabindex')||'0');
    target.addEventListener('mouseenter',function(){if(window.matchMedia('(hover:hover)').matches)showTip(target);});
    target.addEventListener('mouseleave',function(){if(window.matchMedia('(hover:hover)').matches)hideTip();});
    target.addEventListener('focus',function(){showTip(target);});
    target.addEventListener('blur',hideTip);
    target.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();var tip=getTip();if(tip.classList.contains('show')&&tip.dataset.owner==='active')hideTip();else showTip(target);});
    target.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();showTip(target);}if(e.key==='Escape')hideTip();});
  }
  function bindAll(){var page=document.getElementById('businessInsightsPage');if(!page)return;page.querySelectorAll('[data-tip]').forEach(attach);}
  ready(function(){bindAll();setTimeout(bindAll,500);setTimeout(bindAll,1500);setInterval(bindAll,2500);document.addEventListener('click',hideTip);window.addEventListener('resize',hideTip);window.addEventListener('scroll',hideTip,true);});
})();
