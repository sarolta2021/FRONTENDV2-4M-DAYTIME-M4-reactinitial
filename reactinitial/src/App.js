import React, { useEffect, useState } from "react";
import LoadingMask from "./components/LoadingMask";
import Laptop from "./components/Laptop";

const url = "https://demoapi.com/api/laptop";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [laptop, setLaptop] = useState([]);
  const [btnText, setBtnText] = useState("Show more");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((items) => {
        setLaptop(items);
        console.log(items);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingMask />
      ) : (
        laptop.map((item, index) => (
          <Laptop
            key={index}
            name={item.name}
            brand={item.brand}
            weight={item.weight}
            btnText={btnText}
          />
        ))
      )}
    </div>
  );
};

export default App;
