import ReactDOM from "react-dom/client";
import React, { useState } from 'react';

function MyComponent() {
  const [buttonText, set] = useState("Натисни мене");

  const changeButtonText = () => {
    set("Кнопку натиснуто");
  };
  
  return (
    <div>
      <button onClick={changeButtonText}>{buttonText}</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App());
