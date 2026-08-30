const IP='play.emeraldmcc.ir';
function copyIP(){navigator.clipboard?.writeText(IP).then(()=>{document.getElementById('status').textContent='آی‌پی کپی شد ✓';toast('آی‌پی سرور کپی شد')}).catch(()=>toast(IP))}
function toast(t){const x=document.getElementById('toast');x.textContent=t;x.classList.add('show');clearTimeout(window.tt);window.tt=setTimeout(()=>x.classList.remove('show'),2400)}
document.getElementById('players').textContent=Math.floor(Math.random()*16)+5;
