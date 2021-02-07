document.getElementById("calculate").addEventListener("click", calculate);

function calculate() {
    let value1 = document.getElementById("firstnumber").value;
    let value2 = document.getElementById("secondnumber").value;

    let operatorValue = document.getElementById("operator").value;
    let result;

    if (operatorValue == "add") {
        result = parseInt(value1) + parseInt(value2);
    } else if (operatorValue == "sub") {
        result = parseInt(value1) - parseInt(value2);
    } else if (operatorValue == "mul") {
        result = parseInt(value1) * parseInt(value2);
    } else {
        result = parseInt(value1) / parseInt(value2);
    }

    document.getElementById("firstnumber").value = result;
    addTolist(result);

}
function addTolist (result) {
    let ul = document.getElementById("results");
    let element = document.createElement("li");
    element.innerHTML = result;
    ul.appendChild(element);
    ul.scrollTop = ul.scrollHeight;

}