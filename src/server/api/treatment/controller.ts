import express = require('express');
var mysql = require('mysql'); // node-mysql module
import path = require('path');
import * as db from "../connection/db";

export function index (req: express.Request, res: express.Response) {
    console.log("Treatments index");
    var patientId = req.params.patientId;
    console.log("selectTreatments for patientId = "+patientId);
    db.db_connection.ready(function(){ 
     var treatmentTable = db.db_connection.table("treatment");
     
     treatmentTable.findAll({patientId:'='+patientId}).then(function(treatments){
	console.log("SELECT * FROM treatment where patientId = "+patientId);
        res.send(JSON.stringify(treatments));
     });
   });
}