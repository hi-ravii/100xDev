//JavaScript cannot directly transfer objects as JSON because JSON is a textual data format

// while JavaScript objects are in-memory structures.Direct transfer of

//in-memory objects is not possible over networks or storage systems because they only handle

//string or binary formats, not complex data structures.

 

function jsonMethods(jsonString) {

    console.log("Original JSON String:", jsonString);//output - Original JSON String: {"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}

 

    //To transfer data, objects must first be converted into a format that can be sent or stored, typically as a string.

    //That's why JSON.stringify() is used to serialize the object into a JSON string

    //JSON.parse() is used to deserialize the string back into an object.

 

    // Parsing JSON string to JavaScript object

    let parsedObject = JSON.parse(jsonString);

    console.log("After JSON.parse():", parsedObject);// output - After JSON.parse(): { key: 'value', number: 42, nested: { nestedKey: 'nestedValue' } }

 

    // Stringifying JavaScript object to JSON string

    let jsonStringified = JSON.stringify(parsedObject);

    console.log("After JSON.stringify():", jsonStringified);// output - After JSON.stringify(): {"key":"value","number":42,"nested":{"nestedKey":"nestedValue"}}

  }

 

  // Example Usage for JSON Methods

  const sampleJSONString =

    '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

 

  jsonMethods(sampleJSONString);

//   We can do it by sending it as a string.
// To be able to share data back and forth, we have to interchange the data to a string and back to JSON object.
// JS gives you inbuilt methods
// JSON.parse()
// JSON.stringify()
// const stringifiedUser = JSON.stringify(user); -> Converts JSON to string console.log(stringifiedUser) -> '{"name":"Aman","age":24,"gender":"male"}'

// And now to convert the string back to JSON.

// const userObject = JSON.parse(stringifiedUser); -> Converts String to JSON console.log(userObject) -> {name: 'Aman', age: 24, gender: 'male'}