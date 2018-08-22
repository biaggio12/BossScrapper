import React, { Component } from 'react';
import './table.css';
import data from '../output.json'

class Boss extends Component {
    constructor() {
        super()
        this.state = {
            boss: []
        }
    }

    componentDidMount(){
        fetch("/scrape")
            .then(res => res.json())
            .then(data => this.setState({boss}))
    }
    render() {
        return (
            <div className="App">
                <ul>
                    {
                        this.state.boss.map(boss =>
                        <li key={boss[0]}>
                            {boss[1]}
                        </li>
                        )
                    }
                </ul>
            </div>
    );
    }
}

export default Boss;
