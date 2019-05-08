import React from 'react';
import Hood from './Hood';
import { v4 } from 'uuid';
import styled from 'styled-components';


const HoodListStyle = styled.div`
  width: 45%;
  margin-left: 10%;
  margin-top: -1%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
`;


function HoodList(props) {

  return(
      <HoodListStyle>
        {Object.keys(props.cardData.hoodData)
        .filter((hoodId, index) => (index < 10))
        .map((hoodId) => {
          let card = props.cardData.hoodData[hoodId]
           return <Hood hoodName={card.hoodName}
            hoodCommuteTime={card.hoodCommuteTime}
            hoodDistance={card.hoodDistance}
            key={hoodId} />
        })} 

      </HoodListStyle>
  );
}

export default HoodList;
