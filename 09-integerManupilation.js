function explainParseInt(value) {

    console.log("Original Value:", value);

    let result = parseInt(value);

    console.log("After parseInt:", result);

  }

  //parseInt- convert anything into no. with some limitation

  // Example Usage for parseInt

  explainParseInt("42");//output - 42

  explainParseInt("42px");//output - 42

  explainParseInt("px42");//output - Invalid (any charter before no. Case )

  explainParseInt("3.14");//output - 3

 

  function explainParseFloat(value) {

    console.log("Original Value:", value);

    let result = parseFloat(value);

    console.log("After parseFloat:", result);

  }

  //parseFloat - same as pareseInteger just that it can have decimal valuse as well

  // Example Usage for parseFloat

  explainParseFloat("3.14");//output - 3.14

  explainParseFloat("42");//output - 42

  explainParseFloat("42px");//output - 42