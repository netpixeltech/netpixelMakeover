import React,{useState} from 'react'
import BridalPage from './contact/BridalPage'
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

    // const [optionSelected, setoptionSelected] = useState({
    //     start:true
    // })

    const [data, setData] = useState({start:true})
    const [prevData,setPrevData] = useState({})
   
    const options=(selected)=>{
        // setoptionSelected({...selected})
        setPrevData({
            ...data
        })
        setData({...selected})
       
    }

    const selectedParty =(partyData)=>{
        console.log(partyData);
        setPrevData({
            ...data
        })
        setData({
            // ...optionSelected,
            ...data,
            ...partyData
        })
    }
    const selectedCom =(comData)=>{
        console.log(comData);
        setPrevData({
            ...data
        })
        setData({
            // ...optionSelected,
            ...data,
            comData
        })
    }

    const Back = () =>{
        setData({
            ...prevData
        })
    }

    const handleOcassion = (str)=>{
        
        setPrevData({
            ...data
        })
        setData({
            // ...optionSelected,
            ...data,
            ocassion:str
        })
        console.log(str);
        
    }
    const selectedMulti=(multiOcassionData)=>{
        console.log(multiOcassionData);
        setPrevData({
            ...data
        })
        setData({
            ...data,
            multiOcassionData
        })
    }

    const handleLocation = (locationtype)=>{
        setPrevData({
            ...data
        })
        setData({
            ...data,
            locationtype
        })
    }

    const selectedVenue = (venueAddress)=>{
        setPrevData({
            ...data
        })
        setData({
            ...data,
            venueAddress
        })
    }
    const selectedDate =(dateSelected)=>{
        setPrevData({
            ...data
        })
        setData({
            ...data,
            dateSelected
        })
    }

    const selectedTime = (timeSelected)=>{
        setData({
            ...data,
            timeSelected
        })
    }

    const SendMessage = (myinputs,phone)=>{
        setData({...data , ...myinputs,phone})
        const templateParams = {
            message_html: data.locationtype,
        };
        console.log(templateParams);
    //     emailjs.send('service_i5gpog3','template_vvk74yx', templateParams,'user_14Fwr6tMEh2ZbllFx6k6G')
    // .then((response) => {
    //    console.log('SUCCESS!', response.status, response.text);
    // }, (err) => {
    //    console.log('FAILED...', err);
    // });
    console.log(myinputs);
    window.location.reload();
        
    }
    
    const display=()=>{
        console.log(data)

        if (data.timeSelected) {
            return <Page2 Back={Back} SendMessage={SendMessage} />
        }
        if (data.dateSelected) {
           return  <Time Back={Back} selectedTime={selectedTime} />
        }

        if(data.locationtype==="studio" || data.venueAddress ){
            return <SelectDate Back={Back} selectedDate={selectedDate} />
        }
        if(data.locationtype==="venue"|| data.locationtype==="outside"){
            return <Venue Back={Back} selectedVenue={selectedVenue} />
        }

        if (data.ocassion==="one" || data.multiOcassionData || data.aboutPersons || data.comData) {
            return <Location Back={Back} handleVenue={handleLocation}/>
        }

        if(data.ocassion==="multi"){
            return <MultiOcassion Back={Back} selectedMulti={selectedMulti}/>;
        }

        if (data.commercial) {
            return <CommercialPage Back={Back} selectedCom={selectedCom} />
        }
        if(data.party){
            return  <PartyPage Back={Back} selectedParty={selectedParty} />
        }

        if(data.bridal){
            return <Ocassion Back={Back} handleOcassion={handleOcassion} />
        }
       

        if (!data.start) {
            return <Page2 />
        }
        if(data){
            return <Page1 select={options} display="block"/>
        }

        else{
            
            return(
            <div>
                <Page1 select={options} display="none" />
                <BridalPage display="none"/>
                <PartyPage display="none" />
                
            </div>)
        }
    }

    return (
<div>     
    <div className="card mx-auto text-center contact-form-card">
      <div className="card-body">
        <h5 className="card-title mb-3">Picberry Design</h5>
        <h6 className="card-subtitle mb-4 text-muted">Make a Booking Request</h6>
        {display()}
        {
            // console.log(optionSelected)
        }
        </div>
        </div>
    </div>)
}

export default ContactForm
