$(function() {

    // bind click events buttons to every action function
  checkAndUpdatePetInfoInHtml();
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.nap-button').click(clickedNapButton);
  
});

console.log("Giga Pet App Loaded");
console.info("Log Info: Buddy's pet dashboard is ready");
console.warn("Log Warning: Watch Buddy's happiness and energy levels.");
console.error("Log Error: This is a sample error message for demonstration purposes.");

// pet core attributes
var pet_info = {
  name: "Buddy",
  weight: 15,
  happiness: 8
};

// nap feature attribute
var energy = 10;

console.table([pet_info]);

console.log(
  "%cBuddy DevTools Lab is active!",
  "color: white; background: green; padding: 6px; border-radius: 5px;"
);

// treat = +2 happiness, +1 weight
// play = +3 happiness, -1 weight, -2 energy
// exercise = -1 happiness, -2 weight, -1 energy
// nap = +4 energy, +1 happiness
// toggle method is used to show and hide the pet message when an action button is clicked
function clickedTreatButton(){
  console.group("Buddy Treat Action");
  console.log("Before treat:", pet_info);

  pet_info.happiness += 2;
  pet_info.weight += 1;

  console.log("After treat:", pet_info);
  console.groupEnd();

    $('.pet-message').text("Buddy says: Yum!");
    $('.pet-message').toggle(); // jQuery Method #1
    $('.pet-message').toggle();

    checkAndUpdatePetInfoInHtml();
}

function clickedPlayButton() {
  console.group("Buddy Play Action");
  console.log("Before play:", pet_info, "Energy:", energy);

  pet_info.happiness += 3;
  pet_info.weight -= 1;
  energy -= 2;

  console.log("After play:", pet_info, "Energy:", energy);
  console.groupEnd();

    $('.pet-message').text("Buddy says: That was fun!");
    $('.pet-message').toggle();
    $('.pet-message').toggle();

    checkAndUpdatePetInfoInHtml();
}

function clickedExerciseButton() {
  console.group("Buddy Exercise Action");
  console.log("Before exercise:", pet_info, "Energy:", energy);

  pet_info.happiness -= 1;
  pet_info.weight -= 2;
  energy -= 1;

  console.log("After exercise:", pet_info, "Energy:", energy);
  console.groupEnd();

    $('.pet-message').text("Buddy says: I'm tired!");
    $('.pet-message').toggle();
    $('.pet-message').toggle();

    checkAndUpdatePetInfoInHtml();
}

function clickedNapButton() {
  console.group("Buddy Nap Action");
  console.log("Before nap:", pet_info, "Energy:", energy);

  energy += 4;
  pet_info.happiness += 1;

  console.log("After nap:", pet_info, "Energy:", energy);
  console.groupEnd();

    $('.pet-message').text("Buddy says: That was a nice nap!");
    $('.pet-message').toggle();
    $('.pet-message').toggle();

    checkAndUpdatePetInfoInHtml();
}

function runBuddyHealthScan() {
  console.group("Buddy Health Scan");

  console.log("Message Logging: Running Buddy health scan...");
  console.info("Log Info: Buddy's current stats are being checked.");
  console.warn("Log Warning: If energy gets low, Buddy may need a nap.");
  console.error("Log Error: Demo error for DevTools practice.");

  console.table([
    { stat: "Name", value: pet_info.name },
    { stat: "Weight", value: pet_info.weight },
    { stat: "Happiness", value: pet_info.happiness },
    { stat: "Energy", value: energy }
  ]);

  console.log(
    "%cHealth Scan Complete!",
    "color: white; background: #1e2835; padding: 6px; border-radius: 5px;"
  );

  console.groupEnd();
}

function findLostToy() {
  console.warn("Buddy is searching for his lost toy...");
  fetch("images/missingtoy.jpg");
}

function breakBuddyMessage() {
  console.log("Trying to update a missing Buddy message...");
  let missingBuddyMessage = null;
  missingBuddyMessage.textContent = "Buddy found a bug!";
}

function startZoomies() {
  console.warn("Buddy started zoomies. This may cause a violation.");

  let start = Date.now();

  while (Date.now() - start < 3000) {
    // intentionally blocking browser to create violation
  }

  console.log("Buddy finally stopped zooming.");
}

function buggyTreatCalculator() {
  let treatsToday = "5";
  let bonusTreats = "1";
  let totalTreats = treatsToday + bonusTreats;

  console.log("Buggy Treat Total:", totalTreats);
}

function fixedTreatCalculator() {
  let treatsToday = Number("5");
  let bonusTreats = Number("1");
  let totalTreats = treatsToday + bonusTreats;

  console.log("Fixed Treat Total:", totalTreats);
}

function checkAndUpdatePetInfoInHtml(){
  checkWeightAndHappinessBeforeUpdating();
  updatePetInfoInHtml();
}

function checkWeightAndHappinessBeforeUpdating() {
  if (pet_info.weight < 0) {
    pet_info.weight = 0;
  }

  if (pet_info.happiness < 0) {
    pet_info.happiness = 0;
  }

  if (energy < 0) {
    energy = 0;
  }

}

function updatePetInfoInHtml() {
  $('.name').text(pet_info.name);
  $('.weight').text(pet_info.weight);
  $('.happiness').text(pet_info.happiness);
  $('.energy').text(energy);

  // jQuery Method #2
    if (pet_info.happiness <= 2) {
      $('.happiness').addClass("warning");
    } else {
      $('.happiness').removeClass("warning");
    }
}