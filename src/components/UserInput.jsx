import { useState } from "react";
import { Form } from "./Form";

function UserInput() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setUserName(value);
        break;
      case "email":
        setEmail(value);
        break;
      default:
        break;
    }
  }
  return (
    <div>
      <h1>React Form Example</h1>
      <Form name={userName} email={email} handleChange={handleChange} />
    </div>
  );
}

export default UserInput;
