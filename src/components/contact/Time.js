import React from 'react'

function Time({selectedTime}) {
    return (
        <div id="time">
            <div className="row" >
                <div className="col-sm">
                    <button onClick={()=>selectedTime(8)} className="btn btn-danger">08:00</button>
                </div>
                <div className="col-sm">
                    <button onClick={()=>selectedTime(9)} className="btn btn-danger">09:00</button>
                </div>
                <div className="col-sm">
                    <button onClick={()=>selectedTime(10)} className="btn btn-danger">10:00</button>
                </div>
            </div>
            <div className="row" >
                <div className="col-sm">
                    <button onClick={()=>selectedTime(11)} className="btn btn-danger">11:00</button>
                </div>
                <div className="col-sm">
                    <button onClick={()=>selectedTime(12)} className="btn btn-danger">12:00</button>
                </div>
                <div className="col-sm">
                    <button onClick={()=>selectedTime(13)} className="btn btn-danger">13:00</button>
                </div>
            </div>
            <div className="row" >
                <div className="col-sm">
                    <button onClick={()=>selectedTime(14)} className="btn btn-danger">14:00</button>
                </div>
                <div className="col-sm">
                    <button onClick={()=>selectedTime(15)} className="btn btn-danger">15:00</button>
                </div>
                <div className="col-sm">
                    <button onClick={()=>selectedTime(16)} className="btn btn-danger">16:00</button>
                </div>
            </div>
            <div className="row" >
                <div className="col-sm">
                    <button onClick={()=>selectedTime(17)} className="btn btn-danger">17:00</button>
                </div>
                <div className="col-sm">
                    <button onClick={()=>selectedTime(18)} className="btn btn-danger">18:00</button>
                </div>
                <div className="col-sm">
                    <button onClick={()=>selectedTime(19)} className="btn btn-danger">19:00</button>
                </div>
            </div>
            <div className="row" >
                <div className="col-sm-4">
                    <button onClick={()=>selectedTime(20)} className="btn btn-danger">20:00</button>
                </div>
                
            </div>

            <div className="row mt-5">
            <div className="col-sm-2">
                {/* <button type="button" className="btn btn-primary">Back</button> */}
            </div>
            <div className="col-sm-10">
                <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow="80" style={{width: "80%"}} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p>progress 80%</p>
            </div>
        </div>
        
        </div>
    )
}

export default Time
