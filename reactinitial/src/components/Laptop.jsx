import React from "react";

function Laptop({ brand, name, weight, btnText }) {
  return (
    <div>
      <p>Laptop text</p>
      <p>{brand}</p>
      <p>{name}</p>
      <p>{weight}</p>
      <button>{btnText}</button>
    </div>
  );
}

export default Laptop;
