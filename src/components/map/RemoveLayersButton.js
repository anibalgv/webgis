import React from 'react'

export default function RemoveLayersButton({ removeLayers, removeLegend }) {
  return (
    <>
      <div className='leaflet-top leaflet-right' style={{ marginTop: 175, zIndex: 400 }} >
        <div className="leaflet-bar leaflet-control">
          <a className="zmdi zmdi-layers-clear leaflet-bar-part" href='javascript:void(0)' title="Remove All Layers" onClick={() => {
            removeLayers();
            removeLegend();
          }}></a>
        </div>
      </div>
    </>
  );
}
