import React, { useEffect, useRef, useState } from "react";
import TodoItems from "./TodoItems";

const Todo = () => {
  const [todoList, SetTodoList] = useState(
    localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : []
  );
  const inputRef = useRef();
  const Add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText == "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    SetTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    SetTodoList((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    SetTodoList((prevTodo) => {
      return prevTodo.map((Todo) => {
        if (Todo.id === id) {
          return { ...Todo, isComplete: !Todo.isComplete };
        }
        return Todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoList));
  }, [todoList]);
  return (
    <>
      <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
        <div className="flex items-center mt-7s gap-2 justify-between">
          <h1 className="text-3xl font-semibold ">To do List</h1>
          <i class="bi bi-check2-square text-3xl"></i>
        </div>

        <div className="flex items-center my-7 bg-gray-200 rounded-full">
          <input
            className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
            ref={inputRef}
            type="text"
            placeholder="add your task"
          ></input>
          <button
            onClick={Add}
            className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-large font-medium cursor-pointer"
          >
            Add +
          </button>
        </div>

        <div>
          {todoList.map((item, index) => {
            return (
              <TodoItems
                key={index}
                text={item.text}
                id={item.id}
                isComplete={item.isComplete}
                deleteTodo={deleteTodo}
                toggle={toggle}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Todo;
