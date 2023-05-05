import axios from 'axios';
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import GeoserverApi from './GeoserverApi'

export default class GeoserverFeaturetypes {

  getFeatureTypes = async () => {
    return await GeoserverApi.get('/workspaces/WORKSPACE/featuretypes.json')
      .then((response) => {
        const featureTypes = response.data.featureTypes.featureType;
        console.log('GeoserverFeaturetypes.getFeatureTypes:\n', featureTypes);
        return featureTypes;
      })
      .catch((error) => console.log('GeoserverFeaturetypes.getFeatureType: Error\n', error));
  }

  getFeatureType = async (featureTypeHref) => {
    return await axios.get(featureTypeHref)
      .then((response) => {
        console.log('GeoserverFeaturetypes.getFeatureType:\n', response.data.featureType);
        return response.data.featureType;
      })
      .catch((error) => console.log('GeoserverFeaturetypes.getFeatureType: Error\n', error));
  }
}