function funkceUkol4() {
    let cislo = document.getElementById("cisloInput").value;
    cislo = Number(cislo);

    for(i=1; i < cislo + 1; i++) {
        document.getElementById("idP3").innerHTML += i + " ";
    }
}