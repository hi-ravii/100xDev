function mathMethods(value) {

    console.log("Original Value:", value);

 

    let rounded = Math.round(value);//input - 4.56   output - 5

    console.log("After round():", rounded);

 

    let ceiling = Math.ceil(value);//input -4.56   output - 5

    console.log("After ceil():", ceiling);

 

    let flooring = Math.floor(value);//input - 4.56  output - 4

    console.log("After floor():", flooring);

 

    let randomValue = Math.random();//give a random no. as output

    console.log("After random():", randomValue);

 

    let maxValue = Math.max(5, 10, 15);//output - 15

    console.log("After max():", maxValue);

 

    let minValue = Math.min(5, 10, 15);//output - 5

    console.log("After min():", minValue);

 

    let powerOfTwo = Math.pow(value, 2);//input - 9  output - 81

    console.log("After pow():", powerOfTwo);

 

    let squareRoot = Math.sqrt(value);//input - 9   output - 3

    console.log("After sqrt():", squareRoot);

  }

 

  // Example Usage for Math Methods

  mathMethods(4.56);

  mathMethods(9);

  mathMethods(25);