function objektdaten() {
    //Erwarteter Stromertrag pro Jahr
    var pvertrjahr = 930;
    //Nebenkosten PV pro Jahr je kWp
    var pvnk = 10;
    //Halle 3
    var hallenflaeche1 = 100;
    var leistungpv1 = 20;
    var kpgrundstueck1 = 24000;
    var kphallen1 = 118000;
    var kppv1 = 30000;
    var kpstpl1 = 3800;
	//Halle 4
    var hallenflaeche2 = 100;
    var leistungpv2 = 20;
    var kpgrundstueck2 = 16000;
    var kphallen2 = 117000;
    var kppv2 = 30000;
	var kpstpl2 = 3800;
    //Halle 5
    var hallenflaeche3 = 100;
    var leistungpv3 = 20;
    var kpgrundstueck3 = 16000;
    var kphallen3 = 117000;
    var kppv3 = 30000;
	var kpstpl3 = 3800;
    //Halle 6
    var hallenflaeche4 = 100;
    var leistungpv4 = 20;
    var kpgrundstueck4 = 22000;
    var kphallen4 = 118000;
    var kppv4 = 30000;
	var kpstpl4 = 3800;
    //Halle 7
    var hallenflaeche5 = 152;
    var leistungpv5 = 30;
    var kpgrundstueck5 = 38000;
    var kphallen5 = 181000;
    var kppv5 = 45000;
	var kpstpl5 = 3800;
    //Halle 8
    var hallenflaeche6 = 152;
    var leistungpv6 = 30;
    var kpgrundstueck6 = 37000;
    var kphallen6 = 181000;
    var kppv6 = 45000;
	var kpstpl6 = 3800;
    //Halle 16
    var hallenflaeche7 = 201;
    var leistungpv7 = 40;
    var kpgrundstueck7 = 39000;
    var kphallen7 = 239000;
    var kppv7 = 60000;
	var kpstpl7 = 3800;
    //Halle 23
    var hallenflaeche8 = 100;
    var leistungpv8 = 20;
    var kpgrundstueck8 = 14000;
    var kphallen8 = 117000;
    var kppv8 = 30000;
	var kpstpl8 = 3800;
    //Halle 24
    var hallenflaeche9 = 100;
    var leistungpv9 = 20;
    var kpgrundstueck9 = 29000;
    var kphallen9 = 118000;
    var kppv9 = 30000;
	var kpstpl9 = 3800;
	//Halle 25
    var hallenflaeche10 = 153;
    var leistungpv10 = 30;
    var kpgrundstueck10 = 26000;
    var kphallen10 = 182000;
    var kppv10 = 45000;
	var kpstpl10 = 3800;
	//Halle 26
    var hallenflaeche11 = 153;
    var leistungpv11 = 30;
    var kpgrundstueck11 = 22000;
    var kphallen11 = 182000;
    var kppv11 = 45000;
	var kpstpl11 = 3800;
	//Halle 27
    var hallenflaeche12 = 100;
    var leistungpv12 = 20;
    var kpgrundstueck12 = 14000;
    var kphallen12 = 118000;
    var kppv12 = 30000;
	var kpstpl12 = 3800;
	//Halle 28
    var hallenflaeche13 = 100;
    var leistungpv13 = 20;
    var kpgrundstueck13 = 14000;
    var kphallen13 = 117000;
    var kppv13 = 30000;	
	var kpstpl13 = 3800;
	//Halle 29
    var hallenflaeche14 = 100;
    var leistungpv14 = 20;
    var kpgrundstueck14 = 13000;
    var kphallen14 = 117000;
    var kppv14 = 30000;
	var kpstpl14 = 3800;
	//Halle 33
    var hallenflaeche15 = 201;
    var leistungpv15 = 40;
    var kpgrundstueck15 = 35000;
    var kphallen15 = 239000;
    var kppv15 = 60000;
	var kpstpl15 = 3800;
	//Halle 34
    var hallenflaeche16 = 100;
    var leistungpv16 = 20;
    var kpgrundstueck16 = 19000;
    var kphallen16 = 129000;
    var kppv16 = 30000;	
	var kpstpl16 = 3800;
	
    //Datenausgabe in Formular
    var hallenauswahl1 = document.getElementById("halle1").checked;
    var hallenauswahl2 = document.getElementById("halle2").checked;
    var hallenauswahl3 = document.getElementById("halle3").checked;
    var hallenauswahl4 = document.getElementById("halle4").checked;
    var hallenauswahl5 = document.getElementById("halle5").checked;
    var hallenauswahl6 = document.getElementById("halle6").checked;
    var hallenauswahl7 = document.getElementById("halle7").checked;
    var hallenauswahl8 = document.getElementById("halle8").checked;
    var hallenauswahl9 = document.getElementById("halle9").checked;	
	var hallenauswahl10 = document.getElementById("halle10").checked;
	var hallenauswahl11 = document.getElementById("halle11").checked;
	var hallenauswahl12 = document.getElementById("halle12").checked;
	var hallenauswahl13 = document.getElementById("halle13").checked;
	var hallenauswahl14 = document.getElementById("halle14").checked;
	var hallenauswahl15 = document.getElementById("halle15").checked;
	var hallenauswahl16 = document.getElementById("halle16").checked;

    if (hallenauswahl1 == true)
         {
         var auswahlflaeche1 = hallenflaeche1
         var auswahlleistpv1 = leistungpv1
         var auswahlkpgrund1 = kpgrundstueck1
         var auswahlkphallen1 = kphallen1
         var auswahlkppv1 = kppv1
		 var auswahlkpstpl1 = kpstpl1
		 var hallentextpdf1 = "3 - ";
         }
    else
         {
         var auswahlflaeche1 = 0
         var auswahlleistpv1 = 0
         var auswahlkpgrund1 = 0
         var auswahlkphallen1 = 0
         var auswahlkppv1 = 0
		 var auswahlkpstpl1 = 0
		 var hallentextpdf1 = "";
         }
    if (hallenauswahl2 == true)
         {
         var auswahlflaeche2 = hallenflaeche2
         var auswahlleistpv2 = leistungpv2
         var auswahlkpgrund2 = kpgrundstueck2
         var auswahlkphallen2 = kphallen2
         var auswahlkppv2 = kppv2
		 var auswahlkpstpl2 = kpstpl2
		 var hallentextpdf2 = "4 - ";
         }
    else
         {
         var auswahlflaeche2 = 0
         var auswahlleistpv2 = 0
         var auswahlkpgrund2 = 0
         var auswahlkphallen2 = 0
         var auswahlkppv2 = 0
		 var auswahlkpstpl2 = 0
		 var hallentextpdf2 = "";
         }
    if (hallenauswahl3 == true)
         {
         var auswahlflaeche3 = hallenflaeche3
         var auswahlleistpv3 = leistungpv3
         var auswahlkpgrund3 = kpgrundstueck3
         var auswahlkphallen3 = kphallen3
         var auswahlkppv3 = kppv3
		 var auswahlkpstpl3 = kpstpl3
		 var hallentextpdf3 = "5 - ";
         }
    else
         {
         var auswahlflaeche3 = 0
         var auswahlleistpv3 = 0
         var auswahlkpgrund3 = 0
         var auswahlkphallen3 = 0
         var auswahlkppv3 = 0
		 var auswahlkpstpl3 = 0
		 var hallentextpdf3 = "";
         }
    if (hallenauswahl4 == true)
         {
         var auswahlflaeche4 = hallenflaeche4
         var auswahlleistpv4 = leistungpv4
         var auswahlkpgrund4 = kpgrundstueck4
         var auswahlkphallen4 = kphallen4
         var auswahlkppv4 = kppv4
		 var auswahlkpstpl4 = kpstpl4
		 var hallentextpdf4 = "6 - ";
         }
    else
         {
         var auswahlflaeche4 = 0
         var auswahlleistpv4 = 0
         var auswahlkpgrund4 = 0
         var auswahlkphallen4 = 0
         var auswahlkppv4 = 0
		 var auswahlkpstpl4 = 0
		 var hallentextpdf4 = "";
         }
    if (hallenauswahl5 == true)
         {
         var auswahlflaeche5 = hallenflaeche5
         var auswahlleistpv5 = leistungpv5
         var auswahlkpgrund5 = kpgrundstueck5
         var auswahlkphallen5 = kphallen5
         var auswahlkppv5 = kppv5
		 var auswahlkpstpl5 = kpstpl5
		 var hallentextpdf5 = "7 - ";
         }
    else
         {
         var auswahlflaeche5 = 0
         var auswahlleistpv5 = 0
         var auswahlkpgrund5 = 0
         var auswahlkphallen5 = 0
         var auswahlkppv5 = 0
		 var auswahlkpstpl5 = 0
		 var hallentextpdf5 = "";
         }
    if (hallenauswahl6 == true)
         {
         var auswahlflaeche6 = hallenflaeche6
         var auswahlleistpv6 = leistungpv6
         var auswahlkpgrund6 = kpgrundstueck6
         var auswahlkphallen6 = kphallen6
         var auswahlkppv6 = kppv6
		 var auswahlkpstpl6 = kpstpl6
		 var hallentextpdf6 = "8 - ";
         }
    else
         {
         var auswahlflaeche6 = 0
         var auswahlleistpv6 = 0
         var auswahlkpgrund6 = 0
         var auswahlkphallen6 = 0
         var auswahlkppv6 = 0
		 var auswahlkpstpl6 = 0
		 var hallentextpdf6 = "";
         }
    if (hallenauswahl7 == true)
         {
         var auswahlflaeche7 = hallenflaeche7
         var auswahlleistpv7 = leistungpv7
         var auswahlkpgrund7 = kpgrundstueck7
         var auswahlkphallen7 = kphallen7
         var auswahlkppv7 = kppv7
		 var auswahlkpstpl7 = kpstpl7
		 var hallentextpdf7 = "16 - ";
         }
    else
         {
         var auswahlflaeche7 = 0
         var auswahlleistpv7 = 0
         var auswahlkpgrund7 = 0
         var auswahlkphallen7 = 0
         var auswahlkppv7 = 0
		 var auswahlkpstpl7 = 0
		 var hallentextpdf7 = "";
         }
    if (hallenauswahl8 == true)
         {
         var auswahlflaeche8 = hallenflaeche8
         var auswahlleistpv8 = leistungpv8
         var auswahlkpgrund8 = kpgrundstueck8
         var auswahlkphallen8 = kphallen8
         var auswahlkppv8 = kppv8
		 var auswahlkpstpl8 = kpstpl8
		 var hallentextpdf8 = "23 - ";
         }
    else
         {
         var auswahlflaeche8 = 0
         var auswahlleistpv8 = 0
         var auswahlkpgrund8 = 0
         var auswahlkphallen8 = 0
         var auswahlkppv8 = 0
		 var auswahlkpstpl8 = 0
		 var hallentextpdf8 = "";
         }
    if (hallenauswahl9 == true)
         {
         var auswahlflaeche9 = hallenflaeche9
         var auswahlleistpv9 = leistungpv9
         var auswahlkpgrund9 = kpgrundstueck9
         var auswahlkphallen9 = kphallen9
         var auswahlkppv9 = kppv9
		 var auswahlkpstpl9 = kpstpl9
		 var hallentextpdf9 = "24 - ";
         }
    else
         {
         var auswahlflaeche9 = 0
         var auswahlleistpv9 = 0
         var auswahlkpgrund9 = 0
         var auswahlkphallen9 = 0
         var auswahlkppv9 = 0
		 var auswahlkpstpl9 = 0
		 var hallentextpdf9 = "";
         }
	if (hallenauswahl10 == true)
         {
         var auswahlflaeche10 = hallenflaeche10
         var auswahlleistpv10 = leistungpv10
         var auswahlkpgrund10 = kpgrundstueck10
         var auswahlkphallen10 = kphallen10
         var auswahlkppv10 = kppv10
		 var auswahlkpstpl10 = kpstpl10
		 var hallentextpdf10 = "25 - ";
         }
    else
         {
         var auswahlflaeche10 = 0
         var auswahlleistpv10 = 0
         var auswahlkpgrund10 = 0
         var auswahlkphallen10 = 0
         var auswahlkppv10 = 0
		 var auswahlkpstpl10 = 0
		 var hallentextpdf10 = "";
         }
	if (hallenauswahl11 == true)
         {
         var auswahlflaeche11 = hallenflaeche11
         var auswahlleistpv11 = leistungpv11
         var auswahlkpgrund11 = kpgrundstueck11
         var auswahlkphallen11 = kphallen11
         var auswahlkppv11 = kppv11
		 var auswahlkpstpl11 = kpstpl11
		 var hallentextpdf11 = "26 - ";
         }
    else
         {
         var auswahlflaeche11 = 0
         var auswahlleistpv11 = 0
         var auswahlkpgrund11 = 0
         var auswahlkphallen11 = 0
         var auswahlkppv11 = 0
		 var auswahlkpstpl11 = 0
		 var hallentextpdf11 = "";
         }
	if (hallenauswahl12 == true)
         {
         var auswahlflaeche12 = hallenflaeche12
         var auswahlleistpv12 = leistungpv12
         var auswahlkpgrund12 = kpgrundstueck12
         var auswahlkphallen12 = kphallen12
         var auswahlkppv12 = kppv12
		 var auswahlkpstpl12 = kpstpl12
		 var hallentextpdf12 = "27 - ";
         }
    else
         {
         var auswahlflaeche12 = 0
         var auswahlleistpv12 = 0
         var auswahlkpgrund12 = 0
         var auswahlkphallen12 = 0
         var auswahlkppv12 = 0
		 var auswahlkpstpl12 = 0
		 var hallentextpdf12 = "";
         }
	if (hallenauswahl13 == true)
         {
         var auswahlflaeche13 = hallenflaeche13
         var auswahlleistpv13 = leistungpv13
         var auswahlkpgrund13 = kpgrundstueck13
         var auswahlkphallen13 = kphallen13
         var auswahlkppv13 = kppv13
		 var auswahlkpstpl13 = kpstpl13
		 var hallentextpdf13 = "28 - ";
         }
    else
         {
         var auswahlflaeche13 = 0
         var auswahlleistpv13 = 0
         var auswahlkpgrund13 = 0
         var auswahlkphallen13 = 0
         var auswahlkppv13 = 0
		 var auswahlkpstpl13 = 0
		 var hallentextpdf13 = "";
         }
	if (hallenauswahl14 == true)
         {
         var auswahlflaeche14 = hallenflaeche14
         var auswahlleistpv14 = leistungpv14
         var auswahlkpgrund14 = kpgrundstueck14
         var auswahlkphallen14 = kphallen14
         var auswahlkppv14 = kppv14
		 var auswahlkpstpl14 = kpstpl14
		 var hallentextpdf14 = "29 - ";
         }
    else
         {
         var auswahlflaeche14 = 0
         var auswahlleistpv14 = 0
         var auswahlkpgrund14 = 0
         var auswahlkphallen14 = 0
         var auswahlkppv14 = 0
		 var auswahlkpstpl14 = 0
		 var hallentextpdf14 = "";
         }
	if (hallenauswahl15 == true)
         {
         var auswahlflaeche15 = hallenflaeche15
         var auswahlleistpv15 = leistungpv15
         var auswahlkpgrund15 = kpgrundstueck15
         var auswahlkphallen15 = kphallen15
         var auswahlkppv15 = kppv15
		 var auswahlkpstpl15 = kpstpl15
		 var hallentextpdf15 = "33 - ";
         }
    else
         {
         var auswahlflaeche15 = 0
         var auswahlleistpv15 = 0
         var auswahlkpgrund15 = 0
         var auswahlkphallen15 = 0
         var auswahlkppv15 = 0
		 var auswahlkpstpl15 = 0
		 var hallentextpdf15 = "";
         }		 
	if (hallenauswahl16 == true)
         {
         var auswahlflaeche16 = hallenflaeche16
         var auswahlleistpv16 = leistungpv16
         var auswahlkpgrund16 = kpgrundstueck16
         var auswahlkphallen16 = kphallen16
         var auswahlkppv16 = kppv16
		 var auswahlkpstpl16 = kpstpl16
		 var hallentextpdf16 = "34 - ";
         }
    else
         {
         var auswahlflaeche16 = 0
         var auswahlleistpv16 = 0
         var auswahlkpgrund16 = 0
         var auswahlkphallen16 = 0
         var auswahlkppv16 = 0
		 var auswahlkpstpl16 = 0
		 var hallentextpdf16 = "";
         }
	
    // ----------------------------------------------------------------------------------------------- Summen bilden -------------------------------------------------------------------------------------------	
	var hallenflaeche = auswahlflaeche1 + auswahlflaeche2 + auswahlflaeche3 + auswahlflaeche4 + auswahlflaeche5 + auswahlflaeche6 + auswahlflaeche7 + auswahlflaeche8 + auswahlflaeche9 + auswahlflaeche10 + auswahlflaeche11 + auswahlflaeche12 + auswahlflaeche13 + auswahlflaeche14 + auswahlflaeche15 + auswahlflaeche16;
    var leistungpv = auswahlleistpv1 + auswahlleistpv2 + auswahlleistpv3 + auswahlleistpv4 + auswahlleistpv5 + auswahlleistpv6 + auswahlleistpv7 + auswahlleistpv8 + auswahlleistpv9 + auswahlleistpv10 + auswahlleistpv11 + auswahlleistpv12 + auswahlleistpv13 + auswahlleistpv14 + auswahlleistpv15 + auswahlleistpv16;
    var kpgrund = auswahlkpgrund1 + auswahlkpgrund2 + auswahlkpgrund3 + auswahlkpgrund4 + auswahlkpgrund5 + auswahlkpgrund6 + auswahlkpgrund7 + auswahlkpgrund8 + auswahlkpgrund9 + auswahlkpgrund10 + auswahlkpgrund11 + auswahlkpgrund12 + auswahlkpgrund13 + auswahlkpgrund14 + auswahlkpgrund15 + auswahlkpgrund16;
    var kphallen = auswahlkphallen1 + auswahlkphallen2 + auswahlkphallen3 + auswahlkphallen4 + auswahlkphallen5 + auswahlkphallen6 + auswahlkphallen7 + auswahlkphallen8 + auswahlkphallen9 + auswahlkphallen10 + auswahlkphallen11 + auswahlkphallen12 + auswahlkphallen13 + auswahlkphallen14 + auswahlkphallen15 + auswahlkphallen16;
    var kpstpl = auswahlkpstpl1 + auswahlkpstpl2 + auswahlkpstpl3 + auswahlkpstpl4 + auswahlkpstpl5 + auswahlkpstpl6 + auswahlkpstpl7 + auswahlkpstpl8 + auswahlkpstpl9 + auswahlkpstpl10 + auswahlkpstpl11 + auswahlkpstpl12 + auswahlkpstpl13 + auswahlkpstpl14 + auswahlkpstpl15 + auswahlkpstpl16;
	var kppv = auswahlkppv1 + auswahlkppv2 + auswahlkppv3 + auswahlkppv4 + auswahlkppv5 + auswahlkppv6 + auswahlkppv7 + auswahlkppv8 + auswahlkppv9 + auswahlkppv10 + auswahlkppv11 + auswahlkppv12 + auswahlkppv13 + auswahlkppv14 + auswahlkppv15 + auswahlkppv16;
    var gesamtinvest = kpgrund + kphallen + kpstpl + kppv;
    var nk = Math.ceil(kpgrund * 7 / 100);
    var ekslide = document.getElementById("ekinput").value;
    var ekvalue = Math.round((gesamtinvest + nk) * ekslide / 100);
    document.getElementById("ekpdf").value = '<span style="color: darkorange;">' + ekvalue.toLocaleString('de-DE', { minimumFractionDigits: 2 }) + ' EUR</span>';
	var finsum = gesamtinvest + nk - ekvalue;
    if (ekvalue > 0) {
    ekvalue = ekvalue * -1; }
    if (finsum < 0)
    {
    finsum = 0;
    }
	
	// ---------------------------------------------------------------------------------------- Variablen für Verkauf erstellen --------------------------------------------------------------------------------
	var kpgrund2 = kpgrund * document.getElementById("verkaufgrdstpreisvalue").value / 100;	
	kpgrund2 = parseFloat(kpgrund2);	
	var kphallen2 = kphallen * document.getElementById("verkaufhallepreisvalue").value / 100;	
	kphallen2 = parseFloat(kphallen2);	
	var kppv2 = kppv * document.getElementById("verkaufpvpreisvalue").value / 100;	
	kppv2 = parseFloat(kppv2);		
	var gesamtinvest2 = kpgrund2 + kphallen2 + kppv2;
    var nk2 = Math.ceil(kpgrund2 * 7 / 100);
    var ekslide2 = document.getElementById("verkaufekvalue").value;
    var ekvalue2 = Math.round((gesamtinvest2 + nk2) * ekslide2 / 100);
    var finsum2 = gesamtinvest2 + nk2 - ekvalue2;
	if (ekvalue2 > 0) {
    ekvalue2 = ekvalue2 * -1; }
    if (finsum2 < 0)
    {
    finsum2 = 0;
    }
	
	// -------------------------------------------------------------------------------------- weitere Variablen erstellen ------------------------------------------------------------------------------------
	
    var mietemonslide = document.getElementById("mietemoninput").value;
    var mietemonber = hallenflaeche * 12 * mietemonslide;
    mietemonber = Math.floor(mietemonber);
    mietemonber = parseFloat(mietemonber);
    var pvertrslide = parseFloat(document.getElementById("pvertrinput").value) / 100;
    var pvertrber = Math.floor(leistungpv / 100 * pvertrslide * pvertrjahr * 100);
    var pvnkber = Math.ceil(pvnk * leistungpv);
    if (pvnkber == 0)
    {
    pvnkber = 0;
    }
    var eingesjahr = mietemonber + pvertrber;
    var mietemonbermtl = Math.floor(mietemonber / 12);
    var pvertrbermtl = Math.floor(pvertrber / 12);
    var pvnkbermtl = Math.ceil(pvnkber / 12);
    var eingesjahrmtl = mietemonbermtl + pvertrbermtl;	
	
	// --------------------------------------------------------------------------- Anpassung Eingabebereich bei Verkauf des Objekts --------------------------------------------------------------------------
	let verksel = document.getElementById("verkjanein").checked;
	if (verksel == true)
         {
		 document.getElementById('grid1_vkheader').style.display = "block";
		 document.getElementById('grid1_vk').style.display = "grid";		 
		 document.getElementById('grid2_header').innerHTML =
         '<div>Hallendaten 1</div>' +
         '<div>Hallendaten 2</div>';
		 document.getElementById('grid2_header').style.gridTemplateColumns = "auto auto";
		 document.getElementById('grid2_data').innerHTML =
		 '<div class="flaechetext">Hallenfl&auml;che:</div>' +
         '<div class="flaechedaten"><input type="text" id="hallenflaeche" name="hallenflaeche" value="0" readonly /><span> m<sup>2</sup></span></div>' +
		 '<div class="flaechetext2">Hallenfl&auml;che:</div>' +
         '<div class="flaechedaten2"><input type="text" id="hallenflaeche2" name="hallenflaeche2" value="0" readonly /><span> m<sup>2</sup></span></div>' +
		 '<div class="leistungpvtext">PV-Leistung:</div>' +
         '<div class="leistungpvdaten"><input type="text" id="leistungpv" name="leistungpv" value="0" readonly /><span> kWp</span></div>' +
		 '<div class="leistungpvtext2">PV-Leistung:</div>' +
         '<div class="leistungpvdaten2"><input type="text" id="leistungpv2" name="leistungpv2" value="0" readonly /><span> kWp</span></div>' +
		 '<div class="kpgrundtext">KP Grundst&uuml;ck:</div>' +
         '<div class="kpgrunddaten"><input type="text" id="kpgrundstueck" name="kpgrundstueck" value="0" readonly /><span> &#8364</span></div>' +
		 '<div class="kpgrundtext2">KP Grundst&uuml;ck:</div>' +
         '<div class="kpgrunddaten2"><input type="text" id="kpgrundstueck2" name="kpgrundstueck2" value="0" readonly /><span> &#8364</span></div>' +
		 '<div class="hallenkptext">KP Halle(n):</div>' +
         '<div class="hallenkpdaten"><input type="text" id="kphallen" name="kphallen" value="0" readonly /><span> &#8364</span></div>' +
		 '<div class="hallenkptext2">KP Halle(n):</div>' +
         '<div class="hallenkpdaten2"><input type="text" id="kphallen2" name="kphallen2" value="0" readonly /><span> &#8364</span></div>' +		 
		 '<div class="kpstellpltext">KP Parkierung:</div>' +
         '<div class="kpstellpldaten"><input type="text" id="kpstellpl" name="kpstellpl" value="0" readonly /><span> &#8364</span></div>' +		
		 '<div class="kpstellpltext2">KP Parkierung:</div>' +
         '<div class="kpstellpldaten2"><input type="text" id="kpstellpl2" name="kpstellpl2" value="0" readonly /><span> &#8364</span></div>' +
		 '<div class="pvkptext">KP Photovoltaik:</div>' +
         '<div class="pvkpdaten"><input type="text" id="kppv" name="kppv" value="0" readonly /><span> &#8364</span></div>' +
		 '<div class="pvkptext2">KP Photovoltaik:</div>' +
         '<div class="pvkpdaten2"><input type="text" id="kppv2" name="kppv2" value="0" readonly /><span> &#8364</span></div>' +
		 '<div class="investgestext">Gesamtinvestition:</div>' +
         '<div class="investgesdaten"><input type="text" id="gesamtinvest" name="gesamtinvest" value="0,00" readonly /><span> &#8364</span></div>' +
		 '<div class="investgestext2">Gesamtinvestition:</div>' +
         '<div class="investgesdaten2"><input type="text" id="gesamtinvest2" name="gesamtinvest2" value="0,00" readonly /><span> &#8364</span></div>' +
		 '<div class="nebenkostentext">Nebenkosten:</div>' +
         '<div class="nebenkostendaten"><input type="text" id="nk" name="nk" value="0,00" readonly /><span> &#8364</span></div>' +
		 '<div class="nebenkostentext2">Nebenkosten:</div>' +
         '<div class="nebenkostendaten2"><input type="text" id="nk2" name="nk2" value="0,00" readonly /><span> &#8364</span></div>' +
		 '<div class="ekaustext">Eigenkapital:</div>' +
         '<div class="ekausdaten"><input type="text" id="ekaus" name="ekaus" value="0,00" readonly /><span> &#8364</span></div>' +
         '<div class="ekaustext2">Eigenkapital:</div>' +
         '<div class="ekausdaten2"><input type="text" id="ekaus2" name="ekaus2" value="0,00" readonly /><span> &#8364</span></div>' +
         '<div class="finanzsumtext">Finanzierung:</div>' +
         '<div class="finanzsumdaten"><input type="text" id="finsum" name="finsum" value="0,00" readonly /><span> &#8364</span></div>' +
		 '<div class="finanzsumtext2">Finanzierung:</div>' +
         '<div class="finanzsumdaten2"><input type="text" id="finsum2" name="finsum2" value="0,00" readonly /><span> &#8364</span></div>';
		 }
	else
	{	
		document.getElementById('grid1_vkheader').style.display = "none";
		document.getElementById('grid1_vk').style.display = "none";		
		document.getElementById('grid2_header').innerHTML =
        '<div>Hallendaten</div>';
		document.getElementById('grid2_header').style.gridTemplateColumns = "auto";
		document.getElementById('grid2_data').innerHTML =
		'<div class="flaechetext">Hallenfl&auml;che:</div>' +
        '<div class="flaechedaten"><input type="text" id="hallenflaeche" name="hallenflaeche" value="0" readonly /><span> m<sup>2</sup></span></div>' +
        '<div class="leistungpvtext">PV-Leistung:</div>' +
        '<div class="leistungpvdaten"><input type="text" id="leistungpv" name="leistungpv" value="0" readonly /><span> kWp</span></div>' +
		'<div class="kpgrundtext">KP Grundst&uuml;ck:</div>' +
        '<div class="kpgrunddaten"><input type="text" id="kpgrundstueck" name="kpgrundstueck" value="0" readonly /><span> &#8364</span></div>' +
		'<div class="investgestext">Gesamtinvestition:</div>' +
        '<div class="investgesdaten"><input type="text" id="gesamtinvest" name="gesamtinvest" value="0,00" readonly /><span> &#8364</span></div>' +
		'<div class="hallenkptext">KP Halle(n):</div>' +
        '<div class="hallenkpdaten"><input type="text" id="kphallen" name="kphallen" value="0" readonly /><span> &#8364</span></div>' +
		'<div class="nebenkostentext">Nebenkosten:</div>' +
        '<div class="nebenkostendaten"><input type="text" id="nk" name="nk" value="0,00" readonly /><span> &#8364</span></div>' +
		'<div class="kpstellpltext">KP Parkierung:</div>' +
        '<div class="kpstellpldaten"><input type="text" id="kpstellpl" name="kpstellpl" value="0" readonly /><span> &#8364</span></div>' +		
        '<div class="ekaustext">Eigenkapital:</div>' +
        '<div class="ekausdaten"><input type="text" id="ekaus" name="ekaus" value="0,00" readonly /><span> &#8364</span></div>' +
        '<div class="pvkptext">KP Photovoltaik:</div>' +
        '<div class="pvkpdaten"><input type="text" id="kppv" name="kppv" value="0" readonly /><span> &#8364</span></div>' +		
		'<div class="finanzsumtext">Finanzierung:</div>' +
        '<div class="finanzsumdaten"><input type="text" id="finsum" name="finsum" value="0,00" readonly /><span> &#8364</span></div>'        
		;
	}	
	
	// -------------------------------------------------------------------------------------- Datenausgabe in Bereich Hallendaten -------------------------------------------------------------------
	document.getElementById("hallenflaeche").value = hallenflaeche.toLocaleString('de-DE', { minimumFractionDigits: 2 });
    document.getElementById("leistungpv").value = leistungpv.toLocaleString('de-DE', { minimumFractionDigits: 2 });    
	document.getElementById("kpgrundstueck").value = kpgrund.toLocaleString('de-DE', { minimumFractionDigits: 2 });
    document.getElementById("kphallen").value = kphallen.toLocaleString('de-DE', { minimumFractionDigits: 2 });    
	document.getElementById("kpstellpl").value = kpstpl.toLocaleString('de-DE', { minimumFractionDigits: 2 });	
	document.getElementById("kppv").value = kppv.toLocaleString('de-DE', { minimumFractionDigits: 2 });
    document.getElementById("gesamtinvest").value = gesamtinvest.toLocaleString('de-DE', { minimumFractionDigits: 2 });
    document.getElementById("nk").value = nk.toLocaleString('de-DE', { minimumFractionDigits: 2 });
    document.getElementById("ekaus").value = ekvalue.toLocaleString('de-DE', { minimumFractionDigits: 2 });
    document.getElementById("finsum").value = finsum.toLocaleString('de-DE', { minimumFractionDigits: 2 });
	if (verksel == true)
	{	
	document.getElementById("hallenflaeche2").value = hallenflaeche.toLocaleString('de-DE', { minimumFractionDigits: 2 });
    document.getElementById("leistungpv2").value = leistungpv.toLocaleString('de-DE', { minimumFractionDigits: 2 });    
	document.getElementById("kpgrundstueck2").value = kpgrund2.toLocaleString('de-DE', { minimumFractionDigits: 2 });
    document.getElementById("kphallen2").value = kphallen2.toLocaleString('de-DE', { minimumFractionDigits: 2 });
    document.getElementById("kpstellpl2").value = kpstpl.toLocaleString('de-DE', { minimumFractionDigits: 2 });
	document.getElementById("kppv2").value = kppv2.toLocaleString('de-DE', { minimumFractionDigits: 2 });
    document.getElementById("gesamtinvest2").value = gesamtinvest2.toLocaleString('de-DE', { minimumFractionDigits: 2 });
    document.getElementById("nk2").value = nk2.toLocaleString('de-DE', { minimumFractionDigits: 2 });
    document.getElementById("ekaus2").value = ekvalue2.toLocaleString('de-DE', { minimumFractionDigits: 2 });
    document.getElementById("finsum2").value = finsum2.toLocaleString('de-DE', { minimumFractionDigits: 2 });
	}
	document.getElementById("mietepa").value = mietemonber.toLocaleString('de-DE', { minimumFractionDigits: 2 });
    document.getElementById("einspeispvpa").value = pvertrber.toLocaleString('de-DE', { minimumFractionDigits: 2 });
    document.getElementById("pvnebenpa").value = pvnkber.toLocaleString('de-DE', { minimumFractionDigits: 2 });
    document.getElementById("kalkeinpa").value = eingesjahr.toLocaleString('de-DE', { minimumFractionDigits: 2 });
    document.getElementById("mietemtl").value = mietemonbermtl.toLocaleString('de-DE', { minimumFractionDigits: 2 });
    document.getElementById("einspeispvmtl").value = pvertrbermtl.toLocaleString('de-DE', { minimumFractionDigits: 2 });
    document.getElementById("pvnebenmtl").value = pvnkbermtl.toLocaleString('de-DE', { minimumFractionDigits: 2 });
    document.getElementById("kalkeinmtl").value = eingesjahrmtl.toLocaleString('de-DE', { minimumFractionDigits: 2 });

    document.getElementById("kpbuero").value = auswahlkphallen10;
	
	// ------------------------------------------------------------------------------------ Text für PDF-Ausgabe Header erstellen -----------------------------------------------------------------
	var pdfheadertext = hallentextpdf1 + hallentextpdf2 + hallentextpdf3 + hallentextpdf4 + hallentextpdf5 + hallentextpdf6 + hallentextpdf7 + hallentextpdf8 + hallentextpdf9 + hallentextpdf10 + hallentextpdf11 + hallentextpdf12 + hallentextpdf13 + hallentextpdf14 + hallentextpdf15 + hallentextpdf16;
		
	document.getElementById("pdfheader").value = "Kurzexpose zur Berechnung<br />Gewerbepark Giengen an der Brenz, Halle(n) -" + pdfheadertext;
	
	// ----------------------------------------------------------------------------------- PDF-Symbol anzeigen ------------------------------------------------------------------------------------
	if (hallenflaeche > 0)
	{		
		document.getElementById('menuright').style.visibility = "visible";
	}
	else
	{
		document.getElementById('menuright').style.visibility = "hidden";
	}

    //Darlehensberechnung durchführen --------------------------------------------------------------------------------------------------
    darlrechner();
    // ---------------------------------------------------------------------------------------------------------------------------------
}