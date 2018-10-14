import React from 'react';
import ReactDOM from 'react-dom';

const navStyle = {marginTop: '5em'};
const ulStyle = {textAlign: 'center', width: '100%'};
const liStyle = {display: 'inline-block', padding: '1.5em'};
const aNavStyle = {textDecoration: 'none', fontSize: '2em'};
const navList = ['about', 'games', 'blog', 'element', 'contact'];

class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            chosen: 'about'
        }
    };

    handleClickAbout = () => {
        if (typeof this.props.selectMenu === 'function') this.props.selectMenu('about');

    };

    handleClickGames = () => {
        if (typeof this.props.selectMenu === 'function') this.props.selectMenu('games');

    };

    handleClickContact = () => {
        if (typeof this.props.selectMenu === 'function') this.props.selectMenu('contact');

    };

    render() {
        return (
            <div>
                <nav style={navStyle}>
                    <ul style={ulStyle}>
                        <li style={liStyle} key={'about'} onClick={this.handleClickAbout.bind(this)}><a style={aNavStyle} key={'about'}  href="#">O mnie</a></li>
                        <li style={liStyle} key={'games'} onClick={this.handleClickGames.bind(this)}><a style={aNavStyle} key={'games'} href="#">Gry edukacyjne</a></li>
                        <li style={liStyle} onClick={this.handleClickContact.bind(this)}><a style={aNavStyle} href="#">Kontakt</a></li>
                    </ul>
                    {this.state.counter}
                </nav>
            </div>
        );
    }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Nav/>,
        document.getElementById('app')
    );
});

export default Nav;



