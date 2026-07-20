(function(){
  var formulas={
    maid:'1. Maid On Duty\nFormula:\nMaid On Duty = Count of maids marked as On Duty\nExample:\nIf 12 maids are switched ON in Maid On Duty screen:\nMaid On Duty = 12',
    rooms:'2. Rooms Cleaned\nFormula:\nRooms Cleaned = Count of rooms with Cleaning Status = Completed\nExample:\nIf total completed rooms are 156:\nRooms Cleaned = 156\n\n7. Completed Rooms\nFormula:\nCompleted Rooms = Count of rooms where Cleaning Status = Completed\nSame as Rooms Cleaned.\nExample:\nCompleted Rooms = 156',
    time:'3. Avg Cleaning Time\nFormula:\nAvg Cleaning Time = Total Cleaning Duration / Total Completed Rooms\nExample:\nIf total cleaning duration is 3,744 minutes and completed rooms are 156:\n3,744 / 156 = 24 minutes\nSo:\nAvg Cleaning Time = 24 min\n\n9. Est. vs Avg Cleaning Time\nFormula:\nEstimated Cleaning Time = Room Type Estimated Cleaning Time\nAvg Cleaning Time = Actual Total Cleaning Duration / Completed Rooms\nExample:\nEstimated Cleaning Time from Room Type setup = 20 minutes\nActual Avg Cleaning Time = 24 minutes\nDisplay as:\n20 / 24 min\nMeaning:\nEstimated = 20 min\nActual Average = 24 min\nSo the maid/team is taking:\n24 - 20 = 4 minutes slower than estimate',
    points:'4. Total HK Points\nFormula:\nTotal HK Points = Sum of Housekeeping Points for all completed rooms\nExample:\nRoom Type DLQ has HK Points = 10.\nIf 100 DLQ rooms completed:\n100 x 10 = 1,000 HK Points\nFor mixed room types:\nTotal HK Points = Room Type A Points + Room Type B Points + Room Type C Points',
    uncleaned:'8. In Progress\nFormula:\nIn Progress = Count of rooms where Cleaning Status = In Progress\nExample:\nIf 18 rooms are still being cleaned:\nIn Progress = 18',
    maidTable:'5. Rooms Cleaned by Maid\nFormula:\nRooms Cleaned by Maid = Count of completed rooms grouped by Maid\nExample:\nCassandra cleaned 78 rooms:\nCassandra = 78\nEdward cleaned 64 rooms:\nEdward = 64\n\n6. Avg Rooms / Maid\nFormula:\nAvg Rooms / Maid = Total Completed Rooms / Maid On Duty\nExample:\n156 / 12 = 13.0\nSo:\nAvg Rooms / Maid = 13.0'
  };

  function setTip(el,text,label){
    if(!el||!text)return;
    el.setAttribute('data-tip',text);
    el.setAttribute('aria-label',label||'Formula and example');
    el.setAttribute('tabindex','0');
  }

  function apply(){
    var page=document.getElementById('businessInsightsPage');
    if(!page)return;

    page.querySelectorAll('.mbix-kpi[data-kpi]').forEach(function(card){
      var key=card.getAttribute('data-kpi');
      var icon=card.querySelector('.mbix-info');
      setTip(icon,formulas[key],key+' formula and example');
    });

    page.querySelectorAll('.mbix-panel-head h2').forEach(function(h2){
      var title=(h2.textContent||'').replace(/info/g,'').trim();
      var icon=h2.querySelector('[data-tip],.material-symbols-rounded:last-child');
      if(title.indexOf('Rooms Cleaned by Maid')>-1){
        setTip(icon,formulas.maidTable,'Rooms Cleaned by Maid formula and example');
      }
    });
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply);else apply();
  [100,400,900,1600,2600].forEach(function(ms){setTimeout(apply,ms);});
  setInterval(apply,3000);
})();