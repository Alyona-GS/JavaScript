function isCapitalized(word) {
  return /[A-ZА-ЯЁ]/.test(word.charAt(0))
}

const wordObject = function (word) {
  return word = {
    word: word,
    length: word.length,
    isCapitalized: isCapitalized(word)
  }
};

function textToWords (text) {
  let words = text.replace(/[.,?!()"]/g, " ")
                  .trim()
                  .split(/[\s]+/);

  return words.map(wordObject)
};