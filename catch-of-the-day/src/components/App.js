import React from 'react';
import Header from './Header.js';
import Order from './Order.js';
import Inventory from './Inventory.js';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            fishes: {},
            order: {}
        }
    }

    addFish(fish) {
        const fishes = {...this.state.fishes};
        const timestamp = Date.now();
        fish[`fish-${timestamp}`] = fish;
        this.setState({ fishes: fishes }); 
    }
    render() {
        return (
          <div className="catch-of-the-day">
            <div className="menu">
                <Header tagline="Fresh Sea Food Market" />
            </div>
            <Order />
            <Inventory />
          </div>  
        )
    }
}

export default App;