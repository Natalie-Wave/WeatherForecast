import React, {Component} from 'react';
import './GifsList.css';

class GifsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gifs: [[<div className="icon sun-shower">
                        <div className="cloud"></div>
                        <div className="sun">
                            <div className="rays"></div>
                        </div>
                        <div className="rain"></div>
                    </div>], 
                    [<div className="icon thunder-storm">
                        <div className="cloud"></div>
                        <div className="lightning">
                            <div className="bolt"></div>
                            <div className="bolt"></div>
                        </div>
                    </div>],
                    [<div className="icon cloudy">
                        <div className="cloud"></div>
                        <div className="cloud"></div>
                    </div>],
                    [<div className="icon flurries">
                    <div className="cloud"></div>
                        <div className="snow">
                            <div className="flake"></div>
                            <div className="flake"></div>
                        </div>
                    </div>],
                    [<div className="icon sunny">
                        <div className="sun">
                            <div className="rays"></div>
                        </div>
                    </div>],
                    [<svg
                        version="1.1"
                        id="cloudRain"
                        className="climacon climacon_cloudRain"
                        xmlns="http://www.w3.org/2000/svg"
                        xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="30 30 55 55"
                        enableBackground="new 15 15 70 70"
                        space="preserve">
                        <clipPath id="cloudFillClip">
                            <path d="M15,15v70h70V15H15z M59.943,61.639c-3.02,0-12.381,0-15.999,0c-6.626,0-11.998-5.371-11.998-11.998c0-6.627,5.372-11.999,11.998-11.999c5.691,0,10.434,3.974,11.665,9.29c1.252-0.81,2.733-1.291,4.334-1.291c4.418,0,8,3.582,8,8C67.943,58.057,64.361,61.639,59.943,61.639z"/>
                        </clipPath>
                        <g className="climacon_iconWrap climacon_iconWrap-cloudRain">
                            <g className="climacon_wrapperComponent climacon_wrapperComponent-rain">
                                <path
                                className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- left"
                                d="M41.946,53.641c1.104,0,1.999,0.896,1.999,2v15.998c0,1.105-0.895,2-1.999,2s-2-0.895-2-2V55.641C39.946,54.537,40.842,53.641,41.946,53.641z"/>
                                <path
                                className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- middle"
                                d="M49.945,57.641c1.104,0,2,0.896,2,2v15.998c0,1.104-0.896,2-2,2s-2-0.896-2-2V59.641C47.945,58.535,48.841,57.641,49.945,57.641z"/>
                                <path
                                className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- right"
                                d="M57.943,53.641c1.104,0,2,0.896,2,2v15.998c0,1.105-0.896,2-2,2c-1.104,0-2-0.895-2-2V55.641C55.943,54.537,56.84,53.641,57.943,53.641z"/>
                                <path
                                className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- left"
                                d="M41.946,53.641c1.104,0,1.999,0.896,1.999,2v15.998c0,1.105-0.895,2-1.999,2s-2-0.895-2-2V55.641C39.946,54.537,40.842,53.641,41.946,53.641z"/>
                                <path
                                className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- middle"
                                d="M49.945,57.641c1.104,0,2,0.896,2,2v15.998c0,1.104-0.896,2-2,2s-2-0.896-2-2V59.641C47.945,58.535,48.841,57.641,49.945,57.641z"/>
                                <path
                                className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- right"
                                d="M57.943,53.641c1.104,0,2,0.896,2,2v15.998c0,1.105-0.896,2-2,2c-1.104,0-2-0.895-2-2V55.641C55.943,54.537,56.84,53.641,57.943,53.641z"/>
                            </g>
                            <g className="climacon_wrapperComponent climacon_wrapperComponent_cloud" clipPath="url(#cloudFillClip)">
                                <path
                                className="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
                                d="M63.943,64.941v-4.381c2.389-1.384,4-3.961,4-6.92c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.48-4.334,1.291c-1.23-5.317-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.998c0,3.549,1.551,6.728,4,8.924v4.916c-4.777-2.768-8-7.922-8-13.84c0-8.835,7.163-15.997,15.998-15.997c6.004,0,11.229,3.311,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.372,11.998,12C71.941,58.863,68.602,63.293,63.943,64.941z"/>
                            </g>
                        </g>
                    </svg>],
                    [<svg 
                        version="1.1"
                        id="cloudFog"
                        class="climacon climacon_cloudFog"
                        xmlns="http://www.w3.org/2000/svg"
                        xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="30 30 50 50"
                        enableBackground="new 15 15 70 70"
                        space="preserve">
                        <g className="climacon_iconWrap climacon_iconWrap-cloudFog">
                            <g className="climacon_wrapperComponent climacon_wrapperComponent-Fog">
                                <path
                                className="climacon_component climacon_component-stroke climacon_component-stroke_fogLine climacon_component-stroke_fogLine-top"
                                d="M69.998,57.641H30.003c-1.104,0-2-0.895-2-2c0-1.104,0.896-2,2-2h39.995c1.104,0,2,0.896,2,2C71.998,56.746,71.104,57.641,69.998,57.641z"/>
                                <path
                                className="climacon_component climacon_component-stroke climacon_component-stroke_fogLine climacon_component-stroke_fogLine-middle"
                                d="M69.998,65.641H30.003c-1.104,0-2-0.896-2-2s0.896-2,2-2h39.995c1.104,0,2,0.896,2,2C71.998,64.744,71.104,65.641,69.998,65.641z"/>
                                <path
                                className="climacon_component climacon_component-stroke climacon_component-stroke_fogLine climacon_component-stroke_fogLine-bottom"
                                d="M30.003,69.639h39.995c1.104,0,2,0.896,2,2c0,1.105-0.896,2-2,2H30.003c-1.104,0-2-0.895-2-2C28.003,70.535,28.898,69.639,30.003,69.639z"/>
                            </g>
                            <g className="climacon_wrapperComponent climacon_wrapperComponent-cloud">
                                <path
                                className="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
                                d="M59.999,45.643c-1.601,0-3.083,0.48-4.333,1.291c-1.232-5.317-5.974-9.291-11.665-9.291c-6.626,0-11.998,5.373-11.998,12h-4c0-8.835,7.163-15.999,15.998-15.999c6.004,0,11.229,3.312,13.965,8.204c0.664-0.113,1.337-0.205,2.033-0.205c5.222,0,9.651,3.342,11.301,8h-4.381C65.535,47.253,62.958,45.643,59.999,45.643z"/>
                            </g>
                        </g>
                    </svg>],
                    [<svg
                        version="1.1"
                        id="cloudFogAlt"
                        className="climacon climacon_cloudFogAlt"
                        xmlns="http://www.w3.org/2000/svg"
                        xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="30 30 50 50"
                        enableBackground="new 15 15 70 70"
                        space="preserve">
                        <g className="climacon_iconWrap climacon_iconWrap-cloudFogAlt">
                            <g className="climacon_wrapperComponent climacon_wrapperComponent-Fog">
                                <path
                                className="climacon_component climacon_component-stroke climacon_component-stroke_fogLine"
                                d="M29.177,55.641c-0.262-0.646-0.473-1.314-0.648-2h43.47c0,0.685-0.069,1.349-0.181,2H29.177z"/>
                                <path
                                className="climacon_component climacon_component-stroke climacon_component-stroke_fogLine"
                                d="M36.263,35.643c2.294-1.271,4.93-1.999,7.738-1.999c2.806,0,5.436,0.73,7.728,1.999H36.263z"/>
                                <path
                                className="climacon_component climacon_component-stroke climacon_component-stroke_fogLine"
                                d="M28.142,47.642c0.085-0.682,0.218-1.347,0.387-1.999h40.396c0.552,0.613,1.039,1.281,1.455,1.999H28.142z"/>
                                <path
                                className="climacon_component climacon_component-stroke climacon_component-stroke_fogLine"
                                d="M29.177,43.643c0.281-0.693,0.613-1.359,0.984-2h27.682c0.04,0.068,0.084,0.135,0.123,0.205c0.664-0.114,1.339-0.205,2.033-0.205c2.451,0,4.729,0.738,6.627,2H29.177z"/>
                                <path
                                className="climacon_component climacon_component-stroke climacon_component-stroke_fogLine"
                                d="M31.524,39.643c0.58-0.723,1.225-1.388,1.92-2h21.123c0.689,0.61,1.326,1.28,1.902,2H31.524z"/>
                                <path
                                className="climacon_component climacon_component-stroke climacon_component-stroke_fogLine"
                                d="M71.816,51.641H28.142c-0.082-0.656-0.139-1.32-0.139-1.999h43.298C71.527,50.285,71.702,50.953,71.816,51.641z"/>
                                <path
                                className="climacon_component climacon_component-stroke climacon_component-stroke_fogLine"
                                d="M71.301,57.641c-0.246,0.699-0.555,1.367-0.921,2H31.524c-0.505-0.629-0.957-1.299-1.363-2H71.301z"/>
                                <path
                                className="climacon_component climacon_component-stroke climacon_component-stroke_fogLine"
                                d="M33.444,61.641h35.48c-0.68,0.758-1.447,1.435-2.299,2H36.263C35.247,63.078,34.309,62.4,33.444,61.641z"/>
                            </g>
                        </g>
                    </svg>],
                    [<svg
                        version="1.1"
                        id="cloudLightning"
                        className="climacon climacon_cloudLightning"
                        xmlns="http://www.w3.org/2000/svg"
                        xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="30 30 50 50"
                        enableBackground="new 15 15 70 70"
                        space="preserve">
                        <g className="climacon_iconWrap climacon_iconWrap-cloudLightning">
                            <g className="climacon_wrapperComponent climacon_wrapperComponent-lightning">
                                <polygon
                                className="climacon_component climacon_component-stroke climacon_component-stroke_lightning"
                                points="48.001,51.641 57.999,51.641 52,61.641 58.999,61.641 46.001,77.639 49.601,65.641 43.001,65.641 "/>
                            </g>
                            <g className="climacon_wrapperComponent climacon_wrapperComponent-cloud">
                                <path
                                className="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
                                d="M59.999,65.641c-0.28,0-0.649,0-1.062,0l3.584-4.412c3.182-1.057,5.478-4.053,5.478-7.588c0-4.417-3.581-7.998-7.999-7.998c-1.602,0-3.083,0.48-4.333,1.29c-1.231-5.316-5.974-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,12c0,5.446,3.632,10.039,8.604,11.503l-1.349,3.777c-6.52-2.021-11.255-8.098-11.255-15.282c0-8.835,7.163-15.999,15.998-15.999c6.004,0,11.229,3.312,13.965,8.204c0.664-0.114,1.338-0.205,2.033-0.205c6.627,0,11.999,5.371,11.999,11.999C71.999,60.268,66.626,65.641,59.999,65.641z"/>
                            </g>
                        </g>
                    </svg>],
                    <svg
                        version="1.1"
                        id="cloudSnow"
                        className="climacon climacon_cloudSnow"
                        xmlns="http://www.w3.org/2000/svg"
                        xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="30 30 50 50"
                        enableBackground="new 15 15 70 70"
                        space="preserve">
                
                        <g className="climacon_iconWrap climacon_iconWrap-cloudSnow">
                            <g className="climacon_wrapperComponent climacon_wrapperComponent-snow" clip-path="url(#snowFillClip)">
                                <circle
                                className="climacon_component climacon_component-stroke climacon_component-stroke_snow climacon_component-stroke_snow-left"
                                cx="42.001"
                                cy="59.641"
                                r="2"/>
                                <circle
                                className="climacon_component climacon_component-stroke climacon_component-stroke_snow climacon_component-stroke_snow-middle"
                                cx="50.001"
                                cy="59.641"
                                r="2"/>
                                <circle
                                className="climacon_component climacon_component-stroke climacon_component-stroke_snow climacon_component-stroke_snow-right"
                                cx="57.999"
                                cy="59.641"
                                r="2"/>
                            </g>
                            <g className="climacon_wrapperComponent climacon_wrapperComponent-cloud">
                                <path
                                className="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
                                d="M63.999,64.943v-4.381c2.39-1.386,3.999-3.963,3.999-6.922c0-4.417-3.581-7.999-7.999-7.999c-1.601,0-3.083,0.48-4.333,1.291c-1.23-5.317-5.974-9.291-11.665-9.291c-6.627,0-11.998,5.373-11.998,12c0,3.549,1.55,6.729,4,8.924v4.916c-4.777-2.769-8-7.922-8-13.84c0-8.836,7.163-15.999,15.998-15.999c6.004,0,11.229,3.312,13.965,8.204c0.664-0.113,1.337-0.205,2.033-0.205c6.627,0,11.999,5.373,11.999,11.999C71.998,58.863,68.654,63.293,63.999,64.943z"/>
                            </g>
                        </g>
                    </svg>, ]
        }
    }
    componentDidMount() {
        this.props.updateData(this.state.gifs);
    }
    render() {
        return (
            <div className="openedGif">
                
            </div>
        )
    }
}

export default GifsList;