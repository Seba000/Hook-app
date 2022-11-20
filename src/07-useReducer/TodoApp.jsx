import { useEffect, useReducer } from "react";
import { useTodos } from "../hooks";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";
//
//
//
export const TodoApp = () => {
  //
  const {
    todos,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
    todosCount,
    pendingTodosCount,
  } = useTodos();
  //
  return (
    <>
      <h1>
        ToDo's: {todosCount},<small> pendientes: {pendingTodosCount} </small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />{" "}
          {/* todos list con el map */}
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
