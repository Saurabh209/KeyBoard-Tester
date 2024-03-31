const Esc = document.querySelector(".Esc");
const F1 = document.querySelector(".F1");
const F2 = document.querySelector(".F2");
const F3 = document.querySelector(".F3");
const F4 = document.querySelector(".F4");
const F5 = document.querySelector(".F5");
const F6 = document.querySelector(".F6");
const F7 = document.querySelector(".F7");
const F8 = document.querySelector(".F8");
const F9 = document.querySelector(".F9");
const F10 = document.querySelector(".F10");
const F11 = document.querySelector(".F11");
const F12 = document.querySelector(".F12");
const prtsrc = document.querySelector(".prtsrc");
const Delete = document.querySelector(".Delete");
const home = document.querySelector(".home");
const end = document.querySelector(".end");
const pgup = document.querySelector(".pgup");
const pgdn = document.querySelector(".pgdn");

const tilde = document.querySelector(".tilde");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const backspace = document.querySelector(".backspace");
const numlock = document.querySelector(".numlock");
const forwardSlash = document.querySelector(".forwardSlash");
const star = document.querySelector(".star");
const npMinus = document.querySelector(".npMinus");

const tab = document.querySelector(".tab");
const Q = document.querySelector(".Q");
const W = document.querySelector(".W");
const E = document.querySelector(".E");
const R = document.querySelector(".R");
const T = document.querySelector(".T");
const Y = document.querySelector(".Y");
const U = document.querySelector(".U");
const I = document.querySelector(".I");
const O = document.querySelector(".O");
const P = document.querySelector(".P");
const sqrBracketOpen = document.querySelector(".sqrBracketOpen");
const sqrBracketClose = document.querySelector(".sqrBracketClose");
const backwardSlash = document.querySelector(".backwardSlash");
const npSeven = document.querySelector(".npSeven");
const npEight = document.querySelector(".npEight");
const npNine = document.querySelector(".npNine");
const npPlus = document.querySelector(".npPlus");

const capsLock = document.querySelector("capsLock");
const A = document.querySelector(".A");
const S = document.querySelector(".S");
const D = document.querySelector(".D");
const F = document.querySelector(".F");
const G = document.querySelector(".G");
const H = document.querySelector(".H");
const J = document.querySelector(".J");
const K = document.querySelector(".K");
const L = document.querySelector(".L");
const colon = document.querySelector(".colon");
const quotation = document.querySelector(".quotation");
const enter = document.querySelector(".enter");
const npFour = document.querySelector(".npFour");
const npFive = document.querySelector(".npFive");
const npSix = document.querySelector(".npSix");

const Lshift = document.querySelector(".Lshift");
const Z = document.querySelector(".Z");
const X = document.querySelector(".X");
const C = document.querySelector(".C");
const V = document.querySelector(".V");
const B = document.querySelector(".B");
const N = document.querySelector(".N");
const M = document.querySelector(".M");
const lessThan = document.querySelector(".lessThan");
const greaterThan = document.querySelector(".graterThan");
const questionMark = document.querySelector(".questionMark");
const Rshift = document.querySelector(".Rshift");
const npOne = document.querySelector(".npOne");
const npTwo = document.querySelector(".npTwo");
const npThree = document.querySelector(".npThree");
const npEnter = document.querySelector(".npEnter");

const ctrl = document.querySelector("Lctrl");
const fn = document.querySelector(".fn");
const win = document.querySelector(".win");
const Lalt = document.querySelector(".Lalt");
const spacebar = document.querySelector("spacebar");
const Ralt = document.querySelector(".Ralt");
const Rctrl = document.querySelector(".Rctrl");
const leftArrow = document.querySelector(".leftArrow");
const upperArrow = document.querySelector(".upperArrow");
const lowerArrow = document.querySelector(".lowerArrow");
const rightArrow = document.querySelector(".rightArrow");
const npZero = document.querySelector(".npZero");
const npDot = document.querySelector(".npDot");

function onclick(e) {
  if (e.which == 27) {
    Esc.classList.add("afterclick");
  } else if (e.which == 112) {
    F1.classList.add("afterclick");
  } else if (e.which == 113) {
    F2.classList.add("afterclick");
  }
}

window.addEventListener("keydown", onclick);
