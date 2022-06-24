function wordReversion(word) {
  rev_word = '';

  for(let i = word.length -1; i >= 0; i--) {
    rev_word += word[i];
  }

  return rev_word;
}