import React,{useState} from 'react'
import PartyPage from "./contact/PartyPage"
import CommercialPage from './contact/CommercialPage'
import Page1 from './contact/Page1'
import Page2 from "./Contact/Page2"
import Ocassion from './contact/Ocassion'
import Location from './contact/Location'
import SelectDate from './contact/SelectDate'
import Time from './contact/Time'
import MultiOcassion from './contact/MultiOcassion'
import Venue from './contact/Venue'
import emailjs from 'emailjs-com';
function ContactForm() {
    const [formdata, setformData] = useState({})
    const [view, setview] = useState(1)

    // const options =(data,next)=>{
    //     setformData({...formdata,...data}); 
    // }

    const handleSubmit = (data,next)=>{
        setformData({...formdata,...data});
        setview(next)
    }

    const Back = (back) =>{
        setview(back)
    }

  
    const display=()=>{
        console.log("formdata=>",formdata);
        console.log("viewNo=>",view);
        if (view===1) {
            return <Page1 select={handleSubmit} currentData={formdata} />
        }

        if(view===2){
            return <Ocassion currentData={formdata} Back={Back} handleOcassion={handleSubmit} />
        }

        if (view===3) {
            return <Location Back={Back} handleVenue={handleSubmit}/>
        }

        if(view===4){
            return <SelectDate Back={Back} selectedDate={handleSubmit} />
        }

        if (view===5) {
            return  <Time Back={Back} selectedTime={handleSubmit} />
         }

        if(view===6){
            return <MultiOcassion currentData={formdata} Back={Back} selectedMulti={handleSubmit}/>;
        }

        if(view===7){
            return <Venue Back={Back} selectedVenue={handleSubmit} />
        }

        if(view===9){
            return  <PartyPage Back={Back} selectedParty={handleSubmit} />
        }

        if (view===10) {
            return <CommercialPage Back={Back} selectedCom={handleSubmit} />
        }

        if (view === 11) {
            return <Page2 Back={Back} SendMessage={handleSubmit} />
        }
       
    }




    return (
    <div>     
        <div className="card mx-auto text-center contact-form-card">
        <div className="card-body">
            <h5 className="card-title mb-3">Picberry Design</h5>
            <h6 className="card-subtitle mb-4 text-muted">Make a Booking Request</h6>
            {display()}
            </div>
            </div>
        </div>
    )
}

export default ContactForm
