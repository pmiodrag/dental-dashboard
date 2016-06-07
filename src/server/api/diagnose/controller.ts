import express = require('express');
var mysql = require('mysql'); // node-mysql module
import path = require('path');
import * as db from "../connection/db";

export function index (req: express.Request, res: express.Response) {
    console.log("Diagnoses index req.params", req.params);
    var name = req.params.name;
    db.db_connection.ready(function(){ 
     var diagnoseTable = db.db_connection.table("diagnose");
     
     diagnoseTable.findAll().then(function(diagnoses){
	console.log("diagnoses = "+diagnoses);
        res.send(JSON.stringify(diagnoses));
     });
   });
}


export function create (req: express.Request, res: express.Response)  {
    console.log("Add diagnose ", req.body);
    var newDiagnose = req.body;
    db.db_connection.ready(function(){ 
     var diagnoseTable = db.db_connection.table("diagnose");
     diagnoseTable.save(newDiagnose).then(function(result){ 
	console.log("New diagnose added: "+result.id); 
        res.send(JSON.stringify(result));           
     });
     diagnoseTable.find(4).then(function(diagnoses){ 
	console.log("SELECT FROM diagnose results: " + JSON.stringify(diagnoses));
       
     });
   });
}
export function show (req: express.Request, res: express.Response)  {
   var diagnoseId = req.params.id  
   db.db_connection.ready(function(){ 
     var diagnoseTable = db.db_connection.table("diagnose");
     diagnoseTable.find(diagnoseId).then(function(diagnoses){ 
	console.log("SELECT FROM diagnose results: " + diagnoseId);
        res.send(JSON.stringify(diagnoses));
     });
   });
}
export function update (req: express.Request, res: express.Response)  {
    console.log("update Diagnose ", req.body);
    var newDiagnose = req.body;
    db.db_connection.ready(function(){ 
     var diagnoseTable = db.db_connection.table("diagnose");
     diagnoseTable.save(newDiagnose).then(function(result){ 
	console.log("Diagnose updated: " + result.id); 
        res.sendStatus(201);        
     });
   });
}
   
 export function destroy (req: express.Request, res: express.Response)  {  
    var diagnoseId = req.params.id   
     db.db_connection.ready(function(){ 
        var diagnoseTable = db.db_connection.table("diagnose");
        diagnoseTable.remove(diagnoseId, function(result){ 
           console.log("Diagnose deleted: "+diagnoseId); 
           res.sendStatus(204);       
        });   
     }); 
 }