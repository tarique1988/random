import React from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

const Item = props => {
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-Us");
  return (
    <div className="item shadowDepth5" onClick={props.clicked}>
      <h3>{props.todo.todo}</h3>
      <p className="date-time">
        {timeAgo.format(new Date(props.todo.createdAt))}
      </p>
    </div>
  );
};

export default Item;
