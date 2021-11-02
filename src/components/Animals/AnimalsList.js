import React, { Component } from 'react';
import { animals } from './animals';
import AnimalsCard from './AnimalsCard';
import { Switch, Route } from 'react-router-dom';
import AnimalSingle from "/Users/bc-macair007/Desktop/react_projects/animals/src/components/AnimalSingle.js"

class AnimalsList extends Component {
    
    animalsListing = animals.map((item) => (<AnimalsCard key={item.name} name={item.name} />));

    render() {
        return (
            <div className="animalsList">
                <Switch>
                    <Route exact path={this.props.match.path}>
                        {this.animalsListing}
                    </Route>
                    <Route path={`${this.props.match.path}/:animal`}>
                        <AnimalSingle />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default AnimalsList;