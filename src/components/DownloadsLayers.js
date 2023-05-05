import React from 'react'
import { Link } from 'react-router-dom';

export default function DownloadsLayers({ list }) {
  const result = [];
  list.forEach(layer => {
    const workspace = layer.Name[0].split(':')[0];
    const shapeUrl = process.env.REACT_APP_GEOSERVER_DOWNLOAD_SHAPE
      .replace('{workspace}', workspace)
      .replace('{layerName}', layer.Name);
    const kmlUrl = process.env.REACT_APP_GEOSERVER_DOWNLOAD_KML
      .replace('{workspace}', workspace)
      .replace('{layerName}', layer.Name);

    result.push(
      <tr className='table table-sm'>
        <td width={'100%'}> <i className='zmdi zmdi-caret-right mr-2'></i>  {layer.Title}</td>
        <td>
          <span style={{ display: layer.MetadataURL ? 'block' : 'none' }}>
            <Link to={layer.MetadataURL ? layer.MetadataURL[0].OnlineResource[0].$['xlink:href'] : '#'} target={'_blank'} style={{ color: 'white' }} className='badge small btn-sm small bg-light-green  btn-block btn-xs waves-effect'> <i className='zmdi zmdi-open-in-new'></i> METADADO </Link>
          </span>
          <span style={{ display: !layer.MetadataURL ? 'block' : 'none' }} className='text-muted'>
            <i className='badge text-light  small btn-sm small bg-default btn-block btn-xs waves-effect'> <i className='zmdi zmdi-open-in-new'></i> METADADO </i>
          </span>
        </td>
        <td> <Link to={shapeUrl} target={'_blank'} style={{ color: 'white' }} className='badge small small bg-cyan  btn-xs waves-effect' > <i className='zmdi zmdi-shape'></i> SHAPE </Link> </td>
        <td><Link to={kmlUrl} target={'_blank'} style={{ color: 'white' }} className='badge small btn-sm small  bg-pink btn-block btn-xs waves-effect'> <i className='zmdi zmdi-code'></i> KML </Link> </td>
      </tr>
    );
  })
  return result;
}
