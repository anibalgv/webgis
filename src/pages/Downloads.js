import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { GeoserverGetCapabilities } from '../services/geoserver/GeoserverCapabilities'
import ContentBox from '../components/ContentBox';
import DownloadsCustom from '../components/DownloadsCustom';

export default function Downloads() {

  const geoserver = new GeoserverGetCapabilities();
  const [groups, setGroups] = useState([]);
  const [workspaces, setWorkspaces] = useState([]);
  const [layers, setLayers] = useState([]);
  const [metadata, setMetadata] = useState(null);

  useEffect(() => {
    getCapabilities();
  }, [])

  const getCapabilities = async () => {
    await geoserver.getCapabilities().then(capabilitiesResponse => {
      const layersResponse = geoserver.getLayers(capabilitiesResponse);
      const groupsResponse = geoserver.groupLayers(layersResponse);
      setLayers(layersResponse);
      setGroups(groupsResponse);
      setWorkspaces(Object.keys(groupsResponse));
    })
  }

  const DownloadList = () => {

    const component = [];
    const linkSource = process.env.REACT_APP_GEOSERVER_WMS;

    for (const workspace in groups) {
      if (Object.hasOwnProperty.call(groups, workspace)) {
        const catalogList = [];
        const layersLocal = groups[workspace];

        catalogList.push(
          <div className="card">
            <div className="header">
              <h2><i className='zmdi zmdi-bookmark-outline'></i> CATALOGO {workspace.toUpperCase()} <small> FONTE DOS DADOS: <Link to={linkSource} target={'_blank'}> {linkSource} </Link></small>
              </h2>
            </div>
          </div>
        );
        <div className='col-md-1'>
          <table className="table table-hover table-sm small">
            <thead>
            </thead>
            <tbody>

              {layersLocal.forEach(layer => {
                const shapeUrl = process.env.REACT_APP_GEOSERVER_DOWNLOAD_SHAPE
                  .replace('{workspace}', workspace)
                  .replace('{layerName}', layer.Name);
                const kmlUrl = process.env.REACT_APP_GEOSERVER_DOWNLOAD_KML
                  .replace('{workspace}', workspace)
                  .replace('{layerName}', layer.Name);

                catalogList.push(
                  <tr className='table table-sm'>
                    <td width={'100%'}> <i className='zmdi zmdi-caret-right mr-2'></i>  {layer.Title}</td>
                    <td>
                      <span style={{ display: layer.MetadataURL ? 'block' : 'none' }}>
                        <Link to={layer.MetadataURL ? layer.MetadataURL[0].OnlineResource[0].$['xlink:href'] : '#'} target={'_blank'} className='badge small btn-sm small bg-light-green  btn-block btn-xs waves-effect'> <i className='zmdi zmdi-open-in-new'></i> METADADO </Link>
                      </span>
                      <span style={{ display: !layer.MetadataURL ? 'block' : 'none', }} className='text-muted'>
                        <i className='badge text-light  small btn-sm small bg-default btn-block btn-xs waves-effect'> <i className='zmdi zmdi-open-in-new'></i> METADADO </i>
                      </span>
                    </td>
                    <td> <Link to={shapeUrl} target={'_blank'} className='badge small btn-sm small bg-cyan  btn-block btn-xs waves-effect'> <i className='zmdi zmdi-shape'></i> SHAPE </Link> </td>
                    <td><Link to={kmlUrl} target={'_blank'} className='badge small btn-sm small  bg-pink btn-block btn-xs waves-effect'> <i className='zmdi zmdi-code'></i> KML </Link> </td>
                  </tr>
                );
              })}

            </tbody>
          </table>
        </div>
        component.push(<ContentBox>{catalogList}</ContentBox>)
      }
    }
    return component;
  }

  return (
    <>
      <section className='content' style={{ marginBottom: '-80px' }}>
        <div className='block-header'>
          <div className='row'>
            <div className='col-lg-7 col-md-6 col-sm-12'>
              <h2>DOWNLOAD CONTENT</h2><small className='text-muted'>FILES SHAPEs AND KMLs </small>
            </div>
          </div>
        </div>
      </section>
      {DownloadList()}
      {/* <DownloadsCustom /> */}
    </>
  )
}