import React from 'react';
import Hood from './Hood';
import { v4 } from 'uuid';
import styled from 'styled-components';


const HoodListStyle = styled.div`
  margin-left: 2%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center
  margin-top: 130px;
`;


function HoodList(props) {

  return(

      <HoodListStyle>
        {Object.keys(props.cardData.hoodData).map((hoodId) => {

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
