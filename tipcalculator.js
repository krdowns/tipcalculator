function calculateTip() {
  const billAmount = document.getElementById("billAmount").value;
  const serviceRating = document.getElementById("serviceRating").value;
  const splitTip = document.getElementById("splitTip").value;

  if (billAmount === "" || serviceRating === 0) {
    alert("Please complete form");
    return;
  }

  if (splitTip === "" || splitTip <= 1) {
    splitTip = 1;

    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  let total = (billAmount * serviceRating) / splitTip;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);

  document.getElementById("tipAmount").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

document.getElementById("tipAmount").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function() {
  calculateTip();
};
