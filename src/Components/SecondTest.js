import React, { useState } from "react";

function SecondTest(props) {
  const [updated, changeName] = useState(props.name);

  const nameHandler = () => {
    changeName((props.name = updated));
  };

  return (
    <div>
      <h1>Click in the button bellow to change</h1>
      <button onClick={nameHandler}>click me</button>
      <h2 name={props.name}>This text is about a very wealth family</h2>
    </div>
  );
}

export default SecondTest;
