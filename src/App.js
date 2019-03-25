import React from 'react';
import Nav from './Nav';
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
            case 0: return <span>Items</span>
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