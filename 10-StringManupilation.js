// String handbook

 

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),

// split(), trim(), toUpperCase(), toLowerCase(), etc.

 

// Run each function to see the output, play and learn by doing.

 

// Length - to count the length of the string(even count space in string)

//Example - ravi is

//output - 7

function getLength(str) {

    console.log("Original String:", str);

    console.log("Length:", str.length);//doesnt take any parameter

  }

  getLength("Hello World");// output length - 11

 

  // indexOf-it gives you the starting index of the target word(starting index from 0 ) inside the original string

  //but in case of multople target present in the original string then it will just give output for the first target string occurence

  function findIndexOf(str, target) {

    console.log("Original String:", str);

    console.log("Index:", str.indexOf(target));//it just take 1 parameter

  }

  findIndexOf("Hello World", "World");// output -> 6

 

  // lastIndexOf-in case of multople target present in the original string then it will just give output for the last target string occurence

  function findLastIndexOf(str, target) {

    console.log("Original String:", str);

    console.log("Index:", str.lastIndexOf(target));//it just take 1 parameter

  }

  findLastIndexOf("Hello World World", "World");// output - 12

 

  // slice- it slice the main sting into parts and provide the output string between start index & end index

  //last index is not included in output

  function getSlice(str, start, end) {

    console.log("Original String:", str);

    console.log("After slice:", str.slice(start, end));//it just take 2 parameter

  }

  getSlice("Hello World", 0, 5);//output- Hello

 

  // substring- similar to slice , just it take 3 paramenter and the last one denotes the length form 0 index till which we want the output string

  // it will exclude last index

  function getSubstring(str, start, length) {

    console.log("Original String:", str);

    console.log("After substring:", str.substring(start, length));//it just take 2 parameter

  }

  getSubstring("Hello World", 1,7 );// output -ello W

 

  // replace - To replace a particular substring from original one with the required replacemnet substing.

  //if target is not present then the output will be same as original string

  function replaceString(str, target, replacement) {

    console.log("Original String:", str);

    console.log("After replace:", str.replace(target, replacement));//it just take 2 parameter

  }

  replaceString("Hello World", "World", "JavaScript");//output - Hello JavaScript

 

  // split- mainly used in converting string into a array for string ,

  //it divide the string using a seperator , basicaalythe moment it see a seperator in original stinng is divide the string

  // it exclude the seperator in output

  function splitString(str, separator) {

    console.log("Original String:", str);

    console.log("After split:", str.split(separator));

  }

  splitString("Hello World", " ");// output- ["Hello", "World"]

 

  // trim-it cut dount the all spaces in the beggening and in the end of orginal string

  //no effect on space in between the words

  function trimString(str) {

    console.log("Original String:", str);

    console.log("After trim:", str.trim());

  }

  trimString(" Hello World ");// output-"Hello World"

 

  // toUpperCase- convert all character in the uppercase no effect on space anywhere

  function toUpper(str) {

    console.log("Original String:", str);

    console.log("After toUpperCase:", str.toUpperCase());

  }

  toUpper("Hello World");//output - "HELLO WORLD"

 

  // toLowerCase- convert all character in the lowercase

  function toLower(str) {

    console.log("Original String:", str);

    console.log("After toLowerCase:", str.toLowerCase());

  }

  toLower("Hello World");//output - "hello world"