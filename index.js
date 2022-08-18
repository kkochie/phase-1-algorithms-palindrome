
// Using built-in methods
// function reverse(word) {
//   return word.split("").reverse().join("");
// }

// function isPalindrome(word) {
//   const reversedWord = reverse(word);

//   return word === reversedWord;
// }

// Using iteration

function isPalindrome(word) {
  // iterate from the beginning to the middle
  for (let i = 0; i < word.length / 2; i++) {
    // check each letter to the correponding letter from the end
    const j = word.length - 1 - i;
    // if any letters don't match, return false
    if (word[i] !== word[j]) return false;
  }

  // return true
  return true;
}

/* 
  Add your pseudocode here:
  Using Built-in methods:
  If word is the same as the word reversed, return true.
  
  Reverse the input string
  If the input is the same as the reversed input
    return true
  else
    return false

  Using iteration:
  
  Iterate from the beginning to the middle. 
  Check each letter against the corresonding letter in reversed input.
    If any of the letters don't match, return false.
*/

/*
  Add written explanation of your solution here
  1. Using built-in functions - 
    Reverse word and save as new variable.
      Break up string into an array. Then reverse the array. Finally, join the array back into a string. Can chain all together.
    Compare original string with reversed string. If equal, then palindrome.
  2. Iterate over the word
    If the first letter of the word is the same as the last letter of the word reversed, and the second letter matches the second to last letter, etc. until middle is reached, return true. If any letters don't match, return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
