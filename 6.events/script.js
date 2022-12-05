const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {  
  section=document.getElementsByTagName('section')[0];//add new code for new square
  let div=document.createElement('div');
  div.classList.add("displayedsquare", e.target.classList[1]);
  section.appendChild(div);//end new code
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
}

const actionSquares = document.querySelectorAll('.actionsquare')
function displayAnAlert(){
  return alert('The button shall not be pressed!')
}

for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare,  displayAnAlert)
}


// Put the logs 
let liFirst = document.createElement('li');
liFirst.innerHTML = 'prepend';
ol.prepend(liFirst);