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