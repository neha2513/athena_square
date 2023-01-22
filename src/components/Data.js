import React from "react";
import { useState } from "react";
import "../Custom.css"

const Data = () => {
  const [data, setData] = useState([]);

  const fetching = async () => {
    const myData = await fetch(
      "https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1"
    );
    const response = await myData.json();

    setData(response.texts);
  };

  fetching();

  return (
    <div>
      {data.map((param1) => (
        <>
          <div key={param1.heading} className="divs">
            <h1>{param1.heading}</h1>
            <p>{param1.description}</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default Data;
