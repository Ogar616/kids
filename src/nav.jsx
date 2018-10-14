import React from 'react';
import ReactDOM from 'react-dom';

const navStyle = {marginTop: '5em'};
const ulStyle = {textAlign: 'center', width: '100%'};
const liStyle = {display: 'inline-block', padding: '1.5em'};
const aNavStyle = {textDecoration: 'none', fontSize: '2em'};

class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    };

    handleClick = () => {
        if (typeof this.props.selectMenu === 'function') this.props.selectMenu(this.key);

    };

    render() {
        return (
            <div>
                <nav style={navStyle}>
                    <ul style={ulStyle}>
                        <li style={liStyle} key={'about'} onClick={this.handleClick.bind(this)}><a style={aNavStyle}  href="#">O mnie</a></li>
                        <li style={liStyle} key={'games'} onClick={this.handleClick.bind(this)}><a style={aNavStyle}  href="#">Gry edukacyjne</a></li>
                        <li style={liStyle}><a style={aNavStyle} href="#">Blog</a></li>
                        <li style={liStyle}><a style={aNavStyle} href="#">Element</a></li>
                        <li style={liStyle}><a style={aNavStyle} href="#">Kontakt</a></li>
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



