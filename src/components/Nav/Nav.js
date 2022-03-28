import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  width: 100%;
  cursor: pointer;
`;

const Label = styled.p`
  color: ${(props) => (props.textColor ? props.textColor : "#8D8EA6")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "normal")};
  font-size: 14px;
`;

export default function Nav({ icon, label, textColor, fontWeight, iconColor }) {
  return (
    <Container>
      <FontAwesomeIcon icon={icon} color={iconColor} />
      <Label style={{ color: textColor, fontWeight: fontWeight }}>
        {label}
      </Label>
    </Container>
  );
}
