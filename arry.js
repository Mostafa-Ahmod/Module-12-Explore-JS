// module 13

var friendsAge=[15,16,28,23];  //making arry
var sonaliAge = friendsAge[3]; //giving name from the arry
friendsAge[1] = 20;             // recorecting the arry's value
var position = friendsAge.indexOf(28);
friendsAge.push(35);   // adding arry item to the arry
friendsAge.push(33);
console.log(friendsAge); // using length function to konw arry length
console.log(friendsAge.length);
friendsAge.pop();       //removing arry's item
console.log(friendsAge);
friendsAge.unshift(13);  //add to the begining
console.log(friendsAge);
friendsAge.shift();     // remove fromt the beganing
console.log(friendsAge);
var friendName = ["Mostafa","Himal","Rafi","Jubayer"
];
  console.log(friendName);   
  friendName.unshift('Sajon bahi');
  console.log(friendName);
  friendName.shift('Sajon bahi');
  console.log(friendName);
  friendName.shift();
  console.log(friendName);

  var teaLine = [
       "Mostafa","Sajad","Amina","Taslima","Burhan","Tahar"
  ];
  var part = teaLine.slice(2);
  console.log(part);

  var part2 = teaLine.slice(2,5);  //make it slice from 2 no.position to 4th 
  console.log(part2);
  console.log(teaLine);