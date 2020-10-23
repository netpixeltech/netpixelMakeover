import React from 'react'

function Ocassion({handleOcassion,Back}) {



    return (
        <div>
            <div className="row">
                <div className="col-sm">
                    <h4>How many occasions would you like bridal make up for?</h4>
                    <p>Choose one that fits you the best</p>
                </div>

            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card" style={{width: "18rem",margin:"auto"}}>
                        <div className="card-body">
                            <button className="btn btn-info" onClick={()=>handleOcassion("one")}>One Time</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                <div className="card" style={{width: "18rem",margin:"auto"}}>
                        <div className="card-body">
                            <button className="btn btn-info" onClick={()=>handleOcassion("multi")} >Multiple Time</button>
                        </div>
                    </div>
                </div>

            </div>

           

            <div className="row mt-5">
            <div className="col-sm-2">
                  <button onClick={()=>Back()}  type="button" className="btn btn-primary">Back</button>
            </div>
            <div className="col-sm-10">
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow="20" style={{width: "20%"}} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p>progress 20%</p>
            </div>
        </div>
        </div>
    )
}

export default Ocassion
