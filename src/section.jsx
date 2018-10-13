import React from 'react';
import Cards from './games/cards.jsx'

class Section extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    checkGame = (game) => {
        const cards = <Cards/>;
        const game2 = <Game2/>;

        if (game === 'cards') return cards;
    };

    render() {
        return (
            this.checkGame(this.props.game)
        );
    }

}

export default Section;
