// SELECTORS
const root = document.querySelector("#root");

// DATA
let heroes = [
  {
    name: "Batman",
    gender: "male",
    mainColor: "black",
    powers: { superspeed: false, canFly: false, usesMagic: false },
    home: "Gotham",
  },
  {
    name: "Superman",
    gender: "male",
    mainColor: "blue",
    powers: { superspeed: true, canFly: true, usesMagic: false },
    home: "Fortress of Solitude",
  },
  {
    name: "Flash",
    gender: "male",
    mainColor: "red",
    powers: { superspeed: false, canFly: false, usesMagic: false },
    home: "Central City",
  },
  {
    name: "Aquaman",
    gender: "male",
    mainColor: "orange",
    powers: { superspeed: false, canFly: false, usesMagic: false },
    home: "Atlantis",
  },
  {
    name: "Green_Arrow",
    gender: "male",
    mainColor: "green",
    powers: { superspeed: false, canFly: false, usesMagic: false },
    home: "Star City",
  },
  {
    name: "Hawkman",
    gender: "male",
    mainColor: "green",
    powers: { superspeed: false, canFly: true, usesMagic: false },
    home: "Ancient Egypt",
  },
  {
    name: "Robin",
    gender: "male",
    mainColor: "red",
    powers: { superspeed: false, canFly: false, usesMagic: false },
    home: "Gotham",
  },
  {
    name: "Supergirl",
    gender: "female",
    mainColor: "blue",
    powers: { superspeed: false, canFly: false, usesMagic: false },
    home: "Midvale Orphanage",
  },
  {
    name: "Green_Lantern",
    gender: "male",
    mainColor: "green",
    powers: { superspeed: false, canFly: true, usesMagic: false },
    home: "Oa",
  },
  {
    name: "Cyborg",
    gender: "male",
    mainColor: "grey",
    powers: { superspeed: false, canFly: false, usesMagic: false },
    home: "Detroit",
  },
  {
    name: "Shazaam",
    gender: "male",
    mainColor: "red",
    powers: { superspeed: false, canFly: true, usesMagic: true },
    home: "Fewcett City",
  },
  {
    name: "Batgirl",
    gender: "female",
    mainColor: "black",
    powers: { superspeed: false, canFly: false, usesMagic: false },
    home: "Gotham",
  },
  {
    name: "Firestorm",
    gender: "male",
    mainColor: "red",
    powers: { superspeed: false, canFly: true, usesMagic: false },
    home: "New York City",
  },
  {
    name: "Zatanna",
    gender: "female",
    mainColor: "black",
    powers: { superspeed: false, canFly: false, usesMagic: true },
    home: "New York City",
  },
  {
    name: "Constantine",
    gender: "male",
    mainColor: "grey",
    powers: { superspeed: false, canFly: false, usesMagic: true },
    home: "Northumberland",
  },
];

// FUNCTIONS
function addSectionHeader(sectionName) {
  let div = document.createElement("div");
  div.innerHTML = `<h1>${sectionName}</h1>`;
  root.append(div);
}

function addInstructions(instruction) {
  let div = document.createElement("div");
  div.innerHTML = `<h2>${instruction}</h2>`;
  root.append(div);
}

function addData(data) {
  let div = document.createElement("div");
  div.innerHTML = `<div>${data}</div>`;
  root.append(div);
}

function addHero(array) {
  let container = document.createElement("div");
  container.className = "container";
  for (let i = 0; i < array.length; i++) {
    let hero = document.createElement("div");
    hero.innerHTML = `
    <div class='hero'>
        <img id='${array[i].name}'/>
        <div id='heroName'>${array[i].name}</div>
    </div>`;
    container.append(hero);
  }
  root.append(container);
}

// ACCESSING DATA IN AN ARRAY OF OBJECTS PRACTICE
addSectionHeader("ACCESSING DATA IN AN ARRAY OF OBJECTS PRACTICE");
//
addInstructions("1. Use the 'heroes' variable to put Batman's name in the below function");
addData(heroes[0].name);

addInstructions("2. Use the 'heroes' variable to put Aquaman's main color in the below function");
addData(heroes[3].mainColor);

addInstructions("3. Use the 'heroes' variable to put Aquaman's home in the below function");
addData(heroes[3].home);

addInstructions("4. Use the 'heroes' variable to put if superman can fly in the below function");
addData(heroes[1].powers.canFly);

addInstructions("5. Use the 'heroes' variable to put if superman uses magic in the below function");
addData(heroes[1].powers.usesMagic);

// FILTER METHOD PRACTICE
addSectionHeader("FILTER METHOD PRACTICE");
//
addInstructions("1. Show All Heroes");
addHero(heroes);

addInstructions("2. Show Only Batman");
addHero(heroes.filter((hero) => hero.name === "Batman"));

addInstructions("3. Show Only Heroes Who are Female");
addHero(heroes.filter((hero) => hero.gender === "female"));

addInstructions("4. Show Only Heroes Whose Main Color is Black");
addHero(heroes.filter((hero) => hero.mainColor === "black"));

addInstructions("5. Show Only Heroes Who Can Fly");
addHero(heroes.filter((hero) => hero.powers.canFly === true));

addInstructions("6. Show Only Heroes Who are Female and Main Color is Black");
addHero(heroes.filter((hero) => hero.gender === "female" && hero.mainColor === "black"));

addInstructions("7. Show Only Heroes Who Can Fly and Main Color is Red");
addHero(heroes.filter((hero) => hero.powers.canFly === true && hero.mainColor === "red"));
