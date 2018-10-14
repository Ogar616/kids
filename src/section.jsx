import React from 'react';
import About from './about.jsx';
import Games from './games.jsx';
import Contact from './contact.jsx';

const sectionStyle = {height: '45em', border: '1px solid black', textAlign: 'center'};

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
