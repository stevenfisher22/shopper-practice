import React from 'react';
import Nav from './Nav';
import './app.css';

class App extends React.Component {
    renderContent() {
        return (
            <span>Empty</span>
        );
    }

    render() {
        return (
            <div className="app">
                <Nav />
                <main className="app-content">
                    {this.renderContent()}
                </main>
            </div>
        );
    }
}

export default App