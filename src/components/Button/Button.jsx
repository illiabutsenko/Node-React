import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => (props.active ? "green" : "red")};
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
`;

const ButtonComponent = () => {
  const active = false;
  return (
    <div>
      <Button active={active}>Click Me</Button>
    </div>
  );
};
export default ButtonComponent;
