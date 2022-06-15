let errorList = new Array();
let errorCount = 0;

function updateTask(e){ 
    let obj = e.currentTarget;
    let currentID = obj.getAttribute('data-id');

    for (errorIdx in errorList){
        if (errorList[errorIdx].id == currentID) {
            if (errorList[errorIdx].isDone == false) {
                errorList[errorIdx].isDone = true;
                obj.children[0].checked = true;
                obj.children[1].classList.add('done'); 
            } else {
                errorList[errorIdx].isDone = false;
                obj.children[0].checked = false;
                obj.children[1].classList.remove('done'); 
            }
        }
    }
    console.log(currentID);
}
function inputAddTask() {
    let taskName=document.getElementById('taskName').innerText;
    addTask(taskName);
    fetch('/updateError', {
        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(errorList[errorList.length - 1])
    })
    .then( function(result) {
        console.log(result);
    });
}
function addTask(taskName){
    errorCount = errorCount + 1;
    console.log(errorCount);
    let taskLI = document.createElement('li');
    let taskSpan = document.createElement('span');
    taskSpan.innerText = taskName;
    taskLI.appendChild(taskSpan);
    taskLI.addEventListener('click', updateTask);
    taskLI.setAttribute('data-id', errorCount);
    document.getElementById('error-list')
            .appendChild(taskLI);
    let currentError = {}; 
    currentError.name = taskName; 
    currentError.id = errorCount; 
    currentError.isDone = false; 
    errorList.push(currentError); 
}

document.getElementById('addTask')
        .addEventListener('click', inputAddTask);
document.getElementById('taskName')
        .addEventListener('keydown', function(e){
            if (e.keyCode == 13){
                inputAddTask();
            }
        });
function handleOnClick()  {
    let pro
     = prompt('오류 내용을 입력해주세요', );
    document.getElementById('taskName').innerText = pro;
  }
function onReady() {
   fetch('/getError')
   .then( 
       function (res) {
           if (res.status == 200) {
                return res.json();        
           }
       }
   )
   .then(
       function (jsonData) {
            console.log(jsonData);   
            for (let idx in jsonData) {
                addTask(jsonData[idx].name);
            }           
       }
   )
}
document.addEventListener('DOMContentLoaded', onReady);
