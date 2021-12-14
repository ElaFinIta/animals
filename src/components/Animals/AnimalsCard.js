import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const AnimalsCard = (props) => {
    const match = useRouteMatch();
    // const { path, url} = useRouteMatch;
    // console.log("path: ", path);
    // console.log("url: ", url);

    return (
        <div className="card">
            <Link to={`${match.url}/${props.name}`}>
                <h2>{props.name}</h2>
                <img src={`https://source.unsplash.com/1600x900/?${props.name}`} alt={`${props.name}`}/>
            </Link>
        </div>
    );
};

export default AnimalsCard;