import React from 'react';
import ReactDOM from 'react-dom';


class Nav extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        const navStyle = {marginTop: '5em'};
        const ulStyle = {textAlign: 'center', width: '100%'};
        const liStyle = {display: 'inline-block', padding: '1.5em'};
        const aNavStyle = {textDecoration: 'none', fontSize: '2em'};
        return (
            <div>
                <nav style={navStyle}>
                    <ul style={ulStyle}>
                        <li style={liStyle}><a style={aNavStyle} href="">O mnie</a></li>
                        <li style={liStyle}><a style={aNavStyle} href="">Gry edukacyjne</a></li>
                        <li style={liStyle}><a style={aNavStyle} href="">Blog</a></li>
                        <li style={liStyle}><a style={aNavStyle} href="">Element</a></li>
                        <li style={liStyle}><a style={aNavStyle} href="">Kontakt</a></li>
                    </ul>

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
