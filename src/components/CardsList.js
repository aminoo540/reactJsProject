import React from 'react';
import Card from './Card';

const CardsList = ({boats}) =>
    <div>
        {boats.map(boat =>
            <div key={boat.id}>
                <Card boatOffers={boat}/>
            </div>
        )}
    </div>;

export default CardsList;
