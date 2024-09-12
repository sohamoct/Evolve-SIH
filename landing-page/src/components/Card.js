import React from "react";
import styled from "styled-components";

const Card = ({ title, text, image }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="img" style={{ backgroundImage: `url(${image})` }} />
        <span>{title}</span>
        <p className="info">{text}</p>
        <button className="know-more">Know More</button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    border-radius: 10px;
    background-color: #075891;
    width: 300px;
    height: 350px;
    padding: 20px;
    box-shadow: 5px 8px 18px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Add movement transition */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .card:hover {
    transform: translateY(-10px); /* Move the card upwards on hover */
    box-shadow: 8px 12px 24px rgba(0, 0, 0, 0.2); /* Increase shadow depth */
  }

  .card .img {
    border-radius: 100px; /* Keep the circle shape */
    height: 100px;
    width: 100px;
    margin-bottom: 10px;
    background-size: cover;
    background-position: center;
    transition: height 0.3s ease, width 0.3s ease; /* Only increase size on hover */
  }

  .card:hover .img {
    height: 110px; /* Slightly increase the size */
    width: 110px;
  }

  .card span {
    font-weight: bold;
    font-size: 24px;
    text-align: center;
  }

  .info {
    margin-top: 10px;
    color: white;
    text-align: justify;
  }

  .know-more {
    // background-color: #3257C6;
    background-color: #000000;
    border-radius: 20px;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
    margin-top: 20px;
  }

  .know-more:hover {
    background-color: #3257C6;
    transform: scale(1.05); /* Slightly scale the button on hover */
  }
`;

export default Card;
