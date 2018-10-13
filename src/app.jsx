import React from 'react';
import ReactDOM from 'react-dom';
import Nav from "./nav.jsx"
import Section from './section.jsx'

class App extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Nav/>
                <Section game="cards"/>
                <h1>gn</h1>
            </div>
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});


