import React, { Component } from 'react';
import { animals } from './animals';
import AnimalsCard from './AnimalsCard';
import { Switch, Route } from 'react-router-dom';
import AnimalSingle from "../AnimalSingle"

class AnimalsList extends Component {
    state = {
        searchInput: "",
    }
    
    searchInputHandler = (event) => {
        this.setState({
            searchInput: event.target.value,
        });
        console.log(this.state.searchInput);
    }


    animalsListing = animals.map((item) => (<AnimalsCard key={item.name} name={item.name} />));

    render() {
        const animalFilter = animals.filter(animal => {
            return animal.name
            .toLowerCase()
            .includes(this.state.searchInput.toLowerCase());
        })

        const animalsListing = animalFilter.map((item) => (
            <AnimalsCard key={item.name} name={item.name} />
        ))

        // console.log("This.props.match.path:", this.props.match.path);  // animals
        // console.log("This.props.path:", this.props.path);  // undefined
        // console.log("This.props.match.url:", this.props.match.url);  // animals

        return (
            <div className="search_animals">
                <Switch>
                    <Route exact path={this.props.match.path}>
                        <input type="text" onChange={this.searchInputHandler} />
                        <div className="animalsList">{animalsListing}</div>
                    </Route>
                    {/* with :animal you give the params, it goes to Params, colon is ncessary */}
                    <Route path={`${this.props.match.path}/:animal`}>
                        <AnimalSingle />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default AnimalsList;