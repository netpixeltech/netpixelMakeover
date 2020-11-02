import React from 'react'

function Question({header,subheader}) {
    return (
        <div className="row text-center mb-3">
            <div className="col-md-12">
                <p className="my-2" style={{fontSize:"17px"}}>{header}</p>
                <p className="my-2" style={{fontWeight:500,fontSize:"14px"}}>{subheader}</p>
            </div>
        </div>
    )
}

export default Question
