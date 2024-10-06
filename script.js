

function calculation() {

  var weight = document.getElementById("weight").value;
  var hight = document.getElementById("hight").value;

  if(weight.trim() === ""){
    alert("Input is required")
  }
  else if(hight.trim() === ""){
    alert("Input is required")
  }
  else{
    var outputTex = weight / hight;

    document.getElementById("output").textContent = "Your BMI : "+outputTex.toFixed(2);

    document.getElementById("weight").value = ""
    document.getElementById("hight").value = ""
  }

}