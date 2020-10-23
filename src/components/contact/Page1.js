import React,{useState} from 'react'

function Page1({select,display}) {
    const [optionSelected, setSelected] = useState({
        bridal:false,
        party:false,
        commercial:false
    })
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
        
    return (
        <div style={{display}} >
            {/* {
                console.log(optionSelected)
            } */}
        <div className="row">
            <div className="col-sm-12">
                <h5 className="text-center">Select the Services in which are you interested? </h5>
                <p>select which suits you best?</p>
                </div>
        </div>
        <div id="" className="row mb-3">
                <div className={"col-sm " + (optionSelected.bridal?"mystyle":"")}>
                    <button onClick={()=>handleOptionClick(1)} className="service-option-1"  > 
                    <img className="" alt="options" src="https://serviceform.com/sites/default/files/styles/serviceform_crop/public/bride2_2.png" />
                   <h2>Bridal</h2>
                    </button>
                </div>
                <div className={"col-sm " + (optionSelected.party?"mystyle":"")}>
                    <button onClick={()=>handleOptionClick(2)} className="service-option-1" > 
                    <img className="" alt="options" src="https://serviceform.com/sites/default/files/styles/serviceform_crop/public/bride2_2.png" />
                    <h2> Party</h2>
                    </button>
                </div>
               
                
                <div className={"col-sm " + (optionSelected.commercial?"mystyle":"")}>
                    <button onClick={()=>handleOptionClick(3)} className="service-option-1" > 
                    <img className="" alt="options" src="https://serviceform.com/sites/default/files/styles/serviceform_crop/public/bride2_2.png" />
                    <h2>Commercial</h2>
                    </button>
                </div>
             

          </div>

        <div className="row mt-2">
            <div className="col-md-12">
            <div >
              <div id="continue" className="mb-3" aria-disabled="false">
                <button onClick={()=>select({...optionSelected,start:false})} className="btn btn-primary">Continue</button>
              </div>
              {/* <hr className="hr" /> */}
            </div>
  
            </div>
        </div>
        <div className="row">
            <div className="col-sm-1">
                  {/* <button type="button" className="btn btn-primary">Back</button> */}
            </div>
            <div className="col-sm-10">
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow="10" style={{width: "10%"}} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p>progress 10%</p>
            </div>
        </div>
           

    </div>
    )
}

export default Page1

