// Select button and text area 
const button = document.getElementById("increaseFontBtn");
const textArea = document.getElementById("Text");
const fancyRadio = document.getElementById("fancy");
const boringRadio= document.getElementById("boring");
const mooButton = document.getElementById("mooBtn");

// Function to show alert box
function alertBox() {  
  alert("Hello, world!");
}
// Function to increase font size
function increaseFontSize() {  
  textArea.style.fontSize = "24pt"; // set font size directly
}
// Function to make text area fancy
function makeItFancy() {
  textArea.style.fontWeight = "bold"; // set font weight: bold
  textArea.style.backgroundColor = ""; // set text area bg-color: blue
}
// Function to apply "FancyShmancy" style
function applyFancyStyle() {
  textArea.style.fontWeight = "bold";
  textArea.style.color = "blue";
  textArea.style.textDecoration = "underline";
}

// Function to apply "BoringBetty" style
function applyBoringStyle() {
  textArea.style.fontSize = "14pt";
  textArea.style.fontWeight = "normal";
  textArea.style.color = "black";
  textArea.style.textDecoration = "none";
}

// Function to transform text to upper and append -Moo
function makeTextMoo() {
  let text = textArea.value.toUpperCase(); // Convert text to uppercase

  // Split text into substrings, append -Moon, and rejoin
  let sentences = text.split(".");
  for (let i = 0; i < sentences.length; i++) {
    let words = sentences[i].trim().split(" "); // split into words
    if (words.length > 0 && words[words.length - 1] !== "") {
      words[words.length - 1] += "-Moo";  // Append "-Moo" to word
    }
    sentences[i] = words.join(" ");  // rejoin words
  }
  textArea.value = sentences.join(". "); // Reassemble text
}

// Button event listeners
<!-- button.addEventListener("click", alertBox); // click for alert box, changed for testing -->
button.addEventListener("click", increaseFontSize); // click to enlarge text area font size
mooButton.addEventListener("click", makeTextMoo);   //click to Moo-ify text

// Radio event listeners
fancyRadio.addEventListener("change", applyFancyStyle);
boringRadio.addEventListener("change", applyBoringStyle);
