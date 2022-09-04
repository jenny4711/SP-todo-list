const formToDo= document.querySelector('#todo')
const input =document.querySelector('#add')
const list = document.querySelector('#list')

const localS =JSON.parse(localStorage.getItem("localList")) || [];


for(let i =0; i<localS.length;i++){
const upg =document.createElement('li');
const span = document.createElement('span');
const removeBtn = document.createElement('button')
removeBtn.innerText ='X';
span.innerText = localS[i].task;
upg.appendChild(removeBtn)
list.appendChild(upg)
upg.appendChild(span)
 
}

// Remove Btn
list.addEventListener('click',function(e){
if(e.target.tagName === 'BUTTON'){
  e.target.parentElement.remove();
  }else if(e.target.tagName ==='LI'){
  e.target.classList.add('marked')
  }
for(let i =0; i<localS.length;i++){
  console.log(localS[i].task)
  console.log(e.target.parentElement.innerText)

if(e.target.parentElement.children[1].innerText === localS[i].task){
  {localS.splice(i,1)}
      
}
}
localStorage.setItem('localList',JSON.stringify(localS));  
 
})

// Text 
formToDo.addEventListener('submit',function(e){
e.preventDefault();
const upg =document.createElement('li');
// upg.innerText =document.getElementsByTagName('li')
const removeBtn = document.createElement('button')
removeBtn.innerText ='X';
upg.appendChild(removeBtn)
list.appendChild(upg)
const span = document.createElement('span');

span.innerText = input.value



// save local storage
localS.push({task:input.value,button:e.target})
localStorage.setItem('localList',JSON.stringify(localS));
  
console.log(upg)
upg.appendChild(removeBtn)
list.appendChild(upg)
upg.appendChild(span)


})

 





