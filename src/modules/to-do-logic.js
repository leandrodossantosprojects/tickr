import { v4 as uuidv4 } from "uuid";

export const lists = () => {
  const listOfLists = [];
  const insertList = (list) => {
    if (listOfLists.some((i) => i.getData().name === list.getData().name))
      return false;
    listOfLists.push(list);
    return true;
  };
  const getLists = () => {
    return [...listOfLists];
  };
  const deleteList = (list) => {
    const listIndex = listOfLists.indexOf(list);
    if (listIndex === -1) return;
    listOfLists.splice(listIndex, 1);
  };

  return {
    insertList,
    getLists,
    deleteList,
  };
};

export const createList = (name = "list", category = "default") => {
  const listData = {
    name: name,
    category: category,
    todos: [],
  };
  const getData = () => {
    return { ...listData };
  };
  const insertTodo = (todo) => {
    listData.todos.push(todo);
  };
  const deleteTodo = (todo) => {
    const todoIndex = listData.todos.findIndex((obj) => obj.id === todo.id);
    if (todoIndex === -1) return;
    listData.todos.splice(todoIndex, 1);
  };
  const changeData = (newValue, key) => {
    if (!Object.hasOwn(listData, key)) {
      return false;
    }
    listData[key] = newValue;
  };

  return {
    getData,
    insertTodo,
    deleteTodo,
    changeData,
  };
};

export const createToDo = (title, description, dueDate, priority, list) => {
  const data = {
    id: uuidv4(),
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    list: list,
  };
  const getData = () => {
    return { ...data };
  };
  function changeTitle(value) {
    return (data.title = value);
  }
  function changeDesc(value) {
    return (data.description = value);
  }
  function changeDueDate(value) {
    return (data.dueDate = value);
  }
  function changePriority(value) {
    return (data.priority = value);
  }
  function changeList(value) {
    return (data.list = value);
  }
  return {
    changeTitle,
    changeDesc,
    changeDueDate,
    changePriority,
    changeList,
    getData,
  };
};
