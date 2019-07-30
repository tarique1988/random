import React from "react";

const Item = props => {
  return (
    <div className="item shadowDepth5" onClick={props.clicked}>
      <h3>{props.todo.todo}</h3>
      <p className="date-time">{props.todo.createdAt.slice(0, 10)}</p>
    </div>
  );
};

export default Item;
