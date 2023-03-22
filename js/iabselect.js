function iabselect() {
    //Datenausgabe in Formular
    var iabsel = document.getElementById("iabjanein").checked;

    if (iabsel == true)
         {
         document.getElementById("iablabel").innerHTML = "Ja";
         document.getElementById("iabhoehetext").style.visibility = "visible";
         document.getElementById("iabhoehesliderbox").style.visibility = "visible";
         }
    else
         {
         document.getElementById("iablabel").innerHTML = "Nein";
         document.getElementById("iabhoehetext").style.visibility = "hidden";
         document.getElementById("iabhoehesliderbox").style.visibility = "hidden";
         }
darlrechner();

}