var time1=document.getElementById("timep");
var heartt=document.getElementById("heart");
/*Showing Time HOURS MINUTES SECONDS*/
setInterval(()=>{
    const d=new Date();
    time1.innerHTML=d.getHours()+' : '+d.getMinutes()+' : '+d.getSeconds();
},1000);
/*changing color*/ 
var img=document.getElementById("watch");
//CHANGING TO RED
   function red(){
       img.src="img/red.png";
   }
//CHANGING TO BLACK
function black(){
    img.src="img/black.png"
}
//CHANGING TO BLUE
function blue(){
    img.src="img/blue.png"
}
//CHANGING TO PURPLE
function prp (){
    img.src="img/darkpurple.png"
}
//CHANGING TO PINK
/*function pink(){
    img.src="img/pink.png"
}*/
//change color with addeventlistener
var pink=document.getElementById("pink");
    pink.addEventListener("click",()=>{
        img.src="img/pink.png";
    });

//clicking on time
function heart(){
    time1.style.display="none";
    heartt.style.display="block";
    heartt.style.marginTop="-45%";
};
function timebtn(){
    heartt.style.display="none";
    time1.style.display="block";
};


/*COPYRIGHTS Achraf BEN CHEIKH LADHARI*/


