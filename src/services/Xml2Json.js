export default class Xml2Json {

    convertXMLtoJSON = (xmlText) => {
        const parseString = require('xml2js').parseString;
        let json = {};
        parseString(xmlText, function (err, result) {
            json = result;
        });
        console.log('[Xml2Json.convertXMLToJSON]:\n', json)
        return json;
    }
}