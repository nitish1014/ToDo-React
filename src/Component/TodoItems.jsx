import React from "react";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  const Y = <i class="bi bi-check-square-fill text-2xl"></i>;
  const X = <i class="bi bi-x-square-fill text-2xl"></i>;
  const Bin = <i class="bi bi-trash3-fill text-2xl"></i>;
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        <div className="w-7">{isComplete ? X : Y}</div>
        <p
          className={`text-slate-700 ml-4 text-[18px] ${
            isComplete ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <div
        onClick={() => {
          deleteTodo(id);
        }}
        className="cursor-pointer"
      >
        {Bin}
      </div>
    </div>
  );
};

export default TodoItems;
