// React Elements
import React from 'react';
import Nav from './Nav';

// Components and Other Imports
import ItemPage from './ItemPage';
import {items} from './static-data';

// CSS
import './app.css';

class App extends React.Component {
    state = {
        activeTab: 0
    };

    handleTabChange = (index) => {
        this.setState({
            activeTab: index
        });
    }

    renderContent() {
        switch(this.state.activeTab) {
            default: 
            case 0: return <ItemPage items={items}/>
            case 1: return <span>Cart</span>
        }
    }

    render() {
        let {activeTab} = this.state;
        return (
            <div className="app">
                <Nav activeTab={activeTab} onTabChange={this.handleTabChange} />
                <main className="app-content">
                    {this.renderContent()}
                </main>
            </div>
        );
    }
}

export default App