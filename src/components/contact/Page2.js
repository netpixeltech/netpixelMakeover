import React,{useState} from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


function Page2({SendMessage,Back}) {

  const [value, setValue] = useState()
  const [inputs, setinputs] = useState({
    name:"",
    email:"",
    message:""
  })

   
  const handleChange = (e)=>{ 
    console.log(e.target.id);

    setinputs({
      [e.target.id]:e.target.value
    })

  }


  const Send = (e)=>{
    e.preventDefault()
    
    console.log(inputs);
  }

    return (
      
       <div>

      <div className="row">
         <div className="col-sm">    
             {/* <form> */}
 
               <div className="form-group">
                 <label >Your Full Name</label>
                 <input onChange={handleChange} 
                 // value={inputs.name}
                  type="text" className="form-control" id="name" />
               </div>

               <div className="form-group">
               <label >Your Phone No.</label>
                <PhoneInput
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue}
                    />
                </div>
               <div className="form-group">
                 <label >Your Email</label>
                 <input onChange={handleChange} 
                 // value={inputs.email} 
                 type="email" 
                 className="form-control" id="email" aria-describedby="emailHelp" />
               </div>
 
               <div className="form-group">
                 <label >Anything else you would like to add?</label>
                 <textarea onChange={handleChange} 
                 // value={inputs.message}
                  className="form-control"
                  id="message" rows="3"></textarea>
               </div>
 
               <button  onClick={()=>SendMessage(inputs,value)} className="btn btn-primary">Send</button>
             {/* </form> */}
             </div>
         </div>


        <div className="row mt-5">
            <div className="col-sm-2">
                <button onClick={()=>Back()} type="button" className="btn btn-primary">Back</button>
            </div>
            <div className="col-sm-10">
                <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow="90" style={{width: "90%"}} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p>progress 90%</p>
            </div>
        </div>
         
       </div>
    )
}

export default Page2
