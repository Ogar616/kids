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


const cards = ['1', '2', '3', '4', '5', '6', '7', '8'];
const cardsDoubled = cards.concat(cards);
shuffle(cardsDoubled);




class Cards extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            points: 1231,
            visibility: [0, 0, 0 ,0 ,0 ,0, 0, 0 ,0 ,0 ,0, 0, 0 ,0 ,0, 0],
            visibleCount: 0
        }
    }

    showCard = (v, i) => {
        let newVisibility = this.state.visibility;
        if (this.state.visibleCount < 2){
            console.log(newVisibility);
            newVisibility[i] = 0 ? 1 : 0;
            console.log(newVisibility);
            this.setState({visibleCount: this.state.visibleCount++, visibility: newVisibility}, () => {});
            console.log(this.state.visibility);
        }
        else{
            let newVisibility = this.state.visibility.map(e => 0)
            console.log(newVisibility);
            this.setState({visibleCount: 1})
        }
    };


    render() {
        const cardsShow = cardsDoubled.map((e, i) => <Card number={e}
                                                           visible={this.state.visibility[i]}
                                                           changeVisibility={this.showCard.bind(this)}
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
