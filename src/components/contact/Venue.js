import React,{useState} from 'react'

function Venue({selectedVenue,Back}) {
    const [venue, setVenue] = useState("")
   
    const handleChange = (e) =>{
        setVenue(e.target.value)
    }

    

    return (
        <div>
        <div className="row">
            <div className="col-sm">
                <h4>Give an address for the Bridal make-up</h4>
                <p>Type your venue address below </p>
            </div>
        </div>
        <div className="row">
        <div className="col-sm-4"></div>
            <div className="col-sm-4">
            <div className="form-group">
                <label >Full Address of the make-up?</label>
                <textarea value={venue} onChange={handleChange} className="form-control" id="multipleLocation" rows="3"></textarea>
            </div>
            </div>
            <div className="col-sm-4"></div>
        </div>

        <div className="row mt-2">
            <div className="col-md-12">
                <div >
                <div id="continue" className="mb-3" aria-disabled="false">
                    <button onClick={()=>selectedVenue({venue},4)} className="btn btn-primary">Continue</button>
                </div>
                </div>
            </div>
        </div>

    <div className="row mt-5">
    <div className="col-sm-3"></div>
        <div className="col-sm-2">
              <button onClick={()=>Back(3)} type="button" className="btn btn-primary">Back</button>
        </div>
        <div className="col-sm-3">
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="60" style={{width: "60%"}} aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <p>progress 60%</p>
        </div>
        <div className="col-sm-4"></div>
    </div>
    </div>

    )
}

export default Venue
