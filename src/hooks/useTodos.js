import { useEffect, useReducer } from "react";
import { todoReducer } from "../07-useReducer/todoReducer";
//

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};
//

export const useTodos = () => {
  //
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  //
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //agregar tarea
  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatch(action);
  };
  //borrar tarea
  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };
  //si la tarea se realizó o no
  const handleToggleTodo = (id) => {
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };
  //

  return {
    todos,
    handleToggleTodo,
    handleNewTodo,
    handleDeleteTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
  };
};
