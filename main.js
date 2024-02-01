// Task 1
var classArr = ["Vito", "Demetre", "Nini", "Giorgi"];
for (var i = 0; i < classArr.length; i++) {
  console.log(classArr[i]);
}

// Task 2
var personsArrBefore = [
  ["Vito", 1000, "Georgia"],
  ["Demetre", 5, "Georgia"],
  ["Nini", 2, "Georgia"],
  ["Giorgi", 10, "Georgia"],
];

var personsArrAfter = [
  ["Vito", 10000, "Georgia"],
  ["Demetre", 5000, "Georgia"],
  ["Nini", 2000, "Georgia"],
  ["Giorgi", 7000, "Georgia"],
];
function getPersonsAverageMoney(arr) {
  var avg = 0;
  for (var i = 0; i < arr.length; i++) {
    avg = avg + arr[i][1];
  }
  return avg / arr.length;
}

function rateAvg(arr, avgFun) {
  avg = avgFun(arr);
  if (avg > 500) {
    console.log("the average is pretty good! well done");
  } else {
    console.log("the average is pretty bad! :(");
  }
}

rateAvg(personsArrBefore, getPersonsAverageMoney);

rateAvg(personsArrAfter, getPersonsAverageMoney);

// Task 3
var myArr = [15, 53, 22, 198, 10, 28, 16, 70, 33, 951];

var max = 0;

for (var i = 0; i < myArr.length; i++) {
  if (myArr[i] > max) {
    max = myArr[i];
  }
}
console.log(max);
