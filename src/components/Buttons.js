import React, {Component} from 'react';
import "./Buttons.css";

class Buttons extends Component {
    render() {
        return (
            <div className="weather__buttons">
                {this.props.items.map((item, index) => (
                    <button className="weather__btn"
                        key={index}
                        onClick={() => {
                        this.setState({ activePlace: index });
                        }}
                    >
                        {item.name}
                    </button>
                ))}
            </div>
        )
    }
}

export default Buttons;