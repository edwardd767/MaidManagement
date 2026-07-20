(function(){
  function renderBI(){
    var rows=[
      ['SN','Siti Nurhaliza',28,21,'236','up'],
      ['AM','Aisyah Mohamed',24,23,'214','up'],
      ['WK','Wong Kar Mei',22,25,'198','up'],
      ['LM','Lim Mei Ling',20,27,'176','neutral'],
      ['JH','Julia Hassan',18,30,'162','down']
    ];
    var rowHtml=rows.map(function(r){
      var symbol=r[5]==='up'?'thumb_up':r[5]==='down'?'thumb_down':'remove';
      return '<div class="mbix-table-row">'+
        '<div class="mbix-maid"><span class="mbix-avatar '+r[5]+'">'+r[0]+'</span><b>'+r[1]+'</b></div>'+
        '<div class="mbix-room-count">'+r[2]+'</div>'+
        '<div class="mbix-time-wrap"><span class="mbix-time '+r[5]+'">'+r[3]+' min</span><span class="material-symbols-rounded mbix-result '+r[5]+'">'+symbol+'</span></div>'+
        '<div class="mbix-points">'+r[4]+'<span class="material-symbols-rounded mbix-result '+r[5]+'">'+symbol+'</span></div>'+
      '</div>';
    }).join('');

    var html='<section class="page" id="businessInsightsPage">'+
      '<div class="mbix-header">'+
        '<div class="mbix-property"><span class="material-symbols-rounded">holiday_village</span><strong>HOTEL<br>PARADISE</strong></div>'+
        '<div class="mbix-heading"><h1>Maid Productivity Analysis</h1><div class="mbix-date"><span class="material-symbols-rounded">calendar_month</span><b>01 May 2026 - 09 Jul 2026</b><span class="material-symbols-rounded">expand_more</span></div></div>'+
      '</div>'+
      '<div class="mbix-wrap">'+
        '<div class="mbix-filters">'+
          '<div class="mbix-filter"><span class="material-symbols-rounded">calendar_month</span><b>Jul 2026</b><span class="material-symbols-rounded mbix-end">expand_more</span></div>'+
          '<div class="mbix-filter mbix-search"><span class="material-symbols-rounded">search</span><span>Search maid...</span></div>'+
        '</div>'+
        '<div class="mbix-kpis">'+
          '<article class="mbix-kpi green"><span class="material-symbols-rounded mbix-info" data-tip="Completed Rooms = completed cleaning records within the selected date range">info</span><div class="mbix-kpi-main"><div class="mbix-kpi-icon"><span class="material-symbols-rounded">bed</span></div><div><h3>Completed Rooms</h3><strong>156</strong><span class="mbix-unit">Rooms</span></div></div><div class="mbix-kpi-foot"><span>Total rooms cleaned</span><span class="material-symbols-rounded">check_circle</span></div></article>'+
          '<article class="mbix-kpi amber"><span class="material-symbols-rounded mbix-info" data-tip="Uncleaned Rooms = pending + assigned + in-progress rooms at the selected end date">info</span><div class="mbix-kpi-main"><div class="mbix-kpi-icon"><span class="material-symbols-rounded">bedroom_parent</span></div><div><h3>Uncleaned Rooms</h3><strong>14</strong><span class="mbix-unit">Rooms</span></div></div><div class="mbix-kpi-foot"><span>Needs attention</span><span class="material-symbols-rounded">group</span></div></article>'+
          '<article class="mbix-kpi blue"><span class="material-symbols-rounded mbix-info" data-tip="Actual average = total cleaning minutes divided by completed rooms; compared with the weighted expected room-type time">info</span><div class="mbix-kpi-main"><div class="mbix-kpi-icon"><span class="material-symbols-rounded">timer</span></div><div class="mbix-clean-time"><h3>Avg Cleaning Time</h3><div><strong>24</strong><small>min</small><span class="material-symbols-rounded mbix-big-thumb">thumb_up</span></div><div class="mbix-expected"><span>Expected<b>30 min</b></span><i></i><span>Actual<b>24 min</b></span></div></div></div><div class="mbix-kpi-foot"><span>Performance: 20.0% better</span><span class="material-symbols-rounded">trending_up</span></div></article>'+
          '<article class="mbix-kpi purple"><span class="material-symbols-rounded mbix-info" data-tip="Total HK Points = sum of room-type housekeeping points for completed rooms in the selected date range">info</span><div class="mbix-kpi-main"><div class="mbix-kpi-icon"><span class="material-symbols-rounded">workspace_premium</span></div><div><h3>Total HK Points</h3><strong>1,245</strong><span class="mbix-inline-unit">Points</span></div></div><div class="mbix-kpi-foot"><span>Quality score for this period</span><span class="material-symbols-rounded">emoji_events</span></div></article>'+
        '</div>'+
        '<div class="mbix-content-grid">'+
          '<article class="mbix-panel mbix-trend">'+
            '<div class="mbix-panel-head"><div><h2>Cleaning Performance Trend <span class="material-symbols-rounded" data-tip="Daily expected and actual average cleaning time for completed rooms">info</span></h2><p>Minutes</p></div><button>Daily <span class="material-symbols-rounded">expand_more</span></button></div>'+
            '<div class="mbix-legend"><span><i class="expected"></i>Expected (min)</span><span><i class="actual"></i>Actual (min)</span></div>'+
            '<div class="mbix-chart"><svg viewBox="0 0 620 190" preserveAspectRatio="none" aria-label="Cleaning performance trend"><g class="grid"><line x1="36" y1="15" x2="610" y2="15"/><line x1="36" y1="49" x2="610" y2="49"/><line x1="36" y1="83" x2="610" y2="83"/><line x1="36" y1="117" x2="610" y2="117"/><line x1="36" y1="151" x2="610" y2="151"/><line x1="36" y1="185" x2="610" y2="185"/></g><g class="ylabels"><text x="5" y="19">50</text><text x="5" y="53">40</text><text x="5" y="87">30</text><text x="5" y="121">20</text><text x="5" y="155">10</text><text x="14" y="189">0</text></g><polyline class="expected-line" points="38,77 70,83 102,96 134,83 166,80 198,93 230,93 262,80 294,83 326,69 358,65 390,72 422,74 454,69 486,83 518,74 550,65 582,69"/><polyline class="actual-line" points="38,117 70,115 102,121 134,134 166,128 198,121 230,117 262,119 294,130 326,115 358,104 390,117 422,132 454,119 486,121 518,117 550,115 582,115"/></svg><div class="mbix-xlabels"><span>01 May</span><span>15 May</span><span>01 Jun</span><span>15 Jun</span><span>01 Jul</span></div></div>'+
            '<div class="mbix-trend-stats"><div class="best"><span class="material-symbols-rounded">trending_up</span><p><b>Best Day</b><small>18 Jun 2026</small><strong>18 <em>min</em></strong></p></div><div class="worst"><span class="material-symbols-rounded">trending_down</span><p><b>Worst Day</b><small>29 May 2026</small><strong>36 <em>min</em></strong></p></div><div class="improve"><span class="material-symbols-rounded">bar_chart</span><p><b>Avg Improvement</b><strong>20.0%</strong><small>vs expected</small></p></div></div>'+
          '</article>'+
          '<article class="mbix-panel mbix-table">'+
            '<div class="mbix-panel-head"><div><h2>Rooms Cleaned by Maid <span class="material-symbols-rounded" data-tip="Completed rooms and average time grouped by maid for the selected date range">info</span></h2><p>Selected date range</p></div></div>'+
            '<div class="mbix-table-head"><div>Maid</div><div>Rooms Cleaned</div><div>Avg Cleaning Time</div><div>HK Points</div></div>'+
            rowHtml+
            '<div class="mbix-view">View all maids <span class="material-symbols-rounded">chevron_right</span></div>'+
          '</article>'+
        '</div>'+
      '</div>'+
    '</section>';

    var old=document.getElementById('businessInsightsPage');
    if(old) old.outerHTML=html;
    else {
      var digital=document.getElementById('digitalPage');
      if(digital) digital.insertAdjacentHTML('beforebegin',html);
    }
    var menu=document.getElementById('businessInsightsMenu');
    if(menu) menu.onclick=function(){var page=document.getElementById('businessInsightsPage');if(page&&typeof openPage==='function')openPage(page);};
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',renderBI);
  else renderBI();
  setTimeout(renderBI,500);
  setTimeout(renderBI,1400);
  setTimeout(renderBI,2600);
})();