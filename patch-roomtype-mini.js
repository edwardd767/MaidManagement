(function(){
  function ready(fn){ if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',fn); else fn(); }
  ready(function(){
    function el(id){ return document.getElementById(id); }
    function go(id){ var p=el(id); if(p && typeof openPage==='function') openPage(p); }
    function standardTitles(){ document.querySelectorAll('.title').forEach(function(t){ t.textContent='HOTEL PARADISE'; }); }
    function cleanMenu(){
      var side=document.querySelector('aside.sidebar');
      if(!side || el('businessInsightsMenu')) return;
      side.outerHTML='<aside class="sidebar"><ul class="nav"><li class="nav-item maid-management" id="maidMenu"><span class="icon">🧹</span><span>Maid<br>Management</span></li><li class="nav-item" id="businessInsightsMenu"><span class="icon">📊</span><span>Business Insights</span></li><li class="nav-item" id="digitalMenu"><span class="icon">📊</span><span>Digital Reporting</span></li><li class="nav-item" id="hotelMenu"><span class="icon">⚙️</span><span>Hotel Settings</span></li></ul></aside>';
    }
    function roomTypeHtml(){
      return '<section class="page" id="roomTypePage"><div class="hero"><div class="hero-content"><div class="kicker">HMS</div><div class="title">HOTEL PARADISE</div></div><div class="hero-bottom"><span>... / ... / DLQ</span><span>Edit</span></div></div><div class="room-type-page-card"><div class="rt-section-title">Room Type</div><div class="rt-form"><div class="rt-grid"><div class="rt-field"><div class="rt-label">Code *</div><div class="rt-value rt-muted">DLQ</div></div><div class="rt-field"><div class="rt-label">Total Room</div><div class="rt-value rt-muted">8</div></div><div class="rt-field full"><div class="rt-label">Description</div><div class="rt-value">DELUXE QUEEN</div></div><div class="rt-field rt-select"><div class="rt-label">Property Type</div><div class="rt-value">Room</div></div><div class="rt-field rt-select"><div class="rt-label">Measure Type</div><div class="rt-value">Square Metre</div></div><div class="rt-field"><div class="rt-label">Room Size</div><div class="rt-value">100</div></div><div class="rt-field"><div class="rt-label">Max Guest *</div><div class="rt-value">4</div></div><div class="rt-field"><div class="rt-label">House Limit</div><div class="rt-value">100.00</div></div><div class="rt-field"><div class="rt-label">Housekeeping Points</div><div class="rt-value">10</div></div><div class="rt-field"><div class="rt-label">Overbooking Allowed</div><div class="rt-value">5</div></div><div class="rt-field"><div class="rt-label">Estimated Cleaning Time(Mins)</div><div class="rt-value">20</div></div></div></div></div></section>';
    }
    function ensureRoomType(){
      var grid=document.querySelector('#hotelSettingsPage .settings-grid');
      if(grid && !el('roomTypeCard')){
        var card=document.createElement('div'); card.className='card'; card.id='roomTypeCard';
        card.innerHTML='<div class="card-icon"><span class="material-symbols-rounded feature-card-icon room-type-card-icon">hotel_class</span></div><div><div class="card-title">Room Type</div><div class="secondary">Room Type Setup.</div></div><div class="arrow">›</div>';
        var policy=el('roomStatusPolicyCard'); grid.insertBefore(card, policy || null);
      }
      if(el('roomTypePage')) el('roomTypePage').outerHTML=roomTypeHtml();
      else { var onDuty=el('onDutyPage'); if(onDuty) onDuty.insertAdjacentHTML('beforebegin', roomTypeHtml()); }
    }
    function cleanDigital(){
      var d=el('digitalPage'); if(!d) return;
      d.innerHTML='<div class="hero"><div class="hero-content"><div class="kicker">HMS</div><div class="title">HOTEL PARADISE</div></div><div class="hero-bottom"><span>... / Digital Reporting</span><span>Digital Report</span></div></div><div class="toolbar"><span>Search here...</span><span>Housekeeping</span></div><div class="list"><div class="list-card report-card" id="reportCard"><div><div class="primary">Maid Productivity Listing</div><div class="secondary">Description</div></div><div class="arrow">›</div></div></div>';
    }
    function ensureBI(){
      var html='<section class="page" id="businessInsightsPage"><div class="hero"><div class="hero-content"><div class="kicker">HMS</div><div class="title">HOTEL PARADISE</div></div><div class="hero-bottom"><span>... / Business Insights</span><span>Maid Productivity Analysis</span></div></div><div class="bi-filters"><div class="bi-field"><div><div class="bi-label">Start Date</div><div class="bi-value">01 May 2026</div></div><span class="material-symbols-rounded">calendar_month</span></div><div class="bi-field"><div><div class="bi-label">End Date</div><div class="bi-value">09 Jul 2026</div></div><span class="material-symbols-rounded">calendar_month</span></div><div class="bi-field"><span class="material-symbols-rounded">search</span><div class="bi-value">Search maid...</div></div><div class="bi-field"><div><div class="bi-label">Analysis By</div><div class="bi-value">Maid</div></div><span class="material-symbols-rounded">expand_more</span></div></div><div class="bi-kpis"><div class="bi-kpi"><div class="bi-icon"><span class="material-symbols-rounded">cleaning_services</span></div><div><div class="bi-kpi-name">Maid On Duty</div><div class="bi-kpi-value">12</div></div></div><div class="bi-kpi"><div class="bi-icon"><span class="material-symbols-rounded">hotel</span></div><div><div class="bi-kpi-name">Rooms Cleaned</div><div class="bi-kpi-value">156</div></div></div><div class="bi-kpi"><div class="bi-icon"><span class="material-symbols-rounded">schedule</span></div><div><div class="bi-kpi-name">Avg Cleaning Time</div><div class="bi-kpi-value">24<span class="bi-small">min</span></div></div></div><div class="bi-kpi"><div class="bi-icon"><span class="material-symbols-rounded">workspace_premium</span></div><div><div class="bi-kpi-name">Total HK Points</div><div class="bi-kpi-value">1,245</div></div></div></div><div class="bi-chart"><div class="bi-chart-head"><span>Rooms Cleaned by Maid</span><span class="bi-date">01 May 2026 – 09 Jul 2026</span></div><div class="bi-plot"><div class="bi-y">Rooms Cleaned</div><div class="bi-bars"><div class="bi-bar" style="height:78%"><span>78</span></div><div class="bi-bar" style="height:64%"><span>64</span></div><div class="bi-bar" style="height:92%"><span>92</span></div><div class="bi-bar" style="height:54%"><span>54</span></div></div><div></div><div class="bi-xlabels"><span>Cassandra</span><span>Edward</span><span>Mark Goh</span><span>Syuhaidah</span></div><div></div><div class="bi-xname">Maid</div></div></div><div class="bi-summary"><div class="bi-summary-item"><div class="bi-icon"><span class="material-symbols-rounded">groups</span></div><div><div class="bi-summary-label">Avg Rooms / Maid</div><div class="bi-summary-value">13.0</div></div></div><div class="bi-summary-item"><div class="bi-icon"><span class="material-symbols-rounded">assignment_turned_in</span></div><div><div class="bi-summary-label">Completed Rooms</div><div class="bi-summary-value">156</div></div></div><div class="bi-summary-item"><div class="bi-icon"><span class="material-symbols-rounded">schedule</span></div><div><div class="bi-summary-label">In Progress</div><div class="bi-summary-value">18</div></div></div></div><div class="bi-export-wrap"><button class="bi-export"><span class="material-symbols-rounded">download</span>Export</button></div></section>';
      if(el('businessInsightsPage')) el('businessInsightsPage').outerHTML=html;
      else { var d=el('digitalPage'); if(d) d.insertAdjacentHTML('beforebegin', html); }
    }
    function bind(){
      if(el('maidMenu')) el('maidMenu').onclick=function(){go('maidPage')};
      if(el('businessInsightsMenu')) el('businessInsightsMenu').onclick=function(){go('businessInsightsPage')};
      if(el('digitalMenu')) el('digitalMenu').onclick=function(){go('digitalPage')};
      if(el('hotelMenu')) el('hotelMenu').onclick=function(){go('hotelSettingsPage')};
      if(el('roomTypeCard')) el('roomTypeCard').onclick=function(){go('roomTypePage')};
      if(el('reportCard')) el('reportCard').onclick=function(){go('reportPage')};
    }
    standardTitles(); cleanMenu(); ensureRoomType(); cleanDigital(); ensureBI(); bind();
    setTimeout(function(){ standardTitles(); ensureRoomType(); ensureBI(); bind(); },500);
  });
})();
