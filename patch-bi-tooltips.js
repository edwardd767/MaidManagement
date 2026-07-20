(function(){
  function ready(fn){ if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',fn); else fn(); }
  var tips={
    'Maids On Duty':'Distinct count of Maid Code where On Duty = Yes within the selected date range. Each maid is counted once even when working on multiple days.',
    'Completed Rooms':'Count of cleaning records where Cleaning Status = Completed and Completion Date/Time falls within the selected date range.',
    'Uncleaned Rooms':'Count of assigned cleaning records still Pending, Assigned or In Progress as at the selected End Date. Completed and Cancelled records are excluded.',
    'Avg Cleaning Time':'Actual average = total actual cleaning duration divided by completed rooms. Expected average = total room-type estimated cleaning time divided by completed rooms. Performance % = ((Expected - Actual) / Expected) x 100.',
    'Total HK Points':'Sum of Room Type HK Points for all completed cleaning records within the selected date range. Pending or in-progress rooms do not earn points yet.',
    'Cleaning Performance Trend':'For each date: daily expected average = total expected minutes / completed rooms; daily actual average = total actual minutes / completed rooms. Best Day is the lowest daily actual average; Worst Day is the highest.',
    'Rooms Cleaned by Maid':'Grouped by Maid Code and Maid Name. Rooms Cleaned = completed cleaning records per maid. Avg Cleaning Time = maid total actual duration / maid completed rooms. Thumbs up means actual is below expected; neutral means equal; thumbs down means above expected.'
  };
  function getFloatingTip(){var tip=document.getElementById('mbiFloatingTip');if(!tip){tip=document.createElement('div');tip.id='mbiFloatingTip';tip.className='mbi-floating-tip';document.body.appendChild(tip);}return tip;}
  function showTip(target){var text=target.getAttribute('data-tip');if(!text)return;var tip=getFloatingTip();tip.textContent=text;tip.classList.add('show');var r=target.getBoundingClientRect();var left=r.left+(r.width/2)-165;var top=r.bottom+12;if(left<14)left=14;if(left+330>window.innerWidth-14)left=window.innerWidth-344;if(window.innerWidth<720)left=Math.max(14,Math.min(left,window.innerWidth-284));if(top+150>window.innerHeight)top=Math.max(14,r.top-162);tip.style.left=left+'px';tip.style.top=top+'px';}
  function hideTip(){var tip=document.getElementById('mbiFloatingTip');if(tip)tip.classList.remove('show');}
  function attach(el){if(!el||el.getAttribute('data-tooltip-ready')==='1')return;el.setAttribute('data-tooltip-ready','1');el.removeAttribute('title');el.addEventListener('mouseenter',function(){showTip(el);});el.addEventListener('mouseleave',hideTip);el.addEventListener('click',function(e){e.preventDefault();showTip(el);setTimeout(hideTip,3200);});}
  function makeInfo(container,text){if(!container||container.querySelector('.mbi-info'))return;var info=document.createElement('span');info.className='material-symbols-rounded mbi-info';info.textContent='info';info.setAttribute('data-tip',text);container.appendChild(info);attach(info);}
  function applyTips(){var page=document.getElementById('businessInsightsPage');if(!page)return;page.querySelectorAll('.mbi-kpi').forEach(function(card){var label=card.querySelector('.mbi-kpi-title');if(label&&tips[label.textContent.trim()])makeInfo(card,tips[label.textContent.trim()]);});page.querySelectorAll('.mbi-panel').forEach(function(panel){var title=panel.querySelector('.mbi-panel-title');if(title&&tips[title.textContent.trim()])makeInfo(title,tips[title.textContent.trim()]);});}
  ready(function(){applyTips();setTimeout(applyTips,800);setTimeout(applyTips,1700);setInterval(applyTips,2500);});
})();
