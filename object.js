// module 13
var student = {id:121, phone: 1725, name:'Mostafa'};
var student2 = {id:123, phone:01726, name:'Sajid'};

var phoneProNum = 'phone';              //declering variable
var phoneNo = student[phoneProNum];
var jobExperience = 'experience';       //declering variable

// update phone number
student2.phone = 53989;                 // style 01
student2["phone"] = 52842;              // style 02
student2[phoneProNum] = 313131;         //style 03 using extra vriable

//Adding new element to the object
student2.roll = 25125;                      //style 01 adding new property to the object
student2["lastName"] = "Ahmod";
student2[jobExperience] = "Ten years";

//outputing the value
console.log(phoneNo);
console.log(student2);

