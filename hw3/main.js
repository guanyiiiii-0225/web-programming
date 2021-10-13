

let inputNodes = document.getElementsByClassName('todo-app__input');
let inputNode = inputNodes[0];

let mainNodes = document.getElementsByClassName('todo-app__main');
let mainNode = mainNodes[0];

let rootNodes = document.getElementsByClassName("todo-app__root");
let rootNode = rootNodes[0];

inputNode.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        console.log(inputNode.value);

        let todoListNode = document.getElementById('todo-list');
        if(todoListNode === null){
            console.log("creating");

            // creat todo list 
            let new_todoListNode = document.createElement("ul");
            new_todoListNode.className = "todo-app__list";
            new_todoListNode.id = "todo-list";
            mainNode.appendChild(new_todoListNode);
            todoListNode = new_todoListNode;


            // create footer
            creatingFooter();
        }
        else{
            console.log(todoListNode);
        }

        appendList();

        // console.log(todoListNode.childElementCount);

        inputNode.value = "";
    }
});

function appendList(){
    let todoListNode = document.getElementById('todo-list');
    let new_todoNode = document.createElement("li");
    new_todoNode.className = "todo-app__item";
    new_todoNode.id = "item_" + todoListNode.childElementCount;
        let new_div = document.createElement("div");
            new_div.className = "todo-app__checkbox";
            let new_input = document.createElement("input");
                new_input.id = todoListNode.childElementCount;
                new_input.type = "checkbox";
                new_input.onclick = function(caller){
                    itemNode = caller.target.parentNode.parentNode;
                    console.log(itemNode);
                    if (caller.target.checked){
                        console.log(itemNode + "isComplete");
                        itemNode.isComplete = true;
                    }
                    else {
                        console.log(itemNode + "notComplete");
                        itemNode.isComplete = false;
                    }
                }
                new_div.appendChild(new_input);
            let new_label = document.createElement("label");
                new_label.htmlFor = todoListNode.childElementCount;
                new_div.appendChild(new_label);
        let new_h1 = document.createElement("h1");
            new_h1.className = "todo-app__item-detail";
            new_h1.innerHTML = inputNode.value;
        let new_img = document.createElement("img");
            new_img.src = "./img/x.png";
            new_img.className = "todo-app__item-x";
        new_todoNode.appendChild(new_div);
        new_todoNode.appendChild(new_h1);
        new_todoNode.appendChild(new_img);
    todoListNode.appendChild(new_todoNode);
}

function creatingFooter(){
    let newFooterNode = document.createElement("footer");
    newFooterNode.className = "todo-app__footer";
    newFooterNode.id = "todo-footer";

    let new_div = document.createElement("div");
    new_div.className = "todo-app__total";
    new_div.innerHTML = "1 left";

    let new_ul = document.createElement("ul");
    new_ul.className = "todo-app__view-buttons";
    let b1 = document.createElement("button");
    b1.innerHTML = "All";
    let b2 = document.createElement("button");
    b2.innerHTML = "Active";
    let b3 = document.createElement("button");
    b3.innerHTML = "Completed";
    new_ul.appendChild(b1);
    new_ul.appendChild(b2);
    new_ul.appendChild(b3);


    let new_div2 = document.createElement("div");
    new_div2.className = "todo-app__clean";
    let b4 = document.createElement("button");
    b4.innerHTML = "Clear completed";
    new_div2.appendChild(b4);

    newFooterNode.appendChild(new_div);
    newFooterNode.appendChild(new_ul);
    newFooterNode.appendChild(new_div2);

    rootNode.appendChild(newFooterNode);
}