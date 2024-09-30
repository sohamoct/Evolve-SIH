import React from "react";
import styled from "styled-components";

const Button = ({ text }) => {
  return (
    <StyledWrapper>
      <button className="button">{text}</button>
    </StyledWrapper>
  );
};

// Default prop value if no text is passed
Button.defaultProps = {
  text: "Get Started",
};

const StyledWrapper = styled.div`
  .button {
    display: inline-block;
    background: white;
    padding: 12px 24px;
    border: 1px solid #778dff;
    border-radius: 40px;
    transition: all 0.2s ease-in;
    position: relative;
    overflow: hidden;
    font-size: 17px;
    cursor: pointer;
    height: 3rem;
    color: black;
    z-index: 1;
  }

  .button:before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    background-color: white;
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  .button:after {
    content: "";
    position: absolute;
    left: 55%;
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
    background-color: #39bda7;
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  .button:hover {
    color: #ffffff;
    border: 1px solid #778dff;
  }

  .button:hover:before {
    top: -35%;
    background-color: #778dff;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  .button:hover:after {
    top: -45%;
    background-color: #778dff;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }
`;

export default Button;
