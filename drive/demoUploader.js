let zipper = require('./zipperForDemos')
let driveApi = require('./driveManager');
const path = require('path');

//name of the file to be compiled and uploaded

//name of the demo containin the files to be compiled to a zip 
//este path funciona
//'../../.steam/steamcmd/tfc/tfc/demos'

const demofolder = '../../.steam/steamcmd/tfc/tfc/demos'

//mimetype reference https://developer.mozilla.org/es/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
const mimetype = 'application/zip'



//this is the time for the setTimeout first promise
const timeToFinish = 20000

function getDemos(msg, map) {
    let filename = `${map} brasil demos.zip`;
    zipper.createDemos(filename, demofolder, map);
    //path of the file to be uploaded by driveapi
    let filePath = path.resolve('../DemoManagerTFC/', filename)

    setTimeout(function () {
        driveApi.uploadDemos(filename, mimetype, filePath, msg)
    }, timeToFinish);
}
console.log("end getting demos");

module.exports = { getDemos }