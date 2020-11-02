import React,{useState} from 'react'
import PartyPage from "./contact/PartyPage"
import CommercialPage from './contact/CommercialPage'
import Page1 from './contact/Page1'
import Page2 from "./contact/Page2"
import Ocassion from './contact/Ocassion'
import Location from './contact/Location'
import SelectDate from './contact/SelectDate'
import Time from './contact/Time'
import MultiOcassion from './contact/MultiOcassion'
import Venue from './contact/Venue'
import Artist from './contact/Artist'

function ContactForm() {
    const [formdata, setformData] = useState({})
    const [view, setview] = useState(12)

    // const options =(data,next)=>{
    //     setformData({...formdata,...data}); 
    // }

    const handleSubmit = (data,next)=>{
        if (data.refresh) {
            setformData({})
        }else{
            setformData({...formdata,...data});
        }
        setview(next)

    }

    const Back = (back) =>{
        setview(back)
    }

  
    const display=()=>{
        console.log("formdata=>",formdata);
        console.log("viewNo=>",view);
        if (view===1) {
            return <Page1 select={handleSubmit} currentData={formdata} Back={Back}/>
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
            return <Page2 Back={Back} SendMessage={handleSubmit} currentData={formdata} />
        }
        if (view === 12) {
           return <Artist select={handleSubmit} />
        }
       
    }




    return (
    <div className="py-5 bg-secondary ">  
        <div className="col text-center py-4 text-light">
            <h3 className=" mb-3">Make a booking request</h3>
            <p className=" mb-4 ">Complete the booking request and we will connect to you</p>
        </div>
        {/* #EB8D95 */}
        <div className="card my-5 booking-request-card" style={{width: "50%",margin:"auto"}}>
            <div className="card-body">
                <div className="container-fluid">
                    {display()}
                </div>
            </div>
        </div>
        
        

        
        {/* <div className="card mx-auto text-center contact-form-card">
        <div className="card-body ">
           
           
                    {display()}
               
            </div>
            </div>*/}
        </div> 
    )
}

export default ContactForm
