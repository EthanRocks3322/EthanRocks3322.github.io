// Initial "Hello, world!" test function for the Bigger button
function makeBigger() {
  alert("Hello, world!");

  // Make the text in the text area bigger (24pt)
  const textArea = document.getElementById("textInput");
  textArea.style.fontSize = "24pt";
}

// Handle FancyShmancy / BoringBetty styles
function fancify() {
  const textArea = document.getElementById("textInput");
  const fancyRadio = document.getElementById("fancy");
  const boringRadio = document.getElementById("boring");

  if (fancyRadio.checked) {
    // FancyShmancy styles: bold, blue, underlined
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else if (boringRadio.checked) {
    // BoringBetty styles: normal weight, black, no underline
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}

// Moo button: uppercase + "-Moo" at end of each sentence
function moo() {
  const textArea = document.getElementById("textInput");
  let text = textArea.value;

  // Uppercase everything
  text = text.toUpperCase();

  // Add "-MOO" to the last word of each sentence (ending in ".")
  const endedWithPeriod = text.trim().endsWith(".");
  let sentences = text.split(".");

  for (let i = 0; i < sentences.length; i++) {
    let s = sentences[i].trim();
    if (s.length > 0) {
      let words = s.split(" ");
      words[words.length - 1] = words[words.length - 1] + "-MOO";
      sentences[i] = words.join(" ");
    }
  }

  // Re-join the sentences with ". " in between
  text = sentences.join(". ");

  // If original text ended with a period, keep a period at the end
  if (endedWithPeriod && !text.trim().endsWith(".")) {
    text = text.trim() + ".";
  }

  textArea.value = text;
}
