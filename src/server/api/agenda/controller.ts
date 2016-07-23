import express = require('express');
var mysql = require('mysql'); // node-mysql module
import path = require('path');
import * as db from "../connection/db";

export function index (req: express.Request, res: express.Response) {
    console.log("Agenda index req.params", req.params);
    var name = req.params.name;
    db.db_connection.ready(function(){ 
    var agendaTable = db.db_connection.table("agenda");
     
     agendaTable.findAll().then(function(events){
	console.log("events = " + events);
        res.send(JSON.stringify(events));
     });
   });
}


export function create (req: express.Request, res: express.Response)  {
    console.log("Add event ", req.body);
    var newEvent = req.body;
    db.db_connection.ready(function(){ 
     var agendaTable = db.db_connection.table("agenda");
     agendaTable.save(newEvent).then(function(result){ 
	console.log("New event added: "+result.id); 
        res.send(JSON.stringify(result));           
     });
   });
}

export function update (req: express.Request, res: express.Response)  {
    console.log("update Diagnose ", req.body);
    var newEvent = req.body;
    db.db_connection.ready(function(){ 
     var agendaTable = db.db_connection.table("agenda");
     agendaTable.save(newEvent).then(function(result){ 
	console.log("Event updated: " + result.id); 
        res.sendStatus(201);        
     });
   });
}
   
 export function destroy (req: express.Request, res: express.Response)  {  
    var eventId = req.params.id   
     db.db_connection.ready(function(){ 
        var agendaTable = db.db_connection.table("agenda");
        agendaTable.remove(eventId, function(result){ 
           console.log("Event deleted: " + eventId); 
           res.sendStatus(204);       
        });   
     }); 
 }