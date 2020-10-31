import React,{useState} from 'react'

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
        <div className="row my-4">
            <div className="col-md-12 text-center">
                <h4>What did you have in mind for your
Commercial / Photoshoot?</h4>
                <p>Give us some details, and we'll get back to you.</p>
            </div>
        </div>
        <div className="row text-center">
        <div className="col-md-4"></div>
            <div className="col-md-4">
            <div className="form-group">
                <label >Details of your Commercial / Photoshoot</label>
                <textarea value={msg.CommercialMessage} onChange={handleChange} className="form-control" id="CommercialMessage" rows="3"></textarea>
            </div>
            </div>
            <div className="col-md-4"></div>
        </div>

        <div className="row mt-2">
            <div className="col-md-12 text-center">
                <div id="continue" className="mb-3" aria-disabled="false">
                    <button onClick={()=>selectedCom(msg,3)} className="btn btn-primary">Continue</button>
                </div>
            </div>
        </div>

    <div className="row mt-5">
        <div className="col-md-4">
              <button onClick={()=>Back(1)} type="button" className="btn btn-primary">Back</button>
        </div>
        <div className="col-md-4">
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="18" style={{width: "18%"}} aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <p>progress 18%</p>
        </div>
        <div className="col-md-4"></div>
    </div>
    </div>

    )
}

export default BridalPage
