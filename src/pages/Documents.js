import { latLng } from 'leaflet'
import React, { useState, useEffect } from 'react'
import ContentBox from '../components/ContentBox'

export default function Documents() {

  const googleDriveUrl = `https://drive.google.com/embeddedfolderview?id=${process.env.REACT_APP_DOCUMENTS_GOOGLEDRIVE_SHAREDID}#`;

  return (
    <>
      <section className='content' style={{ marginBottom: '-80px' }}>
        <div className='block-header'>
          <div className='row'>
            <div className='col-lg-7 col-md-6 col-sm-12'>
              <h2> AVAILABLE  DOCUMENTS </h2><small className='text-muted'> PUBLICS </small>
            </div>
          </div>
        </div>
      </section>

      <ContentBox>
        <div className="row clearfix">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="card">
              <div className="header">
                <h2><i className='zmdi zmdi-map'></i> MAPS <small> DOCUMENTS AND MAPS</small> </h2>
              </div>
              <div className="body table-responsive members_profiles">
                <iframe src={googleDriveUrl + 'list'} style={{ width: '100%', height: '300px', border: '0' }}></iframe>
              </div>
            </div>
          </div>
        </div>
      </ContentBox>

      <ContentBox>
        <div className="row clearfix">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="card">
              <div className="header">
                <h2><i className='zmdi zmdi-map'></i> MAPS <small> DOCUMENTS  E MAPS</small> </h2>
              </div>
              <div className="body table-responsive members_profiles">
                <iframe src={googleDriveUrl + 'grid'} style={{ width: '100%', height: '520px', border: '0' }}></iframe>
              </div>
            </div>
          </div>
        </div>
      </ContentBox>
    </>
  )
}
