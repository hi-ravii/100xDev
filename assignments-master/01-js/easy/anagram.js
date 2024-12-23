/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// function isAnagram(str1, str2) {
//   let l1 =str1.toLowerCase();
//   let l2 =str2.toLowerCase();
//   if(l1!=l2)return false;
//   const s1 = l1.split("").sort().join("");
//   const s2 = l2.split("").sort().join("");
//   // for(let i=0;i<s1.length;i++){
//   //   if(s1[i]!=s2[i])return false;
//   // }
//   if(s1==s1)return true;
// }

function isAnagram(str1, str2) {
  let lowerCaseString1 = str1.toLowerCase();
  let lowerCaseString2 = str2.toLowerCase();
  if (lowerCaseString1.length !== lowerCaseString2.length) {
    return false;
  }

  const sortedStr1 = lowerCaseString1.split("").sort().join("");
  const sortedStr2 = lowerCaseString2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
}



module.exports = isAnagram;
