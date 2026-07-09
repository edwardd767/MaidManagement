(function(){
  function ready(fn){ if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',fn); else fn(); }
  var tips={
    'Maid On Duty':'Maid On Duty = count of maids marked as On Duty in the selected date range. Example: 12 maids switched ON = 12.',
    'Rooms Cleaned':'Rooms Cleaned = count of rooms where Cleaning Status is Completed. Example: 156 completed rooms = 156.',
    'Avg Cleaning Time':'Avg Cleaning Time = total actual cleaning duration divided by completed rooms. Example: 3,744 minutes / 156 rooms = 24 min.',
    'Total HK Points':'Total HK Points = sum of housekeeping points for all completed rooms. Example: room HK points 10 x completed rooms, plus other room types.',
    'Avg Rooms / Maid':'Avg Rooms / Maid = completed rooms divided by maids on duty. Example: 156 / 12 = 13.0.',
    'Completed Rooms':'Completed Rooms = count of rooms where Cleaning Status is Completed. Same logic as Rooms Cleaned.',
    'In Progress':'In Progress = count of rooms where Cleaning Status is In Progress within the selected date range.',
    'Est. vs Avg Cleaning Time':'Est. vs Avg Cleaning Time = room type estimated cleaning time compared with actual average cleaning time. Example: 20 / 24 min means actual is 4 minutes slower than estimate.',
    'Rooms Cleaned by Maid':'Rooms Cleaned by Maid = completed rooms grouped by maid. Example: Cassandra 78, Edward 64, Mark Goh 92.'
  };
  function getFloatingTip(){
    var tip=document.getElementById('mbiFloatingTip');
    if(!tip){ tip=document.createElement('div'); tip.id='mbiFloatingTip'; tip.className='mbi-floating-tip'; document.body.appendChild(tip); }
    return tip;
  }
  function showTip(target){
    var text=target.getAttribute('data-tip'); if(!text) return;
    var tip=getFloatingTip(); tip.textContent=text; tip.classList.add('show');
    var r=target.getBoundingClientRect();
    var left=r.left + (r.width/2) - 165;
    var top=r.bottom + 12;
    if(left < 14) left = 14;
    if(left + 330 > window.innerWidth - 14) left = window.innerWidth - 344;
    if(window.innerWidth < 720){ left = Math.max(14, Math.min(left, window.innerWidth - 284)); }
    if(top + 120 > window.innerHeight){ top = Math.max(14, r.top - 132); }
    tip.style.left = left + 'px'; tip.style.top = top + 'px';
  }
  function hideTip(){ var tip=document.getElementById('mbiFloatingTip'); if(tip) tip.classList.remove('show'); }
  function attach(el){
    if(!el || el.getAttribute('data-tooltip-ready')==='1') return;
    el.setAttribute('data-tooltip-ready','1');
    el.removeAttribute('title');
    el.addEventListener('mouseenter',function(){ showTip(el); });
    el.addEventListener('mousemove',function(){ showTip(el); });
    el.addEventListener('mouseleave',hideTip);
    el.addEventListener('click',function(e){ e.preventDefault(); showTip(el); setTimeout(hideTip,2600); });
  }
  function applyTips(){
    var page=document.getElementById('businessInsightsPage'); if(!page) return;
    page.querySelectorAll('.mbi-kpi,.mbi-mini').forEach(function(card){
      var label=card.querySelector('.mbi-kpi-title,.mbi-mini-label');
      var icon=card.querySelector('.mbi-icon');
      var key=label ? label.textContent.trim() : '';
      if(icon && tips[key]){ icon.classList.add('mbi-tip'); icon.setAttribute('data-tip',tips[key]); attach(icon); }
    });
    var title=page.querySelector('.mbi-panel-title');
    if(title && !title.querySelector('.mbi-panel-info')){
      var info=document.createElement('span');
      info.className='mbi-icon mbi-tip mbi-panel-info';
      info.setAttribute('data-tip',tips['Rooms Cleaned by Maid']);
      info.innerHTML='<span class="material-symbols-rounded">info</span>';
      title.appendChild(info);
    }
    var infoIcon=page.querySelector('.mbi-panel-info'); if(infoIcon) attach(infoIcon);
  }
  ready(function(){ applyTips(); setTimeout(applyTips,800); setTimeout(applyTips,1700); });
})();
