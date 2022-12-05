let li = document.querySelector('ol li:last-child');
let ol = document.querySelector('ol');
ol.prepend(li);
 

//deuxième exercice

const section = document.querySelectorAll('section');
const sectionOne = section[1].querySelector('h2');
const sectionTwo= section[2].querySelector('h2');
section[2].children[0].insertBefore(sectionOne, sectionTwo);
section[1].insertBefore(sectionTwo, section[1].lastElementChild);

//troisième exercice

let lastSection = document.querySelector('main section:last-child');
lastSection.remove(section);