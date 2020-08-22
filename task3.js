function findLongestWord (string = "") {
    let words = string.split(" ");
    let LongestWord = words[0];
    for (const word of words) {
        if (word.length > LongestWord.length) {
            LongestWord = word;
        }
    }
    return LongestWord
  }
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
  console.log(findLongestWord('Google do a roll'));
  console.log(findLongestWord('May the force be with you'));
  