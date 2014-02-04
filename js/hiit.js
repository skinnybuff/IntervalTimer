// establish public variables
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
// array for all routines both default and user created 
var savedRoutines = [
		sample1, sample2,sample3
		];
//{name:sample3,endTime:0,startTime:300,activeTime:30,restTime:30,cycles:0}

// routine constructor
function Routine(title, endTime,startTime,activeTime,restTime,cycles){
	this.title = title;
	this.cycles = cycles;
	this.startTime = startTime;
	this.activeTime = activeTime;
	this.restTime = restTime;
	var duration = 0;
	var step = [];
	var stepCount = step.length;
	this.endTime = endTime;


	this.addStep = function(active, rest){
		step.push(active, rest);
	};
	this.delStep= function(active){
		for(i =0; i <= stepCount; i++){
			if(step[i] === active){
				var place = array.indexOf(2);
				step.splice(place, 2);
			}
		}
	};
	this.changeStart = function (time){
		this.startTime=time;
	};
	this.changeEnd = function (time){
		this.endTime=time;
	};
	this.changeActive = function changeActive(time){
		this.activeTime=time;
	};
	this.changeRest = function changeRest(time){
		this.restTime=time;
	};
	this.changeCycles = function changeCycles(count){
		this.restTime=count;
	};
} // end Routine

//orginal routinr function
function routine(name, endTime,startTime,activeTime,restTime,cycles)
{
	

}

// list all routines in jqm
for(var i =0; i <= savedRoutines.length; i++){
   
	console.log(savedRoutines[i]);
	//list items to loction below innerHTML
	//<li><a href="#timer">Page</a><a href="#settings">Default</a></li>

}

$(document).bind("pageinit", function() {

	var currentEndTime = $('workoutLength').val();
	console.log(currentEndTime);
});

// catch button presses
function keypad(){
	

}
// run selected interval
function start(){
	var goingDown;
		if (val <= 0){
			goingDown = clearInterval(goingDown);
		}else{
			goingDown = setInterval(chronos(), second);
		}
}
// controll timer animation
function chronos() {
	
	console.log(val);
	val--;
}
// reset current routine
function reset(){
	val = 30;
	console.log(val);
}
function structure(){

	
}
//catch button click add new routine to array
function saveRoutine(){
	console.log("save routine");
}
// use object constructor
function newRoutine(){
	prompt("Name your new routine!");
}
//add to constructor
function delRoutine(){
	prompt("delete routine");
}
//add to constructor
function editRoutine(){
	prompt("edit routine");
}
// run all time through this function
function milliSec(num){
return num * 1000;
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

