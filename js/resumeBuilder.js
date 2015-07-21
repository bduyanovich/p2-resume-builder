var work = {
	"jobs" : [
		{
			"employer" : "Best Buy Pool Supply",
			"title" : "Marketing Manager and Web Designer",
			"location" : "Rancho Cordova, CA",
			"dates" : "2008 - December 5, 2014",
			"description" : "Evaluate website traffic sing Google Analytics to achieve lower bounce rate and improve customer experience. Oversee Adwords campaigns to achieve higher conversion rate. Responsible for designing and creating weekly e-mail newsletter and product advertisements to spotlight industry information, product deals and new items. Implemented social media campaigns to increase Google organic ranking, website traffic and brand awareness. As the sales supervisor I trained the seasonal sales team on how to use and navigate the website, order management systems and knowledge of products sold.",
			"url" : "http://www.bestbuypoolsupply.com/"
		}
	]
}

var projects = {
	"projects" : [
		{
			"title" : "Portfolio Project 1",
			"dates" : "2015",
			"description" : "Build a portfolio website to showcase projects",
			"images" : ["images/197x148.gif"],
			"url" : "https://github.com/bduyanovich/Portfolio-Project-1"
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
			"location" : "Sacramento, CA",
			"major" : "Business Administration",
			"dates" : "2010",
			"degree" : "BS",
			"url" : "http://www.csus.edu/"
		},
		{
			"name" : "Consumnes River College",
			"location" : "Sacramento, CA",
			"major" : "Business",
			"dates" : "2008",
			"degree" : "AA",
			"url" : "https://www.crc.losrios.edu/"
		}
	]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedBioPic = HTMLbioPic.replace("%data%", "images/fry.jpg");
$("#header").append(formattedBioPic);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

   var i;
   var formattedSkills;

   for(i=0; i<bio.skills.length; i++) {
   formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
   $("#skills").append(formattedSkills);
   }
}

bio.display = function() {
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);

	var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGitHub);
	$("#footerContacts").append(formattedGitHub);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);
}

bio.display();

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		formattedEmployer = formattedEmployer.replace("#", work.jobs[job].url);
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
}

displayWork();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

function inName(name) {
	var name = bio.name.split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		formattedProjectTitle = formattedProjectTitle.replace("#", projects.projects[project].url);
		$(".project-entry").append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry").append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry").append(formattedProjectDescription);

		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
		$(".project-entry").append(formattedProjectImage);
	}
}

projects.display();

education.display = function() {
	$("#education").append(HTMLschoolStart);
	for (school in education.schools) {

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		formattedSchoolName = formattedSchoolName.replace("#", education.schools[school].url);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
		$(".education-entry:last").append(formattedSchoolNameDegree);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedSchoolMajor);
	}
}

education.display();

$("#map-div").append(googleMap);