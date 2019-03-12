import React from 'react';
import Interest from './Interest';
import { v4 } from 'uuid';

function InterestList(props) {

  return(
    <div>
      <h2>Interests</h2>
      <div>
        {Object.keys(this.props.cardData.hoodData).map((hoodId) => {

          let card = this.props.cardData.hoodData[hoodId]
          return <Marker title={card.hoodName}
            position={{lat: card.hoodLat, lng: card.hoodLng}}
            address={card.hoodName}
            commute={card.hoodCommuteTime}
            distance={card.hoodDistance}
            onClick={this.onMarkerClick}
            key={hoodId} />
        }
      )}
      </div>
    </div>
  );
}

export default InterestList;
