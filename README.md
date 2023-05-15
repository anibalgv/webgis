# A SIMPLE WEBGIS GEOSERVER CLIENT

This application connect to a geoserver especified on .env file and list all workspaces and layers from your server.

## CONFIG '.env' FILE

* **REACT_APP_GEOSERVER_WMS**=https://geoserver.yourdomain/wms
* **REACT_APP_GEOSERVER_GETCAPABILITIES_WMS**=https://geoserver.yourdomain/ows?service=wms&version=1.3.0&request=GetCapabilities
* **REACT_APP_GEOSERVER_GETLEGENDGRAPHIC**=https://geoserver.yourdomain/wms? REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=
* **REACT_APP_MAP_INITIALPOSITION_LATITUDE**=-3.7903
* **REACT_APP_MAP_INITIALPOSITION_LONGITUDE**=-38.5579
* **REACT_APP_DOCUMENTS_GOOGLEDRIVE_SHAREDID**=1OBbaDK8otGUbNCGJcdZutporEY17fwhl
* **REACT_APP_GEOSERVER_DOWNLOAD_SHAPE**=https://geoserver.yourdomain/{workspace}/ows?service=WFS&version=1.0.0&request=GetFeature&typeName={layerName}&outputFormat=SHAPE-ZIP
* **REACT_APP_GEOSERVER_DOWNLOAD_KML**=https://geoserver.yourdomain/{workspace}/wms/kml?layers={layerName}

Change `https://geoserver.yourdomain` to your geoserver url address as REACT_APP_MAP_INITIALPOSITION_LATITUDE and REACT_APP_MAP_INITIALPOSITION_LONGITUDE to your coodenates.

Demo [https://webgis.executar.net](https://webgis.executar.net)

## SETUP

### Starting the React App

#### `npm install`

Install all node dependencies  to the project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts

In the project directory, you can run:

##### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

##### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
