function verkselect() {
    //Datenausgabe in Formular
    let verksel = document.getElementById("verkjanein").checked;
    if (verksel == true)
         {
         document.getElementById("verklabel").innerHTML = "Ja";
         document.getElementById("verkaufjahresliderbox").style.visibility = "visible";		 
		 document.getElementById("verkaufsteuersliderbox").style.display = "flex";
		 document.getElementById("verkaufeksliderbox").style.display = "flex";
		 }
    else
         {
         document.getElementById("verklabel").innerHTML = "Nein";
         document.getElementById("verkaufjahresliderbox").style.visibility = "hidden";		 
		 document.getElementById("verkaufsteuersliderbox").style.display = "none";
		 document.getElementById("verkaufeksliderbox").style.display = "none";
		 }
objektdaten();

}