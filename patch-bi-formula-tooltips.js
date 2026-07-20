(function(){
  var formulas={
    maid:'Maid On Duty\n\nFormula:\nMaid On Duty = Count of distinct maids marked as On Duty within the selected date range.\n\nExample:\nIf 12 maids are switched ON in the Maid On Duty screen:\nMaid On Duty = 12',
    rooms:'Completed Rooms\n\nFormula:\nCompleted Rooms = Count of rooms where Cleaning Status = Completed within the selected date range.\n\nExample:\nIf 156 room-cleaning records are completed:\nCompleted Rooms = 156',
    uncleaned:'Uncleaned Rooms\n\nFormula:\nUncleaned Rooms = Pending Rooms + Assigned Rooms + In Progress Rooms as at the selected end date.\n\nCompleted and Cancelled rooms are excluded.\n\nExample:\nPending = 5\nAssigned = 4\nIn Progress = 5\n\nUncleaned Rooms = 5 + 4 + 5 = 14',
    time:'Avg Cleaning Time\n\nFormula:\nActual Avg Cleaning Time = Total Actual Cleaning Duration / Total Completed Rooms.\n\nExpected Avg Cleaning Time = Total Estimated Cleaning Time from the completed room types / Total Completed Rooms.\n\nExample:\nActual cleaning duration = 3,744 minutes\nCompleted rooms = 156\n\n3,744 / 156 = 24 minutes\n\nActual Avg Cleaning Time = 24 min\nExpected Avg Cleaning Time = 30 min\n\nBecause 24 min is lower than 30 min, performance is better than expected.',
    points:'Total HK Points\n\nFormula:\nTotal HK Points = Sum of the Room Type HK Points for all completed rooms within the selected date range.\n\nExample:\nDLQ HK Points = 10\nCompleted DLQ rooms = 100\n\n100 x 10 = 1,000 HK Points\n\nFor mixed room types, add the HK Points earned from every completed room.',
    maidTable:'Rooms Cleaned by Maid\n\nFormula:\nRooms Cleaned by Maid = Count of completed rooms grouped by the maid assigned to the completed cleaning record.\n\nAvg Cleaning Time by Maid = Total Actual Cleaning Duration for that maid / Completed Rooms cleaned by that maid.\n\nExample:\nCassandra completed 78 rooms:\nRooms Cleaned = 78\n\nIf Cassandra used 1,872 minutes:\n1,872 / 78 = 24 min average',
    trend:'Cleaning Performance Trend\n\nFormula:\nFor each date, Actual Avg Cleaning Time = Total Actual Cleaning Duration / Completed Rooms for that date.\n\nExpected Avg Cleaning Time = Total Estimated Room Type Cleaning Time / Completed Rooms for that date.\n\nThe chart compares the expected and actual daily averages across the selected date range.'
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
      setTip(card.querySelector('.mbix-info'),formulas[key],key+' formula and example');
    });

    page.querySelectorAll('.mbix-panel-head h2').forEach(function(h2){
      var title=(h2.textContent||'').replace(/info/g,'').trim();
      var icon=h2.querySelector('[data-tip],.material-symbols-rounded:last-child');
      if(title.indexOf('Rooms Cleaned by Maid')>-1)setTip(icon,formulas.maidTable,'Rooms Cleaned by Maid formula and example');
      if(title.indexOf('Cleaning Performance Trend')>-1)setTip(icon,formulas.trend,'Cleaning Performance Trend formula');
    });
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply);else apply();
  [100,400,900,1600,2600].forEach(function(ms){setTimeout(apply,ms);});
  setInterval(apply,3000);
})();