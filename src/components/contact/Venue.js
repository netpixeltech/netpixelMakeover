import React,{useState} from 'react'
import BottomProgress from "./BottomProgress"
import Question from './Question'

function Venue({selectedVenue,Back}) {
    const [venue, setVenue] = useState("")
   
    const handleChange = (e) =>{
        setVenue(e.target.value)
    }

    

    return (
        <div>
            <Question header={"Give an address for the Bridal make-up"} subheader={"Type your venue address below"} />
        {/* <div className="row">
            <div className="col-md text-center">
                <h4>Give an address for the Bridal make-up</h4>
                <p>Type your venue address below </p>
            </div>
        </div> */}


        <div className="row">
        <div className="col-md-4"></div>
            <div className="col-md-4">
            <div className="form-group">
                <label >Full Address of the make-up?</label>
                <textarea value={venue} onChange={handleChange} className="form-control" id="multipleLocation" rows="3"></textarea>
            </div>
            </div>
            <div className="col-md-4"></div>
        </div>

        <div className="row mt-2">
            <div className="col-md-12 text-center">
                <div id="continue" className="mb-3" aria-disabled="false">
                    <button onClick={()=>selectedVenue({venue},4)} className="btn btn-primary">Continue</button>
                </div>
            </div>
        </div>

        <BottomProgress Back={Back} backView={3} progress={"60%"} />
    </div>

    )
}

export default Venue
