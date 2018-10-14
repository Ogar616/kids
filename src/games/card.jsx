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

    changeVisibility = () => {
        if (this.state.isVisible === 0){
            this.setState({isVisible: 1})
            this.props.changeVisibility(this.state.isVisible, this.props.key)
        }
        else this.setState({isVisible: 0});
    };
    //
    // countVisible = () => {
    //     let visible = this.state.isVisible ? 1 : 0;
    //     if (typeof this.props.selectMenu === 'function') this.props.count(visible)
    // };





    render() {
        if (this.state.isVisible === 0){
            return(
                <div style={cardInvisibleStyle}
                     onClick={
                    this.changeVisibility

                }>
                    {this.props.number}
                </div>
                )
        }
        else return (
            <div style={cardVisibleStyle} onClick={this.changeVisibility}>
                {this.props.number}
            </div>
        );
    }

}

export default Card;
