import React from 'react'
import Head from '../components/head'
import Layout from '../components/Layout'

function services() {
    return (
       <Layout>
           <Head />
           <div className="text-center mt-3 mb-5">
                <h2>Let's create your dream look! </h2>
            </div>
            <div className="row">
             
                <div className="col-md-12">
                    <p className="lead mb-4"> 
                        Reveka   is   one   of   the   most   aspiring   and   skilled   make-up   artists   and   is   available   for
                        fashion,editorial, bridal and party booking worldwide. Her visual sense, creativity and attention to detailwill make you love your look and feel confident. 
                    </p>

                    <table className="table mb-3">
                        <thead className="thead-dark">
                                <tr>
                                    <th scope="col" >Location</th>
                                    <th scope="col" >Bridal</th>
                                    <th scope="col" >Party</th>
                                    <th scope="col" >Engagement</th>
                                </tr>
                            
                        </thead>
                        <tbody>
                            <tr>
                                <td>At Studio</td>
                                <td>INR 25,000</td>
                                <td>INR 5,000</td>
                                <td>INR 20,000</td>
                            </tr>
                            <tr>
                                <td>At Venue</td>
                                <td>INR 35,000</td>
                                <td>INR 8,000</td>
                                <td>INR 25,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

       </Layout>
    )
}

export default services
