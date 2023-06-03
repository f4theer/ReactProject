import React, { useState } from "react";
import "./Expense.css";

function Expense(props) {
  const name = "gary";
  const price = 34.0;

  const [currentName, setName] = useState(name);

  const changeName = () => {
    setName("jordan");
  };

  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="wrapper-expense">
      <div className="expense">{name}</div>
      <div className="expense">{price}</div>
      <div></div>
      <button onClick={increaseCounter}>increase</button>
      <button onClick={changeName}>Change the name inside</button>
    </div>
  );
}

export default Expense;
