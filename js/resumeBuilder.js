var bio = {
    "name": "Tyler Neisinger",
    "role": "Web Developer",
    "welcomeMessage": "Hi, everybody",
    "contacts": {
        "mobile": "208-741-0279",
        "email": "tjneisi@gmail.com",
        "github": "tneisinger",
        "twitter": "not yet",
        "location": "Los Angeles"
    },
    "picture": "images/fry.jpg",
    "skills": ["web programming", "production sound recording"]
}

var work = {
    "jobs": [
        {
            "employer": "self-employed",
            "title": "location sound mixer",
            "location": "Los Angeles",
            "dates": "2010-2015",
            "description": "Worked as a location sound mixer for film and video productions in Los Angeles"
        }
    ]
}

var projects = {
    "projects": [
        {
            "title": "Some project",
            "dates": "2015",
            "description": "Some project",
            "image": "images/197x148.gif"
        }
    ]
}

var education = {
    "schools": [
        {
            "name": "Boise State University",
            "location": "Boise, Idaho",
            "degree": "Bachelor of Arts",
            "majors": ["Mass Communications"],
            "dates": 2009,
            "url": "http://www.boisestate.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Introduction to Linux",
            "school": "edX",
            "dates": "5/10/15",
            "url": "https://www.edx.org/course/introduction-linux-linuxfoundationx-lfs101x-2"
        },
        {
            "title": "Intro to Computer Science",
            "school": "Udacity",
            "dates": "12/11/12",
            "url": "https://www.udacity.com/course/intro-to-computer-science--cs101"
        },
        {
            "title": "Intro to Statistics",
            "school": "Udacity",
            "dates": "1/20/13",
            "url": "https://www.udacity.com/course/intro-to-statistics--st101"
        },
        {
            "title": "Intro to Algorithms",
            "school": "Udacity",
            "dates": "2/16/13",
            "url": "https://www.udacity.com/course/intro-to-algorithms--cs215"
        },
        {
            "title": "Web Development",
            "school": "Udacity",
            "dates": "2/18/13",
            "url": "https://www.udacity.com/course/web-development--cs253"
        },
        {
            "title": "Intro to Artificial Intelligence",
            "school": "Udacity",
            "dates": "4/15/14",
            "url": "https://www.udacity.com/course/intro-to-artificial-intelligence--cs271"
        },
        {
            "title": "Statistics",
            "school": "Udacity",
            "dates": "1/28/14",
            "url": "https://www.udacity.com/course/statistics--st095"
        },
        {
            "title": "Design of Computer Programs",
            "school": "Udacity",
            "dates": "4/22/14",
            "url": "https://www.udacity.com/course/design-of-computer-programs--cs212" 
        }
    ]
}

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (skill in bio.skills) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
    }
}

var displayWork = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer)
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle)
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        //var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location)
        //$(".work-entry:last").append(formattedWorkLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

displayWork();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x,y);
});

function locationizer(work_obj) {
    var locations = [];

    for (i in work_obj.jobs) {
        var location = work_obj.jobs[i].location;
        locations.push(location);
    }
    return locations;
}

$("#main").append(internationalizeButton);

function inName(name) {
    var names = name.trim().split(" ");
    names[0] = names[0][0].toUpperCase() + names[0].substring(1);
    names[1] = names[1].toUpperCase();
    return names.join(" ");
}

console.log(inName("tyler neisinger"));

projects.display = function() {
    for (i in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].image));
    }
}

projects.display(projects);

// add a map
$("#mapDiv").append(googleMap);
