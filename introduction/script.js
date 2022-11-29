console.log(document.title);
document.title = "Modifying the DOM";
document.body.style.backgroundColor = 'rgb(241, 226, 190)';

for (let node of document.body.childNodes) {
    console.log(node)
}



