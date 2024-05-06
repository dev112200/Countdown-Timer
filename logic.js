const lastDate = "10 June 2024 12:01 AM"
document.getElementById("setDate").innerHTML=lastDate;
const inpt = document.querySelectorAll("input");
function countdown(){
    const end = new Date(lastDate);
    const now = new Date();   
    const difference = (end -now)/1000;
    if(difference<0) return;
    inpt[0].value= Math.floor(difference/60/60/24);
    inpt[1].value=Math.floor(difference/3600)%24;
    inpt[2].value=Math.floor(difference/60)%60;
    inpt[3].value=Math.floor(difference)%60;
}
countdown();
setInterval(()=>{
    countdown();
},1000);