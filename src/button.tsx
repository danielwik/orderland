import React, {useEffect, useState } from "react";


export default function Button(){

  let [click, setClick] = useState(false);
  let [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1)
    console.log(count)
  },[click])

  return (
    <div>
      <p>Home</p>
      <button onClick={() => setClick(!click)}>Click Me</button>
    </div>
  );

}
