import React from 'react';
import Main from './components/main components/main.jsx';
import ReactDOM from "react-dom";

class App extends React.Component{
    render() {
        return (
            <div>
                <Main/>
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
