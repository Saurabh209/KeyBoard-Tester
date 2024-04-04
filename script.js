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

const capslock = document.querySelector(".capslock");
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
const greaterThan = document.querySelector(".greaterThan");
const questionMark = document.querySelector(".questionMark");
const Rshift = document.querySelector(".Rshift");
const npOne = document.querySelector(".npOne");
const npTwo = document.querySelector(".npTwo");
const npThree = document.querySelector(".npThree");
const npEnter = document.querySelector(".npEnter");

const Lctrl = document.querySelector(".Lctrl");
const fn = document.querySelector(".fn");
const win = document.querySelector(".win");
const Lalt = document.querySelector(".Lalt");
const spacebar = document.querySelector(".spacebar");
const Ralt = document.querySelector(".Ralt");
const Rctrl = document.querySelector(".Rctrl");
const leftArrow = document.querySelector(".leftArrow");
const upperArrow = document.querySelector(".upperArrow");
const lowerArrow = document.querySelector(".lowerArrow");
const rightArrow = document.querySelector(".rightArrow");
const npZero = document.querySelector(".npZero");
const npDot = document.querySelector(".npDot");

const history = document.querySelector(".display");


// -------------------------------------------------------------------//


let counter = 0;

function limiter(){
  if(counter == 20){
    history.firstElementChild.remove();
    counter=counter-1;
  }

}





function onclick(e) {
  if (e.which == 27) {
    Esc.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();

  } else if (e.which == 112) {
    e.preventDefault();
    F1.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  
  } else if (e.which == 113) {
    e.preventDefault();
    F2.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
    
  } else if (e.which == 114) {
    e.preventDefault();
    F3.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
    
  } else if (e.which == 115) {
    e.preventDefault();
    F4.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  
  } else if (e.which == 116) {
    e.preventDefault();
    F5.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
    
  } else if (e.which == 117) {
    e.preventDefault();
    F6.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
    
  } else if (e.which == 118) {
    e.preventDefault();
    F7.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
    
  } else if (e.which == 119) {
    e.preventDefault();
    F8.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
    
  } else if (e.which == 120) {
    e.preventDefault();
    F9.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
    
  } else if (e.which == 121) {
    e.preventDefault();
    F10.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
    
  } else if (e.which == 122) {
    e.preventDefault();
    F11.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
    
  } else if (e.which == 123) {
    e.preventDefault();
    F12.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
    
  } else if (e.which == 45) {
    e.preventDefault();
    prtsrc.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 46) {
    Delete.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 36) {
    home.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 35) {
    end.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 33) {
    pgup.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 34) {
    pgdn.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 192) {
    tilde.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 49) {
    one.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 50) {
    two.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 51) {
    three.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 52) {
    four.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 53) {
    five.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 54) {
    six.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 55) {
    seven.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 56) {
    eight.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 57) {
    nine.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 48) {
    zero.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 189) {
    minus.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 187) {
    plus.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 8) {
    backspace.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 144) {
    numlock.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 111) {
    forwardSlash.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 106) {
    star.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 109) {
    npMinus.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 9) {
    e.preventDefault();
    tab.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 81) {
    Q.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 87) {
    W.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 69) {
    E.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 82) {
    R.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 84) {
    T.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 89) {
    Y.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 85) {
    U.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 73) {
    I.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 79) {
    O.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 80) {
    P.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 219) {
    sqrBracketOpen.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 221) {
    sqrBracketClose.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 220) {
    backwardSlash.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 103) {
    npSeven.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 104) {
    npEight.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 105) {
    npNine.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 107) {
    npPlus.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 20) {
    capslock.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 65) {
    A.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 83) {
    S.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 68) {
    D.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 70) {
    F.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 71) {
    G.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 72) {
    H.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 74) {
    J.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 75) {
    K.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 76) {
    L.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 186) {
    colon.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 222) {
    quotation.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 13 && e.location == 0) {
    enter.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 100) {
    npFour.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 101) {
    npFive.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 102) {
    npSix.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 16 && e.location == 1) {
    Lshift.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 90) {
    Z.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 88) {
    X.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 67) {
    C.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 86) {
    V.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 66) {
    B.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 78) {
    N.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 77) {
    M.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 190) {
    greaterThan.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 188) {
    lessThan.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 191) {
    questionMark.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 16 && e.location == 2) {
    Rshift.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 97) {
    npOne.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 98) {
    npTwo.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 99) {
    npThree.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 17 && e.location == 1) {
    Lctrl.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 13 && e.location == 3){
    npEnter.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  }
  else if (e.which == 91) {
    e.preventDefault();
    win.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
    
  } else if (e.which == 18 && e.location == 1) {
    Lalt.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 32) {
    spacebar.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`space`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 18 && e.location == 2) {
    e.preventDefault();
    Ralt.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 17 && e.location == 2) {
    Rctrl.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 38) {
    upperArrow.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`Up`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 40) {
    lowerArrow.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`Down`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 37) {
    leftArrow.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`Left`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 39) {
    rightArrow.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`Right`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 96) {
    npZero.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  } else if (e.which == 110) {
    npDot.classList.add("afterclick");
    let data = document.createElement("div");
    data.classList.add("historyElement");
    data.innerText=`${e.key}`;
    history.append(data);
    counter+=1;
    limiter();
  }
}
window.addEventListener("keydown", onclick);
    