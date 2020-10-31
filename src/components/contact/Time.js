import React from 'react'

function Time({selectedTime,Back}) {
    return (
        <div>


        <div className="row">
                <div className="col-md-12 text-center">
                    <h4>When would you need the service?</h4>
                    <p> Set the date </p>
                </div>
        </div>
        <div id="time">
            <div className="row" >
                <div className="col-md">
                    <button onClick={()=>selectedTime({time:8},11)} className="btn btn-secondary">08:00</button>
                </div>
                <div className="col-md">
                    <button onClick={()=>selectedTime({time:9},11)} className="btn btn-secondary">09:00</button>
                </div>
                <div className="col-md">
                    <button onClick={()=>selectedTime({time:10},11)} className="btn btn-secondary">10:00</button>
                </div>
            </div>
            <div className="row" >
                <div className="col-md">
                    <button onClick={()=>selectedTime({time:11},11)} className="btn btn-secondary">11:00</button>
                </div>
                <div className="col-md">
                    <button onClick={()=>selectedTime({time:12},11)} className="btn btn-secondary">12:00</button>
                </div>
                <div className="col-md">
                    <button onClick={()=>selectedTime({time:13},11)} className="btn btn-secondary">13:00</button>
                </div>
            </div>
            <div className="row" >
                <div className="col-md">
                    <button onClick={()=>selectedTime({time:14},11)} className="btn btn-secondary">14:00</button>
                </div>
                <div className="col-md">
                    <button onClick={()=>selectedTime({time:15},11)} className="btn btn-secondary">15:00</button>
                </div>
                <div className="col-md">
                    <button onClick={()=>selectedTime({time:16},11)} className="btn btn-secondary">16:00</button>
                </div>
            </div>
            <div className="row" >
                <div className="col-md">
                    <button onClick={()=>selectedTime({time:17},11)} className="btn btn-secondary">17:00</button>
                </div>
                <div className="col-md">
                    <button onClick={()=>selectedTime({time:18},11)} className="btn btn-secondary">18:00</button>
                </div>
                <div className="col-md">
                    <button onClick={()=>selectedTime({time:19},11)} className="btn btn-secondary">19:00</button>
                </div>
            </div>
            <div className="row" >
                <div className="col-md-4">
                    <button onClick={()=>selectedTime({time:20},11)} className="btn btn-secondary">20:00</button>
                </div>
                
            </div>
            </div>
            
            <div className="row mt-5">
            <div className="col-md-4">
                <button onClick={()=>Back(4)} type="button" className="btn btn-primary">Back</button>
            </div>
            <div className="col-md-4">
                <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow="80" style={{width: "80%"}} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p>progress 80%</p>
            </div>
            <div className="col-md-4"></div>
        </div>
        
        </div>
    )
}

export default Time
