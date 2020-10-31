import React,{useState} from 'react'
import 'react-phone-number-input/style.css'
import emailjs from 'emailjs-com';
import PhoneInput from "react-phone-number-input"
function Page2({SendMessage,Back,currentData}) {

  const [value, setValue] = useState()
  
  const [inputs, setinputs] = useState({
    name:"",
    email:"",
    message:"",
    number:0
  })

  
   
  const handleChange = (e)=>{ 
    // console.log(e.target.id);

    setinputs({...inputs,
      [e.target.id]:e.target.value
    })

  }

  const SetNumber =(number)=>{
    // console.log(number);
    setinputs({
      ...inputs,
      number
    })
    setValue(number)
  }

  const Send = (e)=>{
    // e.preventDefault()
    const finalData = {...currentData,...inputs}
    // console.log("finalData=> ",finalData);

    let emailData ={...inputs,
    date:finalData.date,
    time:finalData.time,
    locationtype:finalData.locationtype,
    }

  

    if(finalData.bridal){
      emailData.bridal = " bridal";
      emailData.Ocassion = finalData.Ocassion
    }
    if (finalData.party) {
      emailData.party = " party";
      emailData.aboutPartyPeople = finalData.aboutPartyPeople;
      emailData.noOfPartyPeople = finalData.noOfPartyPeople 
    }
    if (finalData.commercial) {
      emailData.commercial = " commercial";
      emailData.CommercialMessage = finalData.CommercialMessage;
     
    }

    if (finalData.locationtype==="venue" || finalData.locationtype==="outside" ) {
      emailData.venueAddress=finalData.venue;
    }

    

    // const {bridal,message,Ocassion,date,locationtype,time,value,name,email,number} = emailData
    var templateParams = {
     from_name:"reveka",
     to_name:"user",
     book_message:"booking request",
     ...emailData
  };

  console.log("template",templateParams);
  // emailjs.send('service_i5gpog3','template_vvk74yx', templateParams, 'user_14Fwr6tMEh2ZbllFx6k6G')
  // .then((response) => {
  //    console.log('SUCCESS!', response.status, response.text);
  // }, (err) => {
  //    console.log('FAILED...', err);
  // });

    SendMessage({refresh:true},1)
    
  }

    return (
      
       <div>

      <div className="row">
         <div className="col-sm-12">    
             <form>
 
               <div className="form-group">
                 <label >Your Full Name</label>
                 <input onChange={handleChange} 
                 // value={inputs.name}
                  type="text" className="form-control" 
                  id="name"
                  required={true}
                  />
               </div>

               <div className="form-group">
               <label >Your Phone No.</label>
              
               <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={SetNumber}/>
                </div>

               <div className="form-group">
                 <label >Your Email</label>
                 <input onChange={handleChange} 
                 // value={inputs.email} 
                 type="email" 
                 className="form-control" 
                 id="email" 
                 required={true} />
               </div>
 
               <div className="form-group">
                 <label >Anything else you would like to add?</label>
                 <textarea onChange={handleChange} 
                 // value={inputs.message}
                  className="form-control"
                  id="message" rows="3"></textarea>
               </div>
 
               <button  onClick={Send} className="btn btn-primary">Send</button>
             </form>
             </div>

         </div>


        <div className="row mt-5">
        <div className="col-sm-3"></div>
            <div className="col-sm-2">
                <button onClick={()=>Back(4)} type="button" className="btn btn-primary">Back</button>
            </div>
            <div className="col-sm-3">
                <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow="90" style={{width: "90%"}} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p>progress 90%</p>
            </div>
            <div className="col-sm-4"></div>
        </div>
         
       </div>
    )
}

export default Page2
