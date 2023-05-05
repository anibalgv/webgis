import axios from "axios";
import React, { Component } from "react";
import Xml2Json from "../Xml2Json";



export class GeoserverGetCapabilities extends Component {

  getCapabilities = async () => {
    const url = process.env.REACT_APP_GEOSERVER_GETCAPABILITIES_WMS;
    return await axios.get(url,
      {
        headers: {
          "Content-Type": "application/xml; charset=utf-8"
        },
        responseType: 'text',
      })
      .then(responseXML => {
        console.log('[GEOSERVERGETCAPABILITIES.GETCAPABILITIES]:\n', responseXML.data);
        const responseJSON = new Xml2Json().convertXMLtoJSON(responseXML.data);
        return responseJSON;
      });
  }

  getLayers(getCapabilitiesJSON) {
    // /WMS_Capabilities/Capability / Layer / Layer
    const layersJSON = getCapabilitiesJSON.WMS_Capabilities.Capability[0].Layer[0].Layer;
    console.log('[GEOSERVERGETCAPABILITIES.GETLAYERS]:\n', layersJSON);
    return layersJSON;
  }

  groupLayers = (layersJSON) => {
    const grouped = [];
    for (let i = 0; i < layersJSON.length; i++) {
      const layer = layersJSON[i];
      const workspace = layer.Name[0].split(':')[0];
      if (!grouped[workspace]) {
        grouped[workspace] = [];
      }
      grouped[workspace].push(layer);
    }
    console.log('[GEOSERVERGETCAPABILITIES.GROUPLAYERS]:\n', grouped);
    return grouped;
  }

}