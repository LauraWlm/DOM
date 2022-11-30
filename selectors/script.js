let importantElement = document.querySelectorAll('.important');
for (let element of importantElement) 
    element.setAttribute('title', 'this in an important item');


let img_modif = document.querySelectorAll('img');
for (let element of img_modif)
     if(!element.classList.contains('important'))
         element.style.display ="none;";
    
let parag = document.querySelectorAll('p');
for (let element of parag)
{
    if (element.getAttribute('class'))
        console.log("class: " );
        
    else
        element.style.background
}

