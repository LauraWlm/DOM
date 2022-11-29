const importantElement = document.querySelectorAll('.important');

importantElement.forEach(element => {
    element.setAttribute('title', 'this in an important item');
});


const img= document.querySelectorAll("img");

img.forEach(img => {
    if (!img.classList.contains("important")) {
        img.style.display = "none";
    }
});

const paragraphs = document.querySelectorAll("p");

paragraphs.forEach(p => {
    console.log(p.textContent);
    if (p.className) {
        console.log("Class name: " + p.className);
    }
});

paragraphs.forEach(paragraph => {
    if (!paragraph.classList.contains("special")) {
      let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
      paragraph.style.color = randomColor;
    }
  });