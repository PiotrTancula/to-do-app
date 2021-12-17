let textField = document.querySelector('.text');
let doneList = document.getElementById('done');
let toBeDoneList = document.getElementById('toBeDone');
let buttons = [...document.getElementsByClassName('bookmarks-button')];

let divList = document.getElementById('list');

textField.addEventListener('click',function(e){
    console.log(e.target.value);
})

let addButton = document.getElementById('addButton');


function addTask(){

    if(textField.value == ''){
        
        addButton.removeEventListener('click',addTask());
        
        
    }

    let div = document.createElement('div');
    let divTextField = document.createElement('div');
    let removeButton = document.createElement('button');

    let checkBoxInput = document.createElement('input');
    checkBoxInput.type = 'checkbox';
    div.classList.add('task');
    removeButton.classList.add('removeButton');
    removeButton.textContent = 'REMOVE';
    
    
    
    divTextField.classList.add('task-textField');
    divTextField.textContent = textField.value;
    div.appendChild(divTextField);
    div.appendChild(removeButton);
    div.appendChild(checkBoxInput);
   
    

    divList.appendChild(div);
    console.log(textField.value);
    

    
    

    checkBoxInput.addEventListener('change',checkStatus);
    removeButton.addEventListener('click',removeTask);
    textField.value = '';
    

    

}

function removeTask(e){
    console.log(e.target.parentNode.remove());
}


function checkStatus(e){    

    let div = e.target.parentElement;
    let divCopy = div.cloneNode(true);
    divCopy.childNodes[2].remove();
    
    

    let checkboxReference = div.parentNode.childNodes[3].childNodes[1];

    div.addEventListener('click',function(e){

        if(checkboxReference.checked == false){
            div.parentNodex.removeChild(div);
            
        }
        

    })

    divCopy.childNodes[1].addEventListener('click',function(){
        
            doneList.removeChild(doneList.childNodes[1]);
          
    })

    console.log(divCopy.childNodes[1]);
   
    if(e.target.value == 'on') {
           
        alert('TASK HAS BEEN MARKED AS DONE AND ADDED TO THE DONE LIST');
        doneList.appendChild(divCopy);
        textField.value = '';
        e.target.parentNode.childNodes[2].disabled = true;

    }

  
    
}




addButton.addEventListener('click', addTask);

for( let button of buttons){
    button.addEventListener('click',function(e){
        if(e.target.textContent == 'ALL'){
           
            divList.style.display = 'flex';
            doneList.style.display = 'none';
            
          
        }else if(e.target.textContent == 'DONE'){
            divList.style.display = 'none';
            doneList.style.display = 'flex';
            
            
            
        }
    })
}