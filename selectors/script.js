const importantElement = document.querySelectorAll('.important');
for (let element of importantElement)
element.setAttribute('title',"This is an important item");

const img = document.querySelectorAll('img');
for (let element of img)
    if (!element.classList.contains('important'))
        element.style.display = "none";

const parag = document.querySelectorAll('p');
for (let element of parag)
{
    if (element.classList.contains(elem.className)){
        console.log(element.className);
        console.log(element.innerText);
    }
    else {
        console.log(element.innerText);
    }
}
function randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

console.log(randColor());