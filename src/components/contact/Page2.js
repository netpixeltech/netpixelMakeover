import React,{useState} from 'react'
import 'react-phone-number-input/style.css'
import emailjs from 'emailjs-com';
import PhoneInput from "react-phone-number-input"
import BottomProgress from "./BottomProgress"
import Question from './Question'

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
  emailjs.send('service_i5gpog3','template_vvk74yx', templateParams, 'user_14Fwr6tMEh2ZbllFx6k6G')
  .then((response) => {
     console.log('SUCCESS!', response.status, response.text);
  }, (err) => {
     console.log('FAILED...', err);
  });

    SendMessage({refresh:true},1)
    
  }

    return (
      
       <div>

<Question header={"Your Contact Details"} subheader={"only a booking request submission and non-binding for both parties."} />
          {/* <div className="row text-center mb-3">
            <div className="col-sm">
                <h4>Your Contact Details</h4>
                <p>only a booking request submission and non-binding for both parties.</p>
            </div>
          </div> */}

      <div id="contact-detail" className="row my-3">
         <div className="col-md-12" >    
             <form className="mx-auto" >
 
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
               defaultCountry="IN"
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
 
              <div className="form-group text-center">
                  <button  onClick={Send} className="btn btn-primary px-5 py-2">SEND</button>
              </div>
             </form>
             </div>

         </div>

{/* 
        <div className="row mt-5">
            <div className="col-sm-4">
                <button onClick={()=>Back(4)} type="button" className="btn btn-primary">Back</button>
            </div>
            <div className="col-sm-4">
                <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow="90" style={{width: "90%"}} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p>progress 90%</p>
            </div>
            <div className="col-sm-4"></div>
        </div> */}
         
         <BottomProgress Back={Back} backView={4} progress={"90%"} />
       </div>
    )
}

export default Page2
