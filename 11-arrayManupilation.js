// Array handbook

 

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),

// concat(), forEach(), map(), filter(), reduce(), find(), sort()

 

// Run each function to see the output, play and learn by doing.

 

// push()- to add anything in the array from end

function pushExample(arr, element) {

    console.log("Original Array:", arr);

 

    arr.push(element);

    console.log("After push:", arr);

  }

  pushExample([1, 2, 3], 4);

 

  // pop()- to remove anything from array from the end

  function popExample(arr) {

    console.log("Original Array:", arr);

 

    arr.pop();

    console.log("After pop:", arr);

  }

  popExample([1, 2, 3]);

 

  // shift()- to remove anything from array from start

  function shiftExample(arr) {

    console.log("Original Array:", arr);

 

    arr.shift();

    console.log("After shift:", arr);

  }

  shiftExample([1, 2, 3]);

 

  // unshift() - to add anything from array from the start

  function unshiftExample(arr, element) {

    console.log("Original Array:", arr);

 

    arr.unshift(element);

    console.log("After unshift:", arr);

  }

  unshiftExample([1, 2, 3], 0);

 

  // concat()- to combine 2 array

  // its differnt from push as the second argument in concat is an array , but in push it is a no.

  function concatExample(arr1, arr2) {

    console.log("Original Arrays:", arr1, arr2);

 

    let arr3 = arr1.concat(arr2);

    console.log("After concat:", arr3);

  }

  concatExample([1, 2, 3], [4, 5, 6]);

 

  // forEach()- used for itrating over an array

  //but it uses function as an argument and that function do the work for taking each element and print it

  //we can manulpate function according to our need , we can just use one argument inplace of two

  function forEachExample(arr) {

    console.log("Original Array:", arr);

 

    arr.forEach(function(item, index) {

      console.log(item, index);// (1,0) (2,1) (3,2)

    });

  }

  forEachExample([1, 2, 3]);

 

  // map() - this function just take a key in input and after doing some calculation returns an output

  //in the example it takes array input and return the value to 2*elemnet of array

  //arr.map -> this just denote the puting array input inside a map

  function mapExample(arr) {

    console.log("Original Array:", arr);

 

    let newArr = arr.map(function(item) {

      return item * 2;

    });

    console.log("After map:", newArr);//[2,4,6]

  }

  mapExample([1, 2, 3]);

 

  // filter()- used to filter out the elemet based on the condition provided

  function filterExample(arr) {

    console.log("Original Array:", arr);

 

    let newArr = arr.filter(function(item) {

      return item > 3;

    });

    console.log("After filter:", newArr);//[4,5]

  }

  filterExample([1, 2, 3, 4, 5]);

 

  // find()- basically it is used in searching some element and unlike the filter element it will only return one element

  //in case of duplicates it will return the first occurance

  function findExample(arr) {

    console.log("Original Array:", arr);

 

    let found = arr.find(function(item) {

      return item > 3;

    });

    console.log("After find:", found);// output - 4

  }

  findExample([1, 2, 3, 4, 5]);

 

  // sort()- used to sort the elements within the array

  function sortExample(arr) {

    console.log("Original Array:", arr);

 

    arr.sort(function(a, b) {

      return a - b;

    });

    console.log("After sort:", arr);// output -[1,2,3,4,5]

  }

  sortExample([5, 2, 3, 4, 1]);