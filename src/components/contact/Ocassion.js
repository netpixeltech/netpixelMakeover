import React,{useState} from 'react'
import BottomProgress from "./BottomProgress"
import Question from './Question'

function Ocassion({handleOcassion,Back,currentData}) {


const handleClick =(data)=>{
    console.log("ocassion data=>",data);
    console.log("current data=>",currentData);
    const {party,commercial} = currentData;
    if(data.Ocassion==="multiple time"){
        handleOcassion(data,6)
    }
    else{
    
        if(party)
    {
        handleOcassion(data,9)
    }
    if(commercial){
        handleOcassion(data,10)
    }
    
        if(!party&&!commercial){
            handleOcassion(data,3)
        }
    
    }
    
}

    return (
        <div>

<Question header={"How many occasions would you like bridal make up for?"} subheader={"Choose one that fits you the best"} />
            {/* <div className="row text-center">
                <div className="col-md py-3">
                    <h4>How many occasions would you like bridal make up for?</h4>
                    <p>Choose one that fits you the best</p>
                </div>
            </div> */}
            <div className="row py-3 my-3" >
                
                <div className="col-md-3"></div>
                <div className="col-md-3 my-3">
                <div  onClick={()=>handleClick({Ocassion:"one time"})} className="card mx-auto py-3" style={{width:"100%"}}>
                        <div className="card-body text-center">
                            <p className="card-title">One Time Ocassions</p>
                        </div>
                </div>  
                </div>


                <div className="col-md-3 my-3 ">
                <div  onClick={()=>handleClick({Ocassion:"multiple time"})} className="card mx-auto py-3" style={{width:"100%"}}>
                        <div className="card-body text-center">
                            <p className="card-title">Multiple Time Ocassions</p>
                        </div>
                </div>
                {/* <div className="card bg-secondary" style={{width: "12rem",margin:"auto"}}>
                        <div className="">
                            <button style={{width:"100%"}} className="card-body btn btn-light" onClick={()=>handleClick({Ocassion:"multiple time"})} >Multiple Time</button>
                        </div>
                    </div> */}
                </div>
                {/* <div className="col-md-3">
                </div> */}

            </div>

           

            {/* <div className="row mt-5">
                <div className="col-md-4">
                    <button onClick={()=>Back(1)}  type="button" className="btn btn-primary">Back</button>
                </div>
                <div className="col-md-4">
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="20" style={{width: "20%"}} aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p>progress 20%</p>
                </div>
             </div> */}

                <BottomProgress Back={Back} backView={1} progress={"20%"} />
        </div>
    )
}

export default Ocassion
