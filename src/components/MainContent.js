import React, {Component} from 'react';
import "./MainContent.css";
//import Advice from "./Advice";
import GifsList from "./GifsList";
import "./Clothes.css";

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherData: null,
            gifs: '',
            advice: [[<img src="https://img.icons8.com/plasticine/100/000000/sun-glasses.png" alt=""/>,
                        <span className="plus"> + </span>,
                            <img src="https://img.icons8.com/plasticine/100/000000/swimming-suit.png" alt=""/>,
                            <span className="plus"> + </span>,
                            <img src="https://img.icons8.com/plasticine/100/000000/panama-hat.png" alt=""/>,
                            <span className="plus"> + </span>,
                            <img src="https://img.icons8.com/plasticine/100/000000/flip-flops.png" alt=""/>
                        ],
            [<img src="https://img.icons8.com/plasticine/100/000000/t-shirt.png" alt=""/>,
                            <span className="plus"> + </span>,
                            <img src="https://img.icons8.com/plasticine/100/000000/shorts.png" alt=""/>,
                            <span className="plus"> + </span>,
                            <img src="https://img.icons8.com/plasticine/100/000000/baseball-cap.png" alt=""/>,
                            <span className="plus"> + </span>,
                            <img src="https://img.icons8.com/plasticine/100/000000/sandals.png" alt=""/>
                        ],
            [<img src="https://img.icons8.com/plasticine/100/000000/jeans.png" alt=""/>,
                            <span className="plus"> + </span>,
                            <img src="https://img.icons8.com/plasticine/100/000000/jumper--v2.png" alt=""/>,
                            <span className="plus"> + </span>,
                            <img src="https://img.icons8.com/plasticine/100/000000/beret.png" alt=""/>,
                            <span className="plus"> + </span>,
                            <img src="https://img.icons8.com/plasticine/100/000000/sneakers.png" alt=""/>
                        ],
            [<img src="https://img.icons8.com/plasticine/100/000000/jeans.png" alt=""/>,
                            <span className="plus"> + </span>,
                            <img src="https://img.icons8.com/plasticine/100/000000/jacket.png" alt=""/>,
                            <span className="plus"> + </span>,
                            <img src="https://img.icons8.com/plasticine/100/000000/scarf.png" alt=""/>,
                            <span className="plus"> + </span>,
                            <img src="https://img.icons8.com/plasticine/100/000000/boots.png" alt=""/>
                        ],
            [<img src="https://img.icons8.com/plasticine/100/000000/trousers.png" alt=""/>,
                                <span className="plus"> + </span>,
                                <img src="https://img.icons8.com/plasticine/100/000000/coat.png" alt=""/>,
                                <span className="plus"> + </span>,
                                <img src="https://img.icons8.com/plasticine/100/000000/christmas-mitten.png" alt=""/>,
                                <span className="plus"> + </span>,
                                <img src="https://img.icons8.com/plasticine/100/000000/winter-boots.png" alt=""/>
                            ]
                        ],
        };
    }
    updateData = (value) => {
        this.setState({ gifs: value })
    }
    componentDidMount() {
        const zip = this.props.zip;
        const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
            zip +
            "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial";
        fetch(URL).then(res => res.json()).then(json => {
            this.setState({ weatherData: json });
        });
        this.setState({
            gif: this.state.gifs,
        });
    }
    render() {
        const weatherData = this.state.weatherData;
        if (!weatherData) return <div>Loading</div>
        const weather = weatherData.weather[0];
        const styles = {
            fontSize: 30,
            fontWeight: 'bold',
            color: ""
        };
        const bgStyles = {
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        };
        if(weatherData.name === 'Saint Petersburg') {
            bgStyles.background = "linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url('https://images.wallpaperscraft.ru/image/mostovaya_arhitektura_severnaya_stolica_doma_gorod_sankt-peterburg_ulica_13711_1920x1200.jpg')"
        } else if(weatherData.name === 'Helsinki') {
            bgStyles.backgroundImage = "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://images.wallpaperscraft.ru/image/khelsinki_finlyandiya_stolitsa_vid_sverkhu_hdr_98000_1920x1200.jpg')"
        } else if(weatherData.name === 'Lisbon') {
            bgStyles.backgroundImage = "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://images.wallpaperscraft.ru/image/lissabon_portugaliya_zdaniya_vid_sverkhu_106235_1920x1200.jpg')"
        } else if(weatherData.name === 'Canberra') {
            bgStyles.backgroundImage = "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://www.rabstol.net/uploads/gallery/main/522/rabstol_net_australia_03.jpg')"
        } else if(weatherData.name === 'Reykjavik') {
            bgStyles.backgroundImage = "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://i.artfile.ru/1920x1080_1517453_[www.ArtFile.ru].jpg')"
        } else if(weatherData.name === 'Doho') {
            bgStyles.backgroundImage = "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://i.artfile.ru/1920x1080_711160_[www.ArtFile.ru].jpg')"
        } else if(weatherData.name === 'Ottawa') {
            bgStyles.backgroundImage = "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://i.artfile.ru/1920x1080_1117916_[www.ArtFile.ru].jpg')"
        } else if(weatherData.name === 'Paris') {
            bgStyles.backgroundImage = "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://images.wallpaperscraft.ru/image/parizh_frantsiya_zdaniya_ejfeleva_bashnya_103526_1920x1080.jpg')"
        } else if(weatherData.name === 'Antananarivo') {
            bgStyles.backgroundImage = "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://www.brightwaterholidays.com/media/3259/beautiful-cityscape-panorama-of-antananarivo-madagascar-at-sunset-280654811.jpg')"
        } else if(weatherData.name === 'Tromsø') {
            bgStyles.backgroundImage = "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://images.wallpaperscraft.ru/image/norvegiya_tromse_most_ford_107940_1920x1080.jpg')"
        }
        let gif;
        if(weather.main === 'Clouds') {
            gif = this.state.gifs[2];
        } else if(weather.main === 'Clear') {
            gif = this.state.gifs[4];
        } else if(weather.main === 'Drizzle' || weather.main === 'Rain') {
            gif = this.state.gifs[5];  
        } else if(weather.main === 'Mist') {
            gif = this.state.gifs[6];
        } else if(weather.main === 'Fog' || weather.main === 'Haze') {
            gif = this.state.gifs[7];
        } else if(weather.main === 'Thunderstorm') {
            gif = this.state.gifs[8];
        } else if(weather.main === 'Snow') {
            gif = this.state.gifs[9];
        }

        let advice;
        let wish;
        const weatherTempInC = Math.round((weatherData.main.temp - 32) * (5 / 9));
        const weatherTempFeel = Math.round((weatherData.main.feels_like - 32) * (5 / 9));
        const weatherTempPressure = Math.round((weatherData.main.pressure / 1.33));
        const windSpeed = Math.round(weatherData.wind.speed / 2.23694);
        if (weatherTempInC <= 0) {
            wish = 'It is cold outside!'
            styles.color = "#2276d6"
            advice = this.state.advice[4]
        } else if (weatherTempInC > 0 && weatherTempInC <= 10) {
            wish = 'It is better to dress warmer.'
            styles.color = "#3098b0"
            advice = this.state.advice[3]
        } else if (weatherTempInC > 10 && weatherTempInC <= 20) {
            wish = "You can wear a jacket and jeans."
            styles.color = "#debe1d"
            advice = this.state.advice[2]
        } else if (weatherTempInC > 20 && weatherTempInC <= 28) {
            wish = "You can wear a T-shirt and shorts."
            styles.color = "#debe1d"
            advice = this.state.advice[1]
        } else if (weatherTempInC > 28) {
            wish = "Take a swimsuit and going to the sea!"
            styles.color = "#db7032"
            advice = this.state.advice[0]
        };
        return (
            <div className="main">
                {/*<Advice items={this.state.wish} />*/}
                <div style={bgStyles} className="main__wrapper">
                    <h2 className="main__heading">
                    {weatherData.name}
                    </h2>
                    {/*<p>Now you can watch {weather.description}.</p>*/}
                    <div className="main__weather">
                        <div className="main__weather_top">
                            <div>{gif}</div>
                            <GifsList updateData={this.updateData} />
                            {weather.main}
                        </div>
                        <div className="currentTemp">
                            <p>{weatherTempInC}°C</p>
                            <span>Feels like {weatherTempFeel}°C</span>
                            {/*<img src="https://img.icons8.com/plasticine/100/000000/temperature.png" alt=""></img>*/}
                        </div>
                    </div>
                    <div className="humidity">
                        Humidity: {weatherData.main.humidity}%
                    </div>
                    <div className="pressure">
                        Pressure: {weatherTempPressure} mm Hg
                    </div>
                    <div className="wind">
                        <p>Wind speed: {windSpeed} m/s</p>
                        {/*<img src="https://img.icons8.com/plasticine/100/000000/windy-weather.png" alt=""/>*/}
                    </div>
                    <div className="main__advice" style={styles}>Our advice: {wish}</div>
                    <div className="advice__wear">{advice}</div>
                </div>
            </div>
        );
    };
};

export default MainContent;