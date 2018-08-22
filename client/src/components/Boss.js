import React, { Component } from 'react';
import './table.css';
import data from '../output.json'

class Boss extends Component {
    constructor() {
        super()
        this.state = {
            boss: data
        }
    }

    componentDidMount(){
        fetch("/scrape")

            .then(data => this.setState({data}))
            console.log(data)
    }
    render() {
        return (
            <div className="App">
                <ul>
                    {
                        this.state.boss

                            .map(boss =>
                                <li>
                                    {boss[1]} - {boss[7]}
                                </li>
                        )
                    }
                </ul>
            </div>
    );
    }
}

export default Boss;
