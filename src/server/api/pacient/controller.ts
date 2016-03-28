import express = require('express');
var mysql = require('mysql'); // node-mysql module
import path = require('path');
import * as db from "../connection/db";
var bodyParser = require('body-parser');

export function getPacients (req: express.Request, res: express.Response)  {
   console.log("getPacients")
   db.db_connection.ready(function(){ 
     var patientTable = db.db_connection.table("patient");
     patientTable.findAll().then(function(patients){ 
	console.log("SELECT * FROM patient results: ");
        res.send(JSON.stringify(patients));
     });
   });
}
export function getPacientData (req: express.Request, res: express.Response)  {
   console.log("getPacientData server side ", __dirname)   
    res.sendFile(path.resolve(__dirname, 'pacients.json'));   
};
export function addPacient (req: express.Request, res: express.Response)  {
    console.log("addPacient controller req.bodyyyy", req.body);
    var newPatient = req.body;
    db.db_connection.ready(function(){ 
     var patientTable = db.db_connection.table("patient");
     patientTable.save(newPatient).then(function(result){ 
	console.log("New patient added: "+result.id + " new patient = " + newPatient.id); 
        res.sendStatus(200);   
        //res.send("New patient added: ");     
     });   
     //patientTable.save(newPatient,function(result){ 
	//console.log("New patient added: "+result.id + " new patient = " + newPatient.id); 
     //   res.sendStatus(200);  
        //res.send("New patient added: ");     
    // });    
   });
    // TODO Implement database insert query using req.body params.
//   db.connection.query("INSERT INTO patient SET ?", req.params, function(err,rows){
//    if(err) {
//        console.log("Problem with MySQL"+err);        
//    } else {
//        console.log('Last insert ID:', res.locals.insertId);
//    }
//   });
   // res.sendStatus(200);   
}
