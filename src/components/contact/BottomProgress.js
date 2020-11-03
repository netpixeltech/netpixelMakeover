import React from 'react'

function BottomProgress({backView,progress,Back}) {
    return (
    <div className="row mt-5 my-3">
        <div className="col-md-4 my-3">
            <button onClick={()=>Back(backView)} type="button" className="btn " >Back</button>
        </div>
        <div className="col-md-4 my-3 text-center">
              <div className="progress mx-auto">
                <div className="progress-bar" role="progressbar" aria-valuenow={progress} style={{width: progress,backgroundColor:"#EB8D95"}} aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <p>COMPLETED {progress}</p>
        </div>
        {/* <div className="col-md-4"></div> */}
    </div>
    )
}

export default BottomProgress
