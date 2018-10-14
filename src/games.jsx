import React from 'react';

const all = <div>
    <h1>All</h1>
</div>;

class Games extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            game: "all"
        }
    }

    selectGame(select) {
        if (select === "all") return all;
    }
render() {
        return (
            <div>
                {this.selectGame(this.state.game)}
            </div>
        );
    }

}

export default Games;
