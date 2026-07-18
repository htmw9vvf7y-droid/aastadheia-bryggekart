
const boats=[];
for(let i=1;i<=34;i++)boats.push("A-"+String(i).padStart(2,"0"));
for(let i=1;i<=27;i++)boats.push("B-"+String(i).padStart(2,"0"));
const sel=document.getElementById("boat");
boats.forEach(b=>{let o=document.createElement("option");o.text=o.value=b;sel.add(o);});
const coords={};
const img=document.getElementById("map");
const marker=document.getElementById("marker");
img.addEventListener("click",e=>{
 const r=img.getBoundingClientRect();
 const x=Math.round(e.clientX-r.left);
 const y=Math.round(e.clientY-r.top);
 coords[sel.value]={x,y};
 marker.style.display="block";
 marker.style.left=x+"px";
 marker.style.top=y+"px";
 if(sel.selectedIndex<sel.options.length-1) sel.selectedIndex++;
});
document.getElementById("export").onclick=()=>{
 document.getElementById("json").value=JSON.stringify(coords,null,2);
};
