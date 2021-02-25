import React, {Component} from 'react';
//import Clothes from "./Clothes";
import "./Advice.css";
import "./Clothes.css";

class Advice extends Component {
    render() {
        let season;
        const styles = {
            width: '500px',
            //height: '250px',
            backgroundImage: '',
        };
        let adviceText;
        adviceText = this.props.items;
        if(adviceText === 'Take a swimsuit and going to the sea!') {
            styles.backgroundImage = "url('https://xn----8sbiecm6bhdx8i.xn--p1ai/images/Summer/zelenoe_pole_1024x768.jpg')";
        } else if(adviceText === 'You can wear a T-shirt and shorts.') {
            styles.backgroundImage = "url('https://xn----8sbiecm6bhdx8i.xn--p1ai/images/Spring/spring_3_8_1024x768.jpg')";
        } else if(adviceText === 'You can wear a jacket and jeans.') {
            styles.backgroundImage = "url('https://xn----8sbiecm6bhdx8i.xn--p1ai/images/Autumn/osenniy_doroga_1024x768.jpg')";
        } else if(adviceText === 'It is better to dress warmer.') {
            styles.backgroundImage = "url('https://xn----8sbiecm6bhdx8i.xn--p1ai/images/Autumn/autumn_5_9_1024x768.jpg')";
        } else if(adviceText === 'It is cold outside!') {
            styles.backgroundImage = "url('https://xn----8sbiecm6bhdx8i.xn--p1ai/images/Winter/winter_5_5_1024x768.jpg')";
        }
        return (
        <div>
            {/*<div>If you want more advice, click the button</div>
            <button onClick={this.onChangeClothes}>Click here!</button>*/}
            <div className="season"style={styles}>{season}</div>
        </div>
        );
    }
}

export default Advice;