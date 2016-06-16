import express = require('express');
var mysql = require('mysql'); // node-mysql module
import path = require('path');
import * as db from "../connection/db";
var bodyParser = require('body-parser');
var  multer = require("multer");

export function index (req: express.Request, res: express.Response)  {
   console.log("getPatients")
   db.db_connection.ready(function(){ 
     var patientTable = db.db_connection.table("patient");
     patientTable.findAll().then(function(patients){ 
	console.log("SELECT * FROM patient results: ");
        res.send(JSON.stringify(patients));
     });
   });
}

export function show (req: express.Request, res: express.Response)  {
   console.log("getPatient")
   var patientId = req.params.id  
   db.db_connection.ready(function(){ 
     var patientTable = db.db_connection.table("patient");
     patientTable.find(patientId).then(function(patients){ 
	console.log("SELECT FROM patient results: "+patientId);
        res.send(JSON.stringify(patients));
     });
   });
}
export function getPatientData (req: express.Request, res: express.Response)  {
   console.log("getPatientData server side ", __dirname)   
    res.sendFile(path.resolve(__dirname, 'patients.json'));   
};

export function create (req: express.Request, res: express.Response)  {
    console.log("addPatient ", req.body);
    var newPatient = req.body;
    db.db_connection.ready(function(){ 
     var patientTable = db.db_connection.table("patient");
     patientTable.save(newPatient
         ).then(function(result){ 
	console.log("New patient added: "+result.id); 
        res.send(JSON.stringify(result));        
     });
   });
}

export function update (req: express.Request, res: express.Response)  {
    console.log("update Patient ", req.body);
    var newPatient = req.body;
    db.db_connection.ready(function(){ 
     var patientTable = db.db_connection.table("patient");
     patientTable.save(newPatient).then(function(result){ 
	console.log("Patient updated: "+result.id); 
        res.sendStatus(201);        
     });
   });
}
   
 export function destroy (req: express.Request, res: express.Response)  {
    console.log("deletePatientData server side ", req.params.id)
    var patientId = req.params.id   
     db.db_connection.ready(function(){ 
        var patientTable = db.db_connection.table("patient");
        patientTable.remove(patientId, function(result){ 
           console.log("Patient deleted: "+patientId); 
           res.sendStatus(204);       
        });   
     }); 
 }
 
 export function uploadFile (req: express.Request, res: express.Response) {
  // We are able to access req.files.file thanks to
  // the multiparty middleware
  //upload.single(req.file);
    
     console.log("Patient param: "+req.param); 
  res.status(204).end("Profile image uploaded");
}