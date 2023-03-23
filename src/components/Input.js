import { useState } from "react";

export default function Input(){
  const [input, setInput] = useState('');

  const funcInput = (e) => {
    setInput(e.target.value);
  }

  return (
    <>
      <h1>{input}</h1>
      <label>Input Name</label>
      <br></br>
      <input type="text" onKeyUp={funcInput} />
    </>
  )
}