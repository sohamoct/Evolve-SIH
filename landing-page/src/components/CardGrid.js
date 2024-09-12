import React from "react";
import styled from "styled-components";
import Card from "./Card"; 

const CardGrid = () => {
  const cardData = [
    {
      id: 1,
      title: "Upload Resources",
      text: "Easily upload educational materials like PDFs, Word documents, videos, and academic hyperlinks.",
      image: "./gridimg/img1.png"
    },
    {
      id: 2,
      title: "Create Learning Paths",
      text: "Design custom learning paths by organizing resources into structured sequences for students to follow",
      image: "./gridimg/img2.png"
    },
    {
      id: 3,
      title: "Track Student Progress",
      text: "Monitor student progress in real time with statistics like time spent on topics and overall skill completion.",
      image: "./gridimg/img3.png"
    },
    {
      id: 4,
      title: "Analytics & Insights",
      text: "Get detailed reports and insights on student performance, engagement, and content completion rates.",
      image: "./gridimg/img4.png"
    },
    {
      id: 5,
      title: "Navigation of L.P.",
      text: "Follow custom learning paths set by your instructor, with all resources organized for easy access.",
      image: "./gridimg/img5.png"
    },
    {
      id: 6,
      title: "Track Learning stages",
      text: "Keep track of your learning progress with real-time updates and visual progress bars for each topic.",
      image: "./gridimg/img6.png"
    },
    {
      id: 7,
      title: "Reading Time Stats",
      text: "See how much time you've spent on each topic and track your total reading time to finish a particular skill.",
      image: "./gridimg/img7.png"
    },
    {
      id: 8,
      title: "Skill Assessments",
      text: "Test your knowledge with quizzes and interactive assessments at the end of each topic to solidify your learning.",
      image: "./gridimg/img8.png"
    },
  ];

  return (
    <Wrapper>
      <Title>Features</Title>
      <GridWrapper>
        {cardData.map((data) => (
          <Card key={data.id} title={data.title} text={data.text} image={data.image} />
        ))}
      </GridWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2em;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1em;
  text-decoration:underline;
  text-align: left;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 cards per row */
  gap: 50px 10px; /* Space between cards */
`;

export default CardGrid;
