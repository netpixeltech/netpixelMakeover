import React,{useState} from 'react'
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';

function SelectDate({selectedDate ,Back}) {
    const [selectDate, setdate] = useState(new Date())
    
    const handleChange = (date) =>{
        // console.log(date);
        setdate(date)
        selectedDate({date},5)
    }
    
    return (
        <div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <h4>When would you need the service?</h4>
                    <p> Set the date </p>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-md-12">
                <Calendar
                    minDate={new Date()}
                    onChange={handleChange}
                    value={selectDate}
                    />
                </div>
            </div>
        <div className="row mt-5">
        
            <div className="col-md-4 my-2">
                <button onClick={()=>Back(3)} type="button" className="btn btn-primary">Back</button>
            </div>
            <div className="col-md-4 my-2">
                <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow="70" style={{width: "70%"}} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p>progress 70%</p>
            </div>
            <div className="col-md-4"></div>
        </div>
        </div>
    )
}

export default SelectDate
