(function(){
  var formulas={
    'Maid On Duty':'Formula:\nMaid On Duty = Count of maids marked as On Duty\n\nExample:\nIf 12 maids are switched ON in the Maid On Duty screen:\nMaid On Duty = 12',
    'Rooms Cleaned':'Formula:\nRooms Cleaned = Count of rooms with Cleaning Status = Completed\n\nExample:\nIf total completed rooms are 156:\nRooms Cleaned = 156',
    'Completed Rooms':'Formula:\nCompleted Rooms = Count of rooms where Cleaning Status = Completed\n\nThis is the same calculation as Rooms Cleaned.\n\nExample:\nCompleted Rooms = 156',
    'Avg Cleaning Time':'Formula:\nAvg Cleaning Time = Total Cleaning Duration / Total Completed Rooms\n\nExample:\nIf total cleaning duration is 3,744 minutes and completed rooms are 156:\n3,744 / 156 = 24 minutes\n\nAvg Cleaning Time = 24 min',
    'Total HK Points':'Formula:\nTotal HK Points = Sum of Housekeeping Points for all completed rooms\n\nExample:\nRoom Type DLQ has HK Points = 10.\nIf 100 DLQ rooms are completed:\n100 x 10 = 1,000 HK Points\n\nFor mixed room types:\nTotal HK Points = Room Type A Points + Room Type B Points + Room Type C Points',
    'Rooms Cleaned by Maid':'Formula:\nRooms Cleaned by Maid = Count of completed rooms grouped by Maid\n\nExample:\nCassandra cleaned 78 rooms:\nCassandra = 78\n\nEdward cleaned 64 rooms:\nEdward = 64',
    'Avg Rooms / Maid':'Formula:\nAvg Rooms / Maid = Total Completed Rooms / Maid On Duty\n\nExample:\n156 / 12 = 13.0\n\nAvg Rooms / Maid = 13.0',
    'In Progress':'Formula:\nIn Progress = Count of rooms where Cleaning Status = In Progress\n\nExample:\nIf 18 rooms are still being cleaned:\nIn Progress = 18',
    'Est. vs Avg Cleaning Time':'Formula:\nEstimated Cleaning Time = Room Type Estimated Cleaning Time\nAvg Cleaning Time = Actual Total Cleaning Duration / Completed Rooms\n\nExample:\nEstimated Cleaning Time from Room Type setup = 20 minutes\nActual Avg Cleaning Time = 24 minutes\n\nDisplay:\n20 / 24 min\n\nEstimated = 20 min\nActual Average = 24 min\nThe maid or team is taking 4 minutes slower than estimate.'
  };

  function normalise(text){return (text||'').replace(/\s+/g,' ').trim();}
  function ensureInfo(target,title){
    if(!target)return;
    var tip=formulas[title];
    if(!tip)return;
    var icon=target.querySelector('.mbix-info,[data-tip],.material-symbols-rounded:last-child');
    if(!icon || normalise(icon.textContent)!=='info'){
      icon=document.createElement('span');
      icon.className='material-symbols-rounded mbix-info';
      icon.textContent='info';
      target.appendChild(icon);
    }
    icon.setAttribute('data-tip',tip);
    icon.setAttribute('aria-label',title+' formula and example');
    icon.setAttribute('tabindex','0');
  }

  function apply(){
    var page=document.getElementById('businessInsightsPage');
    if(!page)return;

    page.querySelectorAll('.mbix-kpi').forEach(function(card){
      var heading=card.querySelector('h3');
      if(heading)ensureInfo(card,normalise(heading.textContent));
    });

    page.querySelectorAll('.mbix-panel-head h2').forEach(function(h2){
      var title=normalise(h2.textContent.replace(/info/g,''));
      Object.keys(formulas).forEach(function(key){
        if(title.indexOf(key)>-1)ensureInfo(h2,key);
      });
    });

    page.querySelectorAll('h2,h3,h4,.card-title,.metric-title').forEach(function(el){
      var text=normalise(el.textContent.replace(/info/g,''));
      Object.keys(formulas).forEach(function(key){
        if(text===key || text.indexOf(key)>-1)ensureInfo(el,key);
      });
    });
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply);else apply();
  [400,1000,2200].forEach(function(ms){setTimeout(apply,ms);});
})();