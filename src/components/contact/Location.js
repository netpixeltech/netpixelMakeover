import React from 'react'
import BottomProgress from "./BottomProgress"
import Question from './Question'

function Location({handleVenue,Back}) {
    return (
        <div id="location-type">

        <Question header={"Where do you need Bridal make-up?"} subheader={"Choose one that fits you the best."} />
        {/* <div className="row text-center mb-3">
            <div className="col-md">
                <h4>Where do you need Bridal make-up?</h4>
                <p>Choose one that fits you the best.</p>
            </div>
        </div> */}

        <div className="row py-4">
            <div className="col-md-3"></div>
            <div className="col-md-2 my-2">

                <div onClick={()=>handleVenue({locationtype:"studio"},4)} class="card" style={{width: ""}}>
                    <div class="card-body">
                        <h6 class="card-title">Make up at Studio</h6>
                        <p class="card-text">in Ludhiana</p>
                    </div>
                </div>


                {/* <div className="card" style={{width:"12rem",margin:"auto"}}>
                    <div className="">
                        <button style={{width:"100%"}} className="card-body btn btn-light" onClick={()=>handleVenue({locationtype:"studio"},4)} >Make up at Studio</button>
                    </div>
                </div> */}
            </div>
            <div className="col-md-2 my-2">

            <div onClick={()=>handleVenue({locationtype:"venue"},7)} class="card" style={{width: ""}}>
                    <div class="card-body">
                        <h6 class="card-title">Make up at venue</h6>
                        <p class="card-text">in Ludhiana</p>
                    </div>
                </div>


            {/* <div className="card" style={{width:"12rem",margin:"auto"}}>
                    <div className="">
                        <button style={{width:"100%"}} className="card-body btn btn-light" onClick={()=>handleVenue({locationtype:"venue"},7)} >Make up at venue</button>
                    </div>
                </div> */}
            </div>

            <div className="col-md-2 my-2">

            <div onClick={()=>handleVenue({locationtype:"outside"},7)} class="card" style={{width: ""}}>
                    <div class="card-body">
                        <h6 class="card-title">Outside Ludhiana</h6>
                        <p class="card-text">+travel cost</p>
                    </div>
                </div>

            {/* <div className="card" style={{width:"12rem",margin:"auto"}}>
                    <div className="">
                        <button style={{width:"100%"}} className="card-body btn btn-light" onClick={()=>handleVenue({locationtype:"outside"},7)}  > outside Ludhiana</button>
                    </div>
                </div> */}
            </div>
            <div className="col-md-3"></div>

        </div>

       
        {/* <div className="row mt-5 my-3">
        <div className="col-md-4">
            <button onClick={()=>Back(2)} type="button" className="btn btn-primary">Back</button>
        </div>
        <div className="col-md-4">
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="50" style={{width: "50%"}} aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <p>progress 50%</p>
        </div>
        <div className="col-md-4"></div>
    </div> */}
             <BottomProgress Back={Back} backView={2} progress={"50%"} />

    </div>

    )
}

export default Location
