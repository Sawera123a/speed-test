//count
var count=0;
//Grabing element

var display=document.querySelector("#display");
var contpos=document.getElementById("count-pos");
var rstBtn=document.getElementById("reset");
var contneg=document.getElementById("count-neg");

//Event listener

rstBtn.addEventListener("click",function(){
    count=0;
    display.innerHTML=count;
});
contpos.addEventListener("click",function(){
    count=count+1;
    display.innerHTML=count;
});
contneg.addEventListener("click",function(){
    if(count>0){
        count=count-1;
        display.innerHTML=count; 
    }
});