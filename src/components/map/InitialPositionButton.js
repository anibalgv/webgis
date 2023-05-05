import React from 'react'
import { useMap } from 'react-leaflet';

export default function InitialPositionButton() {
  const map = useMap();
  const initialPostion = [process.env.REACT_APP_MAP_INITIALPOSITION_LATITUDE, process.env.REACT_APP_MAP_INITIALPOSITION_LONGITUDE]

  return (
    <>
      <div className='leaflet-top leaflet-right' style={{ marginTop: 220, zIndex: 400 }} >
        <div className="leaflet-bar leaflet-control">
          <a className="zmdi zmdi-my-location leaflet-bar-part" href='javascript:void(0)' title="Initial Position" onClick={() => {
            map.flyTo(initialPostion, 12);
          }}></a>
        </div>
      </div>
    </>
  );
}
