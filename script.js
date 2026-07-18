fetch('boatdata.json')
.then(r=>r.json())
.then(data=>console.log('Båtplasser:',data));

function closePopup(){
 document.getElementById('popup').classList.add('hidden');
}
