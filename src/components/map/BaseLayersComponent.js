import React from 'react'
import { WMSTileLayer, MapContainer, TileLayer, LayerGroup, Map, LayersControl, ZoomControl } from 'react-leaflet';
const { BaseLayer } = LayersControl;

export default function BaseLayersComponent() {
  return (
    <>
      <BaseLayer checked={true} name={'Openstreet'}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </BaseLayer>
      {/* <BaseLayer name='Google Maps'>
        <TileLayer
          url='https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
          attribution='&copy;<a href="https://maps.google.com">GoogleMap</a>'
          maxZoom={20}
          subdomains={['mt1', 'mt2', 'mt3']}
        />
      </BaseLayer> */}
      <BaseLayer name='Opentop'>
        <TileLayer
          attribution='&copy;<a href="https://opentopomap.org/#map=6/-18.969/-45.000">OpenTopoMap</a>'
          url="https://tile.opentopomap.org/{z}/{x}/{y}.png"
        />
      </BaseLayer>
      <BaseLayer name='NASA Blue Marble'>
        <TileLayer
          attribution="NASA Blue Marble, image service by OpenGeo"
          url="https://gibs-{s}.earthdata.nasa.gov/wmts/epsg3857/best/BlueMarble_ShadedRelief_Bathymetry/default//EPSG3857_500m/{z}/{y}/{x}.jpeg"
          maxNativeZoom={8}
        />
      </BaseLayer>
      <BaseLayer name={'Vazio'}>
        <TileLayer
          attribution=''
          url=""
        />
      </BaseLayer>
    </>
  )
}
