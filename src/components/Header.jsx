import React from 'react';
import styled from 'styled-components';
import PinIcon from './assets/pin_icon.png';

const HeaderStyle = styled.header`
  display: flex;
  felx-direction: row;
  align-items: center;
  justify-content: space;
  background: linear-gradient(to left, #ff5050 0%, #ffffcc 100%);
  border-bottom: 1px solid linear-gradient(to left, #ff5050 0%, #ffffcc 100%);
  color: black;
  left: 0;
`;

const HeaderText = styled.h1`
  letter-spacing: 0.10rem;
`

const ImageStyle = styled.img`
  height: 3rem;
`

function Header(){
  return (
    <HeaderStyle>
      <ImageStyle src={PinIcon} alt='Logo'/>
      <HeaderText>
        Belong
      </HeaderText>

    </HeaderStyle>
  );
}

export default Header;
