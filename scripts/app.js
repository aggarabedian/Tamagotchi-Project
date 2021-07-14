console.log("Here we go!");

/* User Story */

/* 
Page loads to a rectangle with a plain blob (think circle) inside. There will be a brief description of the games instructions:
"This is a blob.  Blobs are cool, but they do require some care.  As your blob grows, you'll have to keep it's belly full, play with it to keep it from getting too bored, and make sure it gets enough sleep! As your blob gets older, it will change and grow. Keep your blob happy, or else... For now, though, you can try to bond with your blob by feeding it some snacks and naming it."
User sees a prompt asking to name their blob.
The chosen name will appear above the blob's frame.
A single button appears under the blob.  
Each time fed (for 3 times), one of the following appears: "Feed me, I'm hungry!" "I'm still hungry!" "Yum, yum, extra yum!"
After the 3rd message, there will be a 3 second delay, then the blob will get eyes and a mouth.
A new set of 3 buttons will appear, as will a matching meter bar for each one: Hunger, Boredom, and Sleepiness.
Each button will have a name or image to represent it; food(donut), play(ball), sleep(Zzzz).
An 'age' will display at the top, next to the blob's name -- it will be 0 to start.  This will go up 1 year every 30 seconds.
Meanwhile, the 3 meters will all fill up slowly, and the user must click the corresponding button to keep it from filling up.
At year 1, the blob grows into an adolescent, gainging feet and short arms. The meters also begin to speed up.
At year 3, the blob grows into an adult, getting bigger and an antenna on it's head.
At year 4, a UFO will appear and beam the blob up, ending the game.
"The truth is out there." appears, as does a 'new game' button.
If the user fails to keep any meter from filling up all the way, the blob will get a sad face and shrink to nothing; "Your blob has melted away -- better luck next time!"; 'new game' button appears.
*/

/* More Details */

/* 
  - When the user navigates to the page, there will be a brief description of the game in the blob box, and a box with a prompt for a name for the blob. 
  - Once the user enters a name and clicks submit, the box contents will clear, and a blob will appear.
  - A button also appears which is to feed the blob 3 times.
  - Once that happens, the blog gets a face, and 2 more buttons appear.
  - Also, the 3 meters appear on the left at 1, and start creeping up every 2 seconds.
  - After every 30 seconds, the age goes up 1.
  
  
  */

/* Icebox */

/* 
- A light that is on, but goes off when the "sleep" button is clicked?
- A slide out menu on the left that has ???
- Blob dances
*/

const blob = {
  
  name: "",
  age: 0,
  hunger: 5,
  boredom: 3,
  sleepiness: 3,
  time: 30,
  timer: null,
  
  startGame(event) {
    const $getName = $(".name-select");
    blob.name = $getName.val();
    $modalHide.css("display", "none");
    $blobAge.text(`Age: ${blob.age}`);
    $blobName.text(`Name: ${blob.name}`);
    $gameClock.text(`Time left this year: ${blob.time}s`);
    blob.startTimer();
    
  },

  startTimer() {
    blob.timer = setInterval(blob.overTime, 1000);
  },

  overTime() {
    blob.time--;
    $(".game-clock").text(`Time left this year: ${blob.time}s`);
    if (blob.time = 0) {
      blob.age++;
      blob.resetRound();
    }
  },

  resetRound() {
    clearInterval(blob.timer);
    if (blob.age === 5) {
      //game over
      console.warn("Game Over");
    } else if (blob.age < 5) {
      blob.time = 30;
    }
  },

  increaseMeters() {
    blob.boredom++;
    blob.sleepiness++;
    blob.hunger++;
  }

  feedBlob(event) {
    if (blob.hunger < 10 && blob.hunger > 0) {
      blob.hunger--;
      $hungerNumber.text(`Hunger: ${blob.hunger}`);
      $hungerMeter.css("width", `${blob.hunger}0%`);
    }
  },

  playBlob(event) {
    if (blob.boredom < 10 && blob.boredom > 0) {
      blob.boredom--;
      $boredNumber.text(`Boredom: ${blob.boredom}`);
      $boredMeter.css("width", `${blob.boredom}0%`);
    }
  },

  sleepBlob(event) {
    if (blob.sleepiness < 10 && blob.sleepiness > 0) {
      blob.sleepiness--;
      $sleepyNumber.text(`Sleepiness: ${blob.sleepiness}`);
      $sleepyMeter.css("width", `${blob.sleepiness}0%`);
    }
  },


};

// blob.startTimer();
// const timer = setInterval(logEverySecond, 2000);
/* const feedBlob = function () {
  blob.hunger = blob.hunger--;
}; */

const $blobName = $(".status-bar-name");
const $blobAge = $(".status-bar-age");
const $hungerMeter = $(".meter-box-hungry-fill");
const $hungerNumber = $(".meter-box-label-hungry");
const $boredMeter = $(".meter-box-bored-fill");
const $boredNumber = $(".meter-box-label-bored");
const $sleepyMeter = $(".meter-box-sleepy-fill");
const $sleepyNumber = $(".meter-box-label-sleepy");
const $modalHide = $(".modal-close");
const $gameClock = $(".game-clock")


// hides the modal and modal overlay at the start of the game
$(".name-select-button").on("click", blob.startGame);
$(".button-food").on("click", blob.feedBlob);
$(".button-play").on("click", blob.playBlob);
$(".button-sleep").on("click", blob.sleepBlob);
