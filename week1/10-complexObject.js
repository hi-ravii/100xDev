// BASICALLY WE ARE DECLARING AN ARRAY OF OBJECT OF STRING VALUE FOR 2 DATA ,

//THAT IS SORING AN OBJECT WITH 2 VALIABLE INTO EACH INDEX OF ARRAY

const data = [{

    username : "ravi",

    gender : "male"

},

{

    username : "kavi",

    gender : "female"

},

{

    username : "navi",

    gender : "male"

}

]

for( let i =0;i<data.length;i++){

    if(data[i]["gender"]=="male"){

        console.log(data[i]["username"])

    }

}