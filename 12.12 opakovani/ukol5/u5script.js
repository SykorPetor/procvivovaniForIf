function funkceUkol5() {
    let userInput = parseInt(document.getElementById("cisloInput2").value);

    document.getElementById("idP4").innerHTML = "";

    if (userInput % 2 === 0) {
        for (var i = 2; i <= userInput; i += 2) {
            document.getElementById("idP4").innerHTML += i + " ";
        }
    } else {
        for (var j = 3; j <= userInput; j += 3) {
            document.getElementById("idP4").innerHTML += j + " ";
        }
    }
}