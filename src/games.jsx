import React from 'react';
import Cards from "./games/cards.jsx";

const divStyle = {border: '1px solid black', width: '12em', height: '10em', margin: '3em', display: 'inline-block', textAlign: 'center', paddingTop: '4em', cursor: 'pointer'};



class Games extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            game: 'cards'
        }
    }

    chooseCards = () => {
          this.setState({game: 'cards'})
    };


render() {
    if (this.state.game === 'all'){
        return (
            <div style={{paddingTop: '2.5em'}}>
                <div className="game" onClick={this.chooseCards} style={divStyle}>Cards</div>
                <div className="game" style={divStyle}>Gra 2</div>
                <div className="game" style={divStyle}>Gra 3</div>
                <div className="game" style={divStyle}>Gra 4</div>
                <div className="game" style={divStyle}>Gra 5</div>
                <div className="game" style={divStyle}>Gra 6</div>
            </div>
        );
    }
    if (this.state.game === 'cards'){
        return (
            <Cards/>
        );
    }
    }
}

export default Games;
