import React, { useState } from "react";

function Laptop({ brand, name, weight }) {
  const [btnText, setBtntext] = useState("Show more");

  const handleClick = () => {
    setBtntext("show less");
  };
  return (
    <div>
      <p>{brand}</p>
      <p>{name}</p>
      <p>{weight}</p>
      <button onClick={handleClick}>{btnText}</button>
    </div>
  );
}

export default Laptop;
