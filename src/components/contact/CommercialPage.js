import React,{useState} from 'react'
import BottomProgress from "./BottomProgress"
import Question from './Question'


function BridalPage({Back,selectedCom}) {

    const [msg,setCommercialMessage] = useState({
        CommercialMessage:""
    })
    
    const handleChange=(e)=> {
       setCommercialMessage({
           ...msg,
           [e.target.id]:e.target.value
       })
    }

    

    return (
        <div>

            <Question header={"What other services you are interested in ?"} subheader={"Give some details about other services"} />
        {/* <div className="row my-4">
            <div className="col-md-12 text-center">
                <h4>What did you have in mind for your
Commercial / Photoshoot?</h4>
                <p>Give us some details, and we'll get back to you.</p>
            </div>
        </div> */}
        <div className="row ">
        <div className="col-md-2"></div>
            <div className="col-md-8">
            <div className="form-group">
                <label >Details about  Other Services</label>
                <textarea value={msg.CommercialMessage} onChange={handleChange} className="form-control" id="CommercialMessage" rows="2"></textarea>
            </div>
            </div>
            <div className="col-md-2"></div>
        </div>

        <div className="row mt-2">
            <div className="col-md-12 text-center">
                <div id="continue" className="mb-3" aria-disabled="false">
                    <button onClick={()=>selectedCom(msg,11)} className="btn">Continue</button>
                </div>
            </div>
        </div>

    {/* <div className="row mt-5">
        <div className="col-md-4">
              <button onClick={()=>Back(1)} type="button" className="btn">Back</button>
        </div>
        <div className="col-md-4 text-center">
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="18" style={{width: "18%"}} aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <p>COMPLETED 18%</p>
        </div>
        <div className="col-md-4"></div>
    </div> */}

    <BottomProgress Back={Back} backView={1} progress={"18%"} />

    </div>

    )
}

export default BridalPage
