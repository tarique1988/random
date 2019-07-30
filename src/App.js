import React, { useState, useEffect } from "react";
import firebase from "./utils/firebase";
import "./App.css";

//components import
import Item from "./item";

const useTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("todos")
      .orderBy("createdAt", "desc")
      .onSnapshot(snapshot => {
        let newTodos = [];
        snapshot.docs.map(doc =>
          newTodos.push({
            id: doc.id,
            ...doc.data()
          })
        );
        setTodos(newTodos);
      });
  }, []);
  return todos;
};

const App = () => {
  const todos = useTodos();
  const [currentTodo, setCurrentTodo] = useState("");

  const onSubmitHandler = e => {
    e.preventDefault();
    if (currentTodo.trim().length > 0) {
      firebase
        .firestore()
        .collection("todos")
        .add({ todo: currentTodo, createdAt: new Date().toISOString() })
        .then(() => {})
        .catch(err => console.log(err));
    }
    setCurrentTodo("");
  };
  const onChangeHandler = e => {
    setCurrentTodo(e.currentTarget.value);
  };

  const itemClickedHandler = key => {
    firebase
      .firestore()
      .doc(`todos/${key}`)
      .delete();
  };
  return (
    <div>
      <div className="box2">
        <div className="card container shadowDepth4">
          <h1 className="title-shadow">TODO APP</h1>
        </div>
      </div>
      <form action="" onSubmit={e => onSubmitHandler(e)}>
        <input
          type="text"
          className="text"
          onChange={e => onChangeHandler(e)}
          value={currentTodo}
        />
        <button type="submit" className="button shadowDepth4">
          <h3>Add</h3>
        </button>
      </form>
      <div className="items shadowDepth4">
        {todos.length === 0 ? (
          <p>Add a TODO item</p>
        ) : (
          <p>Click TODO item to Delete</p>
        )}
        {todos.map(todo => (
          <Item
            key={todo.id}
            todo={todo}
            clicked={() => itemClickedHandler(todo.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
