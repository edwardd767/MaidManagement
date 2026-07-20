(function(){
  var maidRows=[
    {initials:'SN',name:'Siti Nurhaliza',rooms:28,avg:21,expected:30,points:236,uncleaned:2,status:'up'},
    {initials:'AM',name:'Aisyah Mohamed',rooms:24,avg:23,expected:30,points:214,uncleaned:3,status:'up'},
    {initials:'WK',name:'Wong Kar Mei',rooms:22,avg:25,expected:30,points:198,uncleaned:2,status:'up'},
    {initials:'LM',name:'Lim Mei Ling',rooms:20,avg:27,expected:27,points:176,uncleaned:4,status:'neutral'},
    {initials:'JH',name:'Julia Hassan',rooms:18,avg:30,expected:27,points:162,uncleaned:3,status:'down'}
  ];

  function performanceStatus(actual,expected){
    if(actual<expected)return 'up';
    if(actual>expected)return 'down';
    return 'neutral';
  }
  function performanceSymbol(status){return status==='up'?'thumb_up':status==='down'?'thumb_down':'remove';}
  function rowHtml(rows){
    return rows.map(function(r){
      var status=performanceStatus(r.avg,r.expected);
      return '<div class="mbix-table-row" data-maid="'+r.name.toLowerCase()+'">'+
        '<div class="mbix-maid"><span class="mbix-avatar '+status+'">'+r.initials+'</span><b>'+r.name+'</b></div>'+
        '<div class="mbix-room-count">'+r.rooms+'</div>'+
        '<div class="mbix-time-wrap"><span class="mbix-time '+status+'">'+r.avg+' min</span><span class="material-symbols-rounded mbix-result '+status+'">'+performanceSymbol(status)+'</span></div>'+
      '</div>';
    }).join('');
  }

  function renderBI(){
    var expectedAvg=30,actualAvg=24,topStatus=performanceStatus(actualAvg,expectedAvg);
    var html='<section class="page" id="businessInsightsPage">'+
      '<div class="mbix-header"><div class="mbix-property"><span class="material-symbols-rounded">holiday_village</span><strong>HOTEL<br>PARADISE</strong></div><div class="mbix-heading"><h1>Maid Productivity Analysis</h1><div class="mbix-date"><span class="material-symbols-rounded">calendar_month</span><b>01 May 2026 - 09 Jul 2026</b><span class="material-symbols-rounded">expand_more</span></div></div></div>'+
      '<div class="mbix-wrap">'+
        '<div class="mbix-filters">'+
          '<div class="mbix-filter"><span class="material-symbols-rounded">calendar_month</span><b>Jul 2026</b><span class="material-symbols-rounded mbix-end">expand_more</span></div>'+
          '<div class="mbix-search-shell"><div class="mbix-filter mbix-search"><span class="material-symbols-rounded">search</span><input id="mbixMaidSearch" type="search" autocomplete="off" placeholder="Search maid..." aria-label="Search maid"><button id="mbixClearSearch" type="button" aria-label="Clear maid search"><span class="material-symbols-rounded">close</span></button></div><div id="mbixSearchResults" class="mbix-search-results" role="listbox"></div></div>'+
        '</div>'+
        '<div class="mbix-search-summary" id="mbixSearchSummary" hidden><span class="material-symbols-rounded">filter_alt</span><span id="mbixSearchSummaryText"></span><button id="mbixResetSearch" type="button">Show all maids</button></div>'+
        '<div class="mbix-kpis">'+
          '<article class="mbix-kpi orange" data-kpi="maid"><span class="material-symbols-rounded mbix-info" data-tip="Maid On Duty = distinct count of maids marked on duty within the selected date range">info</span><div class="mbix-kpi-main"><div class="mbix-kpi-icon"><span class="material-symbols-rounded">support_agent</span></div><div><h3>Maid On Duty</h3><strong id="mbixMaidCount">12</strong><span class="mbix-unit">Maids</span></div></div><div class="mbix-kpi-foot"><span>Active maids on duty</span><span class="material-symbols-rounded">check_circle</span></div></article>'+
          '<article class="mbix-kpi green" data-kpi="rooms"><span class="material-symbols-rounded mbix-info" data-tip="Completed Rooms = completed cleaning records within the selected date range">info</span><div class="mbix-kpi-main"><div class="mbix-kpi-icon"><span class="material-symbols-rounded">bed</span></div><div><h3>Completed Rooms</h3><strong id="mbixCompletedRooms">156</strong><span class="mbix-unit">Rooms</span></div></div><div class="mbix-kpi-foot"><span>Total rooms cleaned</span><span class="material-symbols-rounded">check_circle</span></div></article>'+
          '<article class="mbix-kpi amber" data-kpi="uncleaned"><span class="material-symbols-rounded mbix-info" data-tip="Uncleaned Rooms = pending + assigned + in-progress rooms at the selected end date">info</span><div class="mbix-kpi-main"><div class="mbix-kpi-icon"><span class="material-symbols-rounded">bedroom_parent</span></div><div><h3>Uncleaned Rooms</h3><strong id="mbixUncleanedRooms">14</strong><span class="mbix-unit">Rooms</span></div></div><div class="mbix-kpi-foot"><span>Needs attention</span><span class="material-symbols-rounded">group</span></div></article>'+
          '<article class="mbix-kpi blue" data-kpi="time"><span class="material-symbols-rounded mbix-info" data-tip="Actual average = total cleaning minutes divided by completed rooms; compared with the weighted expected room-type time">info</span><div class="mbix-kpi-main"><div class="mbix-kpi-icon"><span class="material-symbols-rounded">timer</span></div><div class="mbix-clean-time"><h3>Avg Cleaning Time</h3><div><strong id="mbixActualAvg">'+actualAvg+'</strong><small>min</small><span id="mbixTopThumb" class="material-symbols-rounded mbix-big-thumb '+topStatus+'">'+performanceSymbol(topStatus)+'</span></div><div class="mbix-expected"><span>Expected<b id="mbixExpectedAvg">'+expectedAvg+' min</b></span><i></i><span>Actual<b id="mbixActualAvgSmall">'+actualAvg+' min</b></span></div></div></div><div class="mbix-kpi-foot"><span id="mbixPerformanceText">Performance: 20.0% better</span><span class="material-symbols-rounded">trending_up</span></div></article>'+
          '<article class="mbix-kpi purple" data-kpi="points"><span class="material-symbols-rounded mbix-info" data-tip="Total HK Points = sum of room-type housekeeping points for completed rooms in the selected date range">info</span><div class="mbix-kpi-main"><div class="mbix-kpi-icon"><span class="material-symbols-rounded">workspace_premium</span></div><div><h3>Total HK Points</h3><strong id="mbixTotalPoints">1,245</strong><span class="mbix-inline-unit">Points</span></div></div><div class="mbix-kpi-foot"><span>Quality score for this period</span><span class="material-symbols-rounded">emoji_events</span></div></article>'+
        '</div>'+
        '<div class="mbix-content-grid">'+
          '<article class="mbix-panel mbix-trend"><div class="mbix-panel-head"><div><h2><span class="material-symbols-rounded mbix-title-icon trend">monitoring</span>Cleaning Performance Trend <span class="material-symbols-rounded" data-tip="Daily expected and actual average cleaning time for completed rooms">info</span></h2><p>Minutes</p></div><button>Daily <span class="material-symbols-rounded">expand_more</span></button></div><div class="mbix-legend"><span><i class="expected"></i>Expected (min)</span><span><i class="actual"></i>Actual (min)</span></div><div class="mbix-chart"><svg viewBox="0 0 620 190" preserveAspectRatio="none" aria-label="Cleaning performance trend"><g class="grid"><line x1="36" y1="15" x2="610" y2="15"/><line x1="36" y1="49" x2="610" y2="49"/><line x1="36" y1="83" x2="610" y2="83"/><line x1="36" y1="117" x2="610" y2="117"/><line x1="36" y1="151" x2="610" y2="151"/><line x1="36" y1="185" x2="610" y2="185"/></g><g class="ylabels"><text x="5" y="19">50</text><text x="5" y="53">40</text><text x="5" y="87">30</text><text x="5" y="121">20</text><text x="5" y="155">10</text><text x="14" y="189">0</text></g><polyline class="expected-line" points="38,77 70,83 102,96 134,83 166,80 198,93 230,93 262,80 294,83 326,69 358,65 390,72 422,74 454,69 486,83 518,74 550,65 582,69"/><polyline class="actual-line" points="38,117 70,115 102,121 134,134 166,128 198,121 230,117 262,119 294,130 326,115 358,104 390,117 422,132 454,119 486,121 518,117 550,115 582,115"/></svg><div class="mbix-xlabels"><span>01 May</span><span>15 May</span><span>01 Jun</span><span>15 Jun</span><span>01 Jul</span></div></div><div class="mbix-trend-stats"><div class="best"><span class="material-symbols-rounded">trending_up</span><p><b>Best Day</b><small>18 Jun 2026</small><strong>18 <em>min</em></strong></p></div><div class="worst"><span class="material-symbols-rounded">trending_down</span><p><b>Worst Day</b><small>29 May 2026</small><strong>36 <em>min</em></strong></p></div><div class="improve"><span class="material-symbols-rounded">bar_chart</span><p><b>Avg Improvement</b><strong>20.0%</strong><small>vs expected</small></p></div></div></article>'+
          '<article class="mbix-panel mbix-table"><div class="mbix-panel-head"><div><h2><span class="material-symbols-rounded mbix-title-icon maid">groups</span>Rooms Cleaned by Maid <span class="material-symbols-rounded" data-tip="Completed rooms and average time grouped by maid for the selected date range">info</span></h2><p id="mbixTableSubtitle">Selected date range</p></div></div><div class="mbix-table-head"><div>Maid</div><div>Rooms Cleaned</div><div>Avg Cleaning Time</div></div><div id="mbixTableBody">'+rowHtml(maidRows)+'</div><div id="mbixNoResults" class="mbix-no-results" hidden><span class="material-symbols-rounded">person_search</span><strong>No maid found</strong><small>Try another maid name.</small></div><div class="mbix-view">View all maids <span class="material-symbols-rounded">chevron_right</span></div></article>'+
        '</div></div></section>';

    var old=document.getElementById('businessInsightsPage'),wasActive=!!(old&&old.classList.contains('active'));
    if(old)old.outerHTML=html;else{var digital=document.getElementById('digitalPage');if(digital)digital.insertAdjacentHTML('beforebegin',html);}
    var rendered=document.getElementById('businessInsightsPage');if(wasActive&&rendered)rendered.classList.add('active');
    var menu=document.getElementById('businessInsightsMenu');if(menu)menu.onclick=function(){var page=document.getElementById('businessInsightsPage');if(page&&typeof openPage==='function')openPage(page);};
    bindSearch();
  }

  function bindSearch(){
    var input=document.getElementById('mbixMaidSearch'),results=document.getElementById('mbixSearchResults'),clear=document.getElementById('mbixClearSearch'),reset=document.getElementById('mbixResetSearch');
    if(!input||input.dataset.bound==='1')return;input.dataset.bound='1';
    function suggestions(query){
      var q=query.trim().toLowerCase();
      return maidRows.filter(function(r){return !q||r.name.toLowerCase().indexOf(q)>-1||r.initials.toLowerCase().indexOf(q)>-1;});
    }
    function showSuggestions(){
      var matches=suggestions(input.value);
      results.innerHTML=matches.map(function(r){return '<button type="button" role="option" data-name="'+r.name+'"><span class="mbix-avatar '+r.status+'">'+r.initials+'</span><span><b>'+r.name+'</b><small>'+r.rooms+' rooms · '+r.avg+' min avg</small></span></button>';}).join('');
      results.classList.toggle('show',matches.length>0);
      clear.classList.toggle('show',input.value.length>0);
    }
    function applyQuery(value){
      var q=(value||'').trim().toLowerCase(),matches=suggestions(q);
      var exact=maidRows.find(function(r){return r.name.toLowerCase()===q;});
      var filtered=q?matches:maidRows;
      document.getElementById('mbixTableBody').innerHTML=rowHtml(filtered);
      document.getElementById('mbixNoResults').hidden=filtered.length>0;
      document.getElementById('mbixTableSubtitle').textContent=q?(filtered.length+' matching maid'+(filtered.length===1?'':'s')):'Selected date range';
      var summary=document.getElementById('mbixSearchSummary');summary.hidden=!q;
      document.getElementById('mbixSearchSummaryText').textContent=q?(filtered.length+' result'+(filtered.length===1?'':'s')+' for “'+value+'”'):'';
      if(exact){
        updateKpis(1,exact.rooms,exact.uncleaned,exact.avg,exact.expected,exact.points);
      }else if(q&&filtered.length){
        var rooms=filtered.reduce(function(a,r){return a+r.rooms;},0),uncleaned=filtered.reduce(function(a,r){return a+r.uncleaned;},0),points=filtered.reduce(function(a,r){return a+r.points;},0),weighted=filtered.reduce(function(a,r){return a+(r.avg*r.rooms);},0),expected=filtered.reduce(function(a,r){return a+(r.expected*r.rooms);},0);
        updateKpis(filtered.length,rooms,uncleaned,Math.round(weighted/rooms),Math.round(expected/rooms),points);
      }else if(!q){updateKpis(12,156,14,24,30,1245);}
      results.classList.remove('show');
    }
    input.addEventListener('focus',showSuggestions);
    input.addEventListener('input',function(){showSuggestions();applyQuery(input.value);});
    input.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();var first=results.querySelector('button');if(first){input.value=first.dataset.name;applyQuery(input.value);clear.classList.add('show');}}if(e.key==='Escape')results.classList.remove('show');});
    results.addEventListener('click',function(e){var btn=e.target.closest('button[data-name]');if(!btn)return;input.value=btn.dataset.name;applyQuery(input.value);clear.classList.add('show');input.focus();});
    clear.addEventListener('click',function(){input.value='';applyQuery('');showSuggestions();input.focus();});
    if(reset)reset.addEventListener('click',function(){input.value='';applyQuery('');clear.classList.remove('show');});
    document.addEventListener('click',function(e){if(!e.target.closest('.mbix-search-shell'))results.classList.remove('show');});
  }

  function updateKpis(maids,rooms,uncleaned,actual,expected,points){
    var status=performanceStatus(actual,expected),difference=expected?((expected-actual)/expected)*100:0;
    document.getElementById('mbixMaidCount').textContent=maids;
    document.getElementById('mbixCompletedRooms').textContent=rooms;
    document.getElementById('mbixUncleanedRooms').textContent=uncleaned;
    document.getElementById('mbixActualAvg').textContent=actual;
    document.getElementById('mbixActualAvgSmall').textContent=actual+' min';
    document.getElementById('mbixExpectedAvg').textContent=expected+' min';
    document.getElementById('mbixTotalPoints').textContent=Number(points).toLocaleString('en-US');
    var thumb=document.getElementById('mbixTopThumb');thumb.textContent=performanceSymbol(status);thumb.className='material-symbols-rounded mbix-big-thumb '+status;
    var text=status==='neutral'?'Performance: On target':'Performance: '+Math.abs(difference).toFixed(1)+'% '+(status==='up'?'better':'slower');
    document.getElementById('mbixPerformanceText').textContent=text;
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',renderBI);else renderBI();
  setTimeout(renderBI,500);setTimeout(renderBI,1400);setTimeout(renderBI,2600);
})();
