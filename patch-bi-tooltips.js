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
  function applyTips(){
    var page=document.getElementById('businessInsightsPage');
    if(!page) return;
    page.querySelectorAll('.mbi-kpi,.mbi-mini').forEach(function(card){
      var label=card.querySelector('.mbi-kpi-title,.mbi-mini-label');
      var icon=card.querySelector('.mbi-icon');
      if(label && icon && tips[label.textContent.trim()]){
        icon.classList.add('mbi-tip');
        icon.setAttribute('data-tip',tips[label.textContent.trim()]);
        icon.setAttribute('title',tips[label.textContent.trim()]);
      }
    });
    var title=page.querySelector('.mbi-panel-title');
    if(title && !title.querySelector('.mbi-panel-info')){
      var info=document.createElement('span');
      info.className='mbi-icon mbi-tip mbi-panel-info';
      info.setAttribute('data-tip',tips['Rooms Cleaned by Maid']);
      info.setAttribute('title',tips['Rooms Cleaned by Maid']);
      info.innerHTML='<span class="material-symbols-rounded">info</span>';
      title.appendChild(info);
    }
  }
  ready(function(){ applyTips(); setTimeout(applyTips,800); setTimeout(applyTips,1700); });
})();
