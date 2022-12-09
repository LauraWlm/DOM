// exercice 1 merci Edouard pour l'explication ;)
const input = document.getElementById('firstname');
const span = document.getElementById('display-firstname');

input.addEventListener('keyup',() =>{
    span.textContent = input.value
})

// exercice 2

const input2 = document.getElementById("age");
const sec2 = document.getElementById("a-hard-truth");

input2.addEventListener('keyup',() =>{
if (input2.value >= 18){
    sec2.setAttribute("style", "visibility: visible");
}
});
 /* ou
  const input2 = document.getElementById("age");
const sec2 = document.getElementById("a-hard-truth");

input2.addEventListener('keyup',() =>{
if (input2.value >= 18){
 document.getElementById('a-hard-truth').style.visibility = "hidden";
}

else{
    document.getElementById('a-hard-truth').style.visibility = "visible";
}
)*/

// exercice 3

const pwd1 = document.getElementById('pwd');
const pwd2 = document.getElementById('pwd-confirm');

pwd1.addEventListener('keyup',() =>{
if(pwd1.value.length >= 6){
    pwd1.setAttribute("style", "background-color:white")
}
else pwd1.setAttribute("style", "background-color:red")
})

pwd2.addEventListener('keyup',() =>{
    if(pwd2.value !== pwd1.value){
        pwd2.setAttribute("style", "background-color:red")
        }
})

//exercice 4
let darkmode = document.querySelector("toggle-darkmode");

function changeBgc() {
    document.body.style.backgroundColor = "#FFFFFF";
    document.body.style.color = "#000000";
    if  (value == "dark") {
        document.body.style.backgroundColor = "#000000";
        document.body.style.color = "#FFFFFF";
    }
}

darkmode.addEventListener('change', backgroundColor);