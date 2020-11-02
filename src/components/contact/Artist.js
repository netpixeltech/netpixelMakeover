import React from 'react'
import revekaImg from "../../images/artist/reveka.png"
import seniorImg from "../../images/artist/senior.png"
import Question from './Question'



function Artist({select}) {
    return (
        <div>

            <Question header={"Make a booking Request"} subheader={"Select your preferred make-up artist"} />

            {/* <div className="row py-4">
                <div className="col-sm-12 text-center">
                    <p className="my-2" style={{fontSize:"17px"}}>Make a booking Request</p>
                    <p className="my-2" style={{fontWeight:600,fontSize:"14px"}}>Select your preferred make-up artist</p>
                </div>
            </div> */}

            <div className="row">

                <div className="col-md-3"></div>

                <div className="col-md-3 py-2 ">
                    <div onClick={()=>select({artist:"reveka"},1)} className="card" style={{width: ""}}>
                        <img className="card-img-top" src={revekaImg} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title text-center">Reveka</h5>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 py-2">
                    <div onClick={()=>select({artist:"senior artist"},1)} className="card" style={{width: ""}}>
                        <img className="card-img-top" src={seniorImg} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title text-center">Senior Artist</h5>
                        </div>
                    </div>
                </div>

                <div className="col-md-3"></div>
            </div>

        <div className="row my-2 py-4">
            <div className="col-md-3">
            </div>
            <div className="col-sm-6 py-3 text-center">
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow="5" style={{width: "5%"}} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p>COMPLETED 5%</p>
            </div>
            <div className="col-md-3">
            </div>
        </div>

        </div>
    )
}

export default Artist

