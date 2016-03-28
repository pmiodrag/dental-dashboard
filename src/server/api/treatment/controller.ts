import express = require('express');
var mysql = require('mysql'); // node-mysql module
import path = require('path');
import * as db from "../connection/db";

export function selectTreatments (req: express.Request, res: express.Response) {
    console.log("selectTreatments")
    db.db_connection.ready(function(){ 
     var treatmentTable = db.db_connection.table("treatment");
     treatmentTable.findAll().then(function(treatments){ 
	console.log("SELECT * FROM treatment results: ");
        res.send(JSON.stringify(treatments));
     });
   });
}