import { Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { db } from "./config/firebase_config";
import "./App.css";
import TodoList from "./Todo";

const App = () => {
  const [todo, setTodo] = useState();
  const [lists, setLists] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const onChangeText = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();

    db.collection("todos").add({
      todo: todo,
      isProgress: true,
      timestamp: new Date(),
    });

    setTodo("");
  };

  const getTodos = () => {
    db.collection("todos").onSnapshot((querySnapShot) => {
      setLists(
        querySnapShot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          isProgress: doc.data().isProgress,
        }))
      );
    });
  };

  return (
    <div className="App">
      <h1>Văn Nguyên Todo App</h1>
      <form>
        <TextField
          id="standard-basic"
          value={todo}
          onChange={(e) => onChangeText(e)}
          label="Write a todo"
        />
        <Button
          type="submit"
          variant="contained"
          onClick={addTodo}
          style={{ display: "none" }}
        >
          Submit
        </Button>
      </form>
      {lists.map((todo, i) => (
        <TodoList todo={todo.todo} isProgress={todo.isProgress} id={todo.id} />
      ))}
    </div>
  );
};

export default App;
