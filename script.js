document.getElementById("calculate").addEventListener("click", calculate);

function calculate() {
    let value1 = document.getElementById("firstnumber").value;
    let value2 = document.getElementById("secondnumber").value; 

    let sum = parseInt(value1) + parseInt(value2);

    document.getElementById("firstnumber").value = sum;


}