import React, { useState, useEffect } from "react";
import axios from "axios";

const CallerFunction = () => {
  const [randomNumber, setRandomNumber] = useState(0);

  //   useEffect(() => {
  //     document.title = {
  //       setRandomNumber(randomNumber + 1)
  //     }  //   })

  useEffect(() => {
    {document.title = setRandomNumber(randomNumber + 1)}
  });

  return <div>asd</div>;
};

export default CallerFunction;
