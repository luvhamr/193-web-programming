/*
 * Modified Starter file 
 * modified-by:   Ian Andersen
 */
(function() {
  "use strict";
  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  function init() {
    // for UI elements on the page.
    console.log("Window loaded!");
    // Event handlers
    document.getElementById("encrypt-it").addEventListener("click", handleEncrypt);
    document.getElementById("reset").addEventListener("click", handleReset);
  }

  // Event handler for encrypt button
  function handleEncrypt() {
    const inputText= document.getElementById("input-text"); // declare input area 
    const resultTextArea = document.getElementById("result"); // declare output area
    let encryptedText = shiftCipher(inputText.value); // encrypt text from input area
    resultTextArea.textContent = encryptedText; // output encrypted text to result text area
    console.log("Text encrypted!");
    //console.log("Encrypted text:", encryptedText); // for output testing
  }

  // Event handler for reset button - clears input area
  function handleReset() {
    const inputTextArea = document.getElementById("input-text");
    inputTextArea.value = ""; // clears input text area
    console.log("Input text reset!");
  }

  // Bit shift-cipher function - called by handleEncrypt
  function shiftCipher(inputText) {
    // Convert the input to lowercase
    let text = inputText.toLowerCase();
    let result = "";
    // Loop through each character of the input text
    for (let i = 0; i < text.length; i++) {
      // If the char isnt btwn 'a' and 'z', do nothing
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
        // If char is 'z' wrap to 'a'
      } else if (text[i] == 'z'){
        result += 'a';
        // Else, shift char by 1
      } else {
        let letter = text.charCodeAt(i); // grab unicode value
        let resultLetter = String.fromCharCode(letter + 1); // get next letter by incr. unicode value
        result += resultLetter;        
      }
    }
    return result; // output encrypted text
  }

})();
