import React from "react";
import styled from "styled-components";

const Button2 = () => {
  return (
    <StyledWrapper>
      <button className="contactButton">
        Sign Up
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .contactButton {
  background: #000000;
  color: white;
  font-family: inherit;
  padding: 0.45em;
  padding-left: 1em;
  font-size: 17px;
  font-weight: 500;
  border-radius: 40px;
  border: none;
  cursor: pointer;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  box-shadow: inset 0 0 1.6em -0.6em #000000;
  overflow: hidden;
  position: relative;
  height: 2.8em;
  padding-right: 1rem;
}
.contactButton:hover {
  transform: translate(-0.05em, -0.05em);
  box-shadow: 0.15em 0.15em #000000;
}

.contactButton:active {
  transform: translate(0.05em, 0.05em);
  box-shadow: 0.05em 0.05em #000000;
}

`;

export default Button2;
