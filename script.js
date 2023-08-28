//Random backstory
// Random backstory
//defining elements
const characterNameBox = document.getElementById("characterName");
const randomAllButton = document.getElementById('randomise-all-button');
const randomBackstoryButton = document.getElementById('random-backstory-button');
const textBox = document.getElementById('backstories');

// randomAllButton.addEventListener('click', function() {
  //TODO: Add all randomise functions here
//  generateBackstory();
//});

randomBackstoryButton.addEventListener('click', function() {
  generateBackstory();
});

const generateBackstory = () => {
  const randomNumber = getRandomInt2(backstories.length);
  const randomText = backstories[randomNumber].story;
  //character name input and replacing in the backstory.
  const characterNameMatch = /{{Character Name}}/g;
  let characterName = characterNameBox.value;
  if (characterName === '') {
    characterName = "They";
  }

  const modifiedString = randomText.replace(characterNameMatch, characterName);

  textBox.value = modifiedString;
}

const backstories = [
  {
    name: "The Redeemer",
    story: "Having experienced the consequences of their own mistakes, {{Character Name}} now dedicates their life to redemption. They've set out to right wrongs, offering help to those they meet along the way. Guided by empathy and the belief that everyone deserves a chance at redemption, {{Character Name}} seeks to make amends for their past and provide opportunities for others to find their own paths to healing and renewal."
  },
  {
    name: "Artisan of Dreams",
    story: "From a young age, {{Character Name}} possessed a remarkable talent for crafting and creating. Their works weren't just physical creations, but extensions of their dreams and imagination. Through their art, they aim to inspire others and weave stories that resonate with the hearts of many. {{Character Name}} travels to gather inspiration from diverse cultures and experiences, seeking to craft their magnum opus that will leave a lasting legacy."
  },
  {
    name: "The Reluctant Leader",
    story: "{{Character Name}} never aspired to lead, but destiny had other plans. When their village faced a crisis, they found themselves thrust into a leadership role. Balancing the needs of their community and the weight of their newfound responsibilities, {{Character Name}} strives to make decisions that will benefit all. Their journey involves not only facing external threats but also grappling with internal doubts as they navigate the complexities of leadership."
  },
  {
    name: "Wanderer of the Wilds",
    story: "Born in a nomadic tribe, {{Character Name}} inherited a deep connection to the natural world. They learned the ways of survival and harmonizing with nature from their elders. As they grew older, their wanderlust led them to explore the uncharted wilderness. They strive to protect the balance of ecosystems, and their travels take them to distant lands where they encounter both beauty and challenges that test their resourcefulness."
  },
  {
    name: "Seeker of Truth",
    story: "From an early age, {{Character Name}} was curious about the mysteries of the world. They were never content with accepting things at face value, always wanting to delve deeper. This curiosity led them to become a dedicated seeker of truth, uncovering hidden agendas and exposing corruption wherever they went. Their journey is a quest for knowledge and understanding, as they believe that only through uncovering the truth can they bring about positive change."
  },
  {
    name: "The Protector",
    story: "Born in a realm plagued by strife, {{Character Name}} grew up in the midst of turmoil. Their village was constantly threatened by marauders, and their loved ones suffered. Driven by a desire to bring safety to their community, {{Character Name}} set out to become a beacon of protection. Armed with determination and a growing set of skills, they journey across the land, seeking knowledge, allies, and power to stand against any threat that may arise."
  },
]

//Helper Functions

function getRandomInt2(max) {
  return Math.floor(Math.random() * max);
}

// Random backstory ends

// Nav scripts start here
function menuToggle() {
  var nav = document.getElementById("menu-overlay");
  nav.classList.toggle("active");

  var nav = document.getElementById("toggleIcon");
  nav.classList.toggle("active");
}
// Nav scripts end here

// Get a randon number for the generators
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

const forenames = [
  "Erevan",
  "Lyra",
  "Thorian",
  "Aelar",
  "Isolde",
  "Kalden",
  "Sylas",
  "Elowen",
  "Varis",
  "Lireth",
  "Draven",
  "Selene",
  "Finnian",
  "Elara",
  "Thaldrin",
  "Mira",
  "Leofric",
  "Neria",
  "Galen",
  "Elysia",
];

const surnames = [
  "Windrider",
  "Blackthorn",
  "Fireforge",
  "Shadowheart",
  "Stormcaller",
  "Ironfist",
  "Moonshadow",
  "Ravensong",
  "Silverblade",
  "Stonehelm",
  "Nightshade",
  "Frostbloom",
  "Starweaver",
  "Emberfall",
  "Thornbreaker",
  "Skywatcher",
  "Bloodmoon",
  "Oakenshield",
  "Swiftwind",
  "Grimhammer",
];

const genders = ["Male", "Female", "Non-binary"];

const levels = new Array(20).fill(null).map((c, i) => i + 1);

const races = [
  "Dragonborn",
  "Dwarf",
  "Elf",
  "Gnome",
  "Half-Elf",
  "Half-Orc",
  "Halfling",
  "Human",
  "Tiefling",
];

const classes = [
  "Barbarian",
  "Bard",
  "Cleric",
  "Druid",
  "Fighter",
  "Monk",
  "Paladin",
  "Ranger",
  "Rogue",
  "Sorcerer",
  "Warlock",
  "Wizard",
];

const backgrounds = [
  "Acolyte",
  "Charlatan",
  "Criminal",
  "Entertainer",
  "Folk Hero",
  "Guild Artisan",
  "Hermit",
  "Noble",
  "Outlander",
  "Sage",
  "Sailor",
  "Soldier",
  "Urchin",
];

const alignments = [
  "Lawful Good",
  "Neutral Good",
  "Chaotic Good",
  "Lawful Neutral",
  "True Neutral",
  "Chaotic Neutral",
  "Lawful Evil",
  "Neutral Evil",
  "Chaotic Evil",
];

let characterName = "";
let characterGender = "";
let characterLevel = "";
let characterRace = "";
let characterClass = "";
let characterBackground = "";
let characterAlignment = "";

function setName(newCharacterName) {
  characterName = newCharacterName;
}

function setGender(newCharacterGender) {
  characterGender = newCharacterGender;
}

function setLevel(newCharacterLevel) {
  characterLevel = newCharacterLevel;
}

function setRace(newCharacterRace) {
  characterRace = newCharacterRace;
}

function setClass(newCharacterClass) {
  characterClass = newCharacterClass;
}

function setBackground(newCharacterBackground) {
  characterBackground = newCharacterBackground;
}

function setAlignment(newCharacterAlignment) {
  characterAlignment = newCharacterAlignment;
}

function initialiseSelect(selectId, options, prefix = null) {
  const element = document.getElementById(selectId);
  options.forEach((option) => {
    const optionElement = document.createElement("option");
    if (prefix) {
      optionElement.innerText = prefix + ": " + option;
    } else {
      optionElement.innerText = option;
    }
    optionElement.value = option;
    element.appendChild(optionElement);
  });
}

function pickRandomOption(selectId, options) {
  const randomIndex = getRandomInt(0, options.length);
  const element = document.getElementById(selectId);
  console.log({ randomIndex, element });
  element.value = options[randomIndex];
}

function pickRandomName() {
  const randomForenameIndex = getRandomInt(0, forenames.length);
  const randomSurnameIndex = getRandomInt(0, surnames.length);
  const forename = forenames[randomForenameIndex];
  const surname = surnames[randomSurnameIndex];
  const randomFullName = `${forename} ${surname}`;
  const element = document.getElementById("characterName");
  element.value = randomFullName;
}

initialiseSelect("genders", genders, "Gender");
initialiseSelect("levels", levels, "Level");
initialiseSelect("races", races, "Race");
initialiseSelect("classes", classes, "Class");
initialiseSelect("backgrounds", backgrounds, "Background");
initialiseSelect("alignments", alignments, "Alignment");

// Character sheet JS starts here

function generateCharacterSheet() {
  const fieldAssociations = [
    { inputId: 'characterName', outputId: 'sheetOutputName' },
    { inputId: 'levels', outputId: 'sheetOutputLevels' },
    { inputId: 'genders', outputId: 'sheetOutputGenders' },
    { inputId: 'alignments', outputId: 'sheetOutputAlignments' },
    { inputId: 'races', outputId: 'sheetOutputRaces' },
    { inputId: 'classes', outputId: 'sheetOutputClasses' },
    { inputId: 'backgrounds', outputId: 'sheetOutputBackgrounds' },
    { inputId: 'backstories', outputId: 'sheetOutputBackstories' }
  ];

  for (const association of fieldAssociations) {
    const inputValue = document.getElementById(association.inputId).value;
    const outputElement = document.getElementById(association.outputId);
    outputElement.textContent = inputValue;
  }
}




// Print as a document

function printdiv(elem) {
  var header_str = '<html><head><title>' + document.title  + '</title></head><body>';
  var footer_str = '</body></html>';
  var new_str = document.getElementById(elem).innerHTML;
  var old_str = document.body.innerHTML;
  document.body.innerHTML = header_str + new_str + footer_str;
  window.print();
  document.body.innerHTML = old_str;
  return false;
}

// Avatar image starts here

// function to acquire race and gender from selection
function race_gender_result(){
  let race_result = "tiefling"
  let gender_result = "female"
  let race_gender_result = race_result + "_" + gender_result + ".png"
}

// event listener to change avatar image source on click of "view character"

const avatar_image = document.getElementById("avatar-img");
const submit_character = document.getElementById("submit-character");

submit_character.addEventListener("click", function() {
  avatar_image.src = "images/avatars/tiefling_female.png";
});

// Avatar image ends here