import "./styles.css";
import { lists, createList, createToDo } from "./modules/to-do-logic.js";
import renderUI from "./modules/ui.js";

//const lista = lists.insertList(createList("prueba", "pruebas"));
const misListas = lists();
misListas.insertList(createList("prueba", "probando"));

console.log(misListas.getLists());

const tareaDePrueba = createToDo(
  "prueba1",
  "probando las factories functions",
  new Date(2026, 9, 19),
  "urgent",
  "prueba",
);
console.log(tareaDePrueba);

misListas.getLists()[0].insertTodo(tareaDePrueba);
console.log(misListas.getLists()[0].getTodos()[0].getId());

renderUI();
