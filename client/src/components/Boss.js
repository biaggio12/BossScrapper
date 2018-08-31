import React, { Component } from 'react';
import './table.css';
import data from '../output.json'

class Boss extends Component {
    constructor() {
        super();
        this.state = {
            boss: data
        }
    }

    componentDidMount(){
        fetch("/scrape")

            .then(data => this.setState({data}))
    }
    render() {
        return (
            <div className="App">
                <ul>
                    {
                        this.state.boss

                            .map((boss,index) => {
                                if([8,9,40,44,61,67,71,92,94,108,110,111,126,130,176,186,191,195,197,200,205,225,231,244,286,289,300,302,313,315,323,331,333,334,336,337,340,343,346,347,350,351].includes(index)) {
                                    return (<li>{boss[1]} - {boss[7]}</li>)
                                }
                            }

                        )
                    }
                </ul>
            </div>
    );
    }
}

export default Boss;
