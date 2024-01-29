import styled from "styled-components";
import styles from "./Button.module.css";
import styles2 from "./CustomButton.module.css";

const ButtonStyled = styled.button`
  background-color: ${(props) => (props.primary ? "green" : "red")};
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
`;

function Button(props) {
  return (
    <button
      className={props.primary ? styles.primary : styles.button}
      {...props}
    >
      {props.children}
    </button>
  );
}

function Button2(props) {
  return (
    <button
      className={props.baseButton ? styles2.baseButton : styles2.dangerButton}
      {...props}
    >
      {props.children}
    </button>
  );
}
export { Button, ButtonStyled, Button2 };
