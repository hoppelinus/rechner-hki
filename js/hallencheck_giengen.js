function hallencheck() {
    
	// ------------------------------------------------------------------------------------- Voreinstellungen Schieberegler -----------------------------------------------------------------------------------
	let auswahl1 = document.getElementById("halle1").checked;
    let auswahl2 = document.getElementById("halle2").checked;
    let auswahl3 = document.getElementById("halle3").checked;
    let auswahl4 = document.getElementById("halle4").checked;
    let auswahl5 = document.getElementById("halle5").checked;
    let auswahl6 = document.getElementById("halle6").checked;
    let auswahl7 = document.getElementById("halle7").checked;
    let auswahl8 = document.getElementById("halle8").checked;
    let auswahl9 = document.getElementById("halle9").checked;
	let auswahl10 = document.getElementById("halle10").checked;
	let auswahl11 = document.getElementById("halle11").checked;
	let auswahl12 = document.getElementById("halle12").checked;
	let auswahl13 = document.getElementById("halle13").checked;
	let auswahl14 = document.getElementById("halle14").checked;
	let auswahl15 = document.getElementById("halle15").checked;
	let auswahl16 = document.getElementById("halle16").checked;
		
	if (auswahl1 == true || auswahl2 == true || auswahl3 == true || auswahl4 == true || auswahl5 == true || auswahl6 == true || auswahl7 == true || auswahl8 == true || auswahl9 == true || auswahl10 == true || auswahl11 == true || auswahl12 == true || auswahl13 == true || auswahl14 == true || auswahl15 == true || auswahl16 == true)
	{
		document.getElementById("kvmon").value = 7;
		document.getElementById("steuersatzvalue").value = 42;
		document.getElementById("ekinput").value = 20;
		document.getElementById("zinsinput").value = 2.2;
		document.getElementById("tilginput").value = 4.4;
		document.getElementById("mietemoninput").value = 4;
		document.getElementById("mietsteiginput").value = 0;
		document.getElementById("pvertrinput").value = 12;
		document.getElementById("sonderafavalue").value = 0;
		document.getElementById('iabjanein').checked = true;
		document.getElementById("iablabel").innerHTML = "Ja";
        document.getElementById("iabhoehetext").style.visibility = "visible";
        document.getElementById("iabhoehesliderbox").style.visibility = "visible";
		document.getElementById("iabvalue").value = 50;		
	}
	else
	{
		document.getElementById("kvmon").value = 7;
		document.getElementById("steuersatzvalue").value = 0;
		document.getElementById("ekinput").value = 0;
		document.getElementById("zinsinput").value = 0;
		document.getElementById("tilginput").value = 0;
		document.getElementById("mietemoninput").value = 0;
		document.getElementById("mietsteiginput").value = 0;
		document.getElementById("pvertrinput").value = 0;
		document.getElementById("sonderafavalue").value = 0;
		document.getElementById('iabjanein').checked = false;
		document.getElementById("iablabel").innerHTML = "Nein";
        document.getElementById("iabhoehetext").style.visibility = "hidden";
        document.getElementById("iabhoehesliderbox").style.visibility = "hidden";
		document.getElementById("iabvalue").value = 0;
		document.getElementById("verkjanein").checked = false;
		document.getElementById("verklabel").innerHTML = "Nein";
		document.getElementById("verkaufjahresliderbox").style.visibility = "hidden";		 
		document.getElementById("verkaufsteuersliderbox").style.display = "none";
		document.getElementById("verkaufeksliderbox").style.display = "none";
		document.getElementById("verkaufzinssliderbox").style.display = "none";
		 document.getElementById("verkauftilgsliderbox").style.display = "none";
		document.getElementById("grid1_vkheader").style.display = "none";
		document.getElementById("grid1_vk").style.display = "none";
		document.getElementById("verkaufsteuervalue").value = 0;
		document.getElementById("verkaufekvalue").value = 0;
	}
	
objektdaten();

}