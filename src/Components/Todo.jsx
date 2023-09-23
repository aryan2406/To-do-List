import React, { useState } from 'react';

const Todo = () => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    if (todo.trim() !== '') {
      setTodoList([...todoList, { todoName: todo }]);
      setTodo('');
    }
  };

  const deleteTodo = (deleteValue) => {
    const restTodoList = todoList.filter((val) => val.todoName !== deleteValue);
    setTodoList(restTodoList);
  };

  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-indigo-600">
          To-do List
        </h1>
        <form onSubmit={handleForm}>
          <div className="flex space-x-4">
            <input
              className="border-2 border-gray-300 rounded-lg flex-grow p-4 text-gray-800 text-xl focus:outline-none"
              type="text"
              placeholder="Add a Todo"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white py-4 px-8 rounded-lg hover:bg-indigo-700 text-xl transition duration-300 focus:outline-none"
            >
              Add
            </button>
          </div>
        </form>
        <div className="mt-8">
          <ul>
            {todoList.map((singleTodo, index) => (
              <li
                key={index}
                className="bg-gray-200 border border-gray-300 p-6 rounded-lg flex justify-between items-center mb-6"
              >
                <span className="text-gray-800 text-xl">
                  {singleTodo.todoName}
                </span>
                <button
                  onClick={() => deleteTodo(singleTodo.todoName)}
                  className="text-red-600 hover:text-red-800 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;