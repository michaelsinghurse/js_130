// prac_prob03.js

function makeList() {
  let todos = [];
  
  function addTodo(newTodo) {
    todos.push(newTodo);
    console.log(`${newTodo} added!`);
  }
  
  function printTodos() {
    if (todos.length === 0) {
      console.log('The list is empty.');
    } else {
      todos.forEach(todo => console.log(todo));
    }
  }
  
  function removeTodo(oldTodo) {
    todos = todos.filter(todo => todo !== oldTodo);
    console.log(`${oldTodo} removed!`);
  }
  
  return {
    add(todo) {
      addTodo(todo);
    }, 
    list() {
      printTodos();
    },
    remove(todo) {
      removeTodo(todo);
    },
  };
}

