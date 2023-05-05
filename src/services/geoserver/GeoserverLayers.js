import GeoserverApi from './GeoserverApi';
import GeoserverFeaturetypes from './GeoserverFeaturetypes';

export default class GeoserverLayers {
  getLayers = async () => {
    const layersResponse = await GeoserverApi.get('/layers.json')
      .then(response => response.data.layers.layer)
      .then(response => {
        console.log("GeoserverLayers.getLayers: ", response);

        return response;
      })
      .catch((error) => {
        console.log('GeoserverLayers.getLayers: Error:\n', error);
      });
    // return await layersResponse.data.layers.layer;
  }
}




