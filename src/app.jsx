import React from 'react';
import ReactDOM from 'react-dom';
import Nav from "./nav.jsx"

class App extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Nav/>
            </div>
        );
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});


