(function(){
  function removeDaily(){
    var page=document.getElementById('businessInsightsPage');
    if(!page)return;
    var button=page.querySelector('.mbix-trend .mbix-panel-head button');
    if(button)button.remove();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',removeDaily);
  else removeDaily();
  setTimeout(removeDaily,500);
  setTimeout(removeDaily,1500);
  setTimeout(removeDaily,3000);
})();