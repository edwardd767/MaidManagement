(function(){
  function ready(fn){ if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',fn); else fn(); }
  var iconSrc='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADsElEQVR4nO2YXWgcVRTH//fO7OzuzG7SLN1utqabMSWmbBXTBtRG+iJtkYogQl4kalMVSrGC+GJAYjsUQaH4ouiL/UDwQahUBCnoS0SoGFulUMGvmDRNC01jPjaT7Mdkrg/bm06XzSbYuzXo+cEwZ8653Dn3zLlnzgxAEARBEARBEARBEARBEARB/H9g9ZjU0BiKiwI7MuGGr19Mz0j9ox9ctX66VpyvNvY/xy+vtXznOrZ46aH41oTJ2bEnEj2uY4vTvak3AUDnDJZRl/j/++icwXVskTA5290eXf9MZ2xzRzIUjoU5cx17TT1uvR6TmgZjADD2esavZk9aGp9wF6va7jZc+YQMGO/PFGuNObu/+QxfI9mvLACGVl6RLwDOamfWlmToSc7WRgSUBUBW8uwGI1JpswZGmDUwwk5dmNsndfcmdEPVve8E5TXg6fvNHVLecHSULZQEOCtnxqnzuc+e3x47CQBtCb3xtxuliZXmq1Y0T5zPPffy55Mfq/BXeQDGpr1xKfd1xbe9d272R3nd3RrJSnk27xdWO+fQlcLxEz/k3i4somQZLHputDCsyl9lG1HnDJ4vsC7K2Xj/repvDYws3SP4NNNvXeazeX/FV6Lr2OKVLya3fjSU+1mVr0GU1QDv5lqmF3wxdKVwHAB+vVH6Utotg2FkyvsGAAaH88fmi2LV/UBfV7zfdWwhj7aEHlLlt3IiOkPC5KznASsT1HNWDsJTWfOe1S5ANk6uY4u9HWaqM22Y8ro+3ivAdWxxZFfTHuno7vboegDYaUfWSd3JnuSh1SyCM6CvK75lU6O+VKuSlsZVBkBpH/DVC83vA0AszBql/syzqQnXscXZ/c1TUjdX9KcB4NsDG2tWcl8A2VQoqwW8nFrwlXaQSvuA7tbIQQDIl8R8rbFtTaEHAWDbRqNX6iJ69Xp88JGG05debSnJzvH6G5mZqgP/IXX5FtjVHt1Xyx7SEK3U5b3qWd14eJTNHG4VuSO30r7tnTHtTn2UKAtAcJ/+Mel9v/PDaz2hm24WvPI5rAMhjbGje5p6ZbZ0pg2z8h9BEM8Xt71KVaNsC9yXDC3t+08vzn3CGeAWBdyigOeXD7coMFcQYnA4PyjHdrWE7cq59Lv4paQsAHs7oo9J+eFNke3LpbTnCzREeExep+NaKmg3NLbUUywXCJXxURaAP//yfpfy4x3RA5X2YJE71N3wrpQ1xm7bz8HfY94yjeLK/SNBEARBEARBEARBEARBEARBVONvMgg4A1JxKfwAAAAASUVORK5CYII=';
  function applyIcon(){
    var page=document.getElementById('businessInsightsPage');
    if(!page) return;
    page.querySelectorAll('.mbi-kpi').forEach(function(card){
      var label=card.querySelector('.mbi-kpi-title');
      var icon=card.querySelector('.mbi-icon');
      if(label && icon && label.textContent.trim()==='Maid On Duty'){
        if(!icon.querySelector('.mbi-maid-final-img')){
          icon.innerHTML='<img class="mbi-maid-final-img" alt="Maid On Duty" src="'+iconSrc+'">';
        }
      }
    });
  }
  ready(function(){ applyIcon(); setTimeout(applyIcon,600); setTimeout(applyIcon,1400); setTimeout(applyIcon,2400); });
})();
