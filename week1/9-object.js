// OLD METHOD TO USE MORE THAN 1 ARRAY TO STORE VALUE OF 1 IDENTITY

 

// const username =["ravi" , "kavi" , "navi"];//to put the string in array we have to use " "

// const gender =["male", "female" , "male"];

// let length = gender.length;

 

// for(let i =0;i<length;i++){

//     if(gender[i]=="male"){

//         console.log(username[i]);

//     }

// }

//NEW METHOD CAN BE USING OBJECT - IT HELPS TO BIND TO DATA VALUE INTO SINGLE VARIABLE

 

//Something inside a curly braces {} & having a format of  xyz : xyz will be considered as object

//ledt side we have key and right side we have value , so if we wana use string as value the double inverted commons should be used

// otherwise it will considered as variable and that then needed to be declared.

const user1 = {

    username : "ravi",

    gender : "male"

}

Object.freeze(user1); // this freeze func ensures that the value of object will remain same to what declared inside object & nothing can change it outside it

console.log(user1["username"])

//or we can use user1.username -> this will also give same output
