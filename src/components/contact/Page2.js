import React,{useState} from 'react'

function Page2({SendMessage}) {

  const [inputs, setinputs] = useState({
    name:"",
    number:0,
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
             
            <form>

              <div className="form-group">
                <label >Your Full Name</label>
                <input onChange={handleChange} 
                // value={inputs.name}
                 type="text" className="form-control" id="name" />
              </div>

              <div className="form-group">
                <label >Your Phone No.</label>
                <input onChange={handleChange} 
                // value={inputs.number} 
                type="number" className="form-control" id="number"  />
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

              <button  onClick={()=>Send} type="submit" className="btn btn-primary">Send</button>
            </form>

        </div>
    )
}

export default Page2
