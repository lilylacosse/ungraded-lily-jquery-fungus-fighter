$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

let fungusHP = 100;
let myAP = 100;

function onReady() {
  // Make sure you check the index.html file!
  // There are lots of buttons and things ready for you to hook into here!
  // 🧠 Remember
  // - Handle events that ->
  $(".attacks").on("click", ".arcane-sceptre", attackSceptre);
  $(".attacks").on("click", ".entangle", attackEntangle);
  $(".attacks").on("click", ".dragon-blade", attackDragon);
  $(".attacks").on("click", ".star-fire", attackStar);
  // - Updates state which is ->

  // - Rendered to the DOM
  render();
}

function attackSceptre() {
  console.log("attack SCEPTRE");
  myAP -= 12;
  fungusHP -= 14;

  conditionals();
  meter();
  console.log(`AP:${myAP}, HP:${fungusHP}`);

  render();
}

function attackEntangle() {
  console.log("attack ENTANGLE");
  myAP -= 23;
  fungusHP -= 9;
  conditionals();
  meter();
  console.log(`AP:${myAP}, HP:${fungusHP}`);

  render();
}

function attackDragon() {
  console.log("attack DRAGON BLADE");
  myAP -= 38;
  fungusHP -= 47;

  conditionals();
  meter();
  console.log(`AP:${myAP}, HP:${fungusHP}`);

  render();
}

function attackStar() {
  console.log("attack STARFIRE");
  myAP -= 33;
  fungusHP -= 25;

  conditionals();
  meter();
  console.log(`AP:${myAP}, HP:${fungusHP}`);

  render();
}

function render() {
  console.log("In render");
  $(".ap-text.ap-text").html(`<div class="ap-text">${myAP} AP</div>`);
  $(".hp-text.hp-text").html(`<div class="hp-text">${fungusHP} HP</div>`);
  $(".fungus-action").html('<div class="freaky-fungus walk"></div>');
}

function conditionals() {
  if (myAP <= 0) {
    myAP = 0;
    $(".fungus-action").html('<div class="freaky-fungus jump"></div>');
    //$("#disabled").hide();
  }

  if (fungusHP <= 0) {
    fungusHP = 0;
    $(".fungus-action").html('<div class="freaky-fungus dead"></div>');
  }
}

function meter() {
  $("#ap-meter").val(myAP);
  $("#hp-meter").val(fungusHP);
}
