
let boats={};
fetch('boatdata.json').then(r=>r.json()).then(d=>boats=d);
document.querySelectorAll('.hotspot').forEach(h=>{
 h.onclick=()=>{
   let id=h.dataset.id;
   document.getElementById('title').textContent=id;
   document.getElementById('owner').textContent=boats[id]?.owner||'Ingen data';
   document.getElementById('popup').classList.remove('hidden');
 }
});
function hidePopup(){document.getElementById('popup').classList.add('hidden');}
