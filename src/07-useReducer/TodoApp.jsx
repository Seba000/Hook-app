import { useEffect, useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";
const initialState = [];
const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};
export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //-
  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatch(action);
  };
  //-
  return (
    <>
      <h1>
        ToDo app: 10, <small> pendientes: 2 </small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} /> {/* todos list con el map */}
        </div>

        <div className="col-5">
          <h4>agregar ToDo</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
