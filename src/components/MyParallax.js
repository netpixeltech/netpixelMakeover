import React from 'react'
import img1 from "../images/img2.jpg"
import img2 from "../images/img3.jpg"
import img3 from "../images/img4.jpg"
import img4 from "../images/img5.jpg"
import img5 from "../images/img6.jpg"
import img6 from "../images/img7.jpg"
import img7 from "../images/img8.jpg"
import img8 from "../images/img1.jpg"
import ParallaxImg from './ParallaxImg';
import BottomImgs from './ParallaxBootom'

function MyParallax() {
    return (
        <div>
            <ParallaxImg imgtitle={"Stars"} img={img1} />
            <ParallaxImg imgtitle={"Architecture"} img={img2} />
            <ParallaxImg imgtitle={"Food"} img={img3} />
            <ParallaxImg imgtitle={"Nature"} img={img4} />
            <ParallaxImg imgtitle={"Travelling"} img={img5} />
            <ParallaxImg imgtitle={"Eclipse"} img={img6} />
            <ParallaxImg imgtitle={"Rocket"} img={img7} />
            <ParallaxImg imgtitle={"Cooking"} img={img8} />
            <BottomImgs />
        </div>
    )
}

export default MyParallax
