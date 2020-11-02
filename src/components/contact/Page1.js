import React,{useState} from 'react'
import BridalIcon from "../../images/optionIcon/bride.png"
import PartyIcon from "../../images/optionIcon/party.png"
import QuestionIcon from "../../images/optionIcon/quesetion.jpg"
import BottomProgress from './BottomProgress'




function Page1({select,display,currentData,Back}) {

    const [optionSelected, setSelected] = useState({
        bridal:false,
        party:false,
        commercial:false
    })
    const [once,setOnce] = useState(1);
///////////////////////////continue//////////////////////////////////


    function handleOptionClick(optionid){
        console.log(optionid);
        // console.log(optionSelected);
        if (optionid===1) {
            setSelected({
                ...optionSelected,
                bridal:!optionSelected.bridal
            })
        }
        if (optionid===2) {
            setSelected({
                ...optionSelected,
                party:!optionSelected.party
            })
        }
        if (optionid===3) {
            setSelected({
                ...optionSelected,
                commercial:!optionSelected.commercial
            }) 
        }
    }

    if (once===1) {
        setSelected({...currentData}) 
        setOnce(4);
    }
    
    const handleClick=(data)=>{

        if (optionSelected.bridal) {
            select(data,2)
        } else if(optionSelected.party) {
            select(data,9)
        }
        else if(optionSelected.commercial){
            select(data,10)
        }

    }
    

    return (

        <div style={{display}} id="page1" >
           
        <div className="row">
            <div className="col-sm-12 text-center">
                <p style={{fontSize:"17px"}} >Select the Services in which are you interested? </p>
                <p style={{fontSize:"14px"}}>select which suits you best?</p>
            </div>
        </div>

        <div id="" className="row mb-3 text-center " style={{position:"relative"}}>
                <div className="col-md-3">
                </div>

                <div className={"col-md-2 my-2 " + (optionSelected.bridal?"mystyle":"")}>
                    <div onClick={()=>handleOptionClick(1)} className="card" style={{}}>
                        <img className="card-img-top" src={BridalIcon} alt="Card image cap" />
                        <div className="card-body text-center">
                            <p className="card-title">Bridal & Non-Bridal</p>
                        </div>
                    </div>

                    {/* <button onClick={()=>handleOptionClick(1)} className="card service-option "  > 
                        <div className="card-body text-center" >
                            <img className="" alt="options" src={BridalIcon} className="img-fluid" />
                            <p>Bridal</p>
                        </div>
                    </button> */}
                </div>

                <div className={"col-md-2 my-2 " + (optionSelected.party?"mystyle":"")}>
                <div onClick={()=>handleOptionClick(2)} className="card" style={{}}>
                        <img className="card-img-top" src={PartyIcon} alt="Card image cap" />
                        <div className="card-body text-center">
                            <p className="card-title ">Party MakeUp</p>
                        </div>
                    </div>
                    {/* <button onClick={()=>handleOptionClick(2)} className="card service-option " > 
                    <div className="card-body text-center" >
                            <img className="" alt="options" src={PartyIcon} className="img-fluid" />
                            <p>Party</p>
                        </div>
                    </button> */}
                </div>
               
                <div className={"col-md-2 my-2 " + (optionSelected.commercial?"mystyle":"")}>
                <div onClick={()=>handleOptionClick(3)} className="card" style={{}}>
                        <img className="card-img-top" src={QuestionIcon} alt="Card image cap" />
                        <div className="card-body text-center">
                            <p className="card-title">Other Services</p>
                        </div>
                    </div>
                    {/* <button onClick={()=>handleOptionClick(3)} className="card service-option " > 
                    <div className="card-body text-center" >
                            <img className="" alt="options" src={QuestionIcon} className="img-fluid" />
                            <p>Commercial</p>
                        </div>
                    </button> */}
                </div>
               
                <div className="col-md-1">
                </div>

          </div>

        <div className="row my-4 ">
            
            <div className="col-md-12 text-center">
                <button onClick={()=>handleClick(optionSelected)} className="btn  mx-5 ">Continue</button>
            </div>
        </div>

        {/* <div className="row my-2">
            <div className="col-md-3">
            <button onClick={()=>Back(12)}  type="button" className="btn btn-primary">Back</button>
            </div>
            <div className="col-sm-6">
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow="12" style={{width: "12%"}} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p>progress 12%</p>
            </div>
            <div className="col-md-3">
            </div>
        </div> */}
           <BottomProgress Back={Back} backView={12} progress={"12%"} />

    </div>
    )
}

export default Page1

