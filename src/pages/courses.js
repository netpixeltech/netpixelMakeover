import React from 'react'
import Head from '../components/head'
import Layout from '../components/Layout'

function courses() {
    return (
        <Layout >
            <Head />
            <div className="text-center mt-3 mb-5">
                <h2>Courses</h2>
            </div>
            <div className="row">
                <div className="col-md-3">
                </div>
                <div className="col-md-6">
                    <p className="lead mb-3">
                    Learn the art of makeup with Reveka in a fun and friendly atmosphere. We take personalizedclasses to enhance the natural beauty using simple techniques that you will be able to recreate athome after the class.
                    The skill you will learn will help you look and feel absolutely fabulous andfull of self-confidence every single day! 
                    </p>

                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col" >Duration</th>
                                <th scope="col" >Mode</th>
                                <th scope="col" >Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>3 Days</td>
                                <td>Self</td>
                                <td>INR 5,000</td>
                            </tr>
                            <tr>
                                <td>7+1 Days</td>
                                <td>Self pro</td>
                                <td>INR 10,000</td>
                            </tr>
                            <tr>
                                <td> 1 month</td>
                                <td> Basic to Advance</td>
                                <td> INR 80,000</td>
                            </tr>
                            <tr>
                                <td> 1.5 Month</td>
                                <td> Hair & Basic to advance makeup</td>
                                <td> INR 100,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-3">
                </div>
            </div>
        </Layout>

    )
}

export default courses
