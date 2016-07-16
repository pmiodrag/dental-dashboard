import express = require('express');
var mysql = require('mysql'); // node-mysql module
import path = require('path');
import * as db from "../connection/db";
var bodyParser = require('body-parser');
var  multer = require("multer");

export function index (req: express.Request, res: express.Response)  {
   console.log("Get images")
   db.db_connection.ready(function(){ 
     var galleryTable = db.db_connection.table("gallery");
     galleryTable.findAll().then(function(images){ 
	console.log("SELECT * FROM gallery results: ");
        res.send(JSON.stringify(images));
     });
   });
}

//export function show (req: express.Request, res: express.Response)  {
//   console.log("getDoctor")
//   var doctorId = req.params.id  
//   db.db_connection.ready(function(){ 
//     var doctorTable = db.db_connection.table("doctor");
//     doctorTable.find(doctorId).then(function(doctors){ 
//	console.log("SELECT FROM doctor results: "+doctorId);
//        res.send(JSON.stringify(doctors));
//     });
//   });
//}
//export function getDoctorData (req: express.Request, res: express.Response)  {
//   console.log("getDoctorData server side ", __dirname)   
//    res.sendFile(path.resolve(__dirname, 'doctors.json'));   
//};
//
//
//
//export function update (req: express.Request, res: express.Response)  {
//    console.log("update Doctor ", req.body);
//    var newDoctor = req.body;
//    db.db_connection.ready(function(){ 
//     var doctorTable = db.db_connection.table("doctor");
//     doctorTable.save(newDoctor).then(function(result){ 
//	console.log("Doctor updated: "+result.id); 
//        res.sendStatus(201);        
//     });
//   });
//}
   
// export function destroy (req: express.Request, res: express.Response)  {
//    console.log("deleteDoctorData server side ", req.params.id)
//    var doctorId = req.params.id   
//     db.db_connection.ready(function(){ 
//        var doctorTable = db.db_connection.table("doctor");
//        doctorTable.remove(doctorId, function(result){ 
//           console.log("Doctor deleted: "+doctorId); 
//           res.sendStatus(204);       
//        });   
//     }); 
// }
