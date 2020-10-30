import React from 'react'
import Img1 from "../images/img2.jpg"
import Img2 from "../images/img5.jpg"
import Img3 from "../images/img1.jpg"


function BottomImgs() {
    return (
<div className="container-fluid">      
<section className="mycontainer">
  <div className="row">
      <div className="col-lg-4">
        <p className="img-txt">Hello picy</p>
        <img src={Img1} alt="" className="" />
      </div>

      <div className="col-lg-4">
        <p className="img-txt">Hello picy</p>
        <img src={Img2} alt="" className="" />
      </div>

      <div className="col-lg-4">
        <p className="img-txt">Hello picy</p>
        <img src={Img3} alt="" className="" />
      </div>

    </div>
  
</section></div>
      
    )
}

export default BottomImgs
