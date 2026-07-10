(function(){
  function ready(fn){ if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',fn); else fn(); }
  function iconSvg(){
    return '<svg class="mbi-maid-silhouette-svg" viewBox="0 0 64 64" aria-hidden="true">'+
      '<g fill="currentColor">'+
      '<circle cx="30" cy="9" r="5.4"></circle>'+
      '<circle cx="32" cy="4" r="2.8"></circle>'+
      '<path d="M21 19c2.4-4 6-5.8 10.2-5.8 4 0 7.4 1.9 9.8 5.8H21z"></path>'+
      '<path d="M24 21h16l4.5 23H19.5L24 21z"></path>'+
      '<path d="M22.4 24.8c-5 4.1-8.2 9.7-9.4 16.8l5.8 1c1-5.4 3.1-9.8 6.8-13.2l-3.2-4.6z"></path>'+
      '<path d="M40.6 24c3.2 2.7 6.4 4.2 10.1 4.2h1.7v-5.8h-1.5c-2.4 0-4.7-1.1-7.6-3.4l-2.7 5z"></path>'+
      '<path d="M49.4 13.5h4.4v35.8h-4.4z"></path>'+
      '<path d="M45 49h13.2l-1.9 8.6H46.9z"></path>'+
      '<path d="M13.2 40.2h9.2l-1.4 13.2H11.8z"></path>'+
      '<path d="M24.5 44h5.4v15h-5.4z"></path>'+
      '<path d="M34.1 44h5.4v15h-5.4z"></path>'+
      '</g>'+
      '<path d="M25.5 22l6.5 10 6.5-10" fill="#fff3e6"></path>'+
      '<path d="M24.5 36.6h15" stroke="#fff3e6" stroke-width="3" stroke-linecap="round"></path>'+
      '<path d="M12.9 40.5c2.2 2 6.6 2 9.2 0" stroke="#fff3e6" stroke-width="2.2" fill="none" stroke-linecap="round"></path>'+
      '<path d="M46.5 52h10.4M47.2 55h8.9" stroke="#fff3e6" stroke-width="1.7" stroke-linecap="round"></path>'+
      '</svg>';
  }
  function replaceIcon(){
    var page=document.getElementById('businessInsightsPage'); if(!page) return;
    var cards=page.querySelectorAll('.mbi-kpi');
    cards.forEach(function(card){
      var label=card.querySelector('.mbi-kpi-title');
      if(label && label.textContent.trim()==='Maid On Duty'){
        var icon=card.querySelector('.mbi-icon');
        if(icon){ icon.innerHTML=iconSvg(); icon.classList.add('mbi-tip'); }
      }
    });
  }
  ready(function(){ replaceIcon(); setTimeout(replaceIcon,300); setTimeout(replaceIcon,900); setTimeout(replaceIcon,1800); setInterval(replaceIcon,3000); });
})();