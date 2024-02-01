var strSum = prompt("შეიყვანეთ ანაბრის თანხა", 1000);

var strPercent = prompt("შეიყვანეთ საპროცენტო განაკვეთი", 10);

var finalAmount = parseInt(strSum);

var finalPercent = parseInt(strPercent);

var income = (finalAmount * finalPercent) / 100;

if (income < 200) {
  alert("არ ღირს! მოგება შეადგენს მხოლოდ " + income + " ლარს");
} else {
  alert("ღირს! მოგება შეადგენს " + income + " ლარს");
}
