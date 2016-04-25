import express = require('express');
var mysql = require('mysql'); // node-mysql module
import path = require('path');
import * as db from "../connection/db";

export function index (req: express.Request, res: express.Response) {
    console.log("Treatments index req.params", req.params);
    var patientId = req.params.patientId;
    var firstname = req.params.firstname;
    var lastname = req.params.lastname;
    console.log("selectTreatments for patientId = "+patientId);
    db.db_connection.ready(function(){ 
     var treatmentTable = db.db_connection.table("treatment");
     
     treatmentTable.findAll({patientId:'='+patientId}).then(function(treatments){
	console.log("treatments = "+treatments);
        res.send(JSON.stringify(treatments));
     });
   });
}

export function list (req: express.Request, res: express.Response) {
    console.log("List treatments", req.params);
    db.db_connection.ready(function(){ 
     var treatmentTable = db.db_connection.table("treatment");
     
     treatmentTable.findAll().then(function(treatments){
	console.log("treatments = "+treatments);
        res.send(JSON.stringify(treatments));
     });
   });
}

export function create (req: express.Request, res: express.Response)  {
    console.log("Add treatment ", req.body);
    var newTreatment = req.body;
    db.db_connection.ready(function(){ 
     var treatmentTable = db.db_connection.table("treatment");
     treatmentTable.save(newTreatment).then(function(result){ 
	console.log("New treatment added: "+result.id); 
        res.sendStatus(200);        
     });
   });
}
export function show (req: express.Request, res: express.Response)  {
   console.log("getPatient")
   var treatmentId = req.params.id  
   db.db_connection.ready(function(){ 
     var treatmentTable = db.db_connection.table("treatment");
     treatmentTable.find(treatmentId).then(function(treatments){ 
	console.log("SELECT FROM treatment results: " + treatmentId);
        res.send(JSON.stringify(treatments));
     });
   });
}
export function update (req: express.Request, res: express.Response)  {
    console.log("update Treatment ", req.body);
    var newTreatment = req.body;
    db.db_connection.ready(function(){ 
     var treatmentTable = db.db_connection.table("treatment");
     treatmentTable.save(newTreatment).then(function(result){ 
	console.log("Treatment updated: " + result.id); 
        res.sendStatus(201);        
     });
   });
}
   
 export function destroy (req: express.Request, res: express.Response)  {
    console.log("deletePatientData server side ", req.params.id);
    var treatmentId = req.params.id   
     db.db_connection.ready(function(){ 
        var treatmentTable = db.db_connection.table("treatment");
        treatmentTable.remove(treatmentId, function(result){ 
           console.log("Treatment deleted: "+treatmentId); 
           res.sendStatus(204);       
        });   
     }); 
 }