import React from 'react';
import { animals } from './animals';
import AnimalsCard from './AnimalsCard';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import AnimalSingle from "/Users/bc-macair007/Desktop/react_projects/animals/src/components/AnimalSingle.js"

const AnimalsList = () => {
    const match = useRouteMatch();

    const animalsListing = animals.map((item) => (<AnimalsCard key={item.name} name={item.name} />));


    return (
        <div className="animalsList">
            <Switch>
                <Route exact path={match.path}>
                    {animalsListing}
                </Route>
                <Route path={`${match.path}/:animal`}>
                    <AnimalSingle />
                </Route>
            </Switch>
        </div>
    );
};

export default AnimalsList;