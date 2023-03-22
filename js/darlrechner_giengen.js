function darlrechner() {
//Variablen erstellen und formatieren
var zinssatz = parseFloat(document.querySelector(".sliderinput3").value);
document.getElementById("zinsprozpdf").value = zinssatz.toLocaleString('de-DE', { minimumFractionDigits: 2 });
document.getElementById("slidervalue3").innerHTML = parseFloat(zinssatz).toLocaleString('de-DE', { minimumFractionDigits: 2 }) + ' %';
var tilgsatz = parseFloat(document.querySelector(".sliderinput4").value);
document.getElementById("tilgprozpdf").value = tilgsatz.toLocaleString('de-DE', { minimumFractionDigits: 2 });
document.getElementById("slidervalue4").innerHTML = parseFloat(tilgsatz).toLocaleString('de-DE', { minimumFractionDigits: 2 }) + ' %';
var zinssatz2 = parseFloat(document.querySelector(".verkaufzinssliderinput").value);
var tilgsatz2 = parseFloat(document.querySelector(".verkauftilgsliderinput").value);
var ekslider = parseFloat(document.querySelector(".eksliderinput").value);
document.getElementById("ekslidervalue").innerHTML = ekslider + ' %';
document.getElementById("ekprozpdf").value = ekslider;
var vkekslider = parseFloat(document.querySelector(".verkaufeksliderinput").value);
document.getElementById("verkaufekslidervalue").innerHTML = vkekslider + ' %';
var darlbetrag = document.getElementById("finsum").value;
var darlbetrag2 = 0;
var erwmon = parseFloat(document.querySelector(".sliderinput1").value);
document.getElementById("slidervalue1").innerHTML = erwmon + '.2023';
darlbetrag = darlbetrag.replaceAll(".","");
darlbetrag = darlbetrag.replace(",",".");
darlbetrag = parseFloat(darlbetrag);
var gesamtinvest = document.getElementById("gesamtinvest").value;
gesamtinvest = gesamtinvest.replaceAll(".","");
gesamtinvest = gesamtinvest.replace(",",".");
gesamtinvest = parseFloat(gesamtinvest);
var gesamtinvest2 = 0;
var verkjahr = 0;
var verksel = document.getElementById("verkjanein").checked;
if (verksel == true)
{
gesamtinvest2 = document.getElementById("gesamtinvest2").value;
gesamtinvest2 = gesamtinvest2.replaceAll(".","");
gesamtinvest2 = gesamtinvest2.replace(",",".");
gesamtinvest2 = parseFloat(gesamtinvest2);
darlbetrag2 = document.getElementById("finsum2").value;
darlbetrag2 = darlbetrag2.replaceAll(".","");
darlbetrag2 = darlbetrag2.replace(",",".");
verkjahr = document.querySelector(".verkaufjahresliderinput").value;
if (verkjahr == 1)
	{
		document.getElementById("verkaufjahreslidervalue").innerHTML = verkjahr + ' Jahr';
	}
	else
	{
		document.getElementById("verkaufjahreslidervalue").innerHTML = verkjahr + ' Jahren';
	}
}
verkjahr = parseFloat(verkjahr);
darlbetrag2 = parseFloat(darlbetrag2);
var annuber = Math.ceil(darlbetrag * (zinssatz + tilgsatz) / 100);
annuber = parseFloat(annuber);
var annubermtl = Math.ceil(annuber / 12);
document.getElementById("zinswertpdf").value = Math.round(annubermtl / (zinssatz + tilgsatz) * zinssatz).toLocaleString('de-DE', { minimumFractionDigits: 2 });
document.getElementById("tilgwertpdf").value = Math.round(annubermtl / (zinssatz + tilgsatz) * tilgsatz).toLocaleString('de-DE', { minimumFractionDigits: 2 });
var annuber2 = Math.ceil(darlbetrag2 * (zinssatz2 + tilgsatz2) / 100);
annuber2 = parseFloat(annuber2);
var annubermtl2 = Math.ceil(annuber2 / 12);
var mietemondarl = document.getElementById("mietepa").value;
mietemondarl = mietemondarl.replaceAll(".","");
mietemondarl = mietemondarl.replace(",",".");
mietemondarl = parseFloat(mietemondarl);
var mietevalue = parseFloat(document.querySelector(".sliderinput6").value);
document.getElementById("slidervalue6").innerHTML = parseFloat(mietevalue).toLocaleString('de-DE', { minimumFractionDigits: 2 }) + ' &#8364';
var mietsteig = parseFloat(document.querySelector(".sliderinput7").value);
document.getElementById("slidervalue7").innerHTML = parseFloat(mietsteig).toLocaleString('de-DE', { minimumFractionDigits: 2 }) + ' %';
var einspeispvvalue = document.querySelector(".sliderinput8").value;
document.getElementById("slidervalue8").innerHTML = parseFloat(einspeispvvalue).toLocaleString('de-DE', { minimumFractionDigits: 2 }) + ' ct';
var einspeisdarl = document.getElementById("einspeispvpa").value;
einspeisdarl = einspeisdarl.replaceAll(".","");
einspeisdarl = einspeisdarl.replace(",",".");
einspeisdarl = parseFloat(einspeisdarl);
var pvnkdarl = document.getElementById("pvnebenpa").value;
pvnkdarl = pvnkdarl.replaceAll(".","");
pvnkdarl = pvnkdarl.replace(",",".");
pvnkdarl = parseFloat(pvnkdarl);
var pvnkdarlmtl = Math.ceil(pvnkdarl / 12);
var iabkvpv2 = 0;
var iabkvpv = document.getElementById("kppv").value;
iabkvpv = iabkvpv.replaceAll(".","");
iabkvpv = iabkvpv.replace(",",".");
if (verksel == true)
{
iabkvpv2 = document.getElementById("kppv2").value;
iabkvpv2 = iabkvpv2.replaceAll(".","");
iabkvpv2 = iabkvpv2.replace(",",".");
}
iabkvpv2 = parseFloat(iabkvpv2);
var eingespa = document.getElementById("kalkeinpa").value;
eingespa = eingespa.replaceAll(".","");
eingespa = eingespa.replace(",",".");
eingespa = parseFloat(eingespa);
// -------------------------------------------------------------------------------  Gesamtausgaben berechnen  ----------------------------------------------------------
var ausgges = pvnkdarl + annuber;
var ausggesmtl = parseFloat(pvnkdarlmtl) + parseFloat(annubermtl);
ausggesmtl = ausggesmtl.toFixed(2);
var ausgges2 = pvnkdarl + annuber2;
var ausggesmtl2 = parseFloat(pvnkdarlmtl) + parseFloat(annubermtl2);
ausggesmtl2 = ausggesmtl2.toFixed(2);

// -------------------------------------------------------------------------------  Miete + Mietsteigerung  ------------------------------------------------------------
var mietearray = new Array(30);
mietearray[1] = mietemondarl;
for (let j = 2; j <= 30; j++)
{
mietearray[j] = mietearray[j-1] + (mietearray[j-1] * mietsteig / 100);
mietearray[j] = Math.floor(mietearray[j]);
}
// -----------------------------------------------------------------------------------  Darlehensrechner  --------------------------------------------------------------
var darljahr = darlbetrag;
var darljahrarray = new Array(30);
var zinsjahrarray = new Array(30);
var tilgjahrarray = new Array(30);
var annuberarray = new Array(30);
var darljahr2 = darlbetrag2;
var darljahrarray2 = new Array(30);
var zinsjahrarray2 = new Array(30);
var tilgjahrarray2 = new Array(30);
var annuberarray2 = new Array(30);
for (jahrea = 1; jahrea <= 30; jahrea++)
{
if (jahrea == "1") {
darljahrarray[jahrea] = darljahr;
zinsjahrarray[jahrea] = Math.ceil(darljahr * zinssatz / 100 / 12 * (12 - erwmon));
tilgjahrarray[jahrea] = Math.ceil(annuber / 12 * (12 - erwmon) - zinsjahrarray[jahrea]);
darljahr = darljahr - tilgjahrarray[jahrea];
annuberarray[jahrea] = Math.ceil(annuber / 12 * (12 - erwmon));
darljahrarray2[jahrea] = darljahr2;
zinsjahrarray2[jahrea] = Math.ceil(darljahr2 * zinssatz2 / 100);
tilgjahrarray2[jahrea] = Math.ceil(annuber2 - zinsjahrarray2[jahrea]);
darljahr2 = darljahr2 - tilgjahrarray2[jahrea];
annuberarray2[jahrea] = Math.ceil(annuber2);
}
else
{
darljahrarray[jahrea] = darljahr
zinsjahrarray[jahrea] = Math.ceil(darljahr * zinssatz / 100)
tilgjahrarray[jahrea] = annuber - zinsjahrarray[jahrea]
tilgjahrarray[jahrea] = tilgjahrarray[jahrea].toFixed(2)
darljahr = darljahr - tilgjahrarray[jahrea]
darljahr = darljahr.toFixed(2)
annuberarray[jahrea] = annuber
darljahrarray2[jahrea] = darljahr2;
zinsjahrarray2[jahrea] = Math.ceil(darljahr2 * zinssatz2 / 100);
tilgjahrarray2[jahrea] = annuber2 - zinsjahrarray2[jahrea];
tilgjahrarray2[jahrea] = tilgjahrarray2[jahrea].toFixed(2);
darljahr2 = darljahr2 - tilgjahrarray2[jahrea];
darljahr2 = darljahr2.toFixed(2);
annuberarray2[jahrea] = annuber2;
}
if (darljahrarray[jahrea] <= "0") {
darljahrarray[jahrea] = 0;
}
if (zinsjahrarray[jahrea] <= "0") {
zinsjahrarray[jahrea] = 0;
}
if (darljahrarray[jahrea] <= "0") {
annuberarray[jahrea] = 0;
}
darljahrarray[jahrea] = parseFloat(darljahrarray[jahrea]);
if (darljahrarray2[jahrea] <= "0") {
darljahrarray2[jahrea] = 0;
}
if (zinsjahrarray2[jahrea] <= "0") {
zinsjahrarray2[jahrea] = 0;
}
if (darljahrarray2[jahrea] <= "0") {
annuberarray2[jahrea] = 0;
}
darljahrarray2[jahrea] = parseFloat(darljahrarray2[jahrea]);
}
// Darlehnslaufzeit feststellen
var darllzausg = 0;
var darllzvalue = 0;
for (jahrea = 1; jahrea <= 31; jahrea++)
{
         if (darljahrarray[jahrea] <= "0.00") {
         darllzausg = jahrea - 1;
         darllzvalue = jahrea - 1;
         break;
         }
         if (jahrea == 31) {
         darllzausg = " > 30";
         darllzvalue = 30;
         break;
         }
}
if (darlbetrag == 0) {
         darllzausg = 0; }
if (darllzausg == 0) {
         darllzausg = "Keine"; }
else {
         darllzausg = darllzausg + " Jahre"; }
// Tilgungsbetrag im letzten Darlehensjahr anpassen + danach auf 0 setzen
for (let j = 1; j <= 31; j++)
{
         if (darljahrarray[j] <= tilgjahrarray[j]) {
         tilgjahrarray[j] = darljahrarray[j];
		 annuberarray[j] = tilgjahrarray[j] + zinsjahrarray[j];
         break;
         }
}
for (let j = 1; j <= 31; j++)
{
         if (j > darllzvalue) {
         tilgjahrarray[j] = 0;		 
         }
}

// --------------------------------------------------------------------------------  Liquidität vor Steuern berechnen  -------------------------------------------------------------
var liquivorstarray = new Array(30);
var liquivorstarray2 = new Array(30);
for (jahrea = 1; jahrea <= 30; jahrea++)
{
liquivorstarray[jahrea] = mietearray[jahrea] + einspeisdarl - pvnkdarl - annuberarray[jahrea];
liquivorstarray2[jahrea] = mietearray[jahrea] + einspeisdarl - pvnkdarl - annuberarray2[jahrea];
}
// Liquidität Erwerbsjahr anpassen
liquivorstarray[1] = Math.floor((mietearray[1] / 12 * (12 - erwmon)) + (einspeisdarl / 12 * (12 - erwmon)) - (pvnkdarl / 12 * (12 - erwmon)) - annuberarray[1]);

// -------------------------------------------------------------------------------  Steuerrelevante Umsätze berechnen  -------------------------------------------------------------
var umssteuerrelarray = new Array(30);
var umssteuerrelarray2 = new Array(30);
for (jahrea = 1; jahrea <= 30; jahrea++)
{
umssteuerrelarray[jahrea] = mietearray[jahrea] + einspeisdarl - pvnkdarl - zinsjahrarray[jahrea];
umssteuerrelarray2[jahrea] = mietearray[jahrea] + einspeisdarl - pvnkdarl - zinsjahrarray2[jahrea];
}
// Steuerrelevante Umsätze Erwerbsjahr anpassen
umssteuerrelarray[1] = Math.ceil((mietearray[1] / 12 * (12 - erwmon)) + (einspeisdarl / 12 * (12 - erwmon)) - (pvnkdarl / 12 * (12 - erwmon)) - zinsjahrarray[1]);

// ------------------------------------------------------- AfA - Rechner ----------------------------------------------------------------------------------------------

// Abschreibung Hallen berechnen
var hallenauswahl10 = false;
var kpbuero = document.getElementById("kpbuero").value;
kpbuero = parseFloat(kpbuero);
var kpbuero2 = kpbuero;
var abschrdauer = 14;
var abschrsatzbuero = 0.03;

var bemgrundlstell = document.getElementById("kpstellpl").value;
bemgrundlstell = bemgrundlstell.replaceAll(".","");
bemgrundlstell = bemgrundlstell.replace(",",".");
bemgrundlstell = parseFloat(bemgrundlstell);
var bemgrundlhalle = document.getElementById("kphallen").value;
bemgrundlhalle = bemgrundlhalle.replaceAll(".","");
bemgrundlhalle = bemgrundlhalle.replace(",",".");
bemgrundlhalle = parseFloat(bemgrundlhalle);
bemgrundlhalle = bemgrundlhalle + bemgrundlstell;
var bemgrundlhalle2 = 0;
if (verksel == true)
{
var bemgrundlstell2 = document.getElementById("kpstellpl2").value;
bemgrundlstell2 = bemgrundlstell.replaceAll(".","");
bemgrundlstell2 = bemgrundlstell.replace(",",".");
bemgrundlhalle2 = document.getElementById("kphallen2").value;
bemgrundlhalle2 = bemgrundlhalle2.replaceAll(".","");
bemgrundlhalle2 = bemgrundlhalle2.replace(",",".");
}
bemgrundlstell2 = parseFloat(bemgrundlstell2);
bemgrundlhalle2 = parseFloat(bemgrundlhalle2);
bemgrundlhalle2 = bemgrundlhalle2 + bemgrundlstell2;
if (hallenauswahl10 == true)
         {
         bemgrundlhalle = bemgrundlhalle - kpbuero;
		 
		 bemgrundlhalle2 = bemgrundlhalle2 - kpbuero2;
		 
         }
var erwnkhalle = 0;
var erwnkbuero = kpbuero * 7 / 100;
var abschrhalle = (bemgrundlhalle + erwnkhalle) / abschrdauer;
var abschrbuero = (kpbuero + erwnkbuero) * abschrsatzbuero;
var abschrgeserwj = Math.floor((abschrhalle + abschrbuero) / 12 * (12 - erwmon + 1));
var abschrges = abschrhalle + abschrbuero;
abschrges = abschrges.toFixed(2);
abschrges = parseFloat(abschrges);
abschrgeserwj = abschrgeserwj.toFixed(2);
abschrgeserwj = parseFloat(abschrgeserwj);
var erwnkhalle2 = 0;
var erwnkbuero2 = kpbuero2 * 7 / 100;
var abschrhalle2 = (bemgrundlhalle2 + erwnkhalle2) / abschrdauer;
var abschrbuero2 = (kpbuero2 + erwnkbuero2) * abschrsatzbuero;
var abschrgeserwj2 = Math.floor(abschrhalle2 + abschrbuero2);
var abschrges2 = abschrhalle2 + abschrbuero2;
abschrges2 = abschrges2.toFixed(2);
abschrges2 = parseFloat(abschrges2);
abschrgeserwj2 = abschrgeserwj2.toFixed(2);
abschrgeserwj2 = parseFloat(abschrgeserwj2);
var abschrgesarray = new Array(30);
abschrgesarray[1] = abschrgeserwj;
var abschrgesarray2 = new Array(30);
abschrgesarray2[1] = abschrges2;
for (jahrea = 2; jahrea <= 30; jahrea++)
{
if (jahrea <= 14)
         {
         abschrgesarray[jahrea] = abschrges;
		 
		 abschrgesarray2[jahrea] = abschrges2;
		 
         }
else
         {
         abschrgesarray[jahrea] = abschrbuero;
		 
		 
		 abschrgesarray2[jahrea] = abschrbuero2;
		 
         }
}
// IAB berechnen
var iabausw = document.getElementById("iabjanein").checked;
if (iabausw == true) {
         var iabwert = document.getElementById("iabvalue").value;
		 document.getElementById("iabhoeheslidervalue").innerHTML = iabwert + ' %'; }
else {
         var iabwert = 0; }
var iabbetrag = iabkvpv * iabwert / 100;
// Sonder-AfA berechnen
var sonderafaausw = document.getElementById("sonderafavalue").value;
document.getElementById("sonderafaslidervalue").innerHTML = sonderafaausw + ' Jahre';
sonderafaausw = parseFloat(sonderafaausw);
var sonderafabem = (iabkvpv - iabbetrag) * 20 / 100;
var sonderafaarray = new Array(5);
for (jahrea = 1; jahrea <= 5; jahrea++)
{
if (sonderafaausw == "0") {
         sonderafaarray[jahrea] = 0; }
}
if (sonderafaausw == "1") {
         sonderafaarray[1] = sonderafabem;
         sonderafaarray[2] = 0;
         sonderafaarray[3] = 0;
         sonderafaarray[4] = 0;
         sonderafaarray[5] = 0; }
if (sonderafaausw == "2") {
         sonderafaarray[1] = sonderafabem / 2;
         sonderafaarray[2] = sonderafabem / 2;
         sonderafaarray[3] = 0;
         sonderafaarray[4] = 0;
         sonderafaarray[5] = 0; }
if (sonderafaausw == "3") {
         sonderafaarray[1] = sonderafabem / 3;
         sonderafaarray[2] = sonderafabem / 3;
         sonderafaarray[3] = sonderafabem / 3;
         sonderafaarray[4] = 0;
         sonderafaarray[5] = 0; }
if (sonderafaausw == "4") {
         sonderafaarray[1] = sonderafabem / 4;
         sonderafaarray[2] = sonderafabem / 4;
         sonderafaarray[3] = sonderafabem / 4;
         sonderafaarray[4] = sonderafabem / 4;
         sonderafaarray[5] = 0; }
if (sonderafaausw == "5") {
         sonderafaarray[1] = sonderafabem / 5;
         sonderafaarray[2] = sonderafabem / 5;
         sonderafaarray[3] = sonderafabem / 5;
         sonderafaarray[4] = sonderafabem / 5;
         sonderafaarray[5] = sonderafabem / 5; }
// AfA PV berechnen
var afapvdauer = 20;
var afapvbem = iabkvpv - iabbetrag;
var afapvbem2 = iabkvpv2 - iabbetrag;
var afapvarray = new Array(30);
var afapvarray2 = new Array(30);
for (jahrea = 2; jahrea <= 5; jahrea++)
{
afapvarray[jahrea] = afapvbem / afapvdauer + sonderafaarray[jahrea];
afapvarray2[jahrea] = afapvbem2 / afapvdauer + sonderafaarray[jahrea];
}
afapvarray[1] = (afapvbem / afapvdauer + sonderafaarray[1]) / 12 * (12 - erwmon + 1);
afapvarray2[1] = afapvbem2 / afapvdauer + sonderafaarray[1];
var afapvredu = afapvarray[1];
var afapvredu2 = afapvarray2[1];
for (jahrea = 2; jahrea <= 5; jahrea++)
{
afapvredu = afapvredu + afapvarray[jahrea];
afapvredu2 = afapvredu2 + afapvarray2[jahrea];
}
for (jahrea = 6; jahrea <= 20; jahrea++)
{
afapvarray[jahrea] = (afapvbem - afapvredu) / (afapvdauer - 5);
afapvarray[jahrea] = afapvarray[jahrea].toFixed(2);
afapvarray[jahrea] = parseFloat(afapvarray[jahrea]);
afapvarray2[jahrea] = (afapvbem2 - afapvredu2) / (afapvdauer - 5);
afapvarray2[jahrea] = afapvarray2[jahrea].toFixed(2);
afapvarray2[jahrea] = parseFloat(afapvarray2[jahrea]);
}
for (jahrea = 21; jahrea <= 30; jahrea++)
{
afapvarray[jahrea] = 0;
afapvarray[jahrea] = afapvarray[jahrea].toFixed(2);
afapvarray[jahrea] = parseFloat(afapvarray[jahrea]);
afapvarray2[jahrea] = 0;
afapvarray2[jahrea] = afapvarray2[jahrea].toFixed(2);
afapvarray2[jahrea] = parseFloat(afapvarray2[jahrea]);
}
// ------------------------------------------------------- Steuerrechner ----------------------------------------------------------------------------------------------

var steuersatz = document.getElementById("steuersatzvalue").value;
document.getElementById("slidervalue2").innerHTML = steuersatz + ' %';
steuersatz = parseFloat(steuersatz);
var steuersatz2 = document.getElementById("verkaufsteuervalue").value;
steuersatz2 = parseFloat(steuersatz2);
document.getElementById("verkaufsteuerslidervalue").innerHTML = steuersatz2 + ' %';
// Steuervorteil im Jahr VOR Anschaffung
var steueriab = Math.floor(iabbetrag * steuersatz / 100);
var steueriab2 = Math.floor(iabbetrag * steuersatz2 / 100);
// Steuervorteil Erwerbsjahr + Folgejahre
var steuervorteil = new Array(30);
steuervorteil[0] = steueriab;
var steuervorteil2 = new Array(30);
var steuernachdurch2 = 0;
steuervorteil2[0] = steueriab2;
var steuervortdurch2 = steuervorteil2[0];
for (jahrea = 1; jahrea <= 30; jahrea++)
{
steuervorteil[jahrea] = Math.floor((umssteuerrelarray[jahrea] - afapvarray[jahrea] - abschrgesarray[jahrea]) * steuersatz / 100 *-1);
steuervorteil[jahrea] = parseFloat(steuervorteil[jahrea]);
//steuervortdurch = steuervortdurch + steuervorteil[jahrea];
steuervorteil2[jahrea] = Math.floor((umssteuerrelarray2[jahrea] - afapvarray2[jahrea] - abschrgesarray2[jahrea]) * steuersatz2 / 100 *-1);
steuervorteil2[jahrea] = parseFloat(steuervorteil2[jahrea]);
//steuervortdurch2 = steuervortdurch2 + steuervorteil2[jahrea];
}

// ------------------------------------- Summierter Überschuss nach Steuern + Renditerechner -------------------------------------------------------------------------
var liquinachstarray = new Array(30);
var liquinachstkummarray = new Array(30);
var liquinachstarray2 = new Array(30);
var liquinachstkummarray2 = new Array(30);
liquinachstarray[0] = steuervorteil[0];
liquinachstkummarray[0] = liquinachstarray[0];
liquinachstarray2[0] = steuervorteil2[0];
liquinachstkummarray2[0] = liquinachstarray2[0];
for (jahrea = 1; jahrea <= 30; jahrea++)
{
liquinachstarray[jahrea] = liquivorstarray[jahrea] + steuervorteil[jahrea];
liquinachstarray[jahrea] = liquinachstarray[jahrea].toFixed(2);
liquinachstarray[jahrea] = parseFloat(liquinachstarray[jahrea]);
liquinachstkummarray[jahrea] = liquinachstkummarray[jahrea - 1] + liquinachstarray[jahrea];
liquinachstarray2[jahrea] = liquivorstarray2[jahrea] + steuervorteil2[jahrea];
liquinachstarray2[jahrea] = liquinachstarray2[jahrea].toFixed(2);
liquinachstarray2[jahrea] = parseFloat(liquinachstarray2[jahrea]);
liquinachstkummarray2[jahrea] = liquinachstkummarray2[jahrea - 1] + liquinachstarray2[jahrea];
}
var liquinachstpa = Math.floor(liquinachstkummarray[30] / 30);
var liquinachstmtl = Math.floor(liquinachstpa / 12);
var liquinachsttext = "";
var liquinachstpa2 = Math.floor(liquinachstkummarray2[30] / 30);
var liquinachstmtl2 = Math.floor(liquinachstpa2 / 12);
var liquinachsttext2 = "";
if (liquinachstmtl < 0)
         {
         liquinachsttext = "Aufwand nach Steuern \u2205 (ca.):";
         }
else
         {
         liquinachsttext = "\u00DCberschuss nach Steuern \u2205 (ca.):";
         }
var ek = document.getElementById("ekaus").value;
ek = ek.replaceAll(".","");
ek = ek.replace(",",".");
ek = parseFloat(ek);
ek = ek *-1;

// ------------------------------------------------ Verkauf nach x Jahren Daten + Arrays aufbereiten ----------------------------------------------------

var verkjahrchart =  verkjahr + 1;
var restjahre2 = 29 - verkjahr;
var steuervortchart2 = new Array(30);
var liquinachstkummchart2 = new Array(30);
var liquinachstmtlarray = new Array(30);
var darlverlchartb = new Array(30);
for (let j = (verkjahrchart + 1); j < 31; j++)
{
steuervortchart2[j] = steuervorteil2[j - verkjahrchart];
liquinachstkummchart2[j] = liquinachstkummarray2[j - verkjahrchart];
}
steuervortchart2[verkjahrchart] = steuervorteil2[0];
liquinachstkummchart2[verkjahrchart] = liquinachstkummarray2[0];
var liquinachstkumm1 = 0;
var liquinachstkumm2 = 0;
for (let j = verkjahrchart; j < 31; j++)
{
darlverlchartb[j] = darljahrarray2[j - verkjahr];
darlverlchartb[j] = parseFloat(darlverlchartb[j]);
}

var darljahrgew = 0;
if (verksel == true)
         {
                 liquinachstkumm1 = liquinachstkummarray[verkjahr];
                 liquinachstkumm2 = liquinachstkummarray2[restjahre2];
                 darljahrgew = gesamtinvest2 - darljahrarray[verkjahrchart - 1];
                 for (let j = verkjahrchart; j < 31; j++)
                 {
                 steuervorteil[j] = 0;
                 liquinachstkummarray[j] = 0;
                 liquinachstarray[j] = 0;
                 darljahrarray[j] = 0;                 
                 }
         }
else
         {
                liquinachstkumm1 = liquinachstkummarray[14];
                for (let j = 0; j < 31; j++)
                 {
                 steuervortchart2[j] = 0;
                 liquinachstkummchart2[j] = 0;
                 liquinachstarray2[j] = 0;                 
                 }
         }
var liquinachstarraymtl = new Array(30);
var liquinachstarraymtl2 = new Array(30);
for (let j = 0; j < 31; j++)
{
liquinachstarraymtl[j] = Math.round(liquinachstarray[j] / 12);
liquinachstarraymtl2[j] = Math.round(liquinachstarray2[j] / 12);
liquinachstarraymtl[j] = liquinachstarraymtl[j].toLocaleString('de-DE', { minimumFractionDigits: 2 });
liquinachstarraymtl2[j] = liquinachstarraymtl2[j].toLocaleString('de-DE', { minimumFractionDigits: 2 });
}
var liquimtlarrausg2 = new Array(30);
for (let j = (verkjahrchart + 1); j < 31; j++)
{
liquimtlarrausg2[j] = liquinachstarraymtl2[j - verkjahrchart];
}
liquimtlarrausg2[verkjahrchart] = liquinachstarraymtl2[0];
var steuervortkumm1 = 0;
var steuervortkumm2 = 0;
for (let j = 0; j < steuervorteil.length; j++)
{
steuervortkumm1 = steuervortkumm1 + steuervorteil[j];
}
if (verksel == false)
{
	steuervortkumm1 = 0;
	for (let j = 0; j < 15; j++)
	{
		steuervortkumm1 = steuervortkumm1 + steuervorteil[j];
	}
}
for (let j = verkjahrchart; j < 31; j++)
{
steuervortkumm2 = steuervortkumm2 + steuervortchart2[j];
}

//--------------- Zwischenberechnung Durchschnittswerte Steuervorteil / Steuerlast ----------------------------

var steuernachdurch = 0;
var steuervortdurch = steuervortkumm1;
steuervortdurch = Math.floor(steuervortdurch / 14);
steuervortdurch = parseFloat(steuervortdurch);
//steuervortdurch2 = Math.floor(steuervortdurch2 / 30);
//steuervortdurch2 = parseFloat(steuervortdurch2);
if (steuervortdurch < 0)
         {
         steuernachdurch = steuervortdurch;
         steuervortdurch = 0;
         steuernachdurch = steuernachdurch * -1;
		 //steuernachdurch2 = steuervortdurch2;
         //steuervortdurch2 = 0;
         //steuernachdurch2 = steuernachdurch2 * -1;
         }
var steuervortdurchmtl = Math.floor(steuervortdurch / 12);
var steuernachdurchmtl = Math.ceil(steuernachdurch / 12);
//var steuervortdurchmtl2 = Math.floor(steuervortdurch2 / 12);
//var steuernachdurchmtl2 = Math.ceil(steuernachdurch2 / 12);


steuervortkumm1 = steuervortkumm1.toLocaleString('de-DE', { minimumFractionDigits: 0 });
steuervortkumm2 = steuervortkumm2.toLocaleString('de-DE', { minimumFractionDigits: 0 });
liquinachstkumm1 = liquinachstkumm1.toLocaleString('de-DE', { minimumFractionDigits: 0 });
liquinachstkumm2 = liquinachstkumm2.toLocaleString('de-DE', { minimumFractionDigits: 0 });

var gesamterlvk = darljahrgew;
var gesamtueberschvk = gesamterlvk + liquinachstkummarray[verkjahr];

if (darljahrgew >= 0)
{	
	if (verkjahr <= 9)
	{
		var darljahrgewtext = '\u00DCberschuss steuerpfl. nach Darlehensabl\u00F6sung: ' + darljahrgew.toLocaleString('de-DE', { minimumFractionDigits: 0 }) + ' \u20AC';
	}
	else
	{
		var darljahrgewtext = '\u00DCberschuss steuerfrei nach Darlehensabl\u00F6sung: ' + darljahrgew.toLocaleString('de-DE', { minimumFractionDigits: 0 }) + ' \u20AC';
	}
}
else
{		
	var darljahrgewtext = 'Verlust nach Darlehensabl\u00F6sung: ' + (darljahrgew * -1).toLocaleString('de-DE', { minimumFractionDigits: 0 }) + ' \u20AC';
}
var steuervortkummval = '';
var kummueberschnstval = '';
var darljahrgewval = '';

// ------------------------------------------------------------------------------------------ Renditerechner ------------------------------------------------------------------------------------------
/* Berechnungsvarianten Rendite:
   Variante 1 = Überschuss nach Steuern erst plus, dann minus
   Variante 2 = Überschuss nach Steuern erst minus, dann plus
   Variante 3 = Überschuss nach Steuern nach 30 Jahren plus / Nach Verkauf plus - Renditeberechnung nach Aktienrenditeformel
   Variante 4 = Überschuss nach Steuern nach 30 Jahren minus / Nach Verkauf minus - Renditeberechnung nach Sparkassenformel (Ansparplan)
   Variante 5 = noch undefiniert, Werte erfassen    */

//if (liquinachstkummarray[15] > 0 && liquinachstkummarray[30] < 0)
//{
//	var renditevariante = 1;
//}
//else if (liquinachstkummarray[15] < 0 && liquinachstkummarray[30] > 0)
//{
//	var renditevariante = 2;
//}
if ((liquinachstkummarray[14] > 0) || (verksel == true && liquinachstkummarray[verkjahr] > 0))
{
	var renditevariante = 3;
}
else if ((liquinachstkummarray[14] < 0) || (verksel == true && liquinachstkummarray[verkjahr] < 0))
{
	var renditevariante = 4;
}
else
{
	var renditevariante = 5;
}

//document.getElementById('projektname').value = renditevariante;

var wertlastenfrei = gesamtinvest - darljahrarray[darllzvalue + 1];
if (isNaN(wertlastenfrei))
{
	wertlastenfrei = gesamtinvest - darljahrarray[30];
}
if (wertlastenfrei <= 0)
{
	wertlastenfrei = 0;
}

if (verksel == false && renditevariante == 4)
{
	var zuzges = liquinachstkummarray[30] * -1;
	var sparratevar4 = zuzges / darllzvalue;
	var renditevar4 = 0;	
	//do {
    //renditevar4 = renditevar4 + 0.0001;    
    //} while (ek * Math.pow(1+renditevar4/100, darllzvalue) + (sparratevar4 * ((Math.pow(1+renditevar4/100, darllzvalue) - 1) / (renditevar4/100)) * (1+renditevar4/100)) < wertlastenfrei);
    renditevar4 = renditevar4.toFixed(2);
	renditevar4 = parseFloat(renditevar4);
	renditevar4 = renditevar4.toLocaleString('de-DE', { minimumFractionDigits: 2 }) + " %";
}
var vkzuzges = 0;
if (verksel == true && renditevariante == 4)
{
	vkzuzges = liquinachstkummarray[verkjahr] * -1;	
	var vksparratevar4 = vkzuzges / verkjahr;
	var vkrenditevar4 = 0;	
	if (ek <= 0)
	{
		ek = 0;
	}
	//do {
    //vkrenditevar4 = vkrenditevar4 + 0.0001;    
    //} while (ek * Math.pow(1+vkrenditevar4/100, verkjahr) + (vksparratevar4 * ((Math.pow(1+vkrenditevar4/100, verkjahr) - 1) / (vkrenditevar4/100)) * (1+vkrenditevar4/100)) < gesamterlvk);
	vkrenditevar4 = vkrenditevar4.toFixed(2);
	vkrenditevar4 = parseFloat(vkrenditevar4);
	vkrenditevar4 = vkrenditevar4.toLocaleString('de-DE', { minimumFractionDigits: 2 }) + " %";
}
var rendite = 0;
if (verksel == false && renditevariante == 3)
{
rendite = (liquinachstkummarray[30] + (wertlastenfrei - ek)) * 100 / (30 * ek);
rendite = rendite.toFixed(2);
rendite = rendite.toLocaleString('de-DE', { minimumFractionDigits: 2 }) + ' %';
}
if (ek <= 0)
	{
		ek = 0;
	}
if (ek == 0 && renditevariante == 3)
{
	rendite = '<img src="img/renditeohneek.jpg" width="69" height="50"/>';
	var renditepdf = "rechnerisch nicht mehr darstellbar !";
}
else
{	
	rendite = rendite.toLocaleString('de-DE', { minimumFractionDigits: 2 });
	var renditepdf = rendite;
}
var zusamfasstext = 'Zusammenfassung</br>nach 14 Jahren';

if (gesamtueberschvk > 0 && renditevariante == 3)
{
	var renditevk = (liquinachstkummarray[verkjahr] + (gesamterlvk - ek)) * 100 / (verkjahr * ek);
	renditevk = renditevk.toFixed(2);
	var liquivk = liquinachstkummarray[verkjahr] + gesamterlvk;
	var reingewvk = liquivk - ek;
	if (ek == 0)
	{
		renditevk = '<img src="img/renditeohneek.jpg" width="69" height="50"/>';
		document.getElementById('renditepdf').value = "rechnerisch nicht mehr darstellbar !";
	}
	else
	{		
		renditevk = renditevk.toLocaleString('de-DE', { minimumFractionDigits: 2 }) + " %";
		document.getElementById('renditepdf').value = renditevk;
	}
	
	var zusamvktext = '<div style="display: grid; grid-template-columns: auto auto;"><div style="align-self: center; text-align: left; margin: 0 0 10px 5px;">Eigenkapital:</div><div style="font-size: 18px; font-weight: bold; color: darkorange; text-align: right; margin: 0 5px 10px 0;"> ' + ek.toLocaleString('de-DE', { minimumFractionDigits: 0 }) + ' &#8364</div></div>' +
					  '<div style="display: grid; grid-template-columns: auto auto;"><div style="align-self: center; text-align: left; margin: 0 0 10px 5px; font-size: 12px;">\u00DCberschuss w&auml;hrend der Laufzeit ca.:</div><div style="align-self: center; font-size: 18px; font-weight: bold; color: darkblue; text-align: right; margin: 0 5px 10px 0;">' + liquinachstkummarray[verkjahr].toLocaleString('de-DE', { minimumFractionDigits: 0 }) + ' &#8364</div></div>' +
					  '<div style="display: grid; grid-template-columns: auto auto;"><div style="align-self: center; text-align: left; margin: 0 0 10px 5px;">Gewinn durch Verkauf:</div><div style="align-self: center; font-size: 18px; font-weight: bold; color: darkblue; text-align: right; margin: 0 5px 10px 0;"> ' + gesamterlvk.toLocaleString('de-DE', { minimumFractionDigits: 0 }) + ' &#8364</div></div>' +
                      //'<div style="display: grid; grid-template-columns: auto auto;"><div style="align-self: center; text-align: left; margin: 0 0 10px 5px;">Liquidit&auml;t ca.:</br><span style="font-size: 10px;">(\u00DCberschuss + Gewinn)</span></div><div style="font-size: 18px; font-weight: bold; color: darkblue; text-align: right; margin: 0 5px 10px 0;"> ' + liquivk.toLocaleString('de-DE', { minimumFractionDigits: 0 }) + ' &#8364</div></div>' +
					  '<div style="display: grid; grid-template-columns: auto auto;"><div style="align-self: center; text-align: left; margin: 0 0 10px 5px; font-size: 12px;">Reingewinn nach Abzug Eigenkapital:</div><div style="align-self: center; font-size: 18px; font-weight: bold; color: darkblue; text-align: right; margin: 0 5px 10px 0;"> ' + reingewvk.toLocaleString('de-DE', { minimumFractionDigits: 0 }) + ' &#8364</div></div>';				      
	document.getElementById('chart3text1pdf').value = "\u00DCberschuss w&auml;hrend der Laufzeit ca.:";
	document.getElementById('chart3data1pdf').value = '<span style="color: darkblue;">' + liquinachstkummarray[verkjahr].toLocaleString('de-DE', { minimumFractionDigits: 2 }) + ' EUR</span>';
	if (verkjahr > "1")
		 {
		 document.getElementById('chart2text1pdf').value = "Gewinn durch Verkauf nach " + verkjahr + " Jahren:";
		 }
		 else
		 {
		 document.getElementById('chart2text1pdf').value = "Gewinn durch Verkauf nach " + verkjahr + " Jahr:";
		 }
	document.getElementById('chart2data1pdf').value = '<span style="color: darkblue;">' + gesamterlvk.toLocaleString('de-DE', { minimumFractionDigits: 2 }) + ' EUR</span>';
	document.getElementById('liquitext1pdf').value = "Liquidit&auml;t (\u00DCberschuss + Gewinn) ca.:";
	document.getElementById('liquidata1pdf').value = '<span style="color: darkblue;">' + liquivk.toLocaleString('de-DE', { minimumFractionDigits: 2 }) + ' EUR</span>';
	document.getElementById('reingewdata1pdf').value = '<span style="color: darkblue;">' + reingewvk.toLocaleString('de-DE', { minimumFractionDigits: 2 }) + ' EUR</span>';
}
else if (gesamtueberschvk > 0 && renditevariante == 4)
{
	var liquivk = gesamterlvk - vkzuzges;
	var reingewvk = liquivk - ek;	
	var zusamvktext = '<div style="display: grid; grid-template-columns: auto auto;"><div style="align-self: center; text-align: left; margin: 0 0 10px 5px;">Eigenkapital:</div><div style="font-size: 18px; font-weight: bold; color: darkorange; text-align: right; margin: 0 5px 10px 0;"> ' + ek.toLocaleString('de-DE', { minimumFractionDigits: 0 }) + ' &#8364</div></div>' +
					  '<div style="display: grid; grid-template-columns: auto auto;"><div style="align-self: center; text-align: left; margin: 0 0 10px 5px; font-size: 12px;">Zuzahlung w&auml;hrend</br>der Laufzeit ca.:</div><div style="align-self: center; font-size: 18px; font-weight: bold; color: darkorange; text-align: right; margin: 0 5px 10px 0;">' + vkzuzges.toLocaleString('de-DE', { minimumFractionDigits: 0 }) + ' &#8364</div></div>' +
					  '<div style="display: grid; grid-template-columns: auto auto;"><div style="align-self: center; text-align: left; margin: 0 0 10px 5px;">Gewinn durch Verkauf:</div><div style="align-self: center; font-size: 18px; font-weight: bold; color: darkblue; text-align: right; margin: 0 5px 10px 0;"> ' + gesamterlvk.toLocaleString('de-DE', { minimumFractionDigits: 0 }) + ' &#8364</div></div>' +
				      //'<div style="display: grid; grid-template-columns: auto auto;"><div style="align-self: center; text-align: left; margin: 0 0 10px 5px;">Liquidit&auml;t ca.:</br><span style="font-size: 10px;">(Gewinn - Zuzahlungen)</span></div><div style="font-size: 18px; font-weight: bold; color: darkblue; text-align: right; margin: 0 5px 10px 0;"> ' + liquivk.toLocaleString('de-DE', { minimumFractionDigits: 0 }) + ' &#8364</div></div>' +
					  '<div style="display: grid; grid-template-columns: auto auto;"><div style="align-self: center; text-align: left; margin: 0 0 10px 5px; font-size: 12px;">Reingewinn nach</br>Abzug Eigenkapital:</div><div style="align-self: center; font-size: 18px; font-weight: bold; color: darkblue; text-align: right; margin: 0 5px 10px 0;"> ' + reingewvk.toLocaleString('de-DE', { minimumFractionDigits: 0 }) + ' &#8364</div></div>';				      
	document.getElementById('chart3text1pdf').value = "Zuzahlung w&auml;hrend der Laufzeit ca.:";
	document.getElementById('chart3data1pdf').value = '<span style="color: darkorange;">' + vkzuzges.toLocaleString('de-DE', { minimumFractionDigits: 2 }) + ' EUR</span>';
	if (verkjahr > "1")
		 {
		 document.getElementById('chart2text1pdf').value = "Gewinn durch Verkauf nach " + verkjahr + " Jahren:";
		 }
		 else
		 {
		 document.getElementById('chart2text1pdf').value = "Gewinn durch Verkauf nach " + verkjahr + " Jahr:";
		 }
	document.getElementById('chart2data1pdf').value = '<span style="color: darkblue;">' + gesamterlvk.toLocaleString('de-DE', { minimumFractionDigits: 2 }) + ' EUR</span>';	
	document.getElementById('liquitext1pdf').value = "Liquidit&auml;t (Gewinn - Zuzahlungen) ca.:";
	document.getElementById('liquidata1pdf').value = '<span style="color: darkblue;">' + liquivk.toLocaleString('de-DE', { minimumFractionDigits: 2 }) + ' EUR</span>';
	document.getElementById('reingewdata1pdf').value = '<span style="color: darkblue;">' + reingewvk.toLocaleString('de-DE', { minimumFractionDigits: 2 }) + ' EUR</span>';
	document.getElementById('renditepdf').value = vkrenditevar4;
}
else
{
	var liquivk = gesamterlvk - vkzuzges;
	var reingewvk = liquivk - ek;	
	var gesamtverlvk = gesamtueberschvk * -1;
	var zusamvktext = '<div style="display: grid; grid-template-columns: auto auto;"><div style="align-self: center; text-align: left; margin: 0 0 10px 5px;">Eigenkapital:</div><div style="font-size: 18px; font-weight: bold; color: darkorange; text-align: right; margin: 0 5px 10px 0;"> ' + ek.toLocaleString('de-DE', { minimumFractionDigits: 0 }) + ' &#8364</div></div>' +
					  '<div style="display: grid; grid-template-columns: auto auto;"><div style="align-self: center; text-align: left; margin: 0 0 10px 5px; font-size: 12px;">Zuzahlung w&auml;hrend</br>der Laufzeit ca.:</div><div style="align-self: center; font-size: 18px; font-weight: bold; color: darkorange; text-align: right; margin: 0 5px 10px 0;">' + vkzuzges.toLocaleString('de-DE', { minimumFractionDigits: 0 }) + ' &#8364</div></div>' +
					  '<div style="display: grid; grid-template-columns: auto auto;"><div style="align-self: center; text-align: left; margin: 0 0 10px 5px;">Gewinn durch Verkauf:</div><div style="align-self: center; font-size: 18px; font-weight: bold; color: darkblue; text-align: right; margin: 0 5px 10px 0;"> ' + gesamterlvk.toLocaleString('de-DE', { minimumFractionDigits: 0 }) + ' &#8364</div></div>' +
				      //'<div style="display: grid; grid-template-columns: auto auto;"><div style="align-self: center; text-align: left; margin: 0 0 10px 5px;">Liquidit&auml;t ca.:</br><span style="font-size: 10px;">(Gewinn - Zuzahlungen)</span></div><div style="font-size: 18px; font-weight: bold; color: darkblue; text-align: right; margin: 0 5px 10px 0;"> ' + liquivk.toLocaleString('de-DE', { minimumFractionDigits: 0 }) + ' &#8364</div></div>' +
					  '<div style="display: grid; grid-template-columns: auto auto;"><div style="align-self: center; text-align: left; margin: 0 0 10px 5px; font-size: 12px;">Reingewinn nach</br>Abzug Eigenkapital:</div><div style="align-self: center; font-size: 18px; font-weight: bold; color: darkblue; text-align: right; margin: 0 5px 10px 0;"> ' + reingewvk.toLocaleString('de-DE', { minimumFractionDigits: 0 }) + ' &#8364</div></div>';				      
	document.getElementById('chart3text1pdf').value = "Zuzahlung w&auml;hrend der Laufzeit ca.:";
	document.getElementById('chart3data1pdf').value = '<span style="color: darkorange;">' + vkzuzges.toLocaleString('de-DE', { minimumFractionDigits: 2 }) + ' EUR</span>';
	if (verkjahr > "1")
		 {
		 document.getElementById('chart2text1pdf').value = "Gewinn durch Verkauf nach " + verkjahr + " Jahren:";
		 }
		 else
		 {
		 document.getElementById('chart2text1pdf').value = "Gewinn durch Verkauf nach " + verkjahr + " Jahr:";
		 }
	document.getElementById('chart2data1pdf').value = '<span style="color: darkblue;">' + gesamterlvk.toLocaleString('de-DE', { minimumFractionDigits: 2 }) + ' EUR</span>';
	document.getElementById('liquitext1pdf').value = "Liquidit&auml;t (Gewinn - Zuzahlungen) ca.:";
	document.getElementById('liquidata1pdf').value = '<span style="color: darkblue;">' + liquivk.toLocaleString('de-DE', { minimumFractionDigits: 2 }) + ' EUR</span>';
	document.getElementById('reingewdata1pdf').value = '<span style="color: darkblue;">' + reingewvk.toLocaleString('de-DE', { minimumFractionDigits: 2 }) + ' EUR</span>';
	document.getElementById('renditepdf').value = "0,00";
}
if (verksel == false && renditevariante == 4)
{		
	var zuzges14 = liquinachstkummarray[14] * -1;
	var liquibeh = wertlastenfrei - zuzges14;
	var reingewbeh = liquibeh - ek;
	var zusambehtext = '<div style="display: grid; grid-template-columns: auto auto;"><div style="align-self: center; text-align: left; margin: 0 0 10px 5px;">Eigenkapital:</div><div style="font-size: 18px; font-weight: bold; color: darkorange; text-align: right; margin: 0 5px 10px 0;"> ' + ek.toLocaleString('de-DE', { minimumFractionDigits: 0 }) + ' &#8364</div></div>' +
					   '<div style="display: grid; grid-template-columns: auto auto;"><div style="align-self: center; text-align: left; margin: 0 0 10px 5px; font-size: 12px;">Zuzahlung nach</br>14 Jahren ca.:</div><div style="align-self: center; font-size: 18px; font-weight: bold; color: darkorange; text-align: right; margin: 0 5px 10px 0;">' + zuzges14.toLocaleString('de-DE', { minimumFractionDigits: 0 }) + ' &#8364</div></div>' +
					   '<div style="display: grid; grid-template-columns: auto auto;"><div style="align-self: center; text-align: left; margin: 0 0 10px 5px;">Wert lastenfrei:</div><div style="align-self: center; font-size: 18px; font-weight: bold; color: darkblue; text-align: right; margin: 0 5px 10px 0;"> ' + wertlastenfrei.toLocaleString('de-DE', { minimumFractionDigits: 0 }) + ' &#8364</div></div>' +
                       //'<div style="display: grid; grid-template-columns: auto auto;"><div style="align-self: center; text-align: left; margin: 0 0 10px 5px;">Liquidit&auml;t ca.:</br><span style="font-size: 10px;">(Wert - Zuzahlung)</span></div><div style="font-size: 18px; font-weight: bold; color: darkblue; text-align: right; margin: 0 5px 10px 0;"> ' + liquibeh.toLocaleString('de-DE', { minimumFractionDigits: 0 }) + ' &#8364</div></div>' +
					   '<div style="display: grid; grid-template-columns: auto auto;"><div style="align-self: center; text-align: left; margin: 0 0 10px 5px; font-size: 12px;">Reingewinn nach</br>Abzug Eigenkapital:</div><div style="align-self: center; font-size: 18px; font-weight: bold; color: darkblue; text-align: right; margin: 0 5px 10px 0;"> ' + reingewbeh.toLocaleString('de-DE', { minimumFractionDigits: 0 }) + ' &#8364</div></div>';				       
	document.getElementById('chart3text1pdf').value = "Zuzahlung w&auml;hrend der Laufzeit ca.:";
	document.getElementById('chart3data1pdf').value = '<span style="color: darkorange;">' + zuzges.toLocaleString('de-DE', { minimumFractionDigits: 2 }) + ' EUR</span>';
	document.getElementById('chart2text1pdf').value = "Wert lastenfrei:";	
	document.getElementById('chart2data1pdf').value = '<span style="color: darkblue;">' + wertlastenfrei.toLocaleString('de-DE', { minimumFractionDigits: 2 }) + ' EUR</span>';
	document.getElementById('liquitext1pdf').value = "Liquidit&auml;t (Wert - Zuzahlung) ca.:";
	document.getElementById('liquidata1pdf').value = '<span style="color: darkblue;">' + liquibeh.toLocaleString('de-DE', { minimumFractionDigits: 2 }) + ' EUR</span>';
	document.getElementById('reingewdata1pdf').value = '<span style="color: darkblue;">' + reingewbeh.toLocaleString('de-DE', { minimumFractionDigits: 2 }) + ' EUR</span>';
	document.getElementById('renditepdf').value = renditevar4;
}
else if (verksel == false && renditevariante == 3)
{
	var liquibeh = liquinachstkummarray[14] + wertlastenfrei;
	var reingewbeh = liquibeh - ek;	
	var zusambehtext = '<div style="display: grid; grid-template-columns: auto auto;"><div style="align-self: center; text-align: left; margin: 0 0 10px 5px;">Eigenkapital:</div><div style="font-size: 18px; font-weight: bold; color: darkorange; text-align: right; margin: 0 5px 10px 0;"> ' + ek.toLocaleString('de-DE', { minimumFractionDigits: 0 }) + ' &#8364</div></div>' +
					   '<div style="display: grid; grid-template-columns: auto auto;"><div style="align-self: center; text-align: left; margin: 0 0 10px 5px; font-size: 12px;">\u00DCberschuss nach</br>14 Jahren ca.:</div><div style="align-self: center; font-size: 18px; font-weight: bold; color: darkblue; text-align: right; margin: 0 5px 10px 0;">' + liquinachstkummarray[14].toLocaleString('de-DE', { minimumFractionDigits: 0 }) + ' &#8364</div></div>' +
					   '<div style="display: grid; grid-template-columns: auto auto;"><div style="align-self: center; text-align: left; margin: 0 0 10px 5px;">Wert lastenfrei:</div><div style="align-self: center; font-size: 18px; font-weight: bold; color: darkblue; text-align: right; margin: 0 5px 10px 0;"> ' + wertlastenfrei.toLocaleString('de-DE', { minimumFractionDigits: 0 }) + ' &#8364</div></div>' +
                       //'<div style="display: grid; grid-template-columns: auto auto;"><div style="align-self: center; text-align: left; margin: 0 0 10px 5px;">Liquidit&auml;t ca.:</br><span style="font-size: 10px;">(\u00DCberschuss + Wert)</span></div><div style="font-size: 18px; font-weight: bold; color: darkblue; text-align: right; margin: 0 5px 10px 0;"> ' + liquibeh.toLocaleString('de-DE', { minimumFractionDigits: 0 }) + ' &#8364</div></div>' +
					   '<div style="display: grid; grid-template-columns: auto auto;"><div style="align-self: center; text-align: left; margin: 0 0 10px 5px; font-size: 12px;">Reingewinn nach</br>Abzug Eigenkapital:</div><div style="align-self: center; font-size: 18px; font-weight: bold; color: darkblue; text-align: right; margin: 0 5px 10px 0;"> ' + reingewbeh.toLocaleString('de-DE', { minimumFractionDigits: 0 }) + ' &#8364</div></div>';				       
	document.getElementById('chart3text1pdf').value = "\u00DCberschuss w&auml;hrend der Laufzeit ca.:";
	document.getElementById('chart3data1pdf').value = '<span style="color: darkblue;">' + liquinachstkummarray[30].toLocaleString('de-DE', { minimumFractionDigits: 2 }) + ' EUR</span>';
	document.getElementById('chart2text1pdf').value = "Wert lastenfrei:";	
	document.getElementById('chart2data1pdf').value = '<span style="color: darkblue;">' + wertlastenfrei.toLocaleString('de-DE', { minimumFractionDigits: 2 }) + ' EUR</span>';
	document.getElementById('liquitext1pdf').value = "Liquidit&auml;t (\u00DCberschuss + Wert) ca.:";
	document.getElementById('liquidata1pdf').value = '<span style="color: darkblue;">' + liquibeh.toLocaleString('de-DE', { minimumFractionDigits: 2 }) + ' EUR</span>';
	document.getElementById('reingewdata1pdf').value = '<span style="color: darkblue;">' + reingewbeh.toLocaleString('de-DE', { minimumFractionDigits: 2 }) + ' EUR</span>';
	document.getElementById('renditepdf').value = renditepdf;
}
else
{
	var zusambehtext = "Bitte Halle ausw&auml;hlen.";
}
var liquinachstmtlpdf = new Array(30);
liquinachstmtlarray[0] = '<div class="liquinachstvjtext">Jahr vor Anschaffung:</div>' +
						 '<div class="liquinachstvjval"><input type="text" id="liquinachstvj" name="liquinachstvj" value="' + liquinachstarraymtl[0] + '" readonly /><span> &#8364</span></div>';
liquinachstmtlpdf[0] = '<input type="text" id="liquinachstpdfvj" name="liquinachstpdfvj" value="' + liquinachstarraymtl[0] + '" readonly />';
liquinachstmtlarray[1] = '<div class="liquinachst1text">Im Erwerbsjahr:</div>' +
						 '<div class="liquinachst1val"><input type="text" id="liquinachst1" name="liquinachst1" value="' + liquinachstarraymtl[1] + '" readonly /><span> &#8364</span></div>';
liquinachstmtlpdf[1] = '<input type="text" id="liquinachstpdf1" name="liquinachstpdf1" value="' + liquinachstarraymtl[1] + '" readonly />';
for (let j = 2; j < 31; j++)
{	
	liquinachstmtlarray[j] = '<div class="liquinachst' + j + 'text">Im ' + j + '. Jahr:</div>' +
							 '<div class="liquinachst' + j + 'val"><input type="text" id="liquinachst' + j + '" name="liquinachst' + j + '" value="' + liquinachstarraymtl[j] + '" readonly /><span> &#8364</span></div>';
	liquinachstmtlpdf[j] = '<input type="text" id="liquinachstpdf' + j + '" name="liquinachstpdf' + j + '" value="' + liquinachstarraymtl[j] + '" readonly />';
}
if (verksel == true)
         {
         if (verkjahr >= 2)
		 {
		 steuervortkummval = 'Steuervorteile Blau gesamt nach ' + verkjahr + ' Jahren: ' + steuervortkumm1 + ' \u20AC ' + 'Steuervorteile Orange gesamt nach ' + restjahre2 + ' Jahren: ' + steuervortkumm2 + ' \u20AC';
		 kummueberschnstval = '\u00DCberschuss Gesamt Blau nach ' + verkjahr + ' Jahren: ' + liquinachstkumm1 + ' \u20AC ' + '\u00DCberschuss Gesamt Orange nach ' + restjahre2 + ' Jahren: ' + liquinachstkumm2 + ' \u20AC';
		 }
		 else
		 {
		 steuervortkummval = 'Steuervorteile Blau gesamt nach ' + verkjahr + ' Jahr: ' + steuervortkumm1 + ' \u20AC ' + 'Steuervorteile Orange gesamt nach ' + restjahre2 + ' Jahren: ' + steuervortkumm2 + ' \u20AC';
		 kummueberschnstval = '\u00DCberschuss Gesamt Blau nach ' + verkjahr + ' Jahr: ' + liquinachstkumm1 + ' \u20AC ' + '\u00DCberschuss Gesamt Orange nach ' + restjahre2 + ' Jahren: ' + liquinachstkumm2 + ' \u20AC';
		 }		 
         darljahrgewval = darljahrgewtext;
		liquinachstmtlarray[verkjahrchart] = '<div class="liquinachstvjtext" style="color: #cf5700;">Jahr vor Anschaffung:</div>' +
											 '<div class="liquinachstvjval" style="color: #cf5700;">' +
											 '<input type="text" id="liquinachstvj" name="liquinachstvj" value="' + liquinachstarraymtl2[0] + '" readonly style="color: #cf5700;"/><span> &#8364</span></div>';
		var liquimtlbeschr2 = new Array(30);
		var liquimtlbeschr2count = 1;
		for (let j = (verkjahrchart + 1); j < 31; j++)
		{			 
		liquimtlbeschr2[j] = liquimtlbeschr2count;
		liquimtlbeschr2count = liquimtlbeschr2count + 1;
			 
		liquinachstmtlarray[j] = '<div class="liquinachst' + j + 'text" style="color: #cf5700;">Im ' + liquimtlbeschr2[j] + '. Jahr:</div>' +
		  			             '<div class="liquinachst' + j + 'val" style="color: #cf5700;">' +
								 '<input type="text" id="liquinachst' + j + '" name="liquinachst' + j + '" value="' + liquimtlarrausg2[j] + '" readonly style="color: #cf5700;"/><span> &#8364</span></div>';
		}	 
		 document.getElementById('liquinachstdiv1').innerHTML = liquinachstmtlarray[0] + liquinachstmtlarray[1] + liquinachstmtlarray[2] + liquinachstmtlarray[3] +
																liquinachstmtlarray[4] + liquinachstmtlarray[5];
		 document.getElementById('liquinachstdiv2').innerHTML = liquinachstmtlarray[6] + liquinachstmtlarray[7] + liquinachstmtlarray[8] + liquinachstmtlarray[9] +
																liquinachstmtlarray[10];
 		 document.getElementById('liquinachstdiv3').innerHTML = liquinachstmtlarray[11] + liquinachstmtlarray[12] + liquinachstmtlarray[13] + liquinachstmtlarray[14] +
																liquinachstmtlarray[15];
		 document.getElementById('liquinachstdiv4').innerHTML = liquinachstmtlarray[16] + liquinachstmtlarray[17] + liquinachstmtlarray[18] + liquinachstmtlarray[19] +
																liquinachstmtlarray[20];														
		 document.getElementById('liquinachstdiv5').innerHTML = liquinachstmtlarray[21] + liquinachstmtlarray[22] + liquinachstmtlarray[23] + liquinachstmtlarray[24] +
																liquinachstmtlarray[25];														
		 document.getElementById('liquinachstdiv6').innerHTML = liquinachstmtlarray[26] + liquinachstmtlarray[27] + liquinachstmtlarray[28] + liquinachstmtlarray[29] +
																liquinachstmtlarray[30];
		 document.getElementById('zusamdettext').innerHTML = zusamvktext;		
		 if (verkjahr > "1")
		 {
		 document.getElementById('zusammenfasstext').innerHTML = 'Zusammenfassung</br>nach ' + verkjahr + ' Jahren';
		 document.getElementById('keyfactsheader').value = 'Key-Facts nach ' + verkjahr + ' Jahren';
		 }
		 else
		 {
		 document.getElementById('zusammenfasstext').innerHTML = 'Zusammenfassung</br>nach ' + verkjahr + ' Jahr';
		 document.getElementById('keyfactsheader').value = 'Key-Facts nach ' + verkjahr + ' Jahr';
		 }
         }
else
         {
         steuervortkummval = 'Steuervorteile gesamt nach 14 Jahren: ' + steuervortkumm1 + ' \u20AC';
         kummueberschnstval = '\u00DCberschuss Gesamt nach 14 Jahren: ' + liquinachstkumm1 + ' \u20AC';
         
		 document.getElementById('liquinachstdiv1').innerHTML = liquinachstmtlarray[0] + liquinachstmtlarray[1] + liquinachstmtlarray[2] + liquinachstmtlarray[3] +
																liquinachstmtlarray[4] + liquinachstmtlarray[5];
		 document.getElementById('liquinachstdiv2').innerHTML = liquinachstmtlarray[6] + liquinachstmtlarray[7] + liquinachstmtlarray[8] + liquinachstmtlarray[9] +
																liquinachstmtlarray[10];
		 document.getElementById('liquinachstdiv3').innerHTML = liquinachstmtlarray[11] + liquinachstmtlarray[12] + liquinachstmtlarray[13] + liquinachstmtlarray[14] +
																liquinachstmtlarray[15];
         document.getElementById('liquinachstdiv4').innerHTML = liquinachstmtlarray[16] + liquinachstmtlarray[17] + liquinachstmtlarray[18] + liquinachstmtlarray[19] +
																liquinachstmtlarray[20];
         document.getElementById('liquinachstdiv5').innerHTML = liquinachstmtlarray[21] + liquinachstmtlarray[22] + liquinachstmtlarray[23] + liquinachstmtlarray[24] +
																liquinachstmtlarray[25];																
		 document.getElementById('liquinachstdiv6').innerHTML = liquinachstmtlarray[26] + liquinachstmtlarray[27] + liquinachstmtlarray[28] + liquinachstmtlarray[29] +
																liquinachstmtlarray[30];		 
		 document.getElementById('zusamdettext').innerHTML = zusambehtext;
         document.getElementById('zusammenfasstext').innerHTML = 'Zusammenfassung</br>nach 14 Jahren';
		 document.getElementById('keyfactsheader').value = 'Key-Facts nach 30 Jahren';
		 }

// --------------------------------------- Arrays für PDF-Erstellung aufbereiten --------------------------------------------------
var mietemoninp = parseFloat(document.querySelector(".sliderinput6").value);
mietemoninp = mietemoninp.toLocaleString('de-DE', { minimumFractionDigits: 2 });
var einspeispvinp = parseFloat(einspeispvvalue);
var darljahrpdf = new Array(31);
var zinsjahrpdf = new Array(31);
var tilgjahrpdf = new Array(31);
var pvnkpdfarr = new Array(31);
var einngesarr = new Array(31);
var liquivorstarrpdf = new Array(31);
var afagesarr = new Array(31);
var zuverstumsarrpdf = new Array(31);
for (let j = 1; j < 31; j++)
{
	darljahrpdf[j] = darljahrarray[j];
	zinsjahrpdf[j] = zinsjahrarray[j];
	tilgjahrpdf[j] = parseFloat(tilgjahrarray[j]);
	pvnkpdfarr[j] = pvnkdarl;
	einngesarr[j] = mietearray[j] + einspeisdarl;
	liquivorstarrpdf[j] = parseFloat(liquivorstarray[j]);	
	afagesarr[j] = Math.floor(afapvarray[j] + abschrgesarray[j]);
	zuverstumsarrpdf[j] = umssteuerrelarray[j] - afagesarr[j];
}
if (verksel == true)
{
	for (let j = verkjahrchart; j < 31; j++)
	{
		zinsjahrpdf[j] = 0;
		tilgjahrpdf[j] = 0;
		pvnkpdfarr[j] = 0;
		einngesarr[j] = 0;
		liquivorstarrpdf[j] = 0;
		afagesarr[j] = 0;
		zuverstumsarrpdf[j] = 0;
	}
}
var darljahrpdf = '<input type="text" id="darljahrpdf" name="darljahrpdf" value="' + JSON.stringify(darljahrpdf) + '" readonly /></div>';
var zinsjahrpdf = '<input type="text" id="zinsjahrpdf" name="zinsjahrpdf" value="' + JSON.stringify(zinsjahrpdf) + '" readonly /></div>';
var tilgjahrpdf = '<input type="text" id="tilgjahrpdf" name="tilgjahrpdf" value="' + JSON.stringify(tilgjahrpdf) + '" readonly /></div>';
var pvnkpdf = '<input type="text" id="pvnkpdf" name="pvnkpdf" value="' + JSON.stringify(pvnkpdfarr) + '" readonly /></div>';
var einngespdf = '<input type="text" id="einngespdf" name="einngespdf" value="' + JSON.stringify(einngesarr) + '" readonly /></div>';
var liquivorstpdf = '<input type="text" id="liquivorstpdf" name="liquivorstpdf" value="' + JSON.stringify(liquivorstarrpdf) + '" readonly /></div>';
var afagespdf = '<input type="text" id="afagespdf" name="afagespdf" value="' + JSON.stringify(afagesarr) + '" readonly /></div>';
var steuervortpdf = '<input type="text" id="steuervortpdf" name="steuervortpdf" value="' + JSON.stringify(steuervorteil) + '" readonly /></div>';
var zuverstumspdf = '<input type="text" id="zuverstumspdf" name="zuverstumspdf" value="' + JSON.stringify(zuverstumsarrpdf) + '" readonly /></div>';
var liquinachstpdf = '<input type="text" id="liquinachstpdf" name="liquinachstpdf" value="' + JSON.stringify(liquinachstarray) + '" readonly /></div>';
var liquinachstkummpdf = '<input type="text" id="liquinachstkummpdf" name="liquinachstkummpdf" value="' + JSON.stringify(liquinachstkummarray) + '" readonly /></div>';
var pvnkerwj = Math.floor(pvnkdarl / 12 * (12 - erwmon));
var pvnkerwjpdf = '<input type="text" id="pvnkerwjpdf" name="pvnkerwjpdf" value="' + pvnkerwj + '" readonly /></div>';
var einngeserwj = Math.floor((mietearray[1] + einspeisdarl) / 12 * (12 - erwmon));
var einngeserwjpdf = '<input type="text" id="einngeserwjpdf" name="einngeserwjpdf" value="' + einngeserwj + '" readonly /></div>';
var iabpdf = '<input type="text" id="iabpdf" name="iabpdf" value="' + iabbetrag + '" readonly /></div>';
var mietemonpdf = '<input type="text" id="mietemonpdf" name="mietemonpdf" value="' + mietemoninp + '" readonly /></div>';
var mietsteigpdf = '<input type="text" id="mietsteigpdf" name="mietsteigpdf" value="' + mietsteig.toLocaleString('de-DE', { minimumFractionDigits: 2 }) + '" readonly /></div>';
var erwmonpdf = '<input type="text" id="erwmonpdf" name="erwmonpdf" value="' + erwmon + '" readonly /></div>';
var einspeispvpdf = '<input type="text" id="einspeispvpdf" name="einspeispvpdf" value="' + einspeispvinp.toLocaleString('de-DE', { minimumFractionDigits: 2 }) + '" readonly /></div>';
var steuersatzpdf = '<input type="text" id="steuersatzpdf" name="steuersatzpdf" value="' + steuersatz + '" readonly /></div>';
var darllzpdf = '<input type="text" id="darllzpdf" name="darllzpdf" value="' + darllzausg + '" readonly /></div>';
var iabpdf = '<input type="text" id="iabpdf" name="iabpdf" value="' + iabwert + '" readonly /></div>';
var sonderafaauswpdf = '<input type="text" id="sonderafaauswpdf" name="sonderafaauswpdf" value="' + sonderafaausw + '" readonly /></div>';
document.getElementById('pdfvalues').innerHTML = liquinachstmtlpdf[0] + liquinachstmtlpdf[1] + liquinachstmtlpdf[2] + liquinachstmtlpdf[3] + liquinachstmtlpdf[4] +
												 liquinachstmtlpdf[5] + liquinachstmtlpdf[6] + liquinachstmtlpdf[7] + liquinachstmtlpdf[8] + liquinachstmtlpdf[9] +
												 liquinachstmtlpdf[10] + liquinachstmtlpdf[11] + liquinachstmtlpdf[12] + liquinachstmtlpdf[13] + liquinachstmtlpdf[14] +
												 darljahrpdf + zinsjahrpdf + tilgjahrpdf + pvnkpdf + pvnkerwjpdf + einngespdf + einngeserwjpdf + liquivorstpdf + afagespdf +
												 iabpdf + steuervortpdf + zuverstumspdf + liquinachstpdf + liquinachstkummpdf + mietemonpdf + mietsteigpdf + erwmonpdf +
												 einspeispvpdf + steuersatzpdf + darllzpdf + iabpdf + sonderafaauswpdf;

// ------------------------------------- Charts erstellen -------------------------------------------------------------------------
var chartjahre = new Array();
      for (let jahre = 0; jahre < 31; jahre++)
      {
             chartjahre[jahre] = jahre;
      }

google.charts.load('current', {'packages':['corechart'], 'language': 'de'});
google.charts.setOnLoadCallback(drawChart);

// Höchste Werte der Arrays für Beschriftung y-Achse ermitteln
var steuervorteilmax = 0;
var steuervorteilmin = 0;
var liquinachstmax = 0;
var liquinachstmin = 0;
var liquinachstmin2 = 0;
var liquinachstkummmax = 0;
var liquinachstkummmin = 0;
var darljahrmax = 0;
var darljahrmin = 0;
var chart1ticksoben = new Array(6);
var chart1ticksunten = new Array(6);
var chart2ticksoben = new Array(6);
var chart2ticksunten = new Array(6);
var chart3ticksoben = new Array(6);
var chart3ticksunten = new Array(6);
var chart4ticksoben = new Array(6);
var chart4ticksunten = new Array(6);
var chart1ticksjahreval = new Array(30);
var chart1ticksjahre = new Array(30);
var chart2ticksjahre = new Array(30);
var chart4ticksjahre = new Array(30);
var chart1ticksjahrejahr = 1;
var chart2ticksjahrejahr = 1;
         for (let j = 1; j < 31; j++)
                 {
                 		 chart1ticksjahreval[j] = j;
                         chart1ticksjahreval[j] = parseFloat(chart1ticksjahreval[j]);
                         chart1ticksjahre[j] = j + ".Jahr";
						 chart2ticksjahre[j] = j + ".Jahr";
                         chart4ticksjahre[j] = chart1ticksjahre[j];
                 }
         if (verksel == true)
         {
                 chart1ticksjahre[verkjahrchart] = 'VJ';
                 for (let j = (verkjahrchart + 1); j < 31; j++)
                 {
                         chart1ticksjahre[j] = chart1ticksjahrejahr + ".Jahr";
						 chart1ticksjahrejahr = chart1ticksjahrejahr + 1;
                 }
				 for (let j = verkjahrchart; j < 31; j++)
                 {
                         chart2ticksjahre[j] = chart2ticksjahrejahr + ".Jahr";
						 chart2ticksjahrejahr = chart2ticksjahrejahr + 1;
                 }
         }

         for (let j = 0; j < steuervorteil.length; j++)
         {
                 if (steuervorteil[j] > steuervorteilmax)
                 {
                 steuervorteilmax = steuervorteil[j];
                 }
                 if (steuervorteil[j] < steuervorteilmin)
                 {
                 steuervorteilmin = steuervorteil[j];
                 }
         }
         for (let j = 0; j < darljahrarray.length; j++)
         {
                 if (darljahrarray[j] > darljahrmax)
                 {
                 darljahrmax = darljahrarray[j];
                 }
                 if (darljahrarray[j] < darljahrmin)
                 {
                 darljahrmin = darljahrarray[j];
                 }
         }
         for (let j = 0; j < 15; j++)            // Chart endet nach 14 Jahren, daher Beschriftungsgröße nur bis 14. Jahr berücksichtigt
         {
                 if (liquinachstkummarray[j] > liquinachstkummmax)
                 {
                 liquinachstkummmax = liquinachstkummarray[j];
                 }
                 if (liquinachstkummarray[j] < liquinachstkummmin)
                 {
                 liquinachstkummmin = liquinachstkummarray[j];
                 }
         }
         for (let j = 0; j < liquinachstarray.length; j++)
         {
                 if (liquinachstarray[j] > liquinachstmax)
                 {
                 liquinachstmax = liquinachstarray[j];
                 }
                 if (liquinachstarray[j] < liquinachstmin)
                 {
                 liquinachstmin = liquinachstarray[j];
                 }
         }
         for (let j = 0; j < liquinachstarray2.length; j++)
         {
                 if (liquinachstarray2[j] < liquinachstmin2)
                 {
                 liquinachstmin2 = liquinachstarray2[j];
                 }
         }
         for (let j = 1; j < 6; j++)
         {
                 if (steuervorteilmax < 5000)
                 {
                 chart1ticksoben[0] = 1000;
                 chart1ticksoben[j] = chart1ticksoben[j-1] + 1000;
                 }
                 if (steuervorteilmin > -5000)
                 {
                 chart1ticksunten[0] = -1000;
                 chart1ticksunten[j] = chart1ticksunten[j-1] - 1000;
                 }
                 if (darljahrmax < 5000)
                 {
                 chart2ticksoben[0] = 1000;
                 chart2ticksoben[j] = chart2ticksoben[j-1] + 1000;
                 }
                 if (darljahrmin > -5000)
                 {
                 chart2ticksunten[0] = -1000;
                 chart2ticksunten[j] = chart2ticksunten[j-1] - 1000;
                 }
                 if (liquinachstkummmax < 5000)
                 {
                 chart3ticksoben[0] = 1000;
                 chart3ticksoben[j] = chart3ticksoben[j-1] + 1000;
                 }
                 if (liquinachstkummmin > -5000)
                 {
                 chart3ticksunten[0] = -1000;
                 chart3ticksunten[j] = chart3ticksunten[j-1] - 1000;
                 }
                 if (liquinachstmax < 5000)
                 {
                 chart4ticksoben[0] = 1000;
                 chart4ticksoben[j] = chart4ticksoben[j-1] + 1000;
                 }
                 if (liquinachstmin > -5000)
                 {
                 chart4ticksunten[0] = -1000;
                 chart4ticksunten[j] = chart4ticksunten[j-1] - 1000;
                 }
                 if (steuervorteilmax >= 5000 && steuervorteilmax < 10000)
                 {
                 chart1ticksoben[0] = 2000;
                 chart1ticksoben[j] = chart1ticksoben[j-1] + 2000;
                 }
                 if (steuervorteilmin <= -5000 && steuervorteilmin > -10000)
                 {
                 chart1ticksunten[0] = -2000;
                 chart1ticksunten[j] = chart1ticksunten[j-1] - 2000;
                 }
                 if (darljahrmax >= 5000 && darljahrmax < 10000)
                 {
                 chart2ticksoben[0] = 2000;
                 chart2ticksoben[j] = chart2ticksoben[j-1] + 2000;
                 }
                 if (darljahrmin <= -5000 && darljahrmin > -10000)
                 {
                 chart2ticksunten[0] = -2000;
                 chart2ticksunten[j] = chart2ticksunten[j-1] - 2000;
                 }
                 if (liquinachstkummmax >= 5000 && liquinachstkummmax < 10000)
                 {
                 chart3ticksoben[0] = 2000;
                 chart3ticksoben[j] = chart3ticksoben[j-1] + 2000;
                 }
                 if (liquinachstkummmin <= -5000 && liquinachstkummmin > -10000)
                 {
                 chart3ticksunten[0] = -2000;
                 chart3ticksunten[j] = chart3ticksunten[j-1] - 2000;
                 }
                 if (liquinachstmax >= 5000 && liquinachstmax < 10000)
                 {
                 chart4ticksoben[0] = 2000;
                 chart4ticksoben[j] = chart4ticksoben[j-1] + 2000;
                 }
                 if (liquinachstmin <= -5000 && liquinachstmin > -10000)
                 {
                 chart4ticksunten[0] = -2000;
                 chart4ticksunten[j] = chart4ticksunten[j-1] - 2000;
                 }
                 if (liquinachstmin2 <= -5000 && liquinachstmin2 > -10000)
                 {
                 chart4ticksunten[0] = -2000;
                 chart4ticksunten[j] = chart4ticksunten[j-1] - 2000;
                 }
                 if (steuervorteilmax >= 10000 && steuervorteilmax < 20000)
                 {
                 chart1ticksoben[0] = 4000;
                 chart1ticksoben[j] = chart1ticksoben[j-1] + 4000;
                 }
                 if (steuervorteilmin <= -10000 && steuervorteilmin > -20000)
                 {
                 chart1ticksunten[0] = -4000;
                 chart1ticksunten[j] = chart1ticksunten[j-1] - 4000;
                 }
                 if (darljahrmax >= 10000 && darljahrmax < 20000)
                 {
                 chart2ticksoben[0] = 4000;
                 chart2ticksoben[j] = chart2ticksoben[j-1] + 4000;
                 }
                 if (darljahrmin <= -10000 && darljahrmin > -20000)
                 {
                 chart2ticksunten[0] = -4000;
                 chart2ticksunten[j] = chart2ticksunten[j-1] - 4000;
                 }
                 if (liquinachstkummmax >= 10000 && liquinachstkummmax < 20000)
                 {
                 chart3ticksoben[0] = 4000;
                 chart3ticksoben[j] = chart3ticksoben[j-1] + 4000;
                 }
                 if (liquinachstkummmin <= -10000 && liquinachstkummmin > -20000)
                 {
                 chart3ticksunten[0] = -4000;
                 chart3ticksunten[j] = chart3ticksunten[j-1] - 4000;
                 }
                 if (liquinachstmax >= 10000 && liquinachstmax < 20000)
                 {
                 chart4ticksoben[0] = 4000;
                 chart4ticksoben[j] = chart4ticksoben[j-1] + 4000;
                 }
                 if (liquinachstmin <= -10000 && liquinachstmin > -20000)
                 {
                 chart4ticksunten[0] = -4000;
                 chart4ticksunten[j] = chart4ticksunten[j-1] - 4000;
                 }
                 if (liquinachstmin2 <= -10000 && liquinachstmin2 > -20000)
                 {
                 chart4ticksunten[0] = -4000;
                 chart4ticksunten[j] = chart4ticksunten[j-1] - 4000;
                 }
                 if (steuervorteilmax >= 20000 && steuervorteilmax < 40000)
                 {
                 chart1ticksoben[0] = 7000;
                 chart1ticksoben[j] = chart1ticksoben[j-1] + 7000;
                 }
                 if (steuervorteilmin <= -20000 && steuervorteilmin > -40000)
                 {
                 chart1ticksunten[0] = -8000;
                 chart1ticksunten[j] = chart1ticksunten[j-1] - 8000;
                 }
                 if (darljahrmax >= 20000 && darljahrmax < 40000)
                 {
                 chart2ticksoben[0] = 7000;
                 chart2ticksoben[j] = chart2ticksoben[j-1] + 7000;
                 }
                 if (darljahrmin <= -20000 && darljahrmin > -40000)
                 {
                 chart2ticksunten[0] = -8000;
                 chart2ticksunten[j] = chart2ticksunten[j-1] - 7000;
                 }
                 if (liquinachstkummmax >= 20000 && liquinachstkummmax < 40000)
                 {
                 chart3ticksoben[0] = 7000;
                 chart3ticksoben[j] = chart3ticksoben[j-1] + 7000;
                 }
                 if (liquinachstkummmin <= -20000 && liquinachstkummmin > -40000)
                 {
                 chart3ticksunten[0] = -8000;
                 chart3ticksunten[j] = chart3ticksunten[j-1] - 8000;
                 }
                 if (liquinachstmax >= 20000 && liquinachstmax < 40000)
                 {
                 chart4ticksoben[0] = 7000;
                 chart4ticksoben[j] = chart4ticksoben[j-1] + 7000;
                 }
                 if (liquinachstmin <= -20000 && liquinachstmin > -40000)
                 {
                 chart4ticksunten[0] = -8000;
                 chart4ticksunten[j] = chart4ticksunten[j-1] - 8000;
                 }
                 if (steuervorteilmax >= 40000 && steuervorteilmax < 1000000)
                 {
                 chart1ticksoben[0] = 17000;
                 chart1ticksoben[j] = chart1ticksoben[j-1] + 17000;
                 }
                 if (steuervorteilmin <= -40000 && steuervorteilmin > -1000000)
                 {
                 chart1ticksunten[0] = -20000;
                 chart1ticksunten[j] = chart1ticksunten[j-1] - 20000;
                 }
                 if (darljahrmax >= 40000 && darljahrmax < 1000000)
                 {
                 chart2ticksoben[0] = 17000;
                 chart2ticksoben[j] = chart2ticksoben[j-1] + 17000;
                 }
                 if (darljahrmin <= -40000 && darljahrmin > -1000000)
                 {
                 chart2ticksunten[0] = -20000;
                 chart2ticksunten[j] = chart2ticksunten[j-1] - 20000;
                 }
                 if (liquinachstkummmax >= 40000 && liquinachstkummmax < 1000000)
                 {
                 chart3ticksoben[0] = 17000;
                 chart3ticksoben[j] = chart3ticksoben[j-1] + 17000;
                 }
                 if (liquinachstkummmin <= -40000 && liquinachstkummmin > -1000000)
                 {
                 chart3ticksunten[0] = -20000;
                 chart3ticksunten[j] = chart3ticksunten[j-1] - 20000;
                 }
                 if (liquinachstmax >= 40000 && liquinachstmax < 1000000)
                 {
                 chart4ticksoben[0] = 17000;
                 chart4ticksoben[j] = chart4ticksoben[j-1] + 17000;
                 }
                 if (liquinachstmin <= -40000 && liquinachstmin > -1000000)
                 {
                 chart4ticksunten[0] = -20000;
                 chart4ticksunten[j] = chart4ticksunten[j-1] - 20000;
                 }
                 if (steuervorteilmax >= 100000 && steuervorteilmax < 2000000)
                 {
                 chart1ticksoben[0] = 34000;
                 chart1ticksoben[j] = chart1ticksoben[j-1] + 34000;
                 }
                 if (steuervorteilmin <= -100000 && steuervorteilmin > -2000000)
                 {
                 chart1ticksunten[0] = -34000;
                 chart1ticksunten[j] = chart1ticksunten[j-1] - 34000;
                 }
                 if (darljahrmax >= 100000 && darljahrmax < 2000000)
                 {
                 chart2ticksoben[0] = 34000;
                 chart2ticksoben[j] = chart2ticksoben[j-1] + 34000;
                 }
                 if (darljahrmin <= -100000 && darljahrmin > -2000000)
                 {
                 chart2ticksunten[0] = -34000;
                 chart2ticksunten[j] = chart2ticksunten[j-1] - 34000;
                 }
                 if (liquinachstkummmax >= 100000 && liquinachstkummmax < 2000000)
                 {
                 chart3ticksoben[0] = 40000;
                 chart3ticksoben[j] = chart3ticksoben[j-1] + 40000;
                 }
                 if (liquinachstkummmin <= -100000 && liquinachstkummmin > -2000000)
                 {
                 chart3ticksunten[0] = -40000;
                 chart3ticksunten[j] = chart3ticksunten[j-1] - 40000;
                 }
                 if (liquinachstmax >= 100000 && liquinachstmax < 2000000)
                 {
                 chart4ticksoben[0] = 40000;
                 chart4ticksoben[j] = chart4ticksoben[j-1] + 40000;
                 }
                 if (liquinachstmin <= -100000 && liquinachstmin > -2000000)
                 {
                 chart4ticksunten[0] = -40000;
                 chart4ticksunten[j] = chart4ticksunten[j-1] - 40000;
                 }
                 if (darljahrmax >= 200000 && darljahrmax < 5000000)
                 {
                 chart2ticksoben[0] = 84000;
                 chart2ticksoben[j] = chart2ticksoben[j-1] + 84000;
                 }
				 if (liquinachstkummmax >= 200000 && liquinachstkummmax < 3000000)
                 {
                 chart3ticksoben[0] = 60000;
                 chart3ticksoben[j] = chart3ticksoben[j-1] + 60000;
                 }
                 if (liquinachstkummmin <= -200000 && liquinachstkummmin > -3000000)
                 {
                 chart3ticksunten[0] = -60000;
                 chart3ticksunten[j] = chart3ticksunten[j-1] - 60000;
                 }
				 if (liquinachstkummmax >= 300000 && liquinachstkummmax < 5000000)
                 {
                 chart3ticksoben[0] = 84000;
                 chart3ticksoben[j] = chart3ticksoben[j-1] + 84000;
                 }
                 if (liquinachstkummmin <= -300000 && liquinachstkummmin > -5000000)
                 {
                 chart3ticksunten[0] = -84000;
                 chart3ticksunten[j] = chart3ticksunten[j-1] - 84000;
                 }
                 if (liquinachstmax >= 200000 && liquinachstmax < 5000000)
                 {
                 chart4ticksoben[0] = 84000;
                 chart4ticksoben[j] = chart4ticksoben[j-1] + 84000;
                 }
                 if (liquinachstmin <= -200000 && liquinachstmin > -5000000)
                 {
                 chart4ticksunten[0] = -84000;
                 chart4ticksunten[j] = chart4ticksunten[j-1] - 84000;
                 }
                 if (darljahrmax >= 500000 && darljahrmax < 1000000)
                 {
                 chart2ticksoben[0] = 200000;
                 chart2ticksoben[j] = chart2ticksoben[j-1] + 200000;
                 }
                 if (darljahrmax >= 1000000 && darljahrmax < 2000000)
                 {
                 chart2ticksoben[0] = 400000;
                 chart2ticksoben[j] = chart2ticksoben[j-1] + 400000;
                 }
                 if (darljahrmax >= 2000000 && darljahrmax < 3500000)
                 {
                 chart2ticksoben[0] = 700000;
                 chart2ticksoben[j] = chart2ticksoben[j-1] + 700000;
                 }
         }

function drawChart() {

// Chart 1 erstellen und ausgeben
var chart1beschr2 = new Array(30);
var chart1beschr2count = 1;
for(let i = (verkjahrchart + 1); i < 15; i++)   // Chart endet nach 14 Jahren
{
chart1beschr2[i] = chart1beschr2count + ". Jahr";
chart1beschr2count = chart1beschr2count + 1;
}
chart1beschr2[verkjahrchart] = "Jahr vor Anschaffung";
	
var data = new google.visualization.DataTable();
data.addColumn('number');
data.addColumn('number', 'Steuervorteil');
data.addColumn({type: 'string', role: 'style'});

      data.addRow([{v:chartjahre[0], f:"Jahr vor Anschaffung"},
                   {v:steuervorteil[0], f: steuervorteil[0].toLocaleString('de-DE', { minimumFractionDigits: 2 }) + " \u20AC"}, 'color: #3366CC']);

      for(let i = 1; i < 15; i++)   // Chart endet nach 14 Jahren
      {
	  data.addRow([{v:chartjahre[i], f:chartjahre[i] + ". Jahr"},
      {v:steuervorteil[i], f: steuervorteil[i].toLocaleString('de-DE', { minimumFractionDigits: 2 }) + " \u20AC"}, 'color: #3366CC']);   // Statt '0' das Array mit [i] der Chartdaten eintragen
      }
	  
	  for(let i = (verkjahrchart); i < 15; i++)    // Chart endet nach 14 Jahren
      {      	  
	  data.addRow([{v:chartjahre[i], f:chart1beschr2[i]},
      {v:steuervortchart2[i], f: steuervortchart2[i].toLocaleString('de-DE', { minimumFractionDigits: 2 }) + " \u20AC"}, 'color: #FF9900']);   // Statt '0' das Array mit [i] der Chartdaten eintragen      
	  }

var options = {
          chartArea:{left:80,top:30,width:"80%",height:"75%"},
          title: steuervortkummval,
          titleTextStyle: {
                          fontSize: 12 // 12, 18 whatever you want (don't specify px)
                          },
          vAxis: {
                 title: 'Betrag in EUR',
                 viewWindow: {min: chart1ticksunten[4], max: chart1ticksoben[4] },
                 ticks: [chart1ticksunten[4], chart1ticksunten[3], chart1ticksunten[2], chart1ticksunten[1], chart1ticksunten[0], 0, chart1ticksoben[0], chart1ticksoben[1], chart1ticksoben[2], chart1ticksoben[3], chart1ticksoben[4]] // Beschriftung anzeigen 1.000-er Schritte
                 },
          hAxis: {
                 textStyle: { fontSize: 9 },
                 maxValue: 15,     // Max. Jahre der Chartanzeige
                 baselineColor: 'transparent',
                 ticks: [{v:1, f:chart1ticksjahre[1]},{v:5, f:chart1ticksjahre[5]},{v:10, f:chart1ticksjahre[10]},{v:14, f:chart1ticksjahre[14]}] // Beschriftung unten anzeigen
                 },
          colors: ['white'],
          legend: { position: 'bottom' }
};




var chart_div = document.getElementById('curve_chart1');
var chart = new google.visualization.ColumnChart(chart_div);
var pngchart1 = document.getElementById('pngchart1');

// Wait for the chart to finish drawing before calling the getImageURI() method.
google.visualization.events.addListener(chart, 'ready', function () {
       pngchart1.value = '<img src="' + chart.getImageURI() + '" width="auto" height="auto">';        
       });

chart.draw(data, options);

// Chart 2 erstellen und ausgeben
var chartbbeschrb = new Array(30);
var chartbbeschrbcount = 1;
for(let i = (verkjahrchart); i < 31; i++)
{
chartbbeschrb[i] = chartbbeschrbcount + ". Jahr";
chartbbeschrbcount = chartbbeschrbcount + 1;
}

var datab = new google.visualization.DataTable();
datab.addColumn('number');
datab.addColumn('number', 'Darlehensstand');
datab.addColumn({type: 'string', role: 'style'});

      for(let jahreb = 1; jahreb < chartjahre.length; jahreb++)
      {
             datab.addRow([{v:chartjahre[jahreb], f:chartjahre[jahreb] + ". Jahr"}, {v:darljahrarray[jahreb], f: darljahrarray[jahreb].toLocaleString('de-DE', { minimumFractionDigits: 2 }) + " \u20AC"}, 'color: #3366CC']);   // Statt '0' das Array mit [jahreb] der Chartdaten eintragen
      }

      for(let j = verkjahrchart; j < 31; j++)
      {
             datab.addRow([{v:chartjahre[j], f:chartbbeschrb[j]}, {v:darlverlchartb[j], f: darlverlchartb[j].toLocaleString('de-DE', { minimumFractionDigits: 2 }) + " \u20AC"}, 'color: #FF9900']);   // Statt '0' das Array mit [jahreb] der Chartdaten eintragen
      }

// Create and draw the visualization.

var options = {
          chartArea:{left:80,top:30,width:"80%",height:"75%"},
          title: darljahrgewval,
          titleTextStyle: {
                          fontSize: 12 // 12, 18 whatever you want (don't specify px)
                          },
          vAxis: {
                 title: 'Betrag in EUR',
                 viewWindow: {min: chart2ticksunten[4], max: chart2ticksoben[4] },
                 ticks: [chart2ticksunten[4], chart2ticksunten[3], chart2ticksunten[2], chart2ticksunten[1], chart2ticksunten[0], 0, chart2ticksoben[0], chart2ticksoben[1], chart2ticksoben[2], chart2ticksoben[3], chart2ticksoben[4]] // Beschriftung anzeigen 1.000-er Schritte
                 },
          hAxis: {
                 textStyle: { fontSize: 9 },
                 maxValue: 32,
                 baselineColor: 'transparent',
                 ticks: [{v:1, f:chart2ticksjahre[1]},{v:5, f:chart2ticksjahre[5]},{v:10, f:chart2ticksjahre[10]},{v:15, f:chart2ticksjahre[15]},{v:20, f:chart2ticksjahre[20]},{v:25, f:chart2ticksjahre[25]},{v:30, f:chart2ticksjahre[30]}] // Beschriftung anzeigen 3-er Schritte
                 },
          colors: ['white'],
          legend: { position: 'bottom' }
};
var chart_divb = document.getElementById('curve_chart2');
var chartb = new google.visualization.ColumnChart(chart_divb);
var pngchart2 = document.getElementById('pngchart2');

// Wait for the chart to finish drawing before calling the getImageURI() method.
google.visualization.events.addListener(chartb, 'ready', function () {
       pngchart2.value = '<img src="' + chartb.getImageURI() + '" width="auto" height="auto">';        
       });

chartb.draw(datab, options);

// Chart 3 erstellen und ausgeben
var chart3beschr2 = new Array(30);
var chart3beschr2count = 1;
for(let i = (verkjahrchart + 1); i < 31; i++)
{
chart3beschr2[i] = chart3beschr2count + ". Jahr";
chart3beschr2count = chart3beschr2count + 1;
}
chart3beschr2[verkjahrchart] = "Jahr vor Anschaffung";

var datac = new google.visualization.DataTable();
datac.addColumn('number');
datac.addColumn('number', 'Kummulierter \u00DCberschuss nach Steuern');
datac.addColumn({type: 'string', role: 'style'});

      datac.addRow([{v:chartjahre[0], f:"Jahr vor Anschaffung"}, {v:liquinachstkummarray[0], f: liquinachstkummarray[0].toLocaleString('de-DE', { minimumFractionDigits: 2 }) + " \u20AC"}, 'color: #3366CC']);

      for(let jahrec = 1; jahrec < 15; jahrec++)
      {
             datac.addRow([{v:chartjahre[jahrec], f:chartjahre[jahrec] + ". Jahr"}, {v:liquinachstkummarray[jahrec], f: liquinachstkummarray[jahrec].toLocaleString('de-DE', { minimumFractionDigits: 2 }) + " \u20AC"}, 'color: #3366CC']);   // Statt '0' das Array mit [i] der Chartdaten eintragen
      }      

      for(let jahrec = verkjahrchart; jahrec < 15; jahrec++)
      {
             datac.addRow([{v:chartjahre[jahrec], f:chart3beschr2[jahrec]}, {v:liquinachstkummchart2[jahrec], f: liquinachstkummchart2[jahrec].toLocaleString('de-DE', { minimumFractionDigits: 2 }) + " \u20AC"}, 'color: #FF9900']);   // Statt '0' das Array mit [i] der Chartdaten eintragen
      }

// Create and draw the visualization.

var options = {
          chartArea:{left:80,top:30,width:"80%",height:"75%"},
          title: kummueberschnstval,
          titleTextStyle: {
                          fontSize: 12 // 12, 18 whatever you want (don't specify px)
                          },
          vAxis: {
                 title: '\u00DCberschuss in EUR',
                 viewWindow: {min: chart3ticksunten[4], max: chart3ticksoben[4] },
                 ticks: [chart3ticksunten[3], chart3ticksunten[2], chart3ticksunten[1], chart3ticksunten[0], 0, chart3ticksoben[0], chart3ticksoben[1], chart3ticksoben[2], chart3ticksoben[3]] // Beschriftung anzeigen
                 },
          hAxis: {
                 textStyle: { fontSize: 9 },
                 maxValue: 15,
                 baselineColor: 'transparent',
                 ticks: [{v:chart1ticksjahreval[1], f:chart1ticksjahre[1]}, {v:chart1ticksjahreval[5], f:chart1ticksjahre[5]}, {v:chart1ticksjahreval[10], f:chart1ticksjahre[10]}, {v:chart1ticksjahreval[14], f:chart1ticksjahre[14]}] // Beschriftung anzeigen 3-er Schritte
                 },
          colors: ['white'],
          legend: { position: 'bottom' }
};
var chart_divc = document.getElementById('curve_chart3');
var chartc = new google.visualization.ColumnChart(chart_divc);
var pngchart3 = document.getElementById('pngchart3');

// Wait for the chart to finish drawing before calling the getImageURI() method.
google.visualization.events.addListener(chartc, 'ready', function () {
       pngchart3.value = '<img src="' + chartc.getImageURI() + '" width="auto" height="auto">';        
       });

chartc.draw(datac, options);

}
// Chart 4 erstellen und ausgeben

/*
var datad = new google.visualization.DataTable();
if (verksel == false)
{
datad.addColumn('number');
datad.addColumn('number', '\u00DCberschuss / Jahr nach Steuern');
datad.addColumn({type:'number', role:'tooltip'});

      datad.addRow
      ([
      chartjahre[0],
      liquinachstarray[0],
      {v:chartjahre[0], f: "Jahr vor Anschaffung: " + liquinachstarray[0].toLocaleString('de-DE', { minimumFractionDigits: 2 }) + " \u20AC"}
      ]);

      for(let jahred = 1; jahred < chartjahre.length; jahred++)
      {
             datad.addRow
             ([
             chartjahre[jahred],
             liquinachstarray[jahred],
             {v:chartjahre[jahred], f:chartjahre[jahred] + ". Jahr: " + liquinachstarray[jahred].toLocaleString('de-DE', { minimumFractionDigits: 2 }) + " \u20AC"}
             ]);   // Statt '0' das Array mit [i] der Chartdaten eintragen
      }
}
if (verksel == true)
{
datad.addColumn('number');
datad.addColumn('number', '\u00DCberschuss / Jahr nach Steuern Erwerber 1');
datad.addColumn({type:'number', role:'tooltip'});
datad.addColumn('number', '\u00DCberschuss / Jahr nach Steuern Erwerber 2');
datad.addColumn({type:'number', role:'tooltip'});

      datad.addRow
      ([
      chartjahre[0],
      liquinachstarray[0],
      {v:chartjahre[0], f: "Jahr vor Anschaffung: " + liquinachstarray[0].toLocaleString('de-DE', { minimumFractionDigits: 2 }) + " \u20AC"},
      liquinachstarray2[0],
      {v:chartjahre[0], f: " "}
      ]);

      for(let jahred = 1; jahred < chartjahre.length; jahred++)
      {
             if (jahred < '14')
             {
             datad.addRow
             ([
             chartjahre[jahred],
             liquinachstarray[jahred],
             {v:chartjahre[jahred], f:chartjahre[jahred] + ". Jahr: " + liquinachstarray[jahred].toLocaleString('de-DE', { minimumFractionDigits: 2 }) + " \u20AC"},
             liquinachstarray2[jahred],
             {v:chartjahre[jahred], f: " "}
             ]);
             }
             if (jahred == '14')
             {
             datad.addRow
             ([
             chartjahre[jahred],
             liquinachstarray[jahred],
             {v:chartjahre[jahred], f:chartjahre[jahred] + ". Jahr: " + liquinachstarray[jahred].toLocaleString('de-DE', { minimumFractionDigits: 2 }) + " \u20AC"},
             liquinachstarray2[jahred],
             {v:chartjahre[jahred], f: "Jahr vor Anschaffung: " + liquinachstarray2[jahred].toLocaleString('de-DE', { minimumFractionDigits: 2 }) + " \u20AC"}
             ]);
             }
             if (jahred > '14')
             {
             datad.addRow
             ([
             chartjahre[jahred],
             liquinachstarray[jahred],
             {v:chartjahre[jahred], f:chartjahre[jahred] + ". Jahr: " + liquinachstarray[jahred].toLocaleString('de-DE', { minimumFractionDigits: 2 }) + " \u20AC"},
             liquinachstarray2[jahred],
             {v:chartjahre[jahred], f:chartjahre[jahred - 14] + ". Jahr: " + liquinachstarray2[jahred].toLocaleString('de-DE', { minimumFractionDigits: 2 }) + " \u20AC"}
             ]);
             }
      }
}

// Create and draw the visualization.

var options = {
          chartArea:{left:80,top:30,width:"93%",height:"70%"},
          title: '',
          titleTextStyle: {
                          fontSize: 12 // 12, 18 whatever you want (don't specify px)
                          },
          vAxis: {
                 title: 'Betrag in EUR',
                 viewWindow: {min: chart4ticksunten[4], max: chart4ticksoben[4] },
                 ticks: [chart4ticksunten[4], chart4ticksunten[2], chart4ticksunten[0], 0, chart4ticksoben[0], chart4ticksoben[2], chart4ticksoben[4]] // Beschriftung anzeigen
                 },
          hAxis: {
                 textStyle: { fontSize: 9 },
                 maxValue: 32,
                 baselineColor: 'transparent',
                 ticks: [{v:chart1ticksjahreval[1], f:chart4ticksjahre[1]}, {v:chart1ticksjahreval[5], f:chart4ticksjahre[5]}, {v:chart1ticksjahreval[10], f:chart4ticksjahre[10]}, {v:chart1ticksjahreval[15], f:chart4ticksjahre[15]}, {v:chart1ticksjahreval[20], f:chart4ticksjahre[20]}, {v:chart1ticksjahreval[25], f:chart4ticksjahre[25]}, {v:chart1ticksjahreval[30], f:chart4ticksjahre[30]}] // Beschriftung anzeigen 3-er Schritte
                 },
          colors: ['blue', 'red'],
          legend: {
                  position: 'top',
                  alignment: 'center',
                  textStyle: {bold: true}
                  }
};
new google.visualization.LineChart(document.getElementById('curve_chart4')).
draw(datad, options);

*/

// Datenausgabe in Formular
document.getElementById("annu1").value = annuberarray[1];
document.getElementById("annu").value = annuber;
document.getElementById("darlratepa").value = annuber.toLocaleString('de-DE', { minimumFractionDigits: 2 });
document.getElementById("darlratemtl").value = annubermtl.toLocaleString('de-DE', { minimumFractionDigits: 2 });
document.getElementById("kalkauspa").value = ausgges.toLocaleString('de-DE', { minimumFractionDigits: 2 });
document.getElementById("kalkausmtl").value = ausggesmtl.toLocaleString('de-DE', { minimumFractionDigits: 2 });
document.getElementById("steuervortpa").value = steuervortdurch.toLocaleString('de-DE', { minimumFractionDigits: 2 });
document.getElementById("steuervortmtl").value = steuervortdurchmtl.toLocaleString('de-DE', { minimumFractionDigits: 2 });
document.getElementById("steuernachpa").value = steuernachdurch.toLocaleString('de-DE', { minimumFractionDigits: 2 });
document.getElementById("steuernachmtl").value = steuernachdurchmtl.toLocaleString('de-DE', { minimumFractionDigits: 2 });
// document.getElementById("ergnachstpa").value = liquinachstpa.toLocaleString('de-DE', { minimumFractionDigits: 2 });
// document.getElementById("ergnachstmtl").value = liquinachstmtl.toLocaleString('de-DE', { minimumFractionDigits: 2 });
// document.getElementById("ergnachsttext").innerHTML = liquinachsttext;
document.getElementById("darlverl5").value = darljahrarray[5];
document.getElementById("darlverl10").value = darljahrarray[10];
document.getElementById("darlverl20").value = darljahrarray[20];
document.getElementById("darlverl30").value = darljahrarray[30];
document.getElementById("zinsverl5").value = zinsjahrarray[5];
document.getElementById("zinsverl10").value = zinsjahrarray[10];
document.getElementById("zinsverl20").value = zinsjahrarray[20];
document.getElementById("zinsverl30").value = zinsjahrarray[30];
document.getElementById("tilgverl5").value = tilgjahrarray[5];
document.getElementById("tilgverl10").value = tilgjahrarray[10];
document.getElementById("tilgverl20").value = tilgjahrarray[20];
document.getElementById("tilgverl30").value = tilgjahrarray[30];
document.getElementById("liquivorst1").value = liquivorstarray[1].toFixed(2);
document.getElementById("liquivorst10").value = liquivorstarray[2].toFixed(2);
document.getElementById("umssteuerrel1").value = umssteuerrelarray[1].toFixed(2);
document.getElementById("umssteuerrel2").value = umssteuerrelarray[2].toFixed(2);
document.getElementById("umssteuerrel5").value = umssteuerrelarray[5].toFixed(2);
document.getElementById("umssteuerrel10").value = umssteuerrelarray[10].toFixed(2);
document.getElementById("umssteuerrel20").value = umssteuerrelarray[20].toFixed(2);
document.getElementById("umssteuerrel30").value = umssteuerrelarray[30].toFixed(2);
document.getElementById("afahalle1").value = abschrgeserwj;
document.getElementById("afahalle15").value = abschrgesarray[15];
document.getElementById("iabpv").value = iabbetrag;
document.getElementById("afapv1").value = afapvarray[1];
document.getElementById("afapv2").value = afapvarray[2];
document.getElementById("afapv3").value = afapvarray[3];
document.getElementById("afapv4").value = afapvarray[4];
document.getElementById("afapv5").value = afapvarray[5];
document.getElementById("afapv6").value = afapvarray[6];
document.getElementById("steueriab").value = steueriab;
document.getElementById("steuer1").value = steuervorteil[1];
document.getElementById("steuer2").value = steuervorteil[2];
document.getElementById("steuer5").value = steuervorteil[5];
document.getElementById("steuer10").value = steuervorteil[10];
document.getElementById("steuer20").value = steuervorteil[20];
document.getElementById("steuer30").value = steuervorteil[30];
document.getElementById("darllzslider").value = darllzvalue;
document.getElementById("darllzslidertext").innerHTML = darllzausg;
document.getElementById("darllzslider").disabled = true;
}