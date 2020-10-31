import React,{useState} from 'react'

function MultiOcassion({selectedMulti,Back,currentData}) {
    const [msg,setmsg] = useState({
        multiOcassionData:""
    })
    
    const handleChange=(e)=> {
        setmsg({...msg,[e.target.id]:e.target.value})
    }

    const handleClick =(data)=>{
        const {party,commercial} = currentData;
        
        if(party)
        {
            selectedMulti(data,9)
        }
        if(commercial){
            selectedMulti(data,10)
        }
        
        if(!party&&!commercial){
            selectedMulti(data,3)
        }
        
        
        
    }

    return (
        <div>

            <div className="row text-center">
                
                <div className="col-sm">
                    <h4>Dates and times for your multiple occasions</h4>
                    <p>Let us know the times and dates below</p>
                </div>
            </div>
            <div className="row">
            <div className="col-sm-4"></div>
                <div className="col-sm-4">
                <div className="form-group">
                    <label >About Location,Dates and Time</label>
                    <textarea value={msg} onChange={handleChange} className="form-control" id="multipleLocation" rows="3"></textarea>
                </div>
                </div>
            <div className="col-sm-4"></div>
            </div>

            <div className="row mt-2">
                <div className="col-md-12">
                    <div >
                    <div id="continue" className="mb-3" aria-disabled="false">
                        <button onClick={()=>handleClick(msg)} className="btn btn-primary">Continue</button>
                    </div>
                    {/* <hr className="hr" /> */}
                    </div>
                </div>
            </div>

        <div className="row mt-5">
        <div className="col-sm-4"></div>
            <div className="col-sm-1">
                  <button onClick={()=>Back(2)} type="button" className="btn btn-primary">Back</button>
            </div>
            <div className="col-sm-3">
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow="40" style={{width: "40%"}} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p>progress 40%</p>
            </div>
            <div className="col-sm-4"></div>
        </div>

    </div>
    )
}

export default MultiOcassion
