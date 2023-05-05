import React, { useState, useEffect, useRef } from 'react'
import { WMSTileLayer, MapContainer, TileLayer, LayerGroup, Map, LayersControl, ZoomControl, ScaleControl } from 'react-leaflet';
import { useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { control } from 'leaflet';
import { useLocation } from 'react-router-dom';
import LayerLegend from '../components/map/LayerLegend';
import 'leaflet-fullscreen/dist/Leaflet.fullscreen';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css'
import InitialPositionButton from '../components/map/InitialPositionButton';
import RemoveLayersButton from '../components/map/RemoveLayersButton';
import DownloadShapeButton from '../components/map/DownloadShapeButton';
import Watermark from '../components/map/Watermark';
import BaseLayersComponent from '../components/map/BaseLayersComponent';
import './Map.css';

export default function MapComponent() {
  const initialPostion = [process.env.REACT_APP_MAP_INITIALPOSITION_LATITUDE, process.env.REACT_APP_MAP_INITIALPOSITION_LONGITUDE]
  const [layers, setLayers] = useState([]);
  const location = useLocation();
  const { currentLayer } = location.state;
  const [legend, setLegend] = useState('');
  const geoserverWmsUrl = process.env.REACT_APP_GEOSERVER_WMS;
  const { BaseLayer } = LayersControl;


  useEffect(() => {
    refreshLayers();
    setLegend(process.env.REACT_APP_GEOSERVER_GETLEGENDGRAPHIC + String(currentLayer.Name));

  }, [currentLayer]);

  const refreshLayers = () => {
    const _layers = [];
    layers.forEach(layer => {
      if (layer.Name[0] != currentLayer.Name[0])
        _layers.push(layer)
    });
    _layers.push(currentLayer);
    setLayers(_layers);
  }

  return (
    <>
      {legend ? <LayerLegend url={legend} /> : null}
      <MapContainer
        center={initialPostion}
        zoom={11}
        scrollWheelZoom={true}
        zoomControl={false}
        fullscreenControl={{ position: 'topright' }}
        style={{ width: '100hw', height: '94vh', marginLeft: '0px', marginTop: '55px', position: 'relative' }}
      >
        <ScaleControl imperial={false} position='bottomleft' />
        <ZoomControl position='topright' />

        <LayersControl position="topright" collapsed={true} autoZIndex={true}>

          <BaseLayersComponent />

          <LayerGroup>

            <InitialPositionButton />
            <RemoveLayersButton
              removeLayers={() => setLayers([])}
              removeLegend={() => setLegend(null)}
            />
            <DownloadShapeButton layersList={layers} />
            <Watermark />

            {layers.map((item) =>
              <LayersControl.Overlay
                key={item.Title + 'control'}
                checked={true}
                name={`
                <b className='ml-2' style='text-transform: Uppercase;' > ${item.Title}  </b> 
                <div style='width: 600px;'> <p > ${item.Abstract} </p> </hr> </div>
              `}

              >
                <WMSTileLayer
                  layers={item.Name}
                  url={geoserverWmsUrl}
                  transparent={true}
                  format={'image/png'}
                  key={item.Name + Math.random()}
                  eventHandlers={{
                    remove: (e) => {
                      console.log('EventHandlers.remove:', e);
                    },

                  }}
                />
              </LayersControl.Overlay>
            )}

          </LayerGroup>
        </LayersControl>
      </MapContainer>
    </>
  )
}
