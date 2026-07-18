
const boats=[];
for(let i=1;i<=34;i++)boats.push(`A-${String(i).padStart(2,'0')}`);
for(let i=1;i<=27;i++)boats.push(`B-${String(i).padStart(2,'0')}`);
const sel=document.getElementById('boat');
boats.forEach(b=>{const o=document.createElement('option');o.value=b;o.textContent=b;sel.appendChild(o);});
const wrap=document.getElementById('wrap');
const img=document.getElementById('map');
const data={};

img.onclick=e=>{
 const r=img.getBoundingClientRect();
 const x=Math.round(e.clientX-r.left);
 const y=Math.round(e.clientY-r.top);
 data[sel.value]={x,y};
 let d=document.getElementById('m_'+sel.value);
 if(!d){
   d=document.createElement('div');
   d.className='dot';
   d.id='m_'+sel.value;
   wrap.appendChild(d);
 }
 d.style.left=x+'px';
 d.style.top=y+'px';
 document.getElementById('json').value=JSON.stringify(data,null,2);
 if(sel.selectedIndex<sel.options.length-1) sel.selectedIndex++;
};

document.getElementById('export').onclick=()=>{
 const txt=JSON.stringify(data,null,2);
 document.getElementById('json').value=txt;
 const blob=new Blob([txt],{type:'application/json'});
 const a=document.createElement('a');
 a.href=URL.createObjectURL(blob);
 a.download='boatdata.json';
 a.click();
 URL.revokeObjectURL(a.href);
};
