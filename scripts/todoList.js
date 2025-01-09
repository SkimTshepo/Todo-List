const todoList = [
  {
    name:'make dinner',
    dueDate: '2025/01/09'
  },{
    name:'wash dishes',
    dueDate:'2025/01/09'
  }];

renderTodoList();


function renderTodoList(){

  let todoListHTML ='';

  for(let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
          todoList.splice(${i},1);
          renderTodoList();
        " class="delete-todo-button">Delete</button>
      
    `;
    todoListHTML += html;

  }
  console.log(todoListHTML);
  
  document.querySelector('.js-todoList-ouput')
  .innerHTML = todoListHTML;

}

function addTodo(){
  const nameInputElement = document.querySelector('.js-name-input');
  const name = nameInputElement.value;

  const dueDateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dueDateInputElement.value;
 

  todoList.push({
    name,
    dueDate
  });

  nameInputElement.value = '';

  renderTodoList();
}
      