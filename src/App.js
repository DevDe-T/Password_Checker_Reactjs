import "./styles.css";
import { useState } from "react";

export default function App() {
  const [inpType, setInpType] = useState("password");
  const [data, setData] = useState("");
  const [strength, setStrength] = useState(0);
  const handleClick = () => {
    if (inpType === "text") {
      setInpType("password");
    } else {
      setInpType("text");
    }
  };
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  const handleChange = (e) => {
    const password = e.target.value;
    let hasNumber = /\d/;
    setData(password);
    if (password.length >= 4 && password.length < 6) {
      setStrength(2);
    } else if (
      password.length >= 6 &&
      password.length < 8 &&
      (password.includes("@") ||
        password.includes("#") ||
        password.includes("$"))
    ) {
      setStrength(4);
    } else if (
      password.length >= 8 &&
      (password.includes("@") ||
        password.includes("#") ||
        password.includes("$"))
    ) {
      setStrength(6);
    }
  };

  const handleClear = () => {
    setData("");
    setStrength(0);
  };
  return (
    <div className="App">
      <div className="inp">
        <input
          type={inpType}
          value={data}
          placeholder="Type"
          onChange={handleChange}
        />
      </div>
      <div className="btn">
        <button onClick={handleClick}>show/hide</button>
        <button onClick={handleClear}>clear</button>
      </div>
      {strength < 3 && (
        <div className="str" style={{ backgroundColor: "red" }}>
          <span>Strength</span>
        </div>
      )}
      {strength >= 3 && strength < 5 && (
        <div className="str" style={{ backgroundColor: "orange" }}>
          <span>Strength</span>
        </div>
      )}
      {strength >= 5 && (
        <div className="str" style={{ backgroundColor: "green" }}>
          <span>Strength</span>
        </div>
      )}
    </div>
  );
}
