function verkselect() {
    //Datenausgabe in Formular
    let verksel = document.getElementById("verkjanein").checked;
    if (verksel == true)
         {
         document.getElementById("verklabel").innerHTML = "Ja";
		 document.getElementById("verkaufjahresliderbox").style.visibility = "visible";		 
		 document.getElementById("verkaufsteuersliderbox").style.display = "flex";
		 document.getElementById("verkaufeksliderbox").style.display = "flex";
		 document.getElementById("verkaufzinssliderbox").style.display = "flex";
		 document.getElementById("verkauftilgsliderbox").style.display = "flex";
         document.getElementById("grid1_vkheader").style.display = "grid";
		 document.getElementById("grid1_vk").style.display = "grid";
		 }
    else
         {
         document.getElementById("verklabel").innerHTML = "Nein";
		 document.getElementById("verkaufjahresliderbox").style.visibility = "hidden";		 
		 document.getElementById("verkaufsteuersliderbox").style.display = "none";
		 document.getElementById("verkaufeksliderbox").style.display = "none";
		 document.getElementById("verkaufzinssliderbox").style.display = "none";
		 document.getElementById("verkauftilgsliderbox").style.display = "none";		 
		 document.getElementById("grid1_vkheader").style.display = "none";
		 document.getElementById("grid1_vk").style.display = "none";
         }
objektdaten();

}