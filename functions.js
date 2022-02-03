// SELECTORS
const root = document.querySelector("#root");

// FUNCTIONS
function addSectionHeader(sectionName) {
  let div = document.createElement("div");
  div.innerHTML = `<h1>${sectionName}</h1>`;
  root.append(div);
}

function addInstructions(instruction, answer = "") {
  let div = document.createElement("div");
  div.innerHTML = `<h2>${instruction}</h2><div>${answer}</div>`;
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
