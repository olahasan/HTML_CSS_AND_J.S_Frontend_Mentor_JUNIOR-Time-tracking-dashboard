let Daily = document.getElementById("Daily");
let Weekly = document.getElementById("Weekly");
let Monthly = document.getElementById("Monthly");
// console.log(Daily);
// console.log(Weekly);
// console.log(Monthly);


// work
let WorkHour = document.getElementById("Workhour");
let PreviousWorkHour = document.getElementById("PreviousWorkhour");
// console.log(WorkHour);
// console.log(PreviousWorkHour);


// play
let PlayHour = document.getElementById("Playhour");
let PreviousPlayHour = document.getElementById("PreviousPlayhour");
// console.log(PlayHour);
// console.log(PreviousPlayHour);


// study
let studyHour = document.getElementById("studyhour");
let PreviousStudyHour = document.getElementById("Previousstudyhour");
// console.log(studyHour);
// console.log(PreviousStudyHour);


// Exercise
let ExerciseHour = document.getElementById("Exercisehour");
let PreviousExerciseHour = document.getElementById("PreviousExercisehour");
// console.log(ExerciseHour);
// console.log(PreviousExerciseHour);


// Social
let SocialHour = document.getElementById("Socialhour");
let PreviousSocialHour = document.getElementById("PreviousSocialhour");
// console.log(SocialHour);
// console.log(PreviousSocialHour);


// Care
let CareHour = document.getElementById("Carehour");
let PreviousCareHour = document.getElementById("PreviousCarehour");
// console.log(CareHour);
// console.log(PreviousCareHour);


Daily.onclick = function(){
    // Work
    WorkHour.innerHTML = "5hrs";
    PreviousWorkHour.innerHTML = "Last Day - 7hrs";

    // play
    PlayHour.innerHTML = "1hr";
    PreviousPlayHour.innerHTML = "Last Day - 2hrs";

    // study
    studyHour.innerHTML = "0hrs"; 
    PreviousStudyHour.innerHTML = "Last Day - 1hr";

    // Exercise
    ExerciseHour.innerHTML = "1hr";
    PreviousExerciseHour.innerHTML = "Last Day - 1hr";

    // Social
    SocialHour.innerHTML = "1hr";
    PreviousSocialHour.innerHTML = "Last Day - 3hrs";

    // Care
    CareHour.innerHTML = "0hrs";
    PreviousCareHour.innerHTML = "Last Day - 1hr";
}

Weekly.onclick = function(){
    // Work
    WorkHour.innerHTML = "32hrs";
    PreviousWorkHour.innerHTML = "Last Week - 36hrs";

    // play
    PlayHour.innerHTML = "10hrs";
    PreviousPlayHour.innerHTML = "Last Week - 8hrs";

    // study
    studyHour.innerHTML = "4hrs"; 
    PreviousStudyHour.innerHTML = "Last Week - 7hrs";

    // Exercise
    ExerciseHour.innerHTML = "4hrs";
    PreviousExerciseHour.innerHTML = "Last Week - 5hrs";

    // Social
    SocialHour.innerHTML = "5hrs";
    PreviousSocialHour.innerHTML = "Last Week - 10hrs";

    // Care
    CareHour.innerHTML = "2hrs";
    PreviousCareHour.innerHTML = "Last Week - 2hrs";
}


Monthly.onclick = function(){
    // Work
    WorkHour.innerHTML = "103hrs";
    PreviousWorkHour.innerHTML = "Last Month - 128hrs";

    // play
    PlayHour.innerHTML = "23hrs";
    PreviousPlayHour.innerHTML = "Last Month - 29hrs";

    // study
    studyHour.innerHTML = "13hrs"; 
    PreviousStudyHour.innerHTML = "Last Month - 19hrs";

    // Exercise
    ExerciseHour.innerHTML = "11hrs";
    PreviousExerciseHour.innerHTML = "Last Month - 18hrs";

    // Social
    SocialHour.innerHTML = "21hrs";
    PreviousSocialHour.innerHTML = "Last Month - 23hrs";

    // Care
    CareHour.innerHTML = "7hrs";
    PreviousCareHour.innerHTML = "Last Month - 11hrs";
}