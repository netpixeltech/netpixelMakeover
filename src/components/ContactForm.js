import React,{useState} from 'react'
import BridalPage from './contact/BridalPage'
import PartyPage from "./contact/PartyPage"

import ComPage from './contact/CommercialPage'
import Page1 from './contact/Page1'
import Page2 from "./Contact/Page2"
import Ocassion from './contact/Ocassion'
import Location from './contact/Location'
import SelectDate from './contact/SelectDate'
import Time from './contact/Time'
import MultiOcassion from './contact/MultiOcassion'
import Venue from './contact/Venue'

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

    const SendMessage = (myinputs)=>{
        console.log(myinputs);
        return <Page1 select={options} display="block"/>
    }
    const display=()=>{
        console.log(data)

        if (data.timeSelected) {
            return <Page2 SendMessage={SendMessage} />
        }
        if (data.dateSelected) {
           return  <Time selectedTime={selectedTime} />
        }

        if(data.locationtype==="studio" || data.venueAddress ){
            return <SelectDate selectedDate={selectedDate} />
        }
        if(data.locationtype==="venue"|| data.locationtype==="outside"){
            return <Venue selectedVenue={selectedVenue} />
        }

        if (data.ocassion==="one" || data.multiOcassionData) {
            return <Location Back={Back} handleVenue={handleLocation}/>
        }

        if(data.ocassion==="multi"){
            return <MultiOcassion selectedMulti={selectedMulti}/>;
        }

        if(data.f){
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
                <ComPage display="none" />
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
