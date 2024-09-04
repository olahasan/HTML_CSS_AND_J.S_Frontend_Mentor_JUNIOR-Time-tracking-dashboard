// code for biggners

// let Daily = document.getElementById("Daily");
// let Weekly = document.getElementById("Weekly");
// let Monthly = document.getElementById("Monthly");
// // work
// let WorkHour = document.getElementById("Workhour");
// let PreviousWorkHour = document.getElementById("PreviousWorkhour");
// // play
// let PlayHour = document.getElementById("Playhour");
// let PreviousPlayHour = document.getElementById("PreviousPlayhour");
// // study
// let studyHour = document.getElementById("studyhour");
// let PreviousStudyHour = document.getElementById("Previousstudyhour");
// // Exercise
// let ExerciseHour = document.getElementById("Exercisehour");
// let PreviousExerciseHour = document.getElementById("PreviousExercisehour");
// // Social
// let SocialHour = document.getElementById("Socialhour");
// let PreviousSocialHour = document.getElementById("PreviousSocialhour");
// // Care
// let CareHour = document.getElementById("Carehour");
// let PreviousCareHour = document.getElementById("PreviousCarehour");
// Daily.onclick = function () {
//   // Work
//   WorkHour.innerHTML = "5hrs";
//   PreviousWorkHour.innerHTML = "Last Day - 7hrs";

//   // play
//   PlayHour.innerHTML = "1hr";
//   PreviousPlayHour.innerHTML = "Last Day - 2hrs";

//   // study
//   studyHour.innerHTML = "0hrs";
//   PreviousStudyHour.innerHTML = "Last Day - 1hr";

//   // Exercise
//   ExerciseHour.innerHTML = "1hr";
//   PreviousExerciseHour.innerHTML = "Last Day - 1hr";

//   // Social
//   SocialHour.innerHTML = "1hr";
//   PreviousSocialHour.innerHTML = "Last Day - 3hrs";

//   // Care
//   CareHour.innerHTML = "0hrs";
//   PreviousCareHour.innerHTML = "Last Day - 1hr";
// };
// Weekly.onclick = function () {
//   // Work
//   WorkHour.innerHTML = "32hrs";
//   PreviousWorkHour.innerHTML = "Last Week - 36hrs";

//   // play
//   PlayHour.innerHTML = "10hrs";
//   PreviousPlayHour.innerHTML = "Last Week - 8hrs";

//   // study
//   studyHour.innerHTML = "4hrs";
//   PreviousStudyHour.innerHTML = "Last Week - 7hrs";

//   // Exercise
//   ExerciseHour.innerHTML = "4hrs";
//   PreviousExerciseHour.innerHTML = "Last Week - 5hrs";

//   // Social
//   SocialHour.innerHTML = "5hrs";
//   PreviousSocialHour.innerHTML = "Last Week - 10hrs";

//   // Care
//   CareHour.innerHTML = "2hrs";
//   PreviousCareHour.innerHTML = "Last Week - 2hrs";
// };
// Monthly.onclick = function () {
//   // Work
//   WorkHour.innerHTML = "103hrs";
//   PreviousWorkHour.innerHTML = "Last Month - 128hrs";

//   // play
//   PlayHour.innerHTML = "23hrs";
//   PreviousPlayHour.innerHTML = "Last Month - 29hrs";

//   // study
//   studyHour.innerHTML = "13hrs";
//   PreviousStudyHour.innerHTML = "Last Month - 19hrs";

//   // Exercise
//   ExerciseHour.innerHTML = "11hrs";
//   PreviousExerciseHour.innerHTML = "Last Month - 18hrs";

//   // Social
//   SocialHour.innerHTML = "21hrs";
//   PreviousSocialHour.innerHTML = "Last Month - 23hrs";

//   // Care
//   CareHour.innerHTML = "7hrs";
//   PreviousCareHour.innerHTML = "Last Month - 11hrs";
// };
/////////////////////////////////////////////////////////////////////////////////////////////////

//using event Delegation
const timePeriods = {
  Daily: {
    Work: { current: "5hrs", previous: "Last Day - 7hrs" },
    Play: { current: "1hr", previous: "Last Day - 2hrs" },
    study: { current: "0hrs", previous: "Last Day - 1hr" },
    exercise: { current: "1hr", previous: "Last Day - 1hr" },
    social: { current: "1hr", previous: "Last Day - 3hrs" },
    care: { current: "0hrs", previous: "Last Day - 1hr" },
  },
  Weekly: {
    Work: { current: "32hrs", previous: "Last Week - 36hrs" },
    Play: { current: "10hrs", previous: "Last Week - 8hrs" },
    study: { current: "4hrs", previous: "Last Week - 7hrs" },
    exercise: { current: "4hrs", previous: "Last Week - 5hrs" },
    social: { current: "5hrs", previous: "Last Week - 10hrs" },
    care: { current: "2hrs", previous: "Last Week - 2hrs" },
  },
  Monthly: {
    Work: { current: "103hrs", previous: "Last Month - 128hrs" },
    Play: { current: "23hrs", previous: "Last Month - 29hrs" },
    study: { current: "13hrs", previous: "Last Month - 19hrs" },
    exercise: { current: "11hrs", previous: "Last Month - 18hrs" },
    social: { current: "21hrs", previous: "Last Month - 23hrs" },
    care: { current: "7hrs", previous: "Last Month - 11hrs" },
  },
};

const container = document.querySelector(".time-period");

container.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    updateTimePeriod(event.target.id);
  }
});

const updateTimePeriod = (period) => {
  //   console.log(Object.keys(timePeriods)); // ['Daily', 'Weekly', 'Monthly']
  //   console.log(Object.keys(timePeriods[period])); // ['Work', 'Play', 'study', 'exercise', 'social', 'care']
  Object.keys(timePeriods[period]).forEach((activity) => {
    document.getElementById(`${activity}hour`).innerHTML =
      timePeriods[period][activity].current;
    document.getElementById(`Previous${activity}hour`).innerHTML =
      timePeriods[period][activity].previous;
  });
};
