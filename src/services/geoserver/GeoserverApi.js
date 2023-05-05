import axios from "axios";

const GeoserverApi = axios.create({
  baseURL: "http://geoserver.executar.net/rest",

});

export default GeoserverApi;