import React from 'react';
import About from '../section components/about.jsx';
import Games from '../section components/games.jsx';
import Contact from '../section components/contact.jsx';

const sectionStyle = {height: '45em', border: '1px solid black'};

class Section extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    selectSection = (menu) => {
        if (menu === 'about') return <About/>;
        if (menu === 'games') return <Games/>;
        if (menu === 'contact') return <Contact/>;
    };

    render() {
        return (
            <div style={sectionStyle}>
                {this.selectSection(this.props.menu)}
            </div>
        );
    }
}

export default Section;
