import React from 'react'

export default function (props) {

  return (
    <>
      <div className='' style={{ position: 'absolute', top: '68px', left: '260px', width: 'auto', zIndex: 1000, }} >
        <div className="card">
          <div className="header">
            <h2>
              <a role="button" data-toggle="collapse" data-parent="#accordion_10" href="#collapseOne_10" aria-expanded="true" aria-controls="collapseOne_10" className='panel-title' onClick={(event) => {
              }}>
                <i className="zmdi zmdi-eye text-success"> &nbsp; </i>
              </a>
              {props.layer.Title}
            </h2>
          </div>
          <div className="">
            <div className="row clearfix">
              <div className="col-md-12">
                <div className="panel-group" id="accordion_10" role="tablist" aria-multiselectable="true">
                  <div className="panel panel-col-blue-grey">
                    <div className="panel-heading" role="tab" id="headingOne_10">
                    </div>
                    <div id="collapseOne_10" className="panel-collapse collapse in show" role="tabpanel" aria-labelledby="headingOne_10">
                      <div className="panel-body" >

                        <img src={props.url} className='rounded mx-auto d-block'></img>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
