import React from 'react'
import { Parallax } from 'react-parallax';

function ParallaxImg({imgtitle,img}) {
    return (
        <Parallax
        blur={0}
        bgImage={img}
        bgImageAlt="the cat"
        bgImageSize = "800px"
        strength={700}
        >
           
        <div className="parallax ">
            <p style={{color:"white"}}>{imgtitle}</p>
        </div>
    </Parallax>
    )
}

export default ParallaxImg
