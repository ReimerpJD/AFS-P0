const path=require('path');
const fs=require('fs');
const express=require('express');
const Router=express();
Router.post('/Terminal/:ID',(Request,Response)=>{
	console.log('Terminal Login');
	Response.send(true);
});//check password
Router.post('/User/:ID',(Request,Response)=>{
	console.log('User Login');
	Response.send(true);
});//check password
Router.get('/Fixture/:ID',(Request,Response)=>{
	console.log('Fixture Challenge Request');
	Response.send(true);
});//generate challenge
Router.post('/Fixture/:ID',(Request,Response)=>{
	console.log('Fixture Challenge Response');
	Response.send(true);
});//check challenge
Router.all('/*',(Request,Response)=>{
	console.log('caught\'ya!');
	Response.send(false);
});
Router.post('/Data');//log data under session's fixture, terminal, and user
module.exports=Router;