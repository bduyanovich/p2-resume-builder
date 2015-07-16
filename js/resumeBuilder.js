var work = {
	"jobs" : [
		{
			"employer" : "Best Buy Pool Supply",
			"title" : "Marketing Manager and Web Designer",
			"location" : "Rancho Cordova, CA",
			"dates" : "2008-2014",
			"description" : "Online pool supply webstore"
		}
	]
}

var projects = {
	"projects" : [
		{
			"title" : "Portfolio Project 1",
			"dates" : "6-20-2015",
			"description" : "Build a portfolio website to showcase projects",
			"images" : ["images/fry.jpg"]
		}
	]
}

var bio = {
	"name" : "Brandon Duyanovich",
	"role" : "Front-end Web Developer",
	"welcomeMessage" : "Hello user",
	"contacts" : {
		"mobile" : "916-832-9638",
		"email" : "bduyanovich@gmail.com",
		"github" : "bduyanovich",
		"location" : "Roseville, CA"
	},
  "skills": ["HTML", "CSS", "JavaScript", "JQuery"]
}

var education = {
	"schools" : [
		{
			"name" : "California State University",
			"city" : "Sacramento, CA",
			"major" : "Business Administration",
			"gradYear" : "2010",
			"degree" : "BS"
		},
		{
			"name" : "Consumnes River College",
			"city" : "Sacramento, CA",
			"major" : "Business",
			"gradYear" : "2008",
			"degree" : "AA"
		}
	]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#main").prepend(formattedRole);
$("#main").prepend(formattedName);

if (bio.skills.length > 0) {
   $("#header").append(HTMLskillsStart);

   var i;
   var formattedSkills;

   for(i=0; i<bio.skills.length; i++) {
   formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
   $("#skills").append(formattedSkills);
   }
}
