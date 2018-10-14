import React from 'react';
import About from './about.jsx';
import Games from './games.jsx';

class Section extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    selectSection = (menu) => {
        if (menu === 'about') return <About/>;
        if (menu === 'games') return <Games/>;
    };

    render() {
        const sectionStyle = {height: '45em', border: '1px solid black', textAlign: 'center'};
        return (
            <div style={sectionStyle}>
                {this.selectSection(this.props.menu)}
            </div>

        );
    }

}

export default Section;
