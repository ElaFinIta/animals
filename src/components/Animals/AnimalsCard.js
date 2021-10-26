import React from 'react';

const AnimalsCard = (props) => {
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <img src={`https://source.unsplash.com/1600x900/?${props.name}`} alt="animal"/>
        </div>
    );
};

export default AnimalsCard;