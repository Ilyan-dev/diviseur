
let input = document.getElementById('enter')

let inputof = document.getElementById('enterof')

let submit = document.getElementById('submit')

let unit = document.getElementById('unit')







let toDoContainer = document.getElementById('toDoContainer')
let addToDobutton = document.getElementById('addToDo')
let inputField = document.getElementById('inputField')

addToDobutton.addEventListener('click' , function() {
  
 


  let result = Math.round(inputof.value * (input.value / 100)) 
  let paragraph = document.createElement('p');
   paragraph.innerText = result;
   
    toDoContainer.appendChild(paragraph);

   

})

submit.addEventListener('click', ()=>{




console.log(result);






})