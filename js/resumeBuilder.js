//  objects //

var bio = {
    'name': 'Tyler Neisinger',
    'role': 'Web Developer',
    'contacts': {
        'mobile': '208-741-0279',
        'email': 'tjneisi@gmail.com',
        'github': 'tneisinger',
        'twitter': '@tylerneisinger',
        'location': 'Los Angeles, CA'
    },
    'welcomeMessage': 'Hi, everybody!!!',
    'skills': [
        'Web Development',
        'Video Production Audio Recording'
    ],
    'biopic': 'images/fry.jpg',
};

var work = {
    'jobs': [
        {
            'employer': 'self-employed',
            'title': 'location sound mixer',
            'location': 'Los Angeles, CA',
            'dates': '2010 - Present',
            'description': 'I currently work as a location sound mixer for film and video productions in the Los Angeles area.'
        }
    ]
};

var projects = {
    'projects': [
        {
            'title': 'Some project',
            'dates': '2015 - Present',
            'description': 'This is a description for my project.',
            'images': [
                'images/197x148.gif'
                ]
        }
    ]
};

var education = {
    'schools': [
        {
            'name': 'Boise State University',
            'location': 'Boise, Idaho',
            'degree': 'Bachelor of Arts',
            'majors': ['Mass Communications'],
            'dates': 2009,
            'url': 'http://www.boisestate.edu'
        }
    ],
    'onlineCourses': [
        {
            'title': 'Introduction to Linux',
            'school': 'edX',
            'date': 2015,
            'url': 'https://www.edx.org/course/introduction-linux-linuxfoundationx-lfs101x-2'
        },
        {
            'title': 'Intro to Computer Science',
            'school': 'Udacity',
            'date': 2012,
            'url': 'https://www.udacity.com/course/intro-to-computer-science--cs101'
        },
        {
            'title': 'Intro to Statistics',
            'school': 'Udacity',
            'date': 2013,
            'url': 'https://www.udacity.com/course/intro-to-statistics--st101'
        },
        {
            'title': 'Intro to Algorithms',
            'school': 'Udacity',
            'date': 2013,
            'url': 'https://www.udacity.com/course/intro-to-algorithms--cs215'
        },
        {
            'title': 'Web Development',
            'school': 'Udacity',
            'date': 2013,
            'url': 'https://www.udacity.com/course/web-development--cs253'
        },
        {
            'title': 'Intro to Artificial Intelligence',
            'school': 'Udacity',
            'date': 2014,
            'url': 'https://www.udacity.com/course/intro-to-artificial-intelligence--cs271'
        },
        {
            'title': 'Statistics',
            'school': 'Udacity',
            'date': 2014,
            'url': 'https://www.udacity.com/course/statistics--st095'
        },
        {
            'title': 'Design of Computer Programs',
            'school': 'Udacity',
            'date': 2014,
            'url': 'https://www.udacity.com/course/design-of-computer-programs--cs212'
        }
    ]
};


// Display Functions //

bio.display = function() {
    var header = $('#header');
    header.prepend(HTMLheaderRole.replace('%data%', bio.role));
    header.prepend(HTMLheaderName.replace('%data%', bio.name));
    header.append(HTMLbioPic.replace('%data%', bio.biopic));
    header.append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

    var topContacts = $('#topContacts');
    topContacts.append(HTMLmobile.replace('%data%', bio.contacts.mobile));
    topContacts.append(HTMLemail.replace('%data%', bio.contacts.email));
    topContacts.append(HTMLgithub.replace('%data%', bio.contacts.github));
    topContacts.append(HTMLlocation.replace('%data%', bio.contacts.location));

    var footerContacts = $('#footerContacts');
    footerContacts.append(HTMLmobile.replace('%data%', bio.contacts.mobile));
    footerContacts.append(HTMLemail.replace('%data%', bio.contacts.email));
    footerContacts.append(HTMLgithub.replace('%data%', bio.contacts.github));
    footerContacts.append(HTMLlocation.replace('%data%', bio.contacts.location));

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            $('#skills').append(HTMLskills.replace('%data%', skill));
        });
    }
};

work.display = function() {
    work.jobs.forEach(function(job) {
        $('#workExperience').append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        var lastWorkEntry = $('.work-entry:last');
        lastWorkEntry.append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace('%data%', job.dates);
        lastWorkEntry.append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace('%data%', job.location);
        lastWorkEntry.append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace('%data%', job.description);
        lastWorkEntry.append(formattedDescription);
    });
};

projects.display = function() {
    projects.projects.forEach(function(project) {
        $('#projects').append(HTMLprojectStart);
        var lastProjectEntry = $('.project-entry:last');

        lastProjectEntry.append(HTMLprojectTitle.replace('%data%', project.title));
        lastProjectEntry.append(HTMLprojectDates.replace('%data%', project.dates));
        lastProjectEntry.append(HTMLprojectDescription.replace('%data%', project.description));

        project.images.forEach(function(image) {
            lastProjectEntry.append(HTMLprojectImage.replace('%data%', image));
        });
    });
};

education.display = function() {
    education.schools.forEach(function(school) {
        $('#education').append(HTMLschoolStart);
        var lastSchoolEntry = $('.education-entry:last');

        var schoolName = HTMLschoolName.replace('%data%', school.name);
        var schoolDegree = HTMLschoolDegree.replace('%data%', school.degree);

        lastSchoolEntry.append(schoolName + schoolDegree);
        lastSchoolEntry.append(HTMLschoolLocation.replace('%data%', school.location));
        lastSchoolEntry.append(HTMLschoolDates.replace('%data%', school.dates));

        school.majors.forEach(function(major) {
            lastSchoolEntry.append(HTMLschoolMajor.replace('%data%', major));
        });
    });

    $('#education').append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(course) {
        $('#education').append(HTMLschoolStart);
        var lastSchoolEntry = $('.education-entry:last');

        var formattedTitle = HTMLonlineTitle.replace('%data%', course.title);
        var formattedSchool = HTMLonlineSchool.replace('%data%', course.school);
        lastSchoolEntry.append(formattedTitle + formattedSchool);

        lastSchoolEntry.append(HTMLonlineDates.replace('%data%', course.date));
        lastSchoolEntry.append(HTMLonlineURL.replace('%data%', course.url));
    });
};

// run display functions
bio.display();
work.display();
projects.display();
education.display();

// add a map
$('#mapDiv').append(googleMap);

// log click data
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x,y);
});

