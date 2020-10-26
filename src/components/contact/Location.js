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
            <div className="col-sm">
                <div className="card" style={{width:"18rem",margin:"auto"}}>
                    <div className="card-body">
                        <button onClick={()=>handleVenue({locationtype:"studio"},4)} className="btn btn-info">Make up at Studio</button>
                    </div>
                </div>
            </div>
            <div className="col-sm">
            <div className="card" style={{width:"18rem",margin:"auto"}}>
                    <div className="card-body">
                        <button onClick={()=>handleVenue({locationtype:"venue"},7)} className="btn btn-info">Make up at venue</button>
                    </div>
                </div>
            </div>
            <div className="col-sm">
            <div className="card" style={{width:"18rem",margin:"auto"}}>
                    <div className="card-body">
                        <button onClick={()=>handleVenue({locationtype:"outside"},7)} className="btn btn-info" >Make up outside Ludhiana</button>
                    </div>
                </div>
            </div>

        </div>

       
        <div className="row mt-5">
        <div className="col-sm-2">
              <button onClick={()=>Back(2)} type="button" className="btn btn-primary">Back</button>
        </div>
        <div className="col-sm-10">
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="50" style={{width: "50%"}} aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <p>progress 50%</p>
        </div>
    </div>
    </div>

    )
}

export default Location
