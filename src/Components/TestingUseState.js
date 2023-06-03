import { useState } from "react";

function Button() {
  const [counter, setCounter] = useState(0);

  const clickHandler = () => {
    setCounter(counter + 1);
  };

  const clickHandlerDecrease = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Above there will be a button for increasing the number.</h1>
      <button onClick={clickHandler}>counter + : {counter}</button>
      <span></span>
      <button onClick={clickHandlerDecrease}> counter - :{counter}</button>
      <div>
        <p>lorem lorem lorem*10</p>
      </div>
    </div>
  );
}

export default Button;
