import { render } from '@testing-library/react';
import React, { Component, useEffect, useState, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom';
import { GeoserverGetCapabilities } from '../../services/geoserver/GeoserverCapabilities';

export default function MenuCatalogComponent() {

  const [layers, setLayers] = useState([]);
  const [groups, setGroups] = useState([]);
  const [workspaces, setWorkspaces] = useState([]);
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    start();
  }, [])

  const start = async () => {
    const geoserver = new GeoserverGetCapabilities();
    await geoserver.getCapabilities().then((capabilitiesResponse) => {
      const layersResponse = geoserver.getLayers(capabilitiesResponse);
      const groupsResponse = geoserver.groupLayers(layersResponse);
      setLayers(layersResponse);
      setGroups(groupsResponse);
      setWorkspaces(Object.keys(groupsResponse));
      return groupsResponse;
    });
  }

  const handlerMenu = (workspace) => {
    if (menu == workspace)
      setMenu(null);
    else
      setMenu(workspace);
  }

  const CalalogGroup = (props) => {
    return (
      <>
        <li className={menu == props.workspace ? 'active open' : ''}><a onClick={() => handlerMenu(props.workspace)} href="javascript:void(0);" className="menu-toggle  waves-effect waves-block"><i className="zmdi zmdi-caret-down"></i><span>{props.workspace.replaceAll('_', ' ')}</span> </a>
          <ul className="ml-menu" style={{ display: menu == props.workspace ? 'block' : 'none' }}>
            <CatalogItem workspace={props.workspace} layers={props.layers} />
          </ul>
        </li >
      </>
    );
  }

  const CatalogItem = (props) => {
    const layersFiltered = props.layers.filter((layer) => String(layer.Name).split(':')[0] == String(props.workspace));
    return (
      <>
        {layersFiltered.map(layer => <li key={Math.random()}> <Link to={'/map'} title={layer.Abstract} state={{ currentLayer: layer }} className="waves-effect waves-classic"> <span> {layer.Title} </span> </Link></li>)}
      </>
    );
  }

  return (
    <>
      <div className="menu">
        <ul className="list">
          <li className="header">CATALOGS</li>

          {workspaces.map(workspace => {
            return <CalalogGroup key={Math.random()} workspace={workspace} layers={layers} />
          }
          )}
          <li className="header">PARTNERS</li>
          <li ><Link to='https://executar.net' target={'_blank'} className=" waves-effect waves-block"><i className="zmdi zmdi-globe"></i><span>Executar.net</span> <span className='text-text-muted' style={{ fontSize: 11 }}> Development </span> </Link></li>
          <li className="header">CONTENT</li>
          <li ><Link to='documents' className=" waves-effect waves-block"><i className="zmdi zmdi-file"></i><span>Documents</span> </Link></li>
          <li ><Link to="/downloads" className=" waves-effect waves-block"><i className="zmdi zmdi-download"></i><span>Downloads</span> </Link></li>
          <li ><Link to="/staff" className=" waves-effect waves-block"><i className="zmdi zmdi-help"></i><span>About</span> </Link></li>
        </ul>
      </div>
    </>
  );

}// end function
