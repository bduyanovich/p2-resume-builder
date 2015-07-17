var work = {
	"jobs" : [
		{
			"employer" : "Best Buy Pool Supply",
			"title" : "Marketing Manager and Web Designer",
			"location" : "Rancho Cordova, CA",
			"dates" : "2008-2014",
			"description" : "Evaluate website traffic using Google Analytics to achieve lower bounce rate and improve customer experience. Oversee Adwords campaigns to achieve higher conversion rate. Responsible for designing and creating weekly e-mail newsletter and product advertisements to spotlight industry information, product deals and new items. Implemented social media campaigns to increase Google organic ranking, website traffic and brand awareness. As the sales supervisor I trained the seasonal sales team on how to use and navigate the website, order management systems and knowledge of products sold."
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

var formattedBioPic = HTMLbioPic.replace("%data%", "images/fry.jpg");
$("#header").prepend(formattedBioPic);

var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").prepend(formattedWelcomeMsg);

if (bio.skills.length > 0) {
   $("#header").append(HTMLskillsStart);

   var i;
   var formattedSkills;

   for(i=0; i<bio.skills.length; i++) {
   formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
   $("#skills").append(formattedSkills);
   }
}

for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedLocation);
	$(".work-entry:last").append(formattedDates);
	$(".work-entry:last").append(formattedDescription);
}




