import React from 'react';
import Card from './card.jsx'

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const containerStyle = {border: '2px solid white'};
const gameStyle = {display: 'inline-block', width: '70%', height: '100%', border: '1px solid red', margin: '0', marginTop: '0', position: 'relative', padding: '6em'};
const panelStyle = {display: 'inline-block', width: '30%', height: '100%', border: '1px solid blue', margin:'0', paddingTop: '0', position: 'absolute'};
const pointsStyle = {height: '3em', border: '1px solid yellow', position: 'absolute', right: '0'};
const puppetStyle = {border: '1px solid green', height: '100%', position: 'relative'};


const cards = [{v: true, i: 1}, {v: false, i: 2}, {v: false, i: 3}, {v: false, i: 4}, {v: false, i: 5}, {v: false, i: 6}, {v: false, i: 7}, {v: false, i: 8}];
const cardsDoubled = shuffle(cards.concat(cards));





class Cards extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            points: 1231,
            cards: cardsDoubled,
            visibleCount: 0
            //this.state.cards.filter(e => e.visible = true).length
        }
    }

    handleClick = (i) => {
        let allCards = this.state.cards;
        if (allCards[i].v === true) {
            allCards[i].v = false;
        }
        else allCards[i] = true;
        this.setState({cards: allCards});
    };



    render() {
        const cardsShow = cardsDoubled.map((e, i) => <Card number={e.i}
                                                           visible={this.state.cards[i].v}
                                                           click={this.handleClick.bind(this)}
                                                           key={i}
                                                           index={i}/>);
        return (
            <div style={{height: '100%', position: 'relative'}}>
                <h1 style={{textAlign: 'center'}}>CARDS GAME</h1>

                <div className="cards" style={gameStyle}>
                    <div style={containerStyle}>
                        {cardsShow}
                    </div>

                </div>
                <div className="panel" style={panelStyle}>
                    <div className="points" style={pointsStyle}>Points: <br/>{this.state.points}</div>
                    <div className="puppet" style={puppetStyle}>Puppet</div>
                </div>


            </div>
        );
    }
}

export default Cards;
