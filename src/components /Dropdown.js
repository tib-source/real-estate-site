import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { menuData } from "./../data/MenuData";
import { Button } from "./Button";
import { FaTimes } from "react-icons/fa";

const CloseIcon = styled(FaTimes)``;
const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 2rem;
  font-size: 1.6rem;
  cursor: pointer;
  color: #000d1a;
`;

const slideIn = keyframes`
    from{ 
        opacity: 0.5;
        transform: translateX(20px)
    }
    to{ 
        opacity: 1;
        transform: translateX(0);
    }
`;
const DropdownContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-color: #cd853f;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${slideIn} 0.3s cubic-bezier(0, 0.8, 0.2, 0.8);
`;
const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 30%;
`;
const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  place-items: center;
`;
const DropdownLink = styled(Link)`
  font-size: 1.25rem;
  color: white;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  &:hover {
    color: #333;
  }
`;
const BtnWrap = styled.div``;

const Dropdown = ({ toggleMenu }) => {
  return (
    <DropdownContainer>
      <Icon>
        <CloseIcon onClick={toggleMenu} />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((elem, indx) => (
            <DropdownLink to={elem.link} key={indx}>
              {elem.title}
            </DropdownLink>
          ))}
        </DropdownMenu>
        <BtnWrap>
          <Button primary="true" big="true" round="true" to="/contact">
            Contact Us
          </Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
