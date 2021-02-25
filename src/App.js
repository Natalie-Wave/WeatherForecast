import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import DateTime from './components/DateTime';
import MainContent from './components/MainContent';
//import Buttons from './components/Buttons';
import Footer from './components/Footer';
import "./components/Buttons.css";

const PLACES = [
  { name: "Saint Petersburg", zip: "Saint Petersburg" },
  { name: "Helsinki", zip: "Helsinki" },
  { name: "Lissabon", zip: "Lissabon" },
  { name: "Canberra", zip: "Canberra" },
  { name: "Reykjavík", zip: "Reykjavík" },
  { name: "Doho", zip: "Doho" },
  { name: "Ottava", zip: "Ottava" },
  { name: "Paris", zip: "Paris" },
  { name: "Antananarivo", zip: "Antananarivo"},
  { name: "Tromsø", zip: "Tromsø"},
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0,
      PLACES: 0,
    };
  }

  render() {
    const activePlace = this.state.activePlace;
    return (
      <div>
        <Header />
        <DateTime />
        <MainContent
          key={activePlace}
          zip={PLACES[activePlace].zip} 
        />
        {/*<Buttons items={this.state.PLACES} />*/}
        <div className="weather__buttons">
            {PLACES.map((item, index) => (
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
        <Footer />
      </div>
    )
  }
}

export default App;
