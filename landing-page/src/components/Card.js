import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="card1" />
        <div className="card2" />
        <div className="card3">
          * Tell me and I forget, teach me and I may remember, involve me and I learn.
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
  position: absolute;
  margin-top: -100px;
  width: 360px;
}

.container > * {
  width: 340px;
  height: 120px;
  border: solid 1px #bebebe;
  background-color: #1f1f1f;
  position: absolute;
  border-radius: 10px;
  padding: 10px;
  color: #fff;
  box-shadow: 0px 8px 20px -10px #bbbbbb;
  text-shadow: 0px 0px 5px #fff;
  letter-spacing: 1px;
  background-image: radial-gradient(circle 160px at 50% 120%, #353535, #1f1f1f);
}

.card1 {
  width: 300px;
  margin: -20px 0px 0px 20px;
}
.card2 {
  width: 320px;
  margin: -10px 0px 0px 10px;
}

`;

export default Card;
