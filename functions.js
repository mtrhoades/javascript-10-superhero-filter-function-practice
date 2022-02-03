// This file is to set up the assignment
// You will write your code inside code.js

// SELECTORS
const root = document.querySelector("#root");

// FUNCTIONS
function addSectionHeader(sectionName) {
  let h1 = document.createElement("h1");
  h1.textContent = sectionName;
  root.append(h1);
}

function addInstructions(instruction, answer = "") {
  let div = document.createElement("div");
  div.innerHTML = `<h2>${instruction}</h2><div>${answer}</div>`;
  root.append(div);
}

function addData(data) {
  let div = document.createElement("div");
  div.textContent = data;
  root.append(div);
}

function addHero(array) {
  let container = document.createElement("div");
  container.className = "container";
  for (let i = 0; i < array.length; i++) {
    let hero = document.createElement("div");
    hero.className = 'heroImg'
    hero.innerHTML = `
          <img id='${array[i].name}'/>
          <div id='heroName'>${array[i].name}</div>`;
    container.append(hero);
  }
  root.append(container);
}


