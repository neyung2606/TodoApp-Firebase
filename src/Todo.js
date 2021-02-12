import { Button, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import { db } from "./config/firebase_config";

const TodoList = ({ todo, isProgress, id }) => {
  const handleChangeProgress = () => {
    db.collection("todos").doc(id).update({
      isProgress: !isProgress,
    });
  };

  const deleteTodo = () => {
    db.collection("todos").doc(id).delete();
  };

  return (
    <div key={id} style={{ display: "flex", justifyContent: "center" }}>
      <ListItem style={{ width: "30%" }}>
        <ListItemText
          primary={todo}
          secondary={isProgress ? "In Progress" : "Completed"}
        />
      </ListItem>
      <Button onClick={handleChangeProgress}>
        {isProgress ? "Done" : "Undone"}
      </Button>
      <Button onClick={deleteTodo}>X</Button>
    </div>
  );
};

export default TodoList;
