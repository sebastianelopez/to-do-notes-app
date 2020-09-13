import './styles.css';
import { Todo } from './classes/todo.class';
import { TodoList} from './classes/todo-list.class';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();
const tarea= new Todo("Aprender Javascript");

todoList.nuevoTodo(tarea);

console.log(tarea);

crearTodoHtml(tarea);