/*
Requirements

1) Show a different quote every single time I click on the button - Done 


*Extras

1) Show a default quote on load - Done
2) Allow the user to change the quote using the spacebar - Done
3) Prevent showing the same quote twice - Done
4) Change the background colour for each quote -  Done
5) Use text to speech to let the user hear the quote - Done
6) Assign Voice to each quote - Done
7) If I change the quote mid speech, stop the speech - Done

*/

// Create dataset

const allData = [
  {
    movieQuote:
      "Nobody is gonna hit as hard as life, but it ain’t how hard you can hit. It’s how hard you can get hit and keep moving forward. It’s how much you can take, and keep moving forward. That’s how winning is done.",
    movie: "Rocky Balboa",
    quoteBy: "Rocky Balboa",
    movieImage: "https://i.postimg.cc/C18JV88j/Rocky-Balboa-Movie.jpg",
  },

  {
    movieQuote: "Sometimes the right path is not the easiest one.",
    movie: "Pocahontas",
    quoteBy: "Grandmother Willow",
    movieImage: "https://i.postimg.cc/WbwW30H8/Pocahontas-Movie.jpg",
  },

  {
    movieQuote: "Do or do not. There is no try.",
    movie: "Star Wars: The Empire Strikes Back",
    quoteBy: "Yoda",
    movieImage: "https://i.postimg.cc/dV7P7MwY/star-wars.jpg",
  },

  {
    movieQuote:
      "Life moves pretty fast. If you don’t stop and look around once in a while, you could miss it.",
    movie: "Ferris Bueller’s Day Off",
    quoteBy: "Ferris Bueller",
    movieImage:
      "https://i.postimg.cc/7ZNppF4x/Ferris-Bueller-s-Day-Off-Movie.jpg",
  },

  {
    movieQuote:
      "If you focus on what you left behind, you will never be able to see what lies ahead.",
    movie: "Ratatouille",
    quoteBy: "Gusteau",
    movieImage: "https://i.postimg.cc/28RM3k8k/Ratatouille-Movie.jpg",
  },

  {
    movieQuote:
      "To see the world, things dangerous to come to, to see behind walls, to draw closer, to find each other and to feel. That is the purpose of life.",
    movie: "The Secret Life of Walter Mitty",
    quoteBy: "Walter Mitty",
    movieImage: "https://i.postimg.cc/bY24zDPV/Walter-Mitty-Movie.jpg",
  },

  {
    movieQuote:
      "You want to get out of the hole? First you’re going to have to put down the shovel.",
    movie: "Incredibles 2",
    quoteBy: "Rick Dicker",
    movieImage: "https://i.postimg.cc/DwfCb8VT/Incredibles-2-Movie.jpg",
  },

  {
    movieQuote:
      "You’ll have bad times, but it’ll always wake you up to the good stuff you weren’t paying attention to.",
    movie: "Good Will Hunting",
    quoteBy: "Sean Maguire",
    movieImage: "https://i.postimg.cc/qMDHMBfw/good-will-hunting.jpg",
  },

  {
    movieQuote: "The very things that hold you down are going to lift you up.",
    movie: "Dumbo",
    quoteBy: "Timothy Mouse",
    movieImage: "https://i.postimg.cc/Hk3hSb0n/Dumbo-Movie.jpg",
  },

  {
    movieQuote:
      "Nothing happens to anyone that he is not fitted by nature to bear.",
    movie: "Gladiator",
    quoteBy: "Maximus",
    movieImage: "https://i.postimg.cc/ydK0gHqp/gladiator-1.jpg",
  },

  {
    movieQuote:
      "All we have to decide is what to do with the time that is given to us.",
    movie: "The Lord of the Rings: The Fellowship of the Ring",
    quoteBy: "Gandalf",
    movieImage:
      "https://i.postimg.cc/rsLjypG7/The-Lord-of-the-Rings-The-Fellowship-of-the-Ring-Movie.jpg",
  },

  {
    movieQuote:
      "It is not our abilities that show what we truly are … it is our choices.",
    movie: "Harry Potter and the Chamber of Secrets",
    quoteBy: "Dumbledore",
    movieImage:
      "https://i.postimg.cc/9fnN2Vnj/Harry-Potter-and-the-Chamber-of-Secrets-Movie.jpg",
  },

  {
    movieQuote: "Hope is not a strategy.",
    movie: "Mission Impossible: Fallout",
    quoteBy: "August Walker",
    movieImage:
      "https://i.postimg.cc/QMH00wxY/Mission-Impossible-Fallout-Movie.jpg",
  },

  {
    movieQuote:
      "How many times do I have to teach you: just because something works doesn’t mean it can’t be improved.",
    movie: "Black Panther",
    quoteBy: "Shuri",
    movieImage: "https://i.postimg.cc/1t82V4qt/Black-Panther-Movie.jpg",
  },

  {
    movieQuote:
      "When you get a different vantage point, it changes your perspective ... It allows us to see things that maybe we should have seen a long time ago.",
    movie: "First Man",
    quoteBy: "Neil Armstrong",
    movieImage: "https://i.postimg.cc/DyrDX98q/First-Man-Movie.jpg",
  },

  {
    movieQuote:
      "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
    movie: "Harry Potter and the Prisoner of Azkaban",
    quoteBy: "Dumbledore",
    movieImage:
      "https://i.postimg.cc/brXCGgPC/Harry-Potter-and-the-Prisoner-of-Azkaban-Movie.jpg",
  },

  {
    movieQuote:
      "Don’t ever let somebody tell you you can’t do something, not even me. Alright? You dream, you gotta protect it. People can’t do something themselves, they wanna tell you you can’t do it. If you want something, go get it. Period.",
    movie: "The Pursuit of Happyness",
    quoteBy: "Christopher Gardner",
    movieImage: "https://i.postimg.cc/8cMqRQLC/poh-1.jpg",
  },

  {
    movieQuote: "I’m sorry, that last hand... nearly killed me.",
    movie: "Casino Royale",
    quoteBy: "James Bond",
    movieImage: "https://i.postimg.cc/x8HZg7gV/Casino-Royale-Movie.jpg",
  },

  {
    movieQuote: "There’s just no telling how far I’ll go.",
    movie: "Moana",
    quoteBy: "Moana",
    movieImage: "https://i.postimg.cc/7LdXc95H/Moana-Movie.jpg",
  },

  {
    movieQuote:
      "Just keep swimming. Just keep swimming. Just keep swimming, swimming, swimming. What do we do? We swim, swim.",
    movie: "Finding Nemo",
    quoteBy: "Dory",
    movieImage: "https://i.postimg.cc/W43fxtSn/Finding-Nemo-Movie.jpg",
  },
];

console.log(allData);

// Selectors
const body = document.querySelector("body");
const quoteWrap = document.querySelector(".quoteWrap");
const movieImageHolder = document.querySelector(".quoteImageBox");
const movieImage = document.querySelector(".quoteImageBox img");
const movieQuoteHolder = document.querySelector(".quote");
const movieNameHolder = document.querySelector(".movie");
const quoteSpeakerHolder = document.querySelector(".quoteSpeaker span");
const forwardBtn = document.querySelector(".fBtn");
const previousBtn = document.querySelector(".pBtn");
const resetBtn = document.querySelector(".rBtn");
//const replayBtn = document.querySelector(".replayBtn");
const playBtn = document.querySelector(".playBtn");

// Event Listeners
window.addEventListener("load", onLoadActions);
window.addEventListener("keyup", changeQuoteViaKeyboard);
forwardBtn.addEventListener("click", changeQuote);
previousBtn.addEventListener("click", previousQuote);
resetBtn.addEventListener("click", resetQuotes);
window.addEventListener("mousemove", renderArtWorkMouse);
quoteWrap.addEventListener("mouseenter", displayArtWork);
quoteWrap.addEventListener("mouseleave", hideArtWork);
//replayBtn.addEventListener("click", replayQuote);
playBtn.addEventListener("click", playQuote);

// Arrays and Variables
const bgColors = [
  "#FAEDCB",
  "#C9E4DE",
  "#C6DEF1",
  "#DBCDF0",
  "#F2C6DE",
  "#F7D9C4",
  "#FFADAD",
  "#FFD6A5",
  "#E4F1EE",
  "#D9EDF8",
  "#DEDAF4",
  "#F3D17C",
  "#83B8C6",
  "#C1E0FF",
];
let workingArr = [...allData];
let savedArr = [];
const synth = window.speechSynthesis;
const voices = synth.getVoices();

function generateRandomNum(arrlength) {
  return Math.floor(Math.random() * arrlength);
}

function changeBgColor() {
  const bgNum = generateRandomNum(bgColors.length);
  bgColors.forEach((bgColor, bgIndex) => {
    if (bgIndex === bgNum) {
      body.style.backgroundColor = bgColor;
    }
  });
}

function renderQuote() {
  const num = generateRandomNum(workingArr.length);
  workingArr.forEach((data, qIndex) => {
    if (qIndex === num) {
      const savedQuotes = workingArr.splice(qIndex, 1);
      savedQuotes.forEach((savedQuote) => {
        savedArr.push(savedQuote);
      });

      const delayedRender = setTimeout(() => {
        renderContent(data);
      }, 500);
    }
  });
}

function renderPerviousQuote() {
  savedArr.pop();
  const delayedRender = setTimeout(() => {
    renderContent(savedArr[savedArr.length - 1]);
  }, 500);
}

function disableBtns() {
  if (savedArr.length <= 1) {
    previousBtn.classList.add("disable");
  } else {
    previousBtn.classList.remove("disable");
  }

  if (workingArr.length === 0) {
    forwardBtn.classList.add("disable");
    forwardBtn.removeEventListener("click", changeQuote);
    resetBtn.classList.remove("disable");
    resetBtn.addEventListener("click", resetQuotes);
  } else {
    forwardBtn.classList.remove("disable");
    forwardBtn.addEventListener("click", changeQuote);
    resetBtn.classList.add("disable");
    resetBtn.removeEventListener("click", resetQuotes);
  }
}

function changeQuoteViaKeyboard(e) {
  e.preventDefault();
  if (e.key === " " && e.target === document.body) {
    // SpaceBar
    if (!forwardBtn.classList.contains("disable")) {
      changeQuote();
    }
  } else if (e.key === "Enter") {
    // Enter
    if (!resetBtn.classList.contains("disable")) {
      resetQuotes();
    }
  } else if (e.key === "Backspace") {
    // BackSpace
    if (!previousBtn.classList.contains("disable")) {
      previousQuote();
    }
  }
  // else if (e.keyCode === 82) {
  //   // R for Replay
  //   replayQuote();}
  else if (e.keyCode === 80) {
    // P for play
    playQuote();
  }
}

function onLoadActions() {
  body.classList.add("loaded");
  changeBgColor();
  renderQuote();
  disableBtns();
}

function changeQuote() {
  changeBgColor();
  removeQuoteSpanActive();
  renderQuote();
  disableBtns();
}

function previousQuote() {
  changeBgColor();
  removeQuoteSpanActive();
  renderPerviousQuote();
  disableBtns();
}

function resetQuotes() {
  cancelAudio();
  changeBgColor();
  savedArr = [];
  workingArr = [...allData];
  disableBtns();
  // playAudio("");
  movieQuoteHolder.innerHTML = `<span class="quoteSpan active">Get Quoting!</span>`;
  movieImage.src = `https://i.postimg.cc/9F2fs5s1/well-hello-there.jpg`;
  movieNameHolder.innerText = "Worth a watch!";
  quoteSpeakerHolder.innerText = "Someone cool!";
}

// Mouse artwork
function renderArtWorkMouse(e) {
  const quoteCo = quoteWrap.getBoundingClientRect();
  const quoteX = quoteCo.x;
  const quoteY = quoteCo.y;

  const mouseYGlobal = e.pageY;
  const mouseXGlobal = e.pageX;
  const mouseXMain = mouseXGlobal - quoteX;
  const mouseYMain = mouseYGlobal - quoteY;

  movieImageHolder.style.left = `${mouseXMain}px`;
  movieImageHolder.style.top = `${mouseYMain}px`;
}

function displayArtWork() {
  movieImage.classList.add("active");
}

function hideArtWork() {
  movieImage.classList.remove("active");
}

// Refactor Render content
function renderContent(dataContent) {
  // Cancel audio everytime before new content renders
  cancelAudio();

  const generatedQuote = dataContent;
  // Render quote within span for smooth in/out
  movieQuoteHolder.innerHTML = `<span class="quoteSpan">${generatedQuote.movieQuote}</span>`;
  movieImage.src = `${generatedQuote.movieImage}`;
  removeQuoteSpanActive();
  const quoteSpan = document.querySelector(".quoteSpan");
  const enterQuoteSpan = setTimeout(() => {
    quoteSpan.classList.add("active");
  }, 150);

  // playAudio(generatedQuote.movieQuote);

  // Render everything else
  movieNameHolder.innerText = generatedQuote.movie;
  quoteSpeakerHolder.innerText = generatedQuote.quoteBy;
}

// Play quote audio
// function playAudio(data) {
//   // Play quote audio
//   const playQuoteAudio = new SpeechSynthesisUtterance(data);
//   synth.speak(playQuoteAudio);
//   setVoices(playQuoteAudio);
// }

//   play quote Audio
function playQuote() {
  const quoteSpan = document.querySelector(".quoteSpan");
  const playQuoteAudio = new SpeechSynthesisUtterance(quoteSpan.innerText);
  cancelAudio();
  synth.speak(playQuoteAudio);
  setVoices(playQuoteAudio);
}

// Replay quote audio
// function replayQuote() {
//   const quoteSpan = document.querySelector(".quoteSpan");
//   const replayQuoteAudio = new SpeechSynthesisUtterance(quoteSpan.innerText);
//   cancelAudio();
//   synth.speak(replayQuoteAudio);
//   setVoices(replayQuoteAudio);
// }

// Set voices
function setVoices(data) {
  // Set voices
  const vNum = generateRandomNum(voices.length);
  voices.forEach((voice, vIndex) => {
    if (vIndex === vNum) {
      data.voice = voice;
    }
  });
}

// Cancel Audio
function cancelAudio() {
  return synth.cancel();
}

// Helper functions
function removeQuoteSpanActive() {
  const quoteSpan = document.querySelector(".quoteSpan");
  quoteSpan.classList.remove("active");
}
