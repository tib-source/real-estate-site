import React, { useState, useRef } from "react";
import styled, { css, keyframes } from "styled-components";
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

const rightFadeIn = keyframes`
0%{
  filter: blur(5px);
  transform: scale(1.2) translateX(60px);
  }
100%{
  opacity: 1;
  transform: scale(1.0) translateX(0);
}
`;

const leftFadeIn = keyframes`
0%{
  transform: scale(1.2) translateX(-60px);
  filter: blur(5px);
}
100%{
  opacity: 1;
  transform: scale(1) translateX(0);
}
`;

const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;
const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s ease-in;

  &.left {
    display: flex;
    animation: ${leftFadeIn} 0.3s cubic-bezier(0, 0.93, 0.28, 0.94);
    animation-fill-mode: forwards;
  }
  &.right {
    animation: ${rightFadeIn} 0.3s cubic-bezier(0, 0.93, 0.28, 0.94);
    animation-fill-mode: forwards;
  }

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(1, 2, 3, 1) 100%
    );
  }
`;
console.log("object");
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
  width: calc(100% - 100px);
  color: white;

  h1 {
    font-size: 2rem;
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.781);
    text-align: left;
    margin-bottom: 0.8rem;
  }

  p {
    margin-bottom: 1.2rem;
    text-shadow: 2px 2px 2px rgb(0, 0, 0);
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
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const [right, setRight] = useState(true);
  const timeout = useRef(null);

  const nextSlide = () => {
    setRight(true);
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setRight(false);
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(right);

  if (!Array.isArray(slides) || slides.length === 0) {
    return null;
  }
  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((elem, index) => (
          <HeroSlide key={index}>
            {index === current && (
              <HeroSlider className={right ? "right" : "left"}>
                <HeroImage src={elem.image} />
                <HeroContent>
                  <h1>{elem.title}</h1>
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
            )}
          </HeroSlide>
        ))}
        <SliderButtons>
          <ArrowLeft onClick={prevSlide} />
          <ArrowRight onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
