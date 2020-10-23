import React from 'react'

function ContactUs() {
    return (
<section id="contactus" className="">
  <div className="contact">
    <div className="row text-center">
      <div className="col-lg-4">
        <i className="fas fa-phone"></i>
        <h4 className="mt-3">Give a Call</h4>
        <p className="mt-3">+91 7973651165, 9815390683</p>
      </div>
  
      <div className="col-lg-4">
        <i className="fas fa-map-marker-alt"></i>
        <h4 className="mt-3">Visit us</h4>
        <p className="mt-3">Address g1/5, near Ganesh mandir , Rajpura town</p>
      </div>
  
      <div className="col-lg-4">
        <i className="fas fa-envelope"></i>
        <h4 className="mt-3">Drop a Mail</h4>
        <p typeof="email" className="mt-3">revekamakeovers@gmail.com</p>
      </div>
  
    </div>
  </div>
</section>

    )
}

export default ContactUs
