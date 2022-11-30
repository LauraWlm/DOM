
function randomColor(x)
{
    return Math.floor(Math.random()*x);
}

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
    if (element.getAttribute('class'))
        console.log("Class: " + element.getAttribute('class'));
    else
        element.style.background = "rgb(" + randomColor(255) + ", " + randomColor(255) + ", " + randomColor(255) + ")";
    console.log(element.textContent);
}