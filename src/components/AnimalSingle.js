import React from 'react';
import { useParams, useRouteMatch, useHistory } from 'react-router-dom';

const AnimalSingle = () => {
    let {animal} = useParams();

    // const match = useRouteMatch();
    // console.log(match);

    let history = useHistory();

    return (
        <div className="singleAnimal">
            <div className="singleAnimalBox">
                <p>This is the page for {animal}{" "}</p>
                <p>What would like to know about {animal}?</p>
                <p> Try the <a href={`https://en.wikipedia.org/wiki/${animal}`} target="_blank" rel="noreferrer"> Wikipedia page </a> for this animal.</p>
            </div>
            <div>
                <button onClick={() => history.goBack()}>
                    Back to animals
                </button>
            </div>
        </div>
    );
};

export default AnimalSingle;