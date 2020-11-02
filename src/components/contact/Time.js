import React from 'react'
import BottomProgress from "./BottomProgress"
import Question from './Question'

function Time({selectedTime,Back}) {
    return (
        <div>
        <Question header={"When would you need the service?"} subheader={"Set the time also"} />

        <div id="time" className="row">
            <div className="col-md-12" style={{padding:"0px"}}>

<table className="table">
  <tbody>
    <tr>
      <td> <button onClick={()=>selectedTime({time:8},11)} className="btn btn-secondary " style={{width:"90%"}}>08:00</button></td>
      <td> <button onClick={()=>selectedTime({time:9},11)} className="btn btn-secondary " style={{width:"90%"}}>09:00</button></td>
      <td> <button onClick={()=>selectedTime({time:10},11)} className="btn btn-secondary " style={{width:"90%"}}>10:00</button></td>
    </tr>
    <tr>
      <td> <button onClick={()=>selectedTime({time:11},11)} className="btn btn-secondary " style={{width:"90%"}}>11:00</button></td>
      <td> <button onClick={()=>selectedTime({time:12},11)} className="btn btn-secondary " style={{width:"90%"}}>12:00</button></td>
      <td> <button onClick={()=>selectedTime({time:13},11)} className="btn btn-secondary " style={{width:"90%"}}>13:00</button></td>
      </tr>
    <tr>
      <td> <button onClick={()=>selectedTime({time:14},11)} className="btn btn-secondary " style={{width:"90%"}}>14:00</button></td>
      <td> <button onClick={()=>selectedTime({time:15},11)} className="btn btn-secondary " style={{width:"90%"}}>15:00</button></td>
      <td> <button onClick={()=>selectedTime({time:16},11)} className="btn btn-secondary " style={{width:"90%"}}>16:00</button></td>
      </tr>
    <tr>
      <td> <button onClick={()=>selectedTime({time:17},11)} className="btn btn-secondary " style={{width:"90%"}}>17:00</button></td>
      <td> <button onClick={()=>selectedTime({time:18},11)} className="btn btn-secondary " style={{width:"90%"}}>18:00</button></td>
      <td> <button onClick={()=>selectedTime({time:19},11)} className="btn btn-secondary " style={{width:"90%"}}>19:00</button></td>
    </tr>
    <tr className="text-center">
    <td> <button onClick={()=>selectedTime({time:20},11)} className="btn btn-secondary " style={{width:"90%"}}>20:00</button></td>
    </tr>
  </tbody>
</table>
</div>









            {/* <div className="row" >
                <div className="col-md">
                    <button onClick={()=>selectedTime({time:8},11)} className="btn btn-secondary " style={{width:"100%"}}>08:00</button>
                </div>
                <div className="col-md">
                    <button onClick={()=>selectedTime({time:9},11)} className="btn btn-secondary " style={{width:"100%"}}>09:00</button>
                </div>
                <div className="col-md">
                    <button onClick={()=>selectedTime({time:10},11)} className="btn btn-secondary " style={{width:"100%"}}>10:00</button>
                </div>
            </div>
            <div className="row" >
                <div className="col-md">
                    <button onClick={()=>selectedTime({time:11},11)} className="btn btn-secondary " style={{width:"100%"}}>11:00</button>
                </div>
                <div className="col-md">
                    <button onClick={()=>selectedTime({time:12},11)} className="btn btn-secondary " style={{width:"100%"}}>12:00</button>
                </div>
                <div className="col-md">
                    <button onClick={()=>selectedTime({time:13},11)} className="btn btn-secondary " style={{width:"100%"}}>13:00</button>
                </div>
            </div>
            <div className="row" >
                <div className="col-md">
                    <button onClick={()=>selectedTime({time:14},11)} className="btn btn-secondary " style={{width:"100%"}}>14:00</button>
                </div>
                <div className="col-md">
                    <button onClick={()=>selectedTime({time:15},11)} className="btn btn-secondary " style={{width:"100%"}}>15:00</button>
                </div>
                <div className="col-md">
                    <button onClick={()=>selectedTime({time:16},11)} className="btn btn-secondary " style={{width:"100%"}}>16:00</button>
                </div>
            </div>
            <div className="row" >
                <div className="col-md">
                    <button onClick={()=>selectedTime({time:17},11)} className="btn btn-secondary " style={{width:"100%"}}>17:00</button>
                </div>
                <div className="col-md">
                    <button onClick={()=>selectedTime({time:18},11)} className="btn btn-secondary " style={{width:"100%"}}>18:00</button>
                </div>
                <div className="col-md">
                    <button onClick={()=>selectedTime({time:19},11)} className="btn btn-secondary " style={{width:"100%"}}>19:00</button>
                </div>
            </div>
            <div className="row" >
                <div className="col-md-4">
                    <button onClick={()=>selectedTime({time:20},11)} className="btn btn-secondary " style={{width:"100%"}}>20:00</button>
                </div>
                
            </div>*/}
            </div>
             

            {/* <div className="row mt-5">
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
        </div> */}

         <BottomProgress Back={Back} backView={4} progress={"80%"} />
        
        </div>
    )
}

export default Time
