let rootNode = document.getElementsByClassName("todo-app__root")[0];
let inputNode = document.getElementsByClassName('todo-app__input')[0];
let mainNode = document.getElementsByClassName('todo-app__main')[0];
let footerNode = document.getElementById('todo-footer')
let listNode = document.getElementById("todo-list");
let clearCompletedNode = document.getElementById("clearCompletedButton");

let tasksArr = [];
let idCounter = 0;
let state = "All";

updateCount();

inputNode.addEventListener("keyup", function(event) {
    if (event.keyCode === 13 && event.target.value !== '') {
        // console.log(inputNode.value);
        appendList(idCounter++, inputNode.value);
        inputNode.value = "";
    }
    updateCount();
});

function appendList(idNum, inputText){
    let new_todoNode = document.createElement("li");
    new_todoNode.className = "todo-app__item";
    new_todoNode.id = "item_" + idNum;
    new_todoNode.isComplete = false;
    tasksArr[tasksArr.length] = new_todoNode;
        let new_div = document.createElement("div");
            new_div.className = "todo-app__checkbox";
            let new_input = document.createElement("input");
                new_input.id = idNum;
                new_input.type = "checkbox";
                new_input.onclick = function(caller){
                    itemNode = caller.target.parentNode.parentNode;
                    console.log(itemNode);
                    detail = itemNode.childNodes[1];
                    if (caller.target.checked){
                        console.log(itemNode + "isComplete");
                        itemNode.isComplete = true;
                        detail.style["textDecoration"] = "line-through";
                        detail.style["opacity"] = 0.5
                        if (state === "Active"){
                            hideTask(itemNode);
                        }
                    }
                    else {
                        console.log(itemNode + "notComplete");
                        itemNode.isComplete = false;
                        detail.removeAttribute("style");
                        if (state === "Completed"){
                            hideTask(itemNode);
                        }
                    }
                    updateCount();
                }
                new_div.appendChild(new_input);
            let new_label = document.createElement("label");
                new_label.setAttribute("for", idNum);
                new_div.appendChild(new_label);
        let new_h1 = document.createElement("h1");
            new_h1.className = "todo-app__item-detail";
            new_h1.innerHTML = inputText;
        let new_img = document.createElement("img");
            new_img.src = "./img/x.png";
            new_img.className = "todo-app__item-x";
            new_img.onclick = function(caller){
                liNode = caller.target.parentNode;
                console.log(liNode);
                deleteTask(liNode);
            }
        new_todoNode.appendChild(new_div);
        new_todoNode.appendChild(new_h1);
        new_todoNode.appendChild(new_img);

        if(state != "Completed"){
            showTask(new_todoNode);
        }
        
}

function updateCount(){
    // show footer or not
    if(tasksArr.length > 0){
        footerNode.style.display = "flex";
    }
    else{
        footerNode.style.display = "none";
    }

    // update count (xx left)
    leftCnt = tasksArr.filter(ele => !ele.isComplete).length;
    countNode = document.getElementsByClassName("todo-app__total")[0];
    countNode.innerHTML = leftCnt + " left.";
    showClearCompletedButtom();
}

function hideTask(todoNode){
    listNode.removeChild(todoNode);
    todoNode.isShow = false;
}


function deleteTask(liNode){
    var arrIndex = tasksArr.findIndex(ele => ele.id == liNode.id);
    tasksArr.splice(arrIndex, 1);
    liNode.remove();
    updateCount();
}

function showTask(todoNode){
    listNode.appendChild(todoNode);
    todoNode.isShow = true;
}

function showAllTask(){
    while (listNode.firstChild) {
        listNode.removeChild(listNode.lastChild);
    }
    tasksArr.forEach(itemNode => showTask(itemNode));
    state = "All";
}

function showActiveTask(){
    while (listNode.firstChild) {
        listNode.removeChild(listNode.lastChild);
    }
    tasksArr.filter(itemNode => !itemNode.isComplete).forEach(itemNode => showTask(itemNode));
    state = "Active";
}

function showCompletedTask(){
    while (listNode.firstChild) {
        listNode.removeChild(listNode.lastChild);
    }
    tasksArr.filter(itemNode => itemNode.isComplete).forEach(itemNode => showTask(itemNode));
    state = "Completed";
}

function clearCompleted(){
    tasksArr.filter(itemNode => itemNode.isComplete).forEach(itemNode => deleteTask(itemNode));
}

function showClearCompletedButtom(){
    if(tasksArr.filter(itemNode => itemNode.isComplete).length > 0){
        clearCompletedNode.style.display = "flex";
    }
    else{
        clearCompletedNode.style.display = "none";
    }
}