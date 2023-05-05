import React from "react";
import { LayersControl, MapContainer, TileLayer } from "react-leaflet";
import ContentBox from "../components/ContentBox";
import Dashboards from "../components/Dashboards";
import Staff from "./Staff";

export default function Home() {

  return (
    <>
      <section className='content' style={{ marginBottom: '-40px' }}>
        <div className='block-header'>
          <div className='row'>
            <div className='col-lg-7 col-md-6 col-sm-12'>
              <h2>WELLCOME</h2><small className='text-muted'> HELP US TO IMPROVE  THIS APP  </small>
            </div>
          </div>
        </div>
      </section>

      <div className="col-12">
        <Dashboards />
      </div>

      <ContentBox>
        <div className="row">
          <div className="col-md-6">
            <h5> <i className="zmdi zmdi-globe"> </i> Executar.net </h5>
            <p className="text-justify">
              Specialized in Web Application Development, we seek to use the most current development standards, providing better agility in the analysis, creation and coding processes of your project.


            </p>
            <blockquote>
              <p className="text-justify">Using OpenSource technologies such as HTML5, PHP and Dot.Net we provide robust and reliable solutions that, together with DBMS MySQL and SQL Server, guarantee total integrity and availability of your data. </p>
            </blockquote>
          </div>
          <div className="col-md-6">
            <h5> <i className="zmdi zmdi-pin"></i> Contact</h5>
            <p className="text-justify">
              <br />anibalgv@gmail.com
              <br />contato@executar.net

            </p>
          </div>
        </div>

        <div style={{ margin: 0 }}>
          <div className="row">
            <img src="assets/images/lg/map.png" className="img-fluid w-100" />
          </div>
        </div>
        <br />

      </ContentBox>

    </>
  )

}