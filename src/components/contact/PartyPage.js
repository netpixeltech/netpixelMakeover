import React,{useState} from 'react'

function BridalPage({selectedParty,Back}) {

    const [msg, setmsg] = useState({
        partyPersons:0,
        aboutPersons:""
    })

    const handleChange =(e)=>{
        setmsg({
            [e.target.id]:e.target.value
        })
    }

    const handleSubmit =(e) => {
        e.preventDefault()
        selectedParty(msg)
    }

    return (
        <div  >
            
            <div className="row">
                <div className="col-sm">
                    <h4>Party: How many people need party make up?</h4>
                    <p>Describe your requirements for party make up.</p>
                </div>
            </div>
           <form >
           <div className="row">
                <div className="col-sm">
                <div className="form-group">
                    <label >How many people need party make up?</label>
                    <input value={msg.partyPersons} onChange={handleChange} className="form-control" id="partyPersons" required="true"/>
                </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm">
                <div className="form-group">
                    <label >Describe the people who need make up</label>
                    <textarea value={msg.aboutPersons} onChange={handleChange} className="form-control" id="aboutPersons" rows="3" required="true"></textarea>
                </div>
                </div>
            </div>


            <div className="row mt-2">
                <div className="col-md-12">
                    <div >
                    <div id="continue" className="mb-3" aria-disabled="false">
                        <button type="submit" onClick={handleSubmit} className="btn btn-primary">Continue</button>
                    </div>
                    {/* <hr className="hr" /> */}
                    </div>
                </div>
            </div>

           </form>
           
        <div className="row mt-5">
            <div className="col-sm-2">
                  <button onClick={()=>Back()} type="button" className="btn btn-primary">Back</button>
            </div>
            <div className="col-sm-10">
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow="15" style={{width: "15%"}} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p>progress 15%</p>
            </div>
        </div>

        </div>
    )
}

export default BridalPage
