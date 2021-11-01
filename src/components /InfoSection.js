import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
const Section = styled.section``;
const Content = styled.div``;
const ColLeft = styled.div``;
const ColRight = styled.div``;

const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  image,
  reverse,
  delay,
}) => {
  return (
    <Section>
      <Content>
        <ColLeft>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Button to="/homes">{buttonLabel}</Button>
        </ColLeft>
        <ColRight>
          <img src={image} alt="" />
        </ColRight>
      </Content>
    </Section>
  );
};

export default InfoSection;
