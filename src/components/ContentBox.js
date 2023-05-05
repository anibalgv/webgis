import React, { Component, Props } from 'react'

export default class ContentBox extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <section className="content" style={{ marginBottom: '-90px' }}>
          <div className="block-header">
            <div className="row">
              <div className="col-lg-7 col-md-6 col-sm-12">
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row clearfix">
              <div className="col-lg-12">
                <div className="card">
                  <div className="body">
                    <div className="row">
                      <div className="col-md-12">
                        {this.props.children}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
