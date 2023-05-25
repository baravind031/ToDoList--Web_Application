const TodoInputEl=document.querySelector('input[name="todoName"]');
const todoAddBtn=document.getElementById("addItem");
const todoListGroup=document.getElementById('list-group');
let todoInputValue="  ",todoListGroupItem;
/* console.dir(TodoInputEl); */
TodoInputEl.addEventListener('keyup',event=>{
   // console.log(event);
todoInputValue=event.target.value;
//console.log(todoInputValue);
if(event.keyCode === 13&&todoInputValue!=""){
    addTodoItemToDOM();
    event.target.value="",deletebutton
}
//console.log(event);
});
const addTodoItemToDOM = () => {
  todoListGroupItem = document.createElement('li');
 // <li>TodoInputValue</li>
  todoListGroupItem.innerText=todoInputValue;

deletebutton=document.createElement("button");
deletebutton.innerText="Delete";
todoListGroup.appendChild(deletebutton);


  todoListGroup.appendChild(todoListGroupItem);
  //ul.appendChild(li)
}
todoAddBtn.addEventListener('click',event=>{
    todoInputValue=event.target.previousElementSibling.value;
    if(todoInputValue !=''){
    addTodoItemToDOM();
    }
    event.target.previousElementSibling.value="";
    //console.log(event);
});

deleteButton.addEventListener('click',event=>{
//rmove li and delete button
})

