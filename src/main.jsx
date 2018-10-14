import React from 'react';
import Nav from "./nav.jsx"
import Section from './section.jsx'
import Footer from './footer.jsx'

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menu: "about"
        }
    }

    onSelectMenu = (menu) => {
        console.log("onselsect w app");
        this.setState({menu: menu})
    };

    render() {
        return (
            <div>
                <Nav selectMenu={this.onSelectMenu}/>
                {this.state.menu}
                <Section menu={this.state.menu}/>
                <Footer/>
            </div>
        );
    }
}

export default Main;


