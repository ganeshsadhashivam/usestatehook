import React from "react";
import { useState } from "react";
const Colorize = () => {
  const [color, setColor] = useState("#bfdbfe");

  const getRandomColor = () => {
    const random = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return random;
  };

  const changeColor = () => {
    const randomColor = getRandomColor();
    console.log(randomColor);
    setColor(randomColor);
  };
  return (
    <div className="colorize">
      <div className="box" style={{ background: color }}>
        {color}
      </div>
      <button onClick={changeColor}>change color</button>
    </div>
  );
};

export default Colorize;
