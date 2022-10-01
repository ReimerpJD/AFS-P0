const path=require('path');
const fs=require('fs');
const https=require('https');
const readline=require('readline');
const interface=readline.createInterface({input:process.stdin,output:process.stdout});
var Engine;
function Prompt(Message){
	return new Promise((Resolve,Reject)=>{interface.question(Message,Answer=>Resolve(Answer))});
}
function LaunchServer(){
	this.App=require(path.join(__dirname,'Server'));
	this.SSH=require(path.join(__dirname,'SSL'));
	this.Server=https.createServer(this.App,this.SSH);
	this.Server.listen(8443);
}
function LaunchClient(){
	this.GetServerIP=async function(){
		this.Server=await Prompt("What is the Server's IP Address?\n");
		this.Server.replace('\\','');
		this.Listen();
	}
	this.Listen=async function(){
		https.request({host:this.Server,path:'/Terminal/0',port:8443},R=>{console.log('res:',R)});
		// wait for loopback
		// once present, complete handshake
		// once present, listen for loopback break
	}
	this.GetServerIP();
}
async function Launch(){
	let Server=null;
	while(Server===null)Server=await GetMode();
	if(Server)Engine=new LaunchServer();
	else Engine=new LaunchClient();
}
async function GetMode(){
	let Mode=await Prompt('Server or Client? (S/C)\n');
	if(Mode=='S'||Mode=='s')return true;
	else if(Mode=='C'||Mode=='c')return false;
}
Launch();