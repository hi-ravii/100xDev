// Global Class, can be called directly, present to be used outside the box.
// Create new object and then do a bunch of things.
// Create a new Date Object

function dateMethods() {

    const currentDate = new Date();//date is a prebild class whoes properties we store in a variable , 
    // which can be later used to call various pre build functionality of dtae class

    console.log("Current Date:", currentDate);//output - Current Date: 2024-09-24T08:45:21.258Z

 

    // Getting various components of the date

    console.log("Date:", currentDate.getDate());//output - Date: 24

    console.log("Month:", currentDate.getMonth() + 1);// Months are zero-indexed, so adding 1

    //output - Month: 9

    console.log("Year:", currentDate.getFullYear());//output - Year: 2024

    console.log("Hours:", currentDate.getHours());//output - Hours: 14

    console.log("Minutes:", currentDate.getMinutes());//output - Minutes: 15

    console.log("Seconds:", currentDate.getSeconds());//output - Seconds: 21

 

    // Setting components of the date

    currentDate.setFullYear(2022);//Basically seting year as 2022 instead of 2024

    console.log("After setFullYear:", currentDate);//output - After setFullYear: 2022-09-24T08:45:21.258Z

 

    currentDate.setMonth(5); // Setting month to June (zero-indexed)

    console.log("After setMonth:", currentDate);//output - After setMonth: 2022-06-24T08:45:21.258Z

 

    // Getting and setting time in milliseconds since 1970

    console.log("Time in milliseconds since 1970:", currentDate.getTime());//output - Time in milliseconds since 1970: 1656060321258

 

    const newDate = new Date(2023, 8, 15);// Creating a new date

    console.log("New Date:", newDate);//output - New Date: 2023-09-14T18:30:00.000Z

  }

 

  // Example Usage for Date Methods

  dateMethods();