import React, { Component } from 'react';
import "./DateTime.css";

const date = new Date().getDate(); //Current Date
const month = new Date().getMonth() + 1; //Current Month
const year = new Date().getFullYear(); //Current Year
export default class DateTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.update(),
            1000
        );
    }

    componentWillUnmount() {
        clearTimeout(this.timerID);
    }
    
    update() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className="date__time">
                <div className="whatDate">Today is: <span>{date} / {month} / {year}</span></div>
                <div className="whatTime">The time is: <span>{this.state.date.toLocaleTimeString()}</span></div>
            </div>
        );
    }
}