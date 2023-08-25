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
  const randomFullName = `${forename} ${surname}`
  const element = document.getElementById('characterName');
  element.value = randomFullName;
}

initialiseSelect("genders", genders, "Gender");
initialiseSelect("levels", levels, "Level");
initialiseSelect("races", races, "Race");
initialiseSelect("classes", classes, "Class");
initialiseSelect("backgrounds", backgrounds, "Background");
initialiseSelect("alignments", alignments, "Alignment");
