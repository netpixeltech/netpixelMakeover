import React from 'react'

function ContactUs() {
    return (
<section id="contactus" className="">
  <div className="contact">
    <div className="row text-center">
      <div className="col-lg-4">
        <i className="fas fa-phone"></i>
        <h4 className="mt-3">Give a Call</h4>
        <p className="mt-3">+91 1234567890</p>
      </div>
  
      <div className="col-lg-4">
        <i className="fas fa-map-marker-alt"></i>
        <h4 className="mt-3">Visit us</h4>
        <p className="mt-3">Unknown Street,Anonymous City</p>
      </div>
  
      <div className="col-lg-4">
        <i className="fas fa-envelope"></i>
        <h4 className="mt-3">Drop a Mail</h4>
        <p className="mt-3">Testing@test.com</p>
      </div>
  
    </div>
  </div>
</section>

    )
}

export default ContactUs
