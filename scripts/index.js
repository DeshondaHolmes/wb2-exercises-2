"use strict";
console.log("Hello from .js");


window.onload = init();


function init(){
    console.log("Hello inside function init")
    const theGreetBtn = document.getElementById("greetBtn");
    theGreetBtn.onclick = onGreetUserBtnClicked;
}



function onGreetUserBtnClicked(){
   console.log("I work")


}