import React, { useState, useEffect } from 'react'
import ContentBox from './ContentBox'
import { GeoserverGetCapabilities } from '../services/geoserver/GeoserverCapabilities';

export default function Dashboards() {

  const [layers, setLayers] = useState([]);
  const [groups, setGroups] = useState([]);
  const geoserver = new GeoserverGetCapabilities();
  const sinceYear = 2022;

  useEffect(() => {
    getLayers();

  }, [])

  const getLayers = async () => {
    await geoserver.getCapabilities().then(capabilitiesResponse => {
      const layersResponse = geoserver.getLayers(capabilitiesResponse);
      const groupsResponse = geoserver.groupLayers(layersResponse);
      setLayers(layersResponse);
      setGroups(groupsResponse);
    })
  }

  return (
    <>
      <section class="content" style={{ marginBottom: '-50px' }}>
        <div className="card widget_2">
          <ul className="row clearfix list-unstyled m-b-0">
            <li className="col-lg-4 col-md-6 col-sm-12">
              <div className="body">
                <div className="row">
                  <div className="col-7">
                    <h5 className="m-t-0"> Catalogs </h5>
                    <small className="text-small"> Classifieds </small>
                  </div>
                  <div className="col-5 text-right">
                    <h2 className=""> {Object.keys(groups).length} </h2>
                    <small className="info">Groups</small>
                  </div>
                  <div className="col-12">
                    <div className="progress m-t-20">
                      <div className="progress-bar l-green" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-lg-4 col-md-6 col-sm-12">
              <div className="body">
                <div className="row">
                  <div className="col-7">
                    <h5 className="m-t-0"> Layers</h5>
                    <small className="text-small"> Disponibles </small>
                  </div>
                  <div className="col-5 text-right">
                    <h2 className=""> {layers.length} </h2>
                    <small className="info">FeatureTypes</small>
                  </div>
                  <div className="col-12">
                    <div className="progress m-t-20">
                      <div className="progress-bar l-blush" role="progressbar" aria-valuenow="12" aria-valuemin="0" aria-valuemax="100" style={{ width: "12%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-lg-4 col-md-6 col-sm-12">
              <div className="body">
                <div className="row">
                  <div className="col-7">
                    <h5 className="m-t-0"> Under construction </h5>
                    <small className="text-small">Since {sinceYear}</small>
                  </div>
                  <div className="col-5 text-right">
                    <h2 className=""> {(new Date().getFullYear() - sinceYear)}</h2>
                    <small className="info">Yers</small>
                  </div>
                  <div className="col-12">
                    <div className="progress m-t-20">
                      <div className="progress-bar l-parpl" role="progressbar" aria-valuenow="39" aria-valuemin="0" aria-valuemax="100" style={{ width: "39%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
