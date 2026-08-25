var bul=document.getElementById("bulb");
var bac=document.getElementById("main")
const a=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

setInterval(()=>{
    var s="#";
    var s1="#";
    for(let i=0;i<6;i++){
        s+=a[Math.floor(Math.random()*a.length)];
        s1+=a[Math.floor(Math.random()*a.length)];
    }
    bul.style.color=s;
    bac.style.backgroundColor=s1;
    bul.style.transition= '1s linear';
    bac.style.transition= '1s linear';
},500)