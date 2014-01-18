
var val = 10;
var currentEndTime = 10;
var currentStartTime = 0;
var currentActiveTime = 0;
var currentRestTime = 0;
var currentCycles = 0;
var minutesDisplay = 0;
var secondsDisplay= 0;
var routines,cycles = [];
var currentRoutine;

halt = false;

var savedRoutines = [
		{name:sample1,endTime:0,startTime:0,activeTime:60,restTime:30,cycles:10},
		{name:sample2,endTime:300,startTime:0,activeTime:30,restTime:60,cycles:0},
		{name:sample3,endTime:0,startTime:300,activeTime:30,restTime:30,cycles:0}
		];

for(var i =0; i <= savedRoutines.length; i++){
   
	savedRoutines[i];  //<li><a href="#timer">Page</a><a href="#settings">Default</a></li>

}

$(document).bind("pageinit", function() {

	var currentEndTime = $('workoutLength').val();
	console.log(currentEndTime);
});    


function keypad(){
	

}

function start(){
		if (val <= 0){
			
			 var goingDown = clearInterval(goingDown);
			
		}else{
			
			var goingDown = setInterval(function(){chronos()}, second);
		}
		
}

function chronos() {
	
	console.log(val);
	val--;
}

function reset(){
	val = 30;
	console.log(val);
}
function structure(){

	
}
function saveRoutine(){
	console.log("save routine");
}
function newRoutine(){
	prompt("Name your new routine!");	
}

function delRoutine(){
	prompt("delete routine");
}

function editRoutine(){
	prompt("edit routine");
}
function milliSec(num){
return num * 1000
}
function routine(name, endTime,startTime,activeTime,restTime,cycles)
{
	this.name = name;
	this.endTime = endTime;
	this.startTime = startTime;
	this.activeTime = activeTime;
	this.restTime = restTime;
	this.cycles = cycles;
	
	this.changeStart = function changeStart(time){
			this.startTime=time;
		}
	this.changeEnd = function changeEnd(time){
			this.endTime=time;
		}
	this.changeActive = function changeActive(time){
			this.activeTime=time;
		}
	this.changeRest = function changeRest(time){
			this.restTime=time;
		}
	this.changeCycles = function changeCycles(count){
			this.restTime=count;
		}            
}

/*
setTimeout()
Calls a function or executes a code snippet after specified delay.
 
setInterval()
Calls a function or executes a code snippet repeatedly, with a fixed time delay between each call to that function.
 
clearTimeout()
Clears the delay set by setTimeout().
 
clearInterval()
Cancels repeated action which was set up using setInterval().
*/

