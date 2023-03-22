function hidetilg() {
    document.getElementById("ausgabe1top").style.display = "none";
    document.getElementById("ausgabebereich1").style.display = "none";
    document.getElementById("ausgabe2top").style.display = "none";
    document.getElementById("ausgabebereich2").style.display = "none";
    document.getElementById("ausgabe3top").style.display = "none";
    document.getElementById("ausgabebereich3").style.display = "none";
    document.getElementById("expose").style.display = "none";
    var hidesel = document.getElementById('tilgaussetzselect');
    var hidevalue = hidesel[hidesel.selectedIndex].value;
    if (hidevalue == 1)
    {
    document.getElementById("hide1").style.visibility = "hidden";
    document.getElementById("hide2").style.visibility = "hidden";
    document.getElementById("tilgungssatz").style.visibility = "hidden";
    }
    if (hidevalue == 0)
    {
    document.getElementById("hide1").style.visibility = "visible";
    document.getElementById("tilgungssatz").style.visibility = "visible";
    document.getElementById("hide2").style.visibility = "visible";
    }
}