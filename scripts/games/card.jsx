import React from 'react'

const cardVisibleStyle = {display: 'inline-block', width: '4.5em', height: '4.5em', margin: '1em', border: '1px solid black', position: 'relative', paddingTop: '2em'};
const cardInvisibleStyle = {display: 'inline-block', width: '4.5em', height: '4.5em', margin: '1em', border: '1px solid black', backgroundColor: 'black', position: 'relative', paddingTop: '2em'};

class Card extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isVisible: this.props.visible
        }
    }

    handleClick = i => {
        let allCards = this.state.cards;
        if (allCards[i].v === true) {
            allCards[i].v = false;
        }
        else allCards[i] = true;
        this.setState({cards: allCards});
    };





    render() {
        if (this.props.visible === false){
            return(
                <div style={cardInvisibleStyle} onClick={this.handleClick(this.props.index)}>
                    {this.props.number}
                </div>
                )
        }
        else return (
            <div style={cardVisibleStyle}>
                {this.props.number}
            </div>
        );
    }

}

export default Card;
