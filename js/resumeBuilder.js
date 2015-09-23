var bio = {
    "name": "Tyler Neisinger",
    "role": "Web Developer",
    "welcomeMessage": "Hi, everybody!!!",
    "contacts": {
        "mobile": "208-741-0279",
        "email": "tjneisi@gmail.com",
        "github": "https://github.com/tneisinger",
        "twitter": "@tylerneisinger",
        "location": "Los Angeles, CA"
    },
    "picture": "images/fry.jpg",
    "skills": [
        "Web Development",
        "Production Audio Recording"
    ]
}

var work = {
    "jobs": [
        {
            "employer": "self-employed",
            "title": "location sound mixer",
            "location": "Los Angeles, CA",
            "dates": "2010-2015",
            "description": "Worked as a location sound mixer for film and video productions in the Los Angeles area"
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


// Display Functions //

bio.display = function() {
    var header = $('#header');
    header.append(HTMLheaderName.replace("%data%", bio.name));
    header.append(HTMLheaderRole.replace("%data%", bio.role));
    header.append(HTMLbioPic.replace("%data%", bio.picture));
    header.append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

    var topContacts = $("#topContacts");
    topContacts.append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    topContacts.append(HTMLemail.replace("%data%", bio.contacts.email));
    topContacts.append(HTMLgithub.replace("%data%", bio.contacts.github));
    topContacts.append(HTMLlocation.replace("%data%", bio.contacts.location));

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (i in bio.skills) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    }
}

work.display = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer)
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var lastWorkEntry = $(".work-entry:last");
        lastWorkEntry.append(formattedEmployerTitle)
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        lastWorkEntry.append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        lastWorkEntry.append(formattedDescription);
    }
}

projects.display = function() {
    for (i in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var lastProjectEntry = $(".project-entry:last");
        lastProjectEntry.append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
        lastProjectEntry.append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
        lastProjectEntry.append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
        lastProjectEntry.append(HTMLprojectImage.replace("%data%", projects.projects[i].image));
    }
}

bio.display();
work.display();
projects.display();

// add a map
$("#mapDiv").append(googleMap);

// log click data
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x,y);
});

