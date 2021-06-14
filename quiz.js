window.onload = function() {
	show(0);
}

let questions = [
		 {
			 
	 id:1,
		 question:"Q1:The default property of picture box is",
		 answer: "Picture",
		 options:[
		   "Caption",
		   "Picture",
		   "Text",
		   "Align"]
	     },
{
	 id:2,
		question:"Q2:The extension of visual basic is ",
		 answer: ".vbp",
		 options:[
		   ".vbp",
		   ".vb",
		   ".vp",
		   ".vpb"]
	     },
		 {
	id:3,		 
		 question:"Q3: Which one of the followings is the keyword",
		 answer: "Float",
		 options:[
		   "Area",
		   "Integer",
		   "Float",
		   "All of them"]
	     },
		 {
	id:4,		 
		question:"Q4: Which method is used to place cursor in a specified textbox",
		 answer: "None",
		 options:[
		   "Lostfocus",
		   "Click",
		   "Gotfocus",
		   "None"]
	     },
		 { 
	id:5,		 
		question:"Q5:To show system date and time , we use.....",
		 answer: "Now",
		 options:[
		   "Date",
		   "Time",
		   "Now",
		   "All of them"]
	     },	
		 {		 
	id:6,		 
		question:"Q6:The multiline property of textbox is by default",
		 answer: "False",
		 options:[
		   "True",
		   "False",
		   "Both",
		   "None of these"]
	     },	 
		 
	{
	id:7,		 
		question:"Q7:What will the result of the expression 13&25",
		 answer: "9",
		 options:[
		   "38",
		   "25",
		   "9",
		   "12"]
	     },	 
		 
		 {
	id:8,		 
		question:"Q8:Which one of the followings is the wrapper class",
		 answer: "Byte",
		 options:[
		   "Integer",
		   "Byte",
		   "Float",
		   "Char"]
	     },	 
		 
		  {
	id:9,		 
		question:"Q9:Which of the followings is the keyword",
		 answer:"All of them",
		 options:[
		   "Private",
		   "Public",
		   "Protected",
		   "All of them"]
	     },	 
		 {
	id:10,		 
		question:"Q10:Which control is not visible at runtime",
		 answer: "Timer",
		 options:[
		   "Label",
		   "Command button",
		   "Picture box",
		   "Timer"]
	     },	 
		 {
	id:11,		 
		question:"Q11:Which of the follwings is the keyword",
		 answer: "None of these",
		 options:[
		   "Float",
		   "Long",
		   "Boolean",
		   "None of these"]
	     },	 	 
		 {
	id:12,		 
		question:"Q12:Which event will occur when cursor leaves the textbox",
		 answer: "Lost focus",
		 options:[
		   "Got focus",
		   "Lost focus",
		   "Click",
		   "All of these"]
	     },	 	 
		 
		  {
	id:13,		 
		question:"Q13:To show system date is use",
		 answer: "Date",
		 options:[
		   "Date",
		   "Time",
		   "Now",
		   "All of these"]
	     },	 	 
		 
		 	  {
	id:14,		 
		question:"Q14:RMI stands for",
		 answer: "Remote method invocation",
		 options:[
		   "Record method invocation",
		   "Remote method invocation",
		   "Revoke method invocation",
		   "None of these"]
	     },	 	 
		 
		 
		 	  {
	id:15,		 
		question:"Q15:IPv4 address is of length ..... bits",
		 answer: "32",
		 options:[
		   "8",
		   "16",
		   "32",
		   "64"]
	     },	 	 
		 
		 	  {
	id:16,		 
		question:"Q16:......... is the example of wireless network",
		 answer: "Guided transmission",
		 options:[
		   "Guided transmission",
		   "Unguided transmission",
		   "Both A and B",
		   "None of these"]
	     },	 	 
		 
		  	  {
	id:17,		 
		question:"Q17:CRC stands for",
		 answer: "Cyclic redundancy check",
		 options:[
		   "Cyclic redundancy check",
		   "Cable redundancy check",
		   "Communication redundancy check",
		   "None of these"]
	     },	 	 
		 
		   {
	id:18,		 
		question:"Q18:A satelite link introduce larger ",
		 answer: "MAN",
		 options:[
		   "LOW",
		   "MAN",
		   "WAN",
		   "None of these"]
	     },	 

  {
	id:19,		 
		question:"Q19:....... technique is used for transmit digital data",
		 answer: "TDM",
		 options:[
		   "FDM",
		   "TDM",
		   "WDM",
		   "SDM"]
	     },	 

{
	id:20,		 
		question:"Q20:Cable network is the best example of",
		 answer: "MAN",
		 options:[
		   "LAN",
		   "MAN",
		   "CAM",
		   "WOW"]
	     },	 		 
 ];

function submitForm(e){
	e.preventDefault();
	let name = document.forms["welcome_form"]["name"].value;
	
	sessionStorage.setItem("name", name);
	
	location.href = "quiz.html";
	
}


let question_count = 0;

let point = 0;


function next() {
	
	let user_answer = document.querySelector("li.option.active").innerHTML;
	
     if(user_answer == questions[question_count].answer){
		point += 1;
		
		sessionStorage.setItem("points", point);
	 }
	 
	 
	if (question_count == questions.length - 1){
		sessionStorage.setItem("time", `${minutes} min ${seconds} sec`);
		clearInterval(mytime);
		location.href = "end.html";
		return;
	}
	
	
	

	

	
	question_count ++;
	show(question_count);
	
	
	
}
 function show(count) {
	 let question = document.getElementById("questions");
	 
	 
	 //question.innerHTML = "<h2>" + questions[count].question + "</h2>";
	 
	 
	 question.innerHTML = `
	 ${questions[count].question}
	 
	  <ul class="option_group">
				    <li class="option">${questions[count].options[0]}</li>
					<li class="option">${questions[count].options[1]}</li>
					<li class="option">${questions[count].options[2]}</li>
					<li class="option">${questions[count].options[3]}</li>
				</ul>
	 
	 `;
	 
	 toggleActive();
 
 }
 
 function toggleActive() {
	 let option = document.querySelectorAll("li.option");
	 
	 for(let i=0; i< option.length; i++) {
		 option[i].onclick = function() {
			 for(let j=0; j< option.length; j++){
				if(option[j].classList.contains("active")) {
					option[j].classList.remove("active");
				}
			 }
			 option[i].classList.add("active");
		 }
	 }
 }	 
