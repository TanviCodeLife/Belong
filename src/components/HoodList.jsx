import React from 'react';
import Hood from './Hood';
import { v4 } from 'uuid';

function HoodList(props) {

  return(
    <div>
      <h2>Hoods List</h2>
      <div>
        {Object.keys(props.cardData.hoodData).map((hoodId) => {

          let card = props.cardData.hoodData[hoodId]
           return <Hood hoodName={card.hoodName}
            hoodCommuteTime={card.hoodCommuteTime}
            hoodDistance={card.hoodDistance}
            key={hoodId} />
        })}

      </div>
    </div>
  );
}

export default HoodList;
