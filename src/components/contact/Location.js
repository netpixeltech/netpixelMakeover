import React from 'react'

function Location({handleVenue,Back}) {
    return (
        <div>
        <div className="row">
            <div className="col-sm">
                <h4>Where do you need Bridal make-up?</h4>
                <p>Choose one that fits you the best.</p>
            </div>

        </div>
        <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-2">
                <div className="card" style={{width:"12rem",margin:"auto"}}>
                    <div className="">
                        <button style={{width:"100%"}} className="card-body btn btn-light" onClick={()=>handleVenue({locationtype:"studio"},4)} >Make up at Studio</button>
                    </div>
                </div>
            </div>
            <div className="col-sm-2">
            <div className="card" style={{width:"12rem",margin:"auto"}}>
                    <div className="">
                        <button style={{width:"100%"}} className="card-body btn btn-light" onClick={()=>handleVenue({locationtype:"venue"},7)} >Make up at venue</button>
                    </div>
                </div>
            </div>
            <div className="col-sm-2">
            <div className="card" style={{width:"12rem",margin:"auto"}}>
                    <div className="">
                        <button style={{width:"100%"}} className="card-body btn btn-light" onClick={()=>handleVenue({locationtype:"outside"},7)}  > outside Ludhiana</button>
                    </div>
                </div>
            </div>
            <div className="col-sm-3"></div>

        </div>

       
        <div className="row mt-5">
        <div className="col-sm-3"></div>
        <div className="col-sm-2">
              <button onClick={()=>Back(2)} type="button" className="btn btn-primary">Back</button>
        </div>
        <div className="col-sm-4">
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="50" style={{width: "50%"}} aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <p>progress 50%</p>
        </div>
        <div className="col-sm-3"></div>
    </div>
    </div>

    )
}

export default Location
