import { useState } from "react";
const Addtodos = ({ onAdd }) => {
  const [input, setInput] = useState("");
  const handleAdd = () => {
    onAdd(input);
    setInput("");
  };
  return (
    <>
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter Todo Here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleAdd()}
        />
      </div>
      <button onClick={handleAdd}>Add Todo</button>
    </>
  );
};
export default Addtodos;
