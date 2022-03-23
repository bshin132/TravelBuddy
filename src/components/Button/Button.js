import React from "react";
import styled from "styled-components";

const Container = styled.button`
  width: ${(props) => (props.type ? theme[props.type].buttonWidth : "120px")};
  height: ${(props) => (props.type ? theme[props.type].buttonHeight : "40px")};
  background-color: ${(props) => props.type ? theme[props.type].default : "#3E8F7D"};
  display:flex;
  justify-content:center;
  align-items:center;
  border: ${(props) => props.type ? theme[props.type].borderStyle : "none"};
  border-radius: 10px;
  cursor:pointer;
  &:hover{
    background-color: ${props => props.type ? theme[props.type].onHover : "#70A99C"};
  }
`;

const Text = styled.p`
  font-size: 14px;
  color: #000000;
`;

const theme = {
  defaultButton: {
    onHover: "#FFFFFF",
    default: "#FFFFFF",
    borderStyle: "none",
    buttonWidth: "120px",
    buttonHeight: "40px"
  },
  backButton: {
    onHover: "#70A99C",
    default: "#3E8F7D",
    borderStyle: "none",
    buttonWidth: "80px",
    buttonHeight: "30x"
  }
};

export default function Button({label, buttonWidth, buttonBackgroundColor, type}) {
  return (
    <Container
      type={type}
      style={{
        width: buttonWidth,
        backgroundColor: buttonBackgroundColor,
      }}
    >
      <Text>{label}</Text>
    </Container>
  );
}

// export default function Button(props) {
//   return (
//     <Container
//       style={{
//         width: props.buttonWidth,
//         backgroundColor: props.buttonBackgroundColor,
//       }}
//     >
//       <Text>{props.label}</Text>
//     </Container>
//   );
// }