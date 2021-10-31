import React from "react";
import styled, { css } from "styled-components";
import { Button } from "./Button";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  aspect-ratio: 1;
`;
const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;
const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100%-100px);
  color: white;

  h1 {
    font-size: clamp(1rem, 8vh, 2rem);
  }
`;
const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`;

const ArrowButton = css`
  width: 30px;
  height: 30px;
  color: white;
  cursor: pointer;
  border-radius: 50px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: #cd853f;
    transform: scale(1.05);
  }
`;

const ArrowLeft = styled(BsFillArrowLeftCircleFill)`
  ${ArrowButton}
`;
const ArrowRight = styled(BsFillArrowRightCircleFill)`
  ${ArrowButton}
`;
const Hero = ({ slides }) => {
  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((elem, index) => (
          <HeroSlide key={index}>
            <HeroSlider>
              <HeroImage src={elem.image} />
              <HeroContent>
                <h2>{elem.title}</h2>
                <p>{elem.price}</p>
                <Button
                  to={elem.path}
                  primary="true"
                  css={`
                    max-width: 160px;
                  `}
                >
                  {elem.label}
                </Button>
              </HeroContent>
            </HeroSlider>
          </HeroSlide>
        ))}
        <SliderButtons>
          <ArrowLeft />
          <ArrowRight />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
