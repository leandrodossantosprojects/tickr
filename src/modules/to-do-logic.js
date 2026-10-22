import { v4 as uuidv4 } from "uuid";

export const lists = () => {
  const listOfLists = [];
  const insertList = (list) => {
    listOfLists.push(list);
  };
  const getLists = () => {
    return listOfLists;
  };

  return {
    insertList,
    getLists,
  };
};

export const createList = (name, category) => {
  const todos = [];
  const getTodos = () => {
    return todos;
  };
  const getName = () => {
    return name;
  };
  const insertTodo = (todo) => {
    todos.push(todo);
  };
  const deleteTodo = (todo) => {
    const todoIndex = todos.findIndex((obj) => obj.id === todo.id);
    if (todoIndex === -1) return;
    todos.splice(todoIndex, 1);
  };
  const showTodos = () => {
    console.log(todos);
  };

  return {
    getTodos,
    getName,
    insertTodo,
    deleteTodo,
    showTodos,
  };
};

export const createToDo = (title, description, dueDate, priority, list) => {
  const id = uuidv4();
  const getId = () => {
    return id;
  };
  return {
    title,
    description,
    dueDate,
    priority,
    list,
    getId,
  };
};
