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
At year 3, the blob grows into an adolescent, gainging feet and short arms. The meters also begin to speed up.
At year 5, the blob grows into an adult, getting bigger and an antenna on it's head.
At year 6, a UFO will appear and beam the blob up, ending the game.
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
  time: 0,
  name: "",
  age: 0,
  hunger: 5,
  boredom: 3,
  sleepiness: 3,
  feedBlob(event) {

  }
  
};

/* const logEverySecond = function () {
  console.log("Hello");
  console.log("======");
} */
/* const timer = setInterval(logEverySecond, 2000); */

const $blobName = $(".status-bar-name");
const $blobAge = $(".status-bar-age");
const $boredMeter = $(".meter-box-bored");
const $hungerMeter = $(".meter-box-hungry");
const $sleepyMeter = $(".meter-box-sleepy");
const $modalHide = $(".modal-close");

/* $(".name-select-button").click(function(){
  const name = $(".name-select").val();
  console.log(name);
}); */

/* const startGame = function () {
  $modalHide.css("display", "none");
}; */



// hides the modal and modal overlay at the start of the game
$(".name-select-button").on("click", function(){
  const $getName = $(".name-select");
  blob.name = $getName.val();
  $modalHide.css("display", "none");
  $blobAge.text(`Age: ${blob.age}`);
  $blobName.text(`Name: ${blob.name}`);
});

/* $(".button-food").on("click", blob.hunger--); */