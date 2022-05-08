function isPalindrome(word) {
  // Write your algorithm here
  for (let i = 0; i < word.length / 2; i++) {
    const x = word.length - 1 - i
    if(word[x] !== word[i]) {
      return false
    }
  return true
}
}

/* 
  Add your pseudocode here
  iterated form beginning to middle
    check each chracter to corresponding letter from the end
      if any letters don't match, return false
  
  return true
*/

/*
  Add written explanation of your solution here
  make function that returns true if it is a plaindrome. meaning if the word is spelled
  the same backwards, return true
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
