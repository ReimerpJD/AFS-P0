const path=require('path');
const fs=require('fs');
const express=require('express');
const Router=express();
Router.post('/Terminal/:ID',(Request,Response)=>{});//check password
Router.post('/User/:ID',(Request,Response)=>{});//check password
Router.get('/Fixture/:ID',(Request,Response)=>{});//generate challenge
Router.post('/Fixture/:ID',(Request,Response)=>{});//check challenge
Router.post('/Data');//log data under session's fixture, terminal, and user
module.exports=Router;