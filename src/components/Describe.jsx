import { useState, useEffect } from "react";

function Describe() {
  const [buttonText, setbuttonText] = useState("Натисни мене");

  const changeButtonText = () => {
    setbuttonText("Кнопку натиснуто");
  };

  useEffect(() => {
    console.log("Компонент змонтувався");
    return () => {
      console.log("Компонент демонтувався");
    };
  });

  return (
    <div>
      <button onClick={changeButtonText}>{buttonText}</button>
    </div>
  );
}

export default Describe;
