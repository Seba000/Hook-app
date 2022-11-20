import React from "react";
import ReactDOM from "react-dom/client";
//--
import { BrowserRouter } from "react-router-dom";
//https://v5.reactrouter.com/web/guides/quick-start v6
//--
import { MainApp } from "./08-useContext/MainApp";
//import { TodoApp } from "./07-useReducer/TodoApp";
//import "./07-useReducer/intro-reducer";
//import { MemoHook } from "./06-useMemo/MemoHook";
//import { Memorize } from "./06-useMemo/Memorize";
//import { Layout } from "./05-useLayoutEffect/Layout";
//import { FocusScreen } from "./04-useRef/FocusScreen";
//import { MultipleCustomHooks } from "./03-ejemplos/MultipleCustomHooks";
//import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
//import { SimpleForm } from "./02-useEffect/SimpleForm";
//import { HooksApp } from "./HooksApp";
//import { CounterApp } from "./01-useState/CounterApp";
//import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
//--

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <MainApp />
    </React.StrictMode>
  </BrowserRouter>
);
