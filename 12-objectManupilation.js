// Object Methods Explanation

function objectMethods(obj) {

    console.log("Original Object:", obj);//output - Original Object: { key1: 'value1', key2: 'value2', key3: 'value3' }

 

    let keys = Object.keys(obj);

    console.log("After Object.keys():", keys);//output - After Object.keys(): [ 'key1', 'key2', 'key3' ]

 

    let values = Object.values(obj);

    console.log("After Object.values():", values);//output - After Object.values(): [ 'value1', 'value2', 'value3' ]

 

    let entries = Object.entries(obj);

    console.log("After Object.entries():", entries);//output - After Object.entries(): [ [ 'key1', 'value1' ], [ 'key2', 'value2' ], [ 'key3', 'value3' ] ]

 

    let hasProp = obj.hasOwnProperty("property");

    console.log("After hasOwnProperty():", hasProp);//output - After hasOwnProperty(): false

 

    let newObj = Object.assign({}, obj, { newProperty: "newValue" });

    console.log("After Object.assign():", newObj);

    //output 0 After Object.assign(): {

        //key1: 'value1',

        //key2: 'value2',

        //key3: 'value3',

        //newProperty: 'newValue'

    //}

 

  

  }

 

  // Example Usage for Object Methods

  const sampleObject = {

    key1: "value1",

    key2: "value2",

    key3: "value3",

  };

 

  objectMethods(sampleObject);

 

 

  //FUNCTION - these are also an object but with some functionality

  //function.length = to find the length of the function , its length is consider to be the total argument passed in it.