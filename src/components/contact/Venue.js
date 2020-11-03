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
        <div className="col-md-2"></div>
            <div className="col-md-8">
            <div className="form-group">
                <label >Full Address of the make-up venue?</label>
                <textarea value={venue} onChange={handleChange} className="form-control"
                 id="multipleLocation" rows="2" placeholder=""></textarea>
            </div>
            </div>
            <div className="col-md-2"></div>
        </div>

        <div className="row mt-2">
            <div className="col-md-12 text-center">
                <div id="continue" className="mb-3" aria-disabled="false">
                    <button onClick={()=>selectedVenue({venue},4)} className="btn">Continue</button>
                </div>
            </div>
        </div>

        <BottomProgress Back={Back} backView={3} progress={"60%"} />
    </div>

    )
}

export default Venue
