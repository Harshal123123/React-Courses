import React from "react";

const Square = (props: any) => {
  return (
    <div className="board-square" onClick={props.onClick}>
      <h3 onClick={props.onClick}>{props.value}</h3>
    </div>
  );
};

export default Square;
