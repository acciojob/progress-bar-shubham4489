//your JS code here. If required.
const container = document.getElementById("circle-container");

const NumberOfCircles = 5;

function createCircle(id){
 const circle =document.createElement("div");
	circle.classList.add('circle');
	circle.id('circle-${id}');
	return circle;
 }
 function  createLine(){
	 const line = document.CreateElement("div");
	 line.classList.add('line');
	 return line;
 }
   for(let i=1; i<=NumberOfCircles; i++){
	   const circle = createCircle(i);
	   container.appendChild(circle);


	   if(i<NumberOfCircles){
		   const line = createLine();
		   container.appneChild(line);
		   
	   }
   }
