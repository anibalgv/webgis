import React from 'react'
import { Link } from 'react-router-dom';
import DownloadsLayers from '../DownloadsLayers';

export default function DownloadShapeButton({ layersList }) {
  return (
    <>
      <div className='leaflet-top leaflet-right' style={{ marginTop: 265, zIndex: 400 }} >
        <div className="leaflet-bar leaflet-control">
          <a className="zmdi zmdi-download leaflet-bar-part" title={'Download Shapefile List'} data-toggle="modal" data-target="#largeModal"></a>
        </div>
      </div>

      <div class="modal fade" id="largeModal" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="largeModalLabel"> <i className='zmdi zmdi-download mr-2' ></i> DOWNLOADS</h5>
            </div>
            <div class="modal-body">
              <h6 className='text-muted'>CAMADAS SELECIONADAS:</h6>
              <br />
              <div className='col-md-12'>
                <table className="table table-sm table-hover">
                  <thead>
                  </thead>
                  <tbody>
                    <DownloadsLayers list={layersList} />
                  </tbody>
                </table>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-link waves-effect btn-sm" data-dismiss="modal">CLOSE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
