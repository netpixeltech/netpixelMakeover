import React from 'react'
import Layout from '../components/Layout'
import Head from "../components/head"

function contact() {
    return (
        <Layout >
            <Head />
            <div className="text-center mb-5 mt-3" >
                <h2>Get In Touch</h2>
            </div>
            <div className="row">
                <form className="col-md-6">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" id="name" placeholder="name" />
                    </div>
                    <div className="form-group">
                        <label >Email</label>
                        <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                    </div>
                    <div className="form-group">
                        <label >Phone No.</label>
                        <input type="number" className="form-control" id="phone" placeholder="your phone no." />
                    </div>
                    <div className="form-group">
                        <label >Your Message</label>
                        <textarea className="form-control" id="message" rows="3" placeholder="write your message"></textarea>
                    </div>
                   <div className="form-group">
                        <button className="btn btn-primary">Send</button>
                   </div>
                    </form>
                {/* </div> */}
                <div className="col-md-6">
                    <p>Thank you so much for stopping by!</p>
                    <p>
                        If you are interested in booking a session or just have a general question/inquiry,
                        please fill out the form to send me a message!
                    </p>
                    <p><strong>Location :</strong>Address g1/5, near Ganesh mandir , Rajpura town</p>
                    <p><strong>Email Address :</strong><a href="mailto: revekamakeovers@gmail.com">revekamakeovers@gmail.com</a></p>
                    <p><strong>Contact via Phone :</strong><a href="tel:+91 7973651165">+91 7973651165 </a> , <a href="tel: +91 9815390683">9815390683</a></p>
                </div>
                <div className="col-md-1">
                </div>
            </div>
        </Layout>
    )
}

export default contact
