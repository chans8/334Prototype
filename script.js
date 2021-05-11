// set a variable for each Course Title on the left section
var course1 = document.querySelector("#course1");
var course2 = document.querySelector("#course2");
var course3 = document.querySelector("#course3");
var course4 = document.querySelector("#course4");
var course5 = document.querySelector("#course5");

// gets the assignment section
var assignments_section = document.querySelector("#assignments");

// list of all course names
var course_list = [course1.textContent, course2.textContent, course3.textContent, course4.textContent, course5.textContent];

// *************************************************************** 
// THIS SECTION DEFINES ALL ASSIGNMENTS FOR EACH COURSE AS OBJECTS
var course1_assign1 = {assignment:"CSC 497 - Final Project", due_date:"05/07/21", grade:"91", color:"text-black", status:"graded", unread: true};
var course1_assign2 = {assignment:"Assignment 4", due_date:"05/04/21", grade:" ", color:"text-warning", status:"upcoming", unread: true};
var course1_assign3 = {assignment:"Assignment 3 - Presentation", due_date:"04/29/21", grade:"TBD", color:"text-muted", status:"ungraded", unread: false};
var course1_assign4 = {assignment:"Midterm Exam", due_date:"04/20/21", grade:"95", color:"text-black", status:"graded", unread: false};
var course1_assign5 = {assignment:"Assignment 2", due_date:"04/04/21", grade:"TBD", color:"text-muted", status:"ungraded", unread: false};
var course1_assign6 = {assignment:"Assignment 1 - Intro", due_date:"03/20/21", grade:"90", color:"text-black", status:"graded", unread: false};

var course1_assignments = [
    course1_assign1, course1_assign2, course1_assign3, course1_assign4,
    course1_assign5, course1_assign6
]

var course2_assign1 = {assignment:"Quiz 2", due_date:"05/13/21", grade:" ", color:"text-warning", status:"upcoming", unread: true};
var course2_assign2 = {assignment:"Usability Testing", due_date:"05/04/21", grade:"100", color:"text-black", status:"graded", unread: true};
var course2_assign3 = {assignment:"Assignment 4", due_date:"04/30/21", grade:"TBD", color:"text-muted", status:"ungraded", unread: true};
var course2_assign4 = {assignment:"Presentation 2", due_date:"04/23/21", grade:"TBD", color:"text-muted", status:"ungraded", unread: false};
var course2_assign5 = {assignment:"Assignment 3", due_date:"04/18/21", grade:"95", color:"text-black", status:"graded", unread: true};
var course2_assign6 = {assignment:"Week 8 Security", due_date:"04/10/21", grade:"90", color:"text-black", status:"graded", unread: false};
var course2_assign7 = {assignment:"Week 7 Security Metrics", due_date:"04/01/21", grade:" ", color:"red-alert", status:"unsubmitted", unread: false};
var course2_assign8 = {assignment:"Midterm Exam", due_date:"03/29/21", grade:"96", color:"text-black", status:"graded", unread: false};

var course2_assignments = [
    course2_assign1, course2_assign2, course2_assign3, course2_assign4,
    course2_assign5, course2_assign6, course2_assign7, course2_assign8
]

var course3_assign1 = {assignment:"SPA 200 - Final Exam", due_date:"05/07/21", grade:" ", color:"text-warning", status:"upcoming", unread: true};
var course3_assign2 = {assignment:"Assignment 2", due_date:"05/01/21", grade:"TBD", color:"text-muted", status:"ungraded", unread: true};
var course3_assign3 = {assignment:"Presentation", due_date:"04/27/21", grade:"85", color:"text-black", status:"graded", unread: false};
var course3_assign4 = {assignment:"Midterm Exam", due_date:"04/10/21", grade:"95", color:"text-black", status:"graded", unread: false};
var course3_assign5 = {assignment:"In Class Assignment 2", due_date:"04/02/21", grade:"87", color:"text-black", status:"graded", unread: false};
var course3_assign6 = {assignment:"Assignment 1", due_date:"03/20/21", grade:"90", color:"text-black", status:"graded", unread: false};
var course3_assign7 = {assignment:"In Class Assignment 1", due_date:"03/10/21", grade:"100", color:"text-black", status:"graded", unread: false};

var course3_assignments = [
    course3_assign1, course3_assign2, course3_assign3, course3_assign4,
    course3_assign5, course3_assign6, course3_assign7
]

var course4_assign1 = {assignment:"ENG 304 - Final Paper", due_date:"05/07/21", grade:" ", color:"text-warning", status:"upcoming", unread: true};
var course4_assign2 = {assignment:"Assignment 2", due_date:"05/01/21", grade:"TBD", color:"text-muted", status:"ungraded", unread: true};
var course4_assign3 = {assignment:"Progress Report", due_date:"04/27/21", grade:" ", color:"red-alert", status:"unsubmitted", unread: false};
var course4_assign4 = {assignment:"Midterm Exam", due_date:"04/10/21", grade:" ", color:"red-alert", status:"unsubmitted", unread: false};
var course4_assign5 = {assignment:"Assignment 1", due_date:"03/20/21", grade:"90", color:"text-black", status:"graded", unread: false};
var course4_assign6 = {assignment:"In Class Writing Assignment 1", due_date:"03/10/21", grade:"92", color:"text-black", status:"graded", unread: false};

var course4_assignments = [
    course4_assign1, course4_assign2, course4_assign3, course4_assign4,
    course4_assign5, course4_assign6
]

var course5_assign1 = {assignment:"MAT 178 - Final Exam", due_date:"05/12/21", grade:" ", color:"text-warning", status:"upcoming", unread: true};
var course5_assign2 = {assignment:"Assignment 6", due_date:"05/01/21", grade:"TBD", color:"text-muted", status:"ungraded", unread: false};
var course5_assign3 = {assignment:"Assignment 5", due_date:"04/18/21", grade:"TBD", color:"text-muted", status:"ungraded", unread: false};
var course5_assign4 = {assignment:"Assignment 4", due_date:"04/07/21", grade:" ", color:"red-alert", status:"unsubmitted", unread: false};
var course5_assign5 = {assignment:"Midterm Exam", due_date:"03/24/21", grade:"87", color:"text-black", status:"graded", unread: true};
var course5_assign6 = {assignment:"In Class Assignment 2", due_date:"03/20/21", grade:"100", color:"text-black", status:"graded", unread: false};
var course5_assign7 = {assignment:"Assignment 3", due_date:"03/15/21", grade:"80", color:"text-black", status:"graded", unread: false};
var course5_assign8 = {assignment:"Assignment 2", due_date:"03/01/21", grade:"95", color:"text-black", status:"graded", unread: false};
var course5_assign9 = {assignment:"In Class Assignment 1", due_date:"02/18/21", grade:"100", color:"text-black", status:"graded", unread: false};
var course5_assign10 = {assignment:"Assignment 1", due_date:"02/10/21", grade:"100", color:"text-black", status:"graded", unread: false};

var course5_assignments = [
    course5_assign1, course5_assign2, course5_assign3, course5_assign4,
    course5_assign5, course5_assign6, course5_assign7, course5_assign8, course5_assign9, course5_assign10
]
// *************************************************************************************


var course_assign_list = [course1_assignments, course2_assignments, course3_assignments, course4_assignments, course5_assignments];

// Function for displaying the total assignments
// takes the current course being displayed as input.
function displayTotalAssignments(current_course) {
    // This loop determines what assignments are associated with the current course
    for(var i=0;i<course_list.length;i++){
        if(course_list[i] == current_course) {
            var assignment_list = course_assign_list[i];
        }
    }
    
    assignments_section.innerHTML = ``; // rewrites the assignments section, so that it does not append
    // This loop adds a div to the assignments section for each assignment in the current course.
    for(var i=0;i<assignment_list.length;i++){ //Does not like this line
        // This function determines if the row number is odd. 
        // This is for displaying alternating background colors for the assignment rows.
        function isOdd(num) { return num % 2;}
        if(isOdd(i) == 1){
            var styling = " bg-light border "; // every other assignment will have a gray background
        }
        else {
            var styling = " ";
        }
        // inserts div into the HTML
        assignments_section.innerHTML += `
        <div class="row assignment${i+1} pt-3 ${assignment_list[i].color} ${styling}}">
            <div class="col-6"><p>${assignment_list[i].assignment}</p></div>
            <div class="col-2"><p>${assignment_list[i].due_date}</p></div>
            <div class="col-2"><p>${assignment_list[i].grade}</p></div>
            <div class="col-2">
                <img src="images/${assignment_list[i].status}.png" class="icons" width="24" height="24" alt="${assignment_list[i].status}!">
            </div>
        </div>
        `;
    }
}
// Same as the above function, but only displays the assignments that have a status of 'graded'.
function displayGradedAssignments(current_course) {
    for(var i=0;i<course_list.length;i++){
        if(course_list[i] == current_course) {
            var assignment_list = course_assign_list[i];
        } 
    }
    assignments_section.innerHTML = ``;
    var j = 0;
    for(var i=0;i<assignment_list.length;i++){  
        if(assignment_list[i].status == "graded"){
            function isOdd(num) { return num % 2;}
            if(isOdd(j) == 1){
                var styling = " bg-light border ";
            }
            else {
                var styling = " ";
            }
            j+=1;
            assignments_section.innerHTML += `
            <div class="row assignment${i+1} pt-3 ${assignment_list[i].color} ${styling}}">
                <div class="col-6"><p>${assignment_list[i].assignment}</p></div>
                <div class="col-2"><p>${assignment_list[i].due_date}</p></div>
                <div class="col-2"><p>${assignment_list[i].grade}</p></div>
                <div class="col-2">
                    <img src="images/${assignment_list[i].status}.png" class="icons" width="24" height="24" alt="${assignment_list[i].status}!">
                </div>
            </div>
            `;
        }
    }
}
// Same as the above function, but only displays the assignments that have a status of 'ungraded'.
function displayUngradedAssignments(current_course) {
    for(var i=0;i<course_list.length;i++){
        if(course_list[i] == current_course) {
            var assignment_list = course_assign_list[i];
        } 
    }
    assignments_section.innerHTML = ``;
    var j = 0;
    for(var i=0;i<assignment_list.length;i++){  
        if(assignment_list[i].status == "ungraded"){
            function isOdd(num) { return num % 2;}
            if(isOdd(j) == 1){
                var styling = " bg-light border ";
            }
            else {
                var styling = " ";
            }
            j+=1;
            assignments_section.innerHTML += `
            <div class="row assignment${i+1} pt-3 ${assignment_list[i].color} ${styling}}">
                <div class="col-6"><p>${assignment_list[i].assignment}</p></div>
                <div class="col-2"><p>${assignment_list[i].due_date}</p></div>
                <div class="col-2"><p>${assignment_list[i].grade}</p></div>
                <div class="col-2">
                    <img src="images/${assignment_list[i].status}.png" class="icons" width="24" height="24" alt="${assignment_list[i].status}!">
                </div>
            </div>
            `;
        }
    }
}
// Same as the above function, but only displays the assignments that have a status of 'unsubmitted'.
function displayUnsubmittedAssignments(current_course) {
    for(var i=0;i<course_list.length;i++){
        if(course_list[i] == current_course) {
            var assignment_list = course_assign_list[i];
        } 
    }
    assignments_section.innerHTML = ``;
    var j = 0;
    for(var i=0;i<assignment_list.length;i++){  
        if(assignment_list[i].status == "unsubmitted"){
            function isOdd(num) { return num % 2;}
            if(isOdd(j) == 1){
                var styling = " bg-light border ";
            }
            else {
                var styling = " ";
            }
            j+=1;
            assignments_section.innerHTML += `
            <div class="row assignment${i+1} pt-3 ${assignment_list[i].color} ${styling}}">
                <div class="col-6"><p>${assignment_list[i].assignment}</p></div>
                <div class="col-2"><p>${assignment_list[i].due_date}</p></div>
                <div class="col-2"><p>${assignment_list[i].grade}</p></div>
                <div class="col-2">
                    <img src="images/${assignment_list[i].status}.png" class="icons" width="24" height="24" alt="${assignment_list[i].status}!">
                </div>
            </div>
            `;
        }
    }
}
// Same as the above function, but only displays the assignments that have a status of 'upcoming'.
function displayUpcomingAssignments(current_course) {
    for(var i=0;i<course_list.length;i++){
        if(course_list[i] == current_course) {
            var assignment_list = course_assign_list[i];
        } 
    }
    assignments_section.innerHTML = ``;
    var j = 0;
    for(var i=0;i<assignment_list.length;i++){  
        if(assignment_list[i].status == "upcoming"){
            function isOdd(num) { return num % 2;}
            if(isOdd(j) == 1){
                var styling = " bg-light border ";
            }
            else {
                var styling = " ";
            }
            j+=1;
            assignments_section.innerHTML += `
            <div class="row assignment${i+1} pt-3 ${assignment_list[i].color} ${styling}}">
                <div class="col-6"><p>${assignment_list[i].assignment}</p></div>
                <div class="col-2"><p>${assignment_list[i].due_date}</p></div>
                <div class="col-2"><p>${assignment_list[i].grade}</p></div>
                <div class="col-2">
                    <img src="images/${assignment_list[i].status}.png" class="icons" width="24" height="24" alt="${assignment_list[i].status}!">
                </div>
            </div>
            `;
        }
    }
}

window.addEventListener("load", function () {
    course2.style.color = "#85b2ff";

    var course_header = document.querySelector("#course_header");
    course_header.innerHTML = "CSC 334";

    var current_course = document.querySelector("#course_header").textContent;

    displayTotalAssignments(current_course);
});

course1.addEventListener("click", function () {
    course1.style.color = "#85b2ff";
    course2.style.color = "white";
    course3.style.color = "white";
    course4.style.color = "white";
    course5.style.color = "white";
    
    // This section ensures that when a new course is picked, the "total" tab is displayed.
    tab1.style.backgroundColor = "#f8f9fa"; 
    tab1.style.color = "#054ea4";
    tab2.style.backgroundColor = "#054ea4";
    tab2.style.color = "white";
    tab3.style.backgroundColor = "#054ea4";
    tab3.style.color = "white";
    tab4.style.backgroundColor = "#054ea4";
    tab4.style.color = "white";
    tab5.style.backgroundColor = "#054ea4";
    tab5.style.color = "white";

    var course_header = document.querySelector("#course_header");
    course_header.innerHTML = "CSC 497";

    var current_course = document.querySelector("#course_header").textContent;

    displayTotalAssignments(current_course);
});

course2.addEventListener("click", function () {
    course1.style.color = "white";
    course2.style.color = "#85b2ff" ;
    course3.style.color = "white";
    course4.style.color = "white";
    course5.style.color = "white";

    // This section ensures that when a new course is picked, the "total" tab is displayed.
    tab1.style.backgroundColor = "#f8f9fa"; 
    tab1.style.color = "#054ea4";
    tab2.style.backgroundColor = "#054ea4";
    tab2.style.color = "white";
    tab3.style.backgroundColor = "#054ea4";
    tab3.style.color = "white";
    tab4.style.backgroundColor = "#054ea4";
    tab4.style.color = "white";
    tab5.style.backgroundColor = "#054ea4";
    tab5.style.color = "white";

    var course_header = document.querySelector("#course_header");
    course_header.innerHTML = "CSC 334";

    var current_course = document.querySelector("#course_header").textContent;

    displayTotalAssignments(current_course);
});

course3.addEventListener("click", function () {
    course1.style.color = "white";
    course2.style.color = "white" ;
    course3.style.color = "#85b2ff";
    course4.style.color = "white";
    course5.style.color = "white";

    // This section ensures that when a new course is picked, the "total" tab is displayed.
    tab1.style.backgroundColor = "#f8f9fa"; 
    tab1.style.color = "#054ea4";
    tab2.style.backgroundColor = "#054ea4";
    tab2.style.color = "white";
    tab3.style.backgroundColor = "#054ea4";
    tab3.style.color = "white";
    tab4.style.backgroundColor = "#054ea4";
    tab4.style.color = "white";
    tab5.style.backgroundColor = "#054ea4";
    tab5.style.color = "white";

    var course_header = document.querySelector("#course_header");
    course_header.innerHTML = "SPA 200";

    var current_course = document.querySelector("#course_header").textContent;

    displayTotalAssignments(current_course);
});

course4.addEventListener("click", function () {
    course1.style.color = "white";
    course2.style.color = "white" ;
    course3.style.color = "white";
    course4.style.color = "#85b2ff";
    course5.style.color = "white";
    
    // This section ensures that when a new course is picked, the "total" tab is displayed.
    tab1.style.backgroundColor = "#f8f9fa"; 
    tab1.style.color = "#054ea4";
    tab2.style.backgroundColor = "#054ea4";
    tab2.style.color = "white";
    tab3.style.backgroundColor = "#054ea4";
    tab3.style.color = "white";
    tab4.style.backgroundColor = "#054ea4";
    tab4.style.color = "white";
    tab5.style.backgroundColor = "#054ea4";
    tab5.style.color = "white";

    var course_header = document.querySelector("#course_header");
    course_header.innerHTML = "ENG 304";

    var current_course = document.querySelector("#course_header").textContent;

    displayTotalAssignments(current_course);
});

course5.addEventListener("click", function () {
    course1.style.color = "white";
    course2.style.color = "white" ;
    course3.style.color = "white";
    course4.style.color = "white";
    course5.style.color = "#85b2ff";

    // This section ensures that when a new course is picked, the "total" tab is displayed.
    tab1.style.backgroundColor = "#f8f9fa"; 
    tab1.style.color = "#054ea4";
    tab2.style.backgroundColor = "#054ea4";
    tab2.style.color = "white";
    tab3.style.backgroundColor = "#054ea4";
    tab3.style.color = "white";
    tab4.style.backgroundColor = "#054ea4";
    tab4.style.color = "white";
    tab5.style.backgroundColor = "#054ea4";
    tab5.style.color = "white";

    var course_header = document.querySelector("#course_header");
    course_header.innerHTML = "MAT 178";

    var current_course = document.querySelector("#course_header").textContent;

    displayTotalAssignments(current_course);
});



/* For tabs */
var tab1 = document.querySelector("#tab1");
var tab2 = document.querySelector("#tab2");
var tab3 = document.querySelector("#tab3");
var tab4 = document.querySelector("#tab4");
var tab5 = document.querySelector("#tab5");

window.addEventListener("load", function () {
    tab1.style.backgroundColor = "#f8f9fa";
    tab1.style.color = "#054ea4";
});

// TOTAL TAB
tab1.addEventListener("click", function () {
    tab1.style.backgroundColor = "#f8f9fa"; 
    tab1.style.color = "#054ea4";
    tab2.style.backgroundColor = "#054ea4";
    tab2.style.color = "white";
    tab3.style.backgroundColor = "#054ea4";
    tab3.style.color = "white";
    tab4.style.backgroundColor = "#054ea4";
    tab4.style.color = "white";
    tab5.style.backgroundColor = "#054ea4";
    tab5.style.color = "white";

    var current_course = document.querySelector("#course_header").textContent;

    displayTotalAssignments(current_course);
});
// GRADED TAB
tab2.addEventListener("click", function () {
    tab2.style.backgroundColor = "#f8f9fa";
    tab2.style.color = "#054ea4";
    tab1.style.backgroundColor = "#054ea4";
    tab1.style.color = "white";
    tab3.style.backgroundColor = "#054ea4";
    tab3.style.color = "white";
    tab4.style.backgroundColor = "#054ea4";
    tab4.style.color = "white";
    tab5.style.backgroundColor = "#054ea4";
    tab5.style.color = "white";

    var current_course = document.querySelector("#course_header").textContent;

    displayGradedAssignments(current_course);
});
// UNGRADED TAB
tab3.addEventListener("click", function () {
    tab3.style.backgroundColor = "#f8f9fa";
    tab3.style.color = "#054ea4";
    tab1.style.backgroundColor = "#054ea4";
    tab1.style.color = "white";
    tab2.style.backgroundColor = "#054ea4";
    tab2.style.color = "white";
    tab4.style.backgroundColor = "#054ea4";
    tab4.style.color = "white";
    tab5.style.backgroundColor = "#054ea4";
    tab5.style.color = "white";

    
    var current_course = document.querySelector("#course_header").textContent;

    displayUngradedAssignments(current_course);
});
// UNSUBMITTED TAB
tab4.addEventListener("click", function () {
    tab4.style.backgroundColor = "#f8f9fa";
    tab4.style.color = "#054ea4";
    tab1.style.backgroundColor = "#054ea4";
    tab1.style.color = "white";
    tab2.style.backgroundColor = "#054ea4";
    tab2.style.color = "white";
    tab3.style.backgroundColor = "#054ea4";
    tab3.style.color = "white";
    tab5.style.backgroundColor = "#054ea4";
    tab5.style.color = "white";

    var current_course = document.querySelector("#course_header").textContent;

    displayUnsubmittedAssignments(current_course);
});
// UPCOMING TAB
tab5.addEventListener("click", function () {
    tab5.style.backgroundColor = "#f8f9fa";
    tab5.style.color = "#054ea4";
    tab1.style.backgroundColor = "#054ea4";
    tab1.style.color = "white";
    tab2.style.backgroundColor = "#054ea4";
    tab2.style.color = "white";
    tab4.style.backgroundColor = "#054ea4";
    tab4.style.color = "white";
    tab3.style.backgroundColor = "#054ea4";
    tab3.style.color = "white";

    var current_course = document.querySelector("#course_header").textContent;

    displayUpcomingAssignments(current_course);
});