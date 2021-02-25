import React from 'react';
import "./Header.css";

function Header() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    let weatherImage;
    const styles = {
        fontSize: 38,
        backgroundPosition: '290px bottom',
        backgroundRepeat: 'no-repeat',
        //padding: '20px 100px 20px 0',
        //marginLeft: '100px',
    };

    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = "#ffff00"
        styles.textShadow = "0 13.36px 8.896px #ffff00,0 -2px 1px #fae731"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
        styles.color = "#3c5abc"
        styles.textShadow = "0 13.36px 8.896px #3c5abc,0 -2px 1px #1d8eea"
    } else {
        timeOfDay = "evening"
        styles.color = "#ff6700"
        styles.textShadow = "0 13.36px 8.896px #ff6700,0 -2px 1px #ff7f50"
    };

    /*if (hours >= 21 || hours < 6) {
        styles.backgroundImage = 'url("https://img.icons8.com/plasticine/100/000000/partly-cloudy-night.png")'
    } else if(hours >= 6 && hours < 10) {
        styles.backgroundImage = 'url("https://img.icons8.com/plasticine/100/000000/sunrise.png")'
    } else if (hours >= 10 && hours < 16) {
        styles.backgroundImage = 'url("https://img.icons8.com/plasticine/100/000000/partly-cloudy-day.png")'
    } else {
        styles.backgroundImage = 'url("https://img.icons8.com/plasticine/100/000000/sunset.png")'
    };*/

    if (hours >= 21 || hours < 6) {
        weatherImage = <svg
        version="1.1"
        id="moon"
        className="climacon climacon_moon"
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="30 30 55 55"
        enableBackground="new 15 15 70 70"
        space="preserve">
        <clipPath id="moonFillClip">
            <path d="M15,15v70h70V15H15z M50,57.999c-4.418,0-7.999-3.582-7.999-7.999c0-3.803,2.655-6.979,6.211-7.792c0.903,4.854,4.726,8.676,9.579,9.58C56.979,55.344,53.802,57.999,50,57.999z"/>
        </clipPath>
        <g className="climacon_iconWrap climacon_iconWrap-moon">
            <g className="climacon_componentWrap climacon_componentWrap-moon" clipPath="url(#moonFillClip)">
                <path
                className="climacon_component climacon_component-stroke climacon_component-stroke_moon"
                d="M50,61.998c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C61.998,56.626,56.626,61.998,50,61.998z"/>
            </g>
        </g>
    </svg>
    } else if(hours >= 6 && hours < 10) {
        weatherImage = <svg
        version="1.1"
        id="sunrise"
        className="climacon climacon_sunrise"
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="15 15 70 70"
        enableBackground="new 15 15 70 70"
        space="preserve">
        <g className="climacon_iconWrap climacon_iconWrap-sunrise">
            <g className="climacon_componentWrap climacon_componentWrap-sunrise">
                <g className="climacon_componentWrap climacon_componentWrap-sunSpoke">
                    <path
                    className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-east"
                    d="M32.003,54h-4c-1.104,0-2,0.896-2,2s0.896,2,2,2h4c1.104,0,2-0.896,2-2S33.106,54,32.003,54z"
                    />
                    <path
                    className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-northEast"
                    d="M38.688,41.859l-2.828-2.828c-0.781-0.78-2.047-0.78-2.828,0c-0.781,0.781-0.781,2.047,0,2.828l2.828,2.828c0.781,0.781,2.047,0.781,2.828,0C39.469,43.906,39.469,42.641,38.688,41.859z"
                    />
                    <path
                    className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                    d="M50.001,40.002c1.104,0,1.999-0.896,1.999-2v-3.999c0-1.104-0.896-2-1.999-2c-1.105,0-2,0.896-2,2v3.999C48.001,39.106,48.896,40.002,50.001,40.002z"
                    />
                    <path
                    className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-northWest"
                    d="M66.969,39.031c-0.779-0.78-2.048-0.78-2.828,0l-2.828,2.828c-0.779,0.781-0.779,2.047,0,2.828c0.781,0.781,2.049,0.781,2.828,0l2.828-2.828C67.749,41.078,67.749,39.812,66.969,39.031z"
                    />
                    <path
                    className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-west"
                    d="M71.997,54h-3.999c-1.104,0-1.999,0.896-1.999,2s0.896,2,1.999,2h3.999c1.104,0,2-0.896,2-2S73.104,54,71.997,54z"
                    />
                </g>
                <g className="climacon_wrapperComponent climacon_wrapperComponent-sunBody">
                    <path
                    className="climacon_component climacon_component-stroke climacon_component-stroke_sunBody"
                    d="M50.001,44.002c-6.627,0-11.999,5.371-11.999,11.998c0,1.404,0.254,2.747,0.697,3.999h4.381c-0.683-1.177-1.079-2.54-1.079-3.999c0-4.418,3.582-7.999,8-7.999c4.417,0,7.998,3.581,7.998,7.999c0,1.459-0.396,2.822-1.078,3.999h4.381c0.443-1.252,0.697-2.595,0.697-3.999C61.999,49.373,56.627,44.002,50.001,44.002z"
                    />
                </g>
                <g className="climacon_wrapperComponent climacon_wrapperComponent-arrow">
                    <path
                    className="climacon_component climacon_component-stroke climacon_component-stroke_arrow climacon_component-stroke_arrow-up"
                    d="M50.001,63.046c0.552,0,0.999-0.447,0.999-1v-3.827l2.536,2.535c0.39,0.391,1.022,0.391,1.414,0c0.39-0.391,0.39-1.023,0-1.414l-4.242-4.242c-0.391-0.391-1.024-0.391-1.414,0l-4.242,4.242c-0.391,0.391-0.391,1.023,0,1.414c0.391,0.391,1.023,0.391,1.414,0l2.535-2.535v3.827C49.001,62.599,49.448,63.046,50.001,63.046z"
                    />
                </g>
                <g className="climacon_wrapperComponent climacon_wrapperComponent-horizonLine">
                    <path
                    className="climacon_component climacon_component-stroke climacon_component-stroke_horizonLine"
                    d="M59.999,63.999H40.001c-1.104,0-1.999,0.896-1.999,2s0.896,1.999,1.999,1.999h19.998c1.104,0,2-0.895,2-1.999S61.104,63.999,59.999,63.999z"
                    />
                </g>
            </g>
        </g>
    </svg>
    } else if (hours >= 10 && hours < 16) {
        weatherImage = <svg
        version="1.1"
        id="sun"
        className="climacon climacon_sun"
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="25 20 60 60"
        enableBackground="new 15 15 70 70"
        space="preserve">
        <clipPath id="sunFillClip">
            <path
            d="M0,0v100h100V0H0z M50.001,57.999c-4.417,0-8-3.582-8-7.999c0-4.418,3.582-7.999,8-7.999s7.998,3.581,7.998,7.999C57.999,54.417,54.418,57.999,50.001,57.999z"
            />
        </clipPath>
        <g className="climacon_iconWrap climacon_iconWrap-sun">
            <g className="climacon_componentWrap climacon_componentWrap-sun">
                <g className="climacon_componentWrap climacon_componentWrap-sunSpoke">
                    <path
                    className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-east"
                    d="M72.03,51.999h-3.998c-1.105,0-2-0.896-2-1.999s0.895-2,2-2h3.998c1.104,0,2,0.896,2,2S73.136,51.999,72.03,51.999z"
                    />
                    <path
                    className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-northEast"
                    d="M64.175,38.688c-0.781,0.781-2.049,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l2.828-2.828c0.779-0.781,2.047-0.781,2.828,0c0.779,0.781,0.779,2.047,0,2.828L64.175,38.688z"
                    />
                    <path
                    className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                    d="M50.034,34.002c-1.105,0-2-0.896-2-2v-3.999c0-1.104,0.895-2,2-2c1.104,0,2,0.896,2,2v3.999C52.034,33.106,51.136,34.002,50.034,34.002z"
                    />
                    <path
                    className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-northWest"
                    d="M35.893,38.688l-2.827-2.828c-0.781-0.781-0.781-2.047,0-2.828c0.78-0.781,2.047-0.781,2.827,0l2.827,2.828c0.781,0.781,0.781,2.047,0,2.828C37.94,39.469,36.674,39.469,35.893,38.688z"
                    />
                    <path
                    className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-west"
                    d="M34.034,50c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.998-0.896-1.998-1.999s0.896-2,1.998-2h4C33.14,48,34.034,48.896,34.034,50z"
                    />
                    <path
                    className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-southWest"
                    d="M35.893,61.312c0.781-0.78,2.048-0.78,2.827,0c0.781,0.78,0.781,2.047,0,2.828l-2.827,2.827c-0.78,0.781-2.047,0.781-2.827,0c-0.781-0.78-0.781-2.047,0-2.827L35.893,61.312z"
                    />
                    <path
                    className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-south"
                    d="M50.034,65.998c1.104,0,2,0.895,2,1.999v4c0,1.104-0.896,2-2,2c-1.105,0-2-0.896-2-2v-4C48.034,66.893,48.929,65.998,50.034,65.998z"
                    />
                    <path
                    className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-southEast"
                    d="M64.175,61.312l2.828,2.828c0.779,0.78,0.779,2.047,0,2.827c-0.781,0.781-2.049,0.781-2.828,0l-2.828-2.827c-0.781-0.781-0.781-2.048,0-2.828C62.126,60.531,63.392,60.531,64.175,61.312z"
                    />
                </g>
                <g className="climacon_componentWrap climacon_componentWrap_sunBody" clipPath="url(#sunFillClip)">
                    <circle
                    className="climacon_component climacon_component-stroke climacon_component-stroke_sunBody"
                    cx="50.034"
                    cy="50"
                    r="11.999"
                    />
                </g>
            </g>
        </g>
    </svg>
    } else {
        weatherImage = <svg
        version="1.1"
        id="sunset"
        className="climacon climacon_sunset"
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="15 15 70 70"
        enableBackground="new 15 15 70 70"
        space="preserve">
        <g className="climacon_iconWrap climacon_iconWrap-sunset">
            <g className="climacon_componentWrap climacon_componentWrap-sunset">
                <g className="climacon_componentWrap climacon_componentWrap-sunSpoke">
                    <path
                    className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-east"
                    d="M32.003,54h-4c-1.104,0-2,0.896-2,2s0.896,2,2,2h4c1.104,0,2-0.896,2-2S33.106,54,32.003,54z"
                    />
                    <path
                    className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-northEast"
                    d="M38.688,41.859l-2.828-2.828c-0.781-0.78-2.047-0.78-2.828,0c-0.781,0.781-0.781,2.047,0,2.828l2.828,2.828c0.781,0.781,2.047,0.781,2.828,0C39.469,43.906,39.469,42.641,38.688,41.859z"
                    />
                    <path
                    className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                    d="M50.001,40.002c1.104,0,1.999-0.896,1.999-2v-3.999c0-1.104-0.896-2-1.999-2c-1.105,0-2,0.896-2,2v3.999C48.001,39.106,48.896,40.002,50.001,40.002z"
                    />
                    <path
                    className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-northWest"
                    d="M66.969,39.031c-0.779-0.78-2.048-0.78-2.828,0l-2.828,2.828c-0.779,0.781-0.779,2.047,0,2.828c0.781,0.781,2.049,0.781,2.828,0l2.828-2.828C67.749,41.078,67.749,39.812,66.969,39.031z"
                    />
                    <path
                    className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-west"
                    d="M71.997,54h-3.999c-1.104,0-1.999,0.896-1.999,2s0.896,2,1.999,2h3.999c1.104,0,2-0.896,2-2S73.104,54,71.997,54z"
                    />
                </g>
                <g className="climacon_wrapperComponent climacon_wrapperComponent-sunBody">
                    <path
                    className="climacon_component climacon_component-stroke climacon_component-stroke_sunBody"
                    d="M50.001,44.002c-6.627,0-11.999,5.371-11.999,11.998c0,1.404,0.254,2.747,0.697,3.999h4.381c-0.683-1.177-1.079-2.54-1.079-3.999c0-4.418,3.582-7.999,8-7.999c4.417,0,7.998,3.581,7.998,7.999c0,1.459-0.396,2.822-1.078,3.999h4.381c0.443-1.252,0.697-2.595,0.697-3.999C61.999,49.373,56.627,44.002,50.001,44.002z"
                    />
                </g>
                <g className="climacon_wrapperComponent climacon_wrapperComponent-arrow">
                    <path
                    className="climacon_component climacon_component-stroke climacon_component-stroke_arrow climacon_component-stroke_arrow-down"
                    d="M50,49.107c0.552,0,1,0.448,1,1.002v3.83l2.535-2.535c0.391-0.391,1.022-0.391,1.414,0c0.391,0.391,0.391,1.023,0,1.414l-4.242,4.242c-0.392,0.391-1.022,0.391-1.414,0l-4.242-4.242c-0.391-0.391-0.391-1.023,0-1.414c0.392-0.391,1.023-0.391,1.414,0L49,53.939v-3.83C49,49.555,49.447,49.107,50,49.107z"
                    />
                </g>
                <g className="climacon_wrapperComponent climacon_wrapperComponent-horizonLine">
                    <path
                    className="climacon_component climacon_component-stroke climacon_component-stroke_horizonLine"
                    d="M59.999,63.999H40.001c-1.104,0-1.999,0.896-1.999,2s0.896,1.999,1.999,1.999h19.998c1.104,0,2-0.895,2-1.999S61.104,63.999,59.999,63.999z"
                    />
                </g>
            </g>
        </g>
    </svg>
    };

    return (
        <header className="header">
            <h1 className="header__welcome" style={styles}>Good {timeOfDay}</h1>
            <div className="weatherImage">{weatherImage}</div>
        </header>
    );
};

export default Header;