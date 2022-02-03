// DATA
let heroes = [
  {
    name: "Batman",
    gender: "male",
    mainColor: "black",
    powers: { superspeed: false, canFly: false, usesMagic: false },
    home: "Gotham",
    height: { meters: 1.88, inches: 74 },
  },
  {
    name: "Superman",
    gender: "male",
    mainColor: "blue",
    powers: { superspeed: true, canFly: true, usesMagic: false },
    home: "Fortress of Solitude",
    height: { meters: 1.91, inches: 75 },
  },
  {
    name: "Flash",
    gender: "male",
    mainColor: "red",
    powers: { superspeed: false, canFly: false, usesMagic: false },
    home: "Central City",
    height: { meters: 1.83, inches: 72 },
  },
  {
    name: "Aquaman",
    gender: "male",
    mainColor: "orange",
    powers: { superspeed: false, canFly: false, usesMagic: false },
    home: "Atlantis",
    height: { meters: 1.93, inches: 76 },
  },
  {
    name: "Green_Arrow",
    gender: "male",
    mainColor: "green",
    powers: { superspeed: false, canFly: false, usesMagic: false },
    home: "Star City",
    height: { meters: 1.85, inches: 73 },
  },
  {
    name: "Hawkman",
    gender: "male",
    mainColor: "green",
    powers: { superspeed: false, canFly: true, usesMagic: false },
    home: "Ancient Egypt",
    height: { meters: 1.85, inches: 73 },
  },
  {
    name: "Robin",
    gender: "male",
    mainColor: "red",
    powers: { superspeed: false, canFly: false, usesMagic: false },
    home: "Gotham",
    height: { meters: 1.63, inches: 64 },
  },
  {
    name: "Supergirl",
    gender: "female",
    mainColor: "blue",
    powers: { superspeed: false, canFly: false, usesMagic: false },
    home: "Midvale Orphanage",
    height: { meters: 1.47, inches: 58 },
  },
  {
    name: "Green_Lantern",
    gender: "male",
    mainColor: "green",
    powers: { superspeed: false, canFly: true, usesMagic: false },
    home: "Oa",
    height: { meters: 1.88, inches: 74 },
  },
  {
    name: "Cyborg",
    gender: "male",
    mainColor: "grey",
    powers: { superspeed: false, canFly: false, usesMagic: false },
    home: "Detroit",
    height: { meters: 1.73, inches: 68 },
  },
  {
    name: "Shazaam",
    gender: "male",
    mainColor: "red",
    powers: { superspeed: false, canFly: true, usesMagic: true },
    home: "Fewcett City",
    height: { meters: 1.93, inches: 76 },
  },
  {
    name: "Batgirl",
    gender: "female",
    mainColor: "black",
    powers: { superspeed: false, canFly: false, usesMagic: false },
    home: "Gotham",
    height: { meters: 1.93, inches: 76 },
  },
  {
    name: "Firestorm",
    gender: "male",
    mainColor: "red",
    powers: { superspeed: false, canFly: true, usesMagic: false },
    home: "New York City",
    height: { meters: 1.88, inches: 74 },
  },
  {
    name: "Zatanna",
    gender: "female",
    mainColor: "black",
    powers: { superspeed: false, canFly: false, usesMagic: true },
    home: "New York City",
    height: { meters: 1.7, inches: 67 },
  },
  {
    name: "Constantine",
    gender: "male",
    mainColor: "grey",
    powers: { superspeed: false, canFly: false, usesMagic: true },
    home: "Northumberland",
    height: { meters: 1.8, inches: 71 },
  },
];

// ACCESSING DATA IN AN ARRAY OF OBJECTS PRACTICE
addSectionHeader("ACCESSING DATA IN AN ARRAY OF OBJECTS PRACTICE");
//
// 1. Use the 'heroes' variable to put Batman's name in the below function
// The answer will render the word 'Batman'
addInstructions("1. Use the 'heroes' variable to put Batman's name in the below function");
addData(heroes[0].name);

// 2. Use the 'heroes' variable to put Aquaman's main color in the below function
// The answer will render the word 'orange'
addInstructions("2. Use the 'heroes' variable to put Aquaman's main color in the below function");
addData(heroes[3].mainColor);

// 3. Use the 'heroes' variable to put Aquaman's home in the below function
// The answer will render the word 'Atlantis'
addInstructions("3. Use the 'heroes' variable to put Aquaman's home in the below function");
addData(heroes[3].home);

// 4. Use the 'heroes' variable to put if superman can fly in the below function
// The answer will render the word 'true'
addInstructions("4. Use the 'heroes' variable to put if superman can fly in the below function");
addData(heroes[1].powers.canFly);

// 5. Use the 'heroes' variable to put if superman uses magic in the below function
// The answer will render the number '1.91'
addInstructions("5. Use the 'heroes' variable to put superman's height in meters");
addData(heroes[1].height.meters);

// FILTER METHOD PRACTICE
addSectionHeader("FILTER METHOD PRACTICE");
//
// 1. Show all heroes
// The answer will render Batman, Superman, Flash, Aquaman, Green_Arrow, Hawkman, Robin, Supergirl, Green_Lantern, Cyborg, Shazaam, Batgirl, Firestorm, Zatanna, Constantine
addInstructions("1. Show all heroes");
addHero(heroes);

// 2. Show only Batman
// The answer will render Batman
addInstructions("2. Show only Batman");
addHero(heroes.filter((hero) => hero.name === "Batman"));

// 3. Show heroes who are female
// The answer will render Supergirl, Batgirl, Zatanna
addInstructions("3. Show heroes who are female");
addHero(heroes.filter((hero) => hero.gender === "female"));

// 4. Show heroes whose main color is black
// The answer will render Batman, Batgirl, Zatanna
addInstructions("4. Show heroes whose main color is black");
addHero(heroes.filter((hero) => hero.mainColor === "black"));

// 5. Show heroes who can fly
// The answer will render Superman, Hawkman, Green_Lantern, Shazaam, Firestorm
addInstructions("5. Show heroes who can fly");
addHero(heroes.filter((hero) => hero.powers.canFly === true));

// 6. Show heroes who are female and main color is black
// The answer will render Batgirl, Zatanna
addInstructions("6. Show heroes who are female and main color is black");
addHero(heroes.filter((hero) => hero.gender === "female" && hero.mainColor === "black"));

// 7. Show heroes who can fly and main color is NOT red
// The answer will render Superman, Hawkman, Green_Lantern
addInstructions("7. Show heroes who can fly and main color is NOT red");
addHero(heroes.filter((hero) => hero.powers.canFly === true && hero.mainColor != "red"));

// 8. Show heroes shorter than 1.80 meters
// The answer will render Robin, Supergirl, Cyborg, Zatanna
addInstructions("8. Show heroes shorter than 1.80 meters");
addHero(heroes.filter((hero) => hero.height.meters < 1.8));

// 9. Show heroes taller than 1.90 meters
// The answer will render Superman, Aquaman, Shazaam, Batgirl
addInstructions("9. Show heroes taller than 1.90 meters");
addHero(heroes.filter((hero) => hero.height.meters > 1.9));

// 10. Show heroes taller than 1.85 meters & shorter than 1.9 meters
// The answer will render Batman, Green_Lantern, Firestorm
addInstructions("10. Show heroes taller than 1.85 meters & shorter than 1.9 meters");
addHero(heroes.filter((hero) => hero.height.meters > 1.85 && hero.height.meters < 1.9));
