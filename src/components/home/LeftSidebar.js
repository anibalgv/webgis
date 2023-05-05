import React, { Component } from 'react'
import MenuCatalog from './MenuCalalog'

export default function LeftSidebar() {

  return (
    <>
      {/* <!-- Left Sidebar --> */}
      <aside id="leftsidebar" className="sidebar" style={{ zIndex: 1000 }}>
        <div className="user-info">
          <div className="image"> <img src="assets/images/xs/logo.svg" width="48" height="48" alt="User" /> </div>
          <div className="info-container">
            <div className="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" role="button"><span style={{ fontSize: '11px' }}> A SIMPLE WEBGIS </span></div>
            <div className="email"> <span style={{ fontSize: '11px' }}> CONNECTED ON GEOSERVER </span></div>
          </div>
        </div>
        <MenuCatalog />
      </aside>


    </>
  )

}