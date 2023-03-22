function calculate() {
    var wfl = parseInt(document.getElementById('wfl').value.replace(',', '.'));
    var anzwohnungen = parseInt(document.getElementById('anzwohnungen').value);
    var anzstellpl = parseInt(document.getElementById('anzstellpl').value);
    //var ertragbau = 0;
    var kpgrdst = parseInt(document.getElementById('kpgrdst').value.replace(',', '.'));
    var bodenrichtw = parseInt(document.getElementById('bodenrichtw').value.replace(',', '.'));
if (kpgrdst <= bodenrichtw)
{
bodenrichtw = kpgrdst
}
    document.getElementById("kpgrdsteur").value = kpgrdst.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
    var abbruchkost = parseInt(document.getElementById('abbruchkost').value);
    var zinssatz = document.getElementById('zinssatz').value.replace(',', '.');
    var tilgaussetzsel = document.getElementById('tilgaussetzselect');
    var tilgaussetzvalue = tilgaussetzsel[tilgaussetzsel.selectedIndex].value;
    var sonderafasel = document.getElementById('sonderafa');
    var sonderafavalue = sonderafasel[sonderafasel.selectedIndex].value;
    var mietefestsel = document.getElementById('mietefest');
    var mietefestvalue = mietefestsel[mietefestsel.selectedIndex].value;
    document.getElementById("mietefestvalue").value = mietefestvalue;
    document.getElementById("mietefesttext").value = mietefestvalue + " Jahren";
    var tilgungssatz = document.getElementById('tilgungssatz').value.replace(',', '.');
    var mietemarkt = document.getElementById('mietemarkt').value.replace(',', '.');
    var mietemarktstellpl = document.getElementById('mietemarktstellpl').value.replace(',', '.');
    var mietsteig = document.getElementById('mietsteig').value.replace(',', '.');
    var steuersatz = parseInt(document.getElementById('steuersatz').value);
    var notarproz = parseFloat(document.getElementById('notarproz').value.replace(',', '.'));
    var grderwstsel = document.getElementById('grderwst');
    var grderwstproz = parseInt(grderwstsel[grderwstsel.selectedIndex].value);
    var instandhaltsel = document.getElementById('instandhalt');
    var instandhaltvalue = parseInt(instandhaltsel[instandhaltsel.selectedIndex].value);
if (instandhaltvalue == 1)
{
var instandhaltung = 7.1 * wfl
}
else
{
var instandhaltung = 0
}
    document.getElementById("instandhaltausg").value = instandhaltung.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
    var mietsteigamtsel = document.getElementById('mietsteigamt');
    var mietsteigamtvalue = parseInt(mietsteigamtsel[mietsteigamtsel.selectedIndex].value);
    document.getElementById("mietsteigamtvalue").value = mietsteigamtvalue;
    var wfleinheit = wfl / anzwohnungen;
    //document.getElementById("wfleinheit").value = wfleinheit.toFixed(2) + " m\u00B2";
    //var calcertragges = ertragbau * wfl;
    //document.getElementById("calcertragges").value = calcertragges.toFixed(2) + " \u20AC";
    //var calcertrageinheit = calcertragges / anzwohnungen;
    //document.getElementById("calcertrageinheit").value = calcertrageinheit.toFixed(2) + " \u20AC";
    var kaufneben = kpgrdst * (notarproz + grderwstproz) / 100;
    var kaufnebenzusch = bodenrichtw * (notarproz + grderwstproz) / 100;
    document.getElementById("kaufneben").value = kaufneben.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
    var baukosteing = parseFloat(document.getElementById('baukost').value.replace(',', '.'));
    var baukosten = wfl * baukosteing;
    document.getElementById("baukosten").value = baukosten.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
    var gesamtkosten = kpgrdst + kaufneben + baukosten;
    document.getElementById("gesamtkosten").value = gesamtkosten.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";

// Zuschuss gem. Mietfestschreibung berechnen
if (mietefestvalue == "15")
{
    var zuschussges = (bodenrichtw + kaufnebenzusch + (wfl * 3000)) * 0.8 / 3.52;
    var zuschgesjahr = zuschussges / 15;
}
else if (mietefestvalue == "25")
{
    var zuschussges = (bodenrichtw + kaufnebenzusch + (wfl * 3000)) * 0.8 / 2.4;
    var zuschgesjahr = zuschussges / 25;
}
else
{
    var zuschussges = (bodenrichtw + kaufnebenzusch + (wfl * 3000)) * 0.8 / 2.21;
    var zuschgesjahr = zuschussges / 35;
}
    var sonstein = parseInt(document.getElementById('weitereein').value);
    var sonsteinjahr = sonstein * 12;
    document.getElementById("sonsteinjahr").value = sonsteinjahr.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
    var wertsteig = parseFloat(document.getElementById('wertsteig').value.replace(',', '.'));

// Wertsteigerung berechnen
    var wertsteigarray = new Array(30);
for (wertst = 0; wertst <= 30; wertst++)
{
if (wertst == 0)
{
wertsteigarray[wertst] = (kpgrdst + baukosten) + ((kpgrdst + baukosten) * wertsteig / 100)
}
else
{
wertsteigarray[wertst] = wertsteigarray[wertst-1] + (wertsteigarray[wertst-1] * wertsteig / 100)
}
}
    document.getElementById("wertsteigproz").value = wertsteig.toFixed(2) + " \u0025";
if (mietefestvalue == "15")
{
    document.getElementById("wertsteigjahre").value = wertsteigarray[14].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
}
else if (mietefestvalue == "25")
{
    document.getElementById("wertsteigjahre").value = wertsteigarray[24].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
}
else
{
    document.getElementById("wertsteigjahre").value = wertsteigarray[29].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
}

// Zuschuss in Array
    var zuschjahrarray = new Array(30);
for (zusch = 0; zusch <= 30; zusch++)
{
zuschjahrarray[zusch] = zuschgesjahr.toFixed(2)
}
    document.getElementById("zuschussges").value = zuschussges.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
    var zuschussproz = zuschussges * 100 / gesamtkosten;
    document.getElementById("zuschussproz").value = zuschussproz.toFixed(2) + " \u0025";
    var kostnachzuschuss = gesamtkosten - zuschussges;
    var darl = kostnachzuschuss;
    var bsvwertmtl = 0;
    var bsvwertjahr = 0;
if (tilgaussetzvalue == 1)
{
    tilgungssatz = 0
    darl = gesamtkosten
    bsvwertmtl = 1 * wfl
    bsvwertjahr = bsvwertmtl * 12
    document.getElementById("bsvtext").value = "Zahlung BSV p.a.:"
    document.getElementById("bsvwert").value = bsvwertjahr.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC"
    document.getElementById("tilgtext").value = "Zuzahlung BSV"
}
else
{
    document.getElementById("bsvtext").value = ""
    document.getElementById("bsvwert").value = ""
    document.getElementById("tilgtext").value = "Tilgung"
}
    document.getElementById("annuproz").value = parseFloat(zinssatz) + parseFloat(tilgungssatz);
    document.getElementById("kostnachzuschuss").value = kostnachzuschuss.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
    var annu = (darl * zinssatz / 100) + (darl * tilgungssatz / 100);
    document.getElementById("annu").value = annu.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
    document.getElementById("darl").value = darl.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
    var mietefoerd = mietemarkt * 67 / 100;
    mietefoerd = mietefoerd.toFixed(2);
    var mietefoerdjahr = (wfl * mietefoerd * 12);
    document.getElementById("mietefoerd").value = mietefoerd + " \u20AC";
    document.getElementById("mietefoerdjahr").value = mietefoerdjahr.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
    var stellplfoerd = mietemarktstellpl * 67 / 100;
    document.getElementById("stellplfoerd").value = stellplfoerd.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
    var stellplfoerdjahr = anzstellpl * stellplfoerd * 12;
    document.getElementById("stellplfoerdjahr").value = stellplfoerdjahr.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
    var mietegesjahr = mietefoerdjahr + stellplfoerdjahr;
    document.getElementById("mietegesjahr").value = mietegesjahr.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
    var einnahmgesjahr = parseFloat(mietegesjahr) + parseFloat(sonsteinjahr);
    einnahmgesjahr = einnahmgesjahr.toFixed(2);
// AfA in Array
   var afaarray = new Array(30);
for (jahre4 = 0; jahre4 <= 30; jahre4++)
{
if (sonderafavalue == 0)
{
   afaarray[jahre4] = (kaufneben + baukosten) * 2 / 100
}
else if (jahre4 <= 3)
{
    afaarray[jahre4] = ((kaufneben + baukosten) * 2 / 100) + (2000 * wfl * 5 / 100)
}
else
{
    afaarray[jahre4] = (kaufneben + baukosten) * 2 / 100
}
afaarray[jahre4] = afaarray[jahre4].toFixed(2)
}
// Mietsteigerung in Array
    var mietsteigjahr = mietefoerd;
    var stellplsteigjahr = stellplfoerd;
    var sonsteinsteigjahr = sonsteinjahr;
    var mietejahrwflarray = new Array(30);
    var mietejahrmtlarray = new Array(30);
    var mietejahrpaarray = new Array(30);
    var mietejahrdiffarray = new Array(30);
    var stellpljahrarray = new Array(30);
    var sonsteinjahrarray = new Array(30);
if (mietsteigamtvalue == 1)
{
for (jahre = 0; jahre <= 30; jahre++)
{
if (jahre < 3)
{
mietejahrwflarray[jahre] = parseFloat(mietefoerd)
stellpljahrarray[jahre] = parseFloat(stellplfoerd)
}
else if (jahre == 3)
{
mietejahrwflarray[jahre] = parseFloat(mietejahrwflarray[jahre-1]) * 5 / 100 + parseFloat(mietejahrwflarray[jahre-1])
stellpljahrarray[jahre] = parseFloat(stellpljahrarray[jahre-1]) * 5 / 100 + parseFloat(stellpljahrarray[jahre-1])
}
else if (jahre == 4)
{
mietejahrwflarray[jahre] = parseFloat(mietejahrwflarray[jahre-1])
stellpljahrarray[jahre] = parseFloat(stellpljahrarray[jahre-1])
}
else if (jahre == 5)
{
mietejahrwflarray[jahre] = parseFloat(mietejahrwflarray[jahre-1]) * 5 / 100 + parseFloat(mietejahrwflarray[jahre-1])
stellpljahrarray[jahre] = parseFloat(stellpljahrarray[jahre-1]) * 5 / 100 + parseFloat(stellpljahrarray[jahre-1])
}
else if (jahre == 6)
{
mietejahrwflarray[jahre] = parseFloat(mietejahrwflarray[jahre-1])
stellpljahrarray[jahre] = parseFloat(stellpljahrarray[jahre-1])
}
else if (jahre == 7)
{
mietejahrwflarray[jahre] = parseFloat(mietejahrwflarray[jahre-1]) * 5 / 100 + parseFloat(mietejahrwflarray[jahre-1])
stellpljahrarray[jahre] = parseFloat(stellpljahrarray[jahre-1]) * 5 / 100 + parseFloat(stellpljahrarray[jahre-1])
}
else if (jahre == 8)
{
mietejahrwflarray[jahre] = parseFloat(mietejahrwflarray[jahre-1])
stellpljahrarray[jahre] = parseFloat(stellpljahrarray[jahre-1])
}
else if (jahre == 9)
{
mietejahrwflarray[jahre] = parseFloat(mietejahrwflarray[jahre-1]) * 5 / 100 + parseFloat(mietejahrwflarray[jahre-1])
stellpljahrarray[jahre] = parseFloat(stellpljahrarray[jahre-1]) * 5 / 100 + parseFloat(stellpljahrarray[jahre-1])
}
else if (jahre == 10)
{
mietejahrwflarray[jahre] = parseFloat(mietejahrwflarray[jahre-1])
stellpljahrarray[jahre] = parseFloat(stellpljahrarray[jahre-1])
}
else if (jahre == 11)
{
mietejahrwflarray[jahre] = parseFloat(mietejahrwflarray[jahre-1]) * 5 / 100 + parseFloat(mietejahrwflarray[jahre-1])
stellpljahrarray[jahre] = parseFloat(stellpljahrarray[jahre-1]) * 5 / 100 + parseFloat(stellpljahrarray[jahre-1])
}
else if (jahre == 12)
{
mietejahrwflarray[jahre] = parseFloat(mietejahrwflarray[jahre-1])
stellpljahrarray[jahre] = parseFloat(stellpljahrarray[jahre-1])
}
else if (jahre == 13)
{
mietejahrwflarray[jahre] = parseFloat(mietejahrwflarray[jahre-1]) * 5 / 100 + parseFloat(mietejahrwflarray[jahre-1])
stellpljahrarray[jahre] = parseFloat(stellpljahrarray[jahre-1]) * 5 / 100 + parseFloat(stellpljahrarray[jahre-1])
}
else if (jahre == 14)
{
mietejahrwflarray[jahre] = parseFloat(mietejahrwflarray[jahre-1])
stellpljahrarray[jahre] = parseFloat(stellpljahrarray[jahre-1])
}
else if (jahre == 15)
{
mietejahrwflarray[jahre] = parseFloat(mietejahrwflarray[jahre-1]) * 5 / 100 + parseFloat(mietejahrwflarray[jahre-1])
stellpljahrarray[jahre] = parseFloat(stellpljahrarray[jahre-1]) * 5 / 100 + parseFloat(stellpljahrarray[jahre-1])
}
else if (jahre == 16)
{
mietejahrwflarray[jahre] = parseFloat(mietejahrwflarray[jahre-1])
stellpljahrarray[jahre] = parseFloat(stellpljahrarray[jahre-1])
}
else if (jahre == 17)
{
mietejahrwflarray[jahre] = parseFloat(mietejahrwflarray[jahre-1]) * 5 / 100 + parseFloat(mietejahrwflarray[jahre-1])
stellpljahrarray[jahre] = parseFloat(stellpljahrarray[jahre-1]) * 5 / 100 + parseFloat(stellpljahrarray[jahre-1])
}
else if (jahre == 18)
{
mietejahrwflarray[jahre] = parseFloat(mietejahrwflarray[jahre-1])
stellpljahrarray[jahre] = parseFloat(stellpljahrarray[jahre-1])
}
else if (jahre == 19)
{
mietejahrwflarray[jahre] = parseFloat(mietejahrwflarray[jahre-1]) * 5 / 100 + parseFloat(mietejahrwflarray[jahre-1])
stellpljahrarray[jahre] = parseFloat(stellpljahrarray[jahre-1]) * 5 / 100 + parseFloat(stellpljahrarray[jahre-1])
}
else if (jahre == 20)
{
mietejahrwflarray[jahre] = parseFloat(mietejahrwflarray[jahre-1])
stellpljahrarray[jahre] = parseFloat(stellpljahrarray[jahre-1])
}
else if (jahre == 21)
{
mietejahrwflarray[jahre] = parseFloat(mietejahrwflarray[jahre-1]) * 5 / 100 + parseFloat(mietejahrwflarray[jahre-1])
stellpljahrarray[jahre] = parseFloat(stellpljahrarray[jahre-1]) * 5 / 100 + parseFloat(stellpljahrarray[jahre-1])
}
else if (jahre == 22)
{
mietejahrwflarray[jahre] = parseFloat(mietejahrwflarray[jahre-1])
stellpljahrarray[jahre] = parseFloat(stellpljahrarray[jahre-1])
}
else if (jahre == 23)
{
mietejahrwflarray[jahre] = parseFloat(mietejahrwflarray[jahre-1]) * 5 / 100 + parseFloat(mietejahrwflarray[jahre-1])
stellpljahrarray[jahre] = parseFloat(stellpljahrarray[jahre-1]) * 5 / 100 + parseFloat(stellpljahrarray[jahre-1])
}
else if (jahre == 24)
{
mietejahrwflarray[jahre] = parseFloat(mietejahrwflarray[jahre-1])
stellpljahrarray[jahre] = parseFloat(stellpljahrarray[jahre-1])
}
else if (jahre == 25)
{
mietejahrwflarray[jahre] = parseFloat(mietejahrwflarray[jahre-1]) * 5 / 100 + parseFloat(mietejahrwflarray[jahre-1])
stellpljahrarray[jahre] = parseFloat(stellpljahrarray[jahre-1]) * 5 / 100 + parseFloat(stellpljahrarray[jahre-1])
}
else if (jahre == 26)
{
mietejahrwflarray[jahre] = parseFloat(mietejahrwflarray[jahre-1])
stellpljahrarray[jahre] = parseFloat(stellpljahrarray[jahre-1])
}
else if (jahre == 27)
{
mietejahrwflarray[jahre] = parseFloat(mietejahrwflarray[jahre-1]) * 5 / 100 + parseFloat(mietejahrwflarray[jahre-1])
stellpljahrarray[jahre] = parseFloat(stellpljahrarray[jahre-1]) * 5 / 100 + parseFloat(stellpljahrarray[jahre-1])
}
else if (jahre == 28)
{
mietejahrwflarray[jahre] = parseFloat(mietejahrwflarray[jahre-1])
stellpljahrarray[jahre] = parseFloat(stellpljahrarray[jahre-1])
}
else if (jahre == 29)
{
mietejahrwflarray[jahre] = parseFloat(mietejahrwflarray[jahre-1]) * 5 / 100 + parseFloat(mietejahrwflarray[jahre-1])
stellpljahrarray[jahre] = parseFloat(stellpljahrarray[jahre-1]) * 5 / 100 + parseFloat(stellpljahrarray[jahre-1])
}
else
{
mietejahrwflarray[jahre] = parseFloat(mietejahrwflarray[jahre-1])
stellpljahrarray[jahre] = parseFloat(stellpljahrarray[jahre-1])
}

if (mietsteig > 0)
{
    var sonsteinsteig = mietsteig;
    sonsteinsteigjahr = parseFloat(sonsteinsteigjahr * sonsteinsteig / 100 + sonsteinsteigjahr)
}
mietejahrwflarray[jahre] = mietejahrwflarray[jahre].toFixed(2)
stellpljahrarray[jahre] = stellpljahrarray[jahre].toFixed(2)
sonsteinjahrarray[jahre] = sonsteinsteigjahr.toFixed(2)
mietejahrwflarray[jahre] = mietejahrwflarray[jahre] + " \u20AC"
stellpljahrarray[jahre] = stellpljahrarray[jahre] + " \u20AC"
mietejahrmtlarray[jahre] = (parseFloat(mietejahrwflarray[jahre]) * wfl) + (parseFloat(stellpljahrarray[jahre]) * anzstellpl)
mietejahrpaarray[jahre] = parseFloat(mietejahrmtlarray[jahre]) * 12
}
}
else
{
for (jahre9 = 0; jahre9 <= 30; jahre9++)
{
mietejahrwflarray[jahre9] = parseFloat(mietefoerd)
stellpljahrarray[jahre9] = parseFloat(stellplfoerd)
if (mietsteig > 0)
{
    var sonsteinsteig = mietsteig;
    sonsteinsteigjahr = parseFloat(sonsteinsteigjahr * sonsteinsteig / 100 + sonsteinsteigjahr)
}
mietejahrwflarray[jahre9] = mietejahrwflarray[jahre9].toFixed(2)
stellpljahrarray[jahre9] = stellpljahrarray[jahre9].toFixed(2)
sonsteinjahrarray[jahre9] = sonsteinsteigjahr.toFixed(2)
mietejahrwflarray[jahre9] = mietejahrwflarray[jahre9] + " \u20AC"
stellpljahrarray[jahre9] = stellpljahrarray[jahre9] + " \u20AC"
mietejahrmtlarray[jahre9] = (parseFloat(mietejahrwflarray[jahre9]) * wfl) + (parseFloat(stellpljahrarray[jahre9]) * anzstellpl)
mietejahrpaarray[jahre9] = parseFloat(mietejahrmtlarray[jahre9]) * 12
}
}
for (jahre2 = 0; jahre2 <= 30; jahre2++)
{
mietejahrdiffarray[jahre2] = mietejahrpaarray[jahre2] - parseFloat(mietegesjahr)
mietejahrdiffarray[jahre2] = mietejahrdiffarray[jahre2].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC"
}

// Tabelle Mietpreisentwicklung erzeugen

if (mietefestvalue == "15")
{

//Vorhandene Tabellenzeilen-Objekte löschen
  document.getElementById("mietpreisentwickl").innerHTML = "";

for (jahre8 = 1; jahre8 <= 15; jahre8++)
{
  var mietentwjahr = [jahre8];

  // Neues Tabellenzeilen-Objekt erstellen
  var mietenewTR = document.createElement("tr");
  // Neues Tabellenzellen-Objekt erstellen
  var mietenewTD1 = document.createElement("td");
  var mietenewTD2 = document.createElement("td");
  var mietenewTD3 = document.createElement("td");
  var mietenewTD4 = document.createElement("td");
  var mietenewTD5 = document.createElement("td");
  var mietenewTD6 = document.createElement("td");
  var mietenewTD7 = document.createElement("td");

  // HTML einfügen
  mietenewTD1.innerHTML = "<input type='text' id='miete" + mietentwjahr + "jahr' name='miete" + mietentwjahr + "jahr' readonly />";
  mietenewTD2.innerHTML = "<input type='text' id='mietejahr" + mietentwjahr + "wfl' name='mietejahr" + mietentwjahr + "wfl' readonly />";
  mietenewTD3.innerHTML = "<input type='text' id='stellpljahr" + mietentwjahr + "' name='stellpljahr" + mietentwjahr + "' readonly />";
  mietenewTD4.innerHTML = "<input type='text' id='mietejahr" + mietentwjahr + "mtl' name='mietejahr" + mietentwjahr + "mtl' readonly />";
  mietenewTD5.innerHTML = "<input type='text' id='mietejahr" + mietentwjahr + "pa' name='mietejahr" + mietentwjahr + "pa' readonly />";
  mietenewTD6.innerHTML = "<input type='text' id='mietejahr" + mietentwjahr + "basis' name='mietejahr" + mietentwjahr + "basis' readonly />";
  mietenewTD7.innerHTML = "<input type='text' id='mietejahr" + mietentwjahr + "diff' name='mietejahr" + mietentwjahr + "diff' readonly />";

  // Neue Tabellenzelle an Zeile "anhängen"
  mietenewTR.appendChild(mietenewTD1);
  mietenewTR.appendChild(mietenewTD2);
  mietenewTR.appendChild(mietenewTD3);
  mietenewTR.appendChild(mietenewTD4);
  mietenewTR.appendChild(mietenewTD5);
  mietenewTR.appendChild(mietenewTD6);
  mietenewTR.appendChild(mietenewTD7);

  // Neue Zeile in Tabelle "einhängen"
  document.getElementById("mietpreisentwickl").appendChild(mietenewTR);

  //Input-Felder füllen
  document.getElementById("miete" + mietentwjahr + "jahr").value = mietentwjahr;
  document.getElementById("mietejahr" + mietentwjahr + "wfl").value = mietejahrwflarray[jahre8-1];
  document.getElementById("stellpljahr" + mietentwjahr + "").value = stellpljahrarray[jahre8-1];
  document.getElementById("mietejahr" + mietentwjahr + "mtl").value = mietejahrmtlarray[jahre8-1].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
  document.getElementById("mietejahr" + mietentwjahr + "pa").value = mietejahrpaarray[jahre8-1].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
  document.getElementById("mietejahr" + mietentwjahr + "basis").value = mietegesjahr.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
  document.getElementById("mietejahr" + mietentwjahr + "diff").value = mietejahrdiffarray[jahre8-1];
}
}
else if (mietefestvalue == "25")
{

//Vorhandene Tabellenzeilen-Objekte löschen
  document.getElementById("mietpreisentwickl").innerHTML = "";

for (jahre8 = 1; jahre8 <= 25; jahre8++)
{
  var mietentwjahr = [jahre8];

  // Neues Tabellenzeilen-Objekt erstellen
  var mietenewTR = document.createElement("tr");
  // Neues Tabellenzellen-Objekt erstellen
  var mietenewTD1 = document.createElement("td");
  var mietenewTD2 = document.createElement("td");
  var mietenewTD3 = document.createElement("td");
  var mietenewTD4 = document.createElement("td");
  var mietenewTD5 = document.createElement("td");
  var mietenewTD6 = document.createElement("td");
  var mietenewTD7 = document.createElement("td");

  // HTML einfügen
  mietenewTD1.innerHTML = "<input type='text' id='miete" + mietentwjahr + "jahr' name='miete" + mietentwjahr + "jahr' readonly />";
  mietenewTD2.innerHTML = "<input type='text' id='mietejahr" + mietentwjahr + "wfl' name='mietejahr" + mietentwjahr + "wfl' readonly />";
  mietenewTD3.innerHTML = "<input type='text' id='stellpljahr" + mietentwjahr + "' name='stellpljahr" + mietentwjahr + "' readonly />";
  mietenewTD4.innerHTML = "<input type='text' id='mietejahr" + mietentwjahr + "mtl' name='mietejahr" + mietentwjahr + "mtl' readonly />";
  mietenewTD5.innerHTML = "<input type='text' id='mietejahr" + mietentwjahr + "pa' name='mietejahr" + mietentwjahr + "pa' readonly />";
  mietenewTD6.innerHTML = "<input type='text' id='mietejahr" + mietentwjahr + "basis' name='mietejahr" + mietentwjahr + "basis' readonly />";
  mietenewTD7.innerHTML = "<input type='text' id='mietejahr" + mietentwjahr + "diff' name='mietejahr" + mietentwjahr + "diff' readonly />";

  // Neue Tabellenzelle an Zeile "anhängen"
  mietenewTR.appendChild(mietenewTD1);
  mietenewTR.appendChild(mietenewTD2);
  mietenewTR.appendChild(mietenewTD3);
  mietenewTR.appendChild(mietenewTD4);
  mietenewTR.appendChild(mietenewTD5);
  mietenewTR.appendChild(mietenewTD6);
  mietenewTR.appendChild(mietenewTD7);

  // Neue Zeile in Tabelle "einhängen"
  document.getElementById("mietpreisentwickl").appendChild(mietenewTR);

  //Input-Felder füllen
  document.getElementById("miete" + mietentwjahr + "jahr").value = mietentwjahr;
  document.getElementById("mietejahr" + mietentwjahr + "wfl").value = mietejahrwflarray[jahre8-1];;
  document.getElementById("stellpljahr" + mietentwjahr + "").value = stellpljahrarray[jahre8-1];
  document.getElementById("mietejahr" + mietentwjahr + "mtl").value = mietejahrmtlarray[jahre8-1].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
  document.getElementById("mietejahr" + mietentwjahr + "pa").value = mietejahrpaarray[jahre8-1].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
  document.getElementById("mietejahr" + mietentwjahr + "basis").value = mietegesjahr.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
  document.getElementById("mietejahr" + mietentwjahr + "diff").value = mietejahrdiffarray[jahre8-1];
}
}
else
{

//Vorhandene Tabellenzeilen-Objekte löschen
  document.getElementById("mietpreisentwickl").innerHTML = "";

for (jahre8 = 1; jahre8 <= 30; jahre8++)
{
  var mietentwjahr = [jahre8];

  // Neues Tabellenzeilen-Objekt erstellen
  var mietenewTR = document.createElement("tr");
  // Neues Tabellenzellen-Objekt erstellen
  var mietenewTD1 = document.createElement("td");
  var mietenewTD2 = document.createElement("td");
  var mietenewTD3 = document.createElement("td");
  var mietenewTD4 = document.createElement("td");
  var mietenewTD5 = document.createElement("td");
  var mietenewTD6 = document.createElement("td");
  var mietenewTD7 = document.createElement("td");

  // HTML einfügen
  mietenewTD1.innerHTML = "<input type='text' id='miete" + mietentwjahr + "jahr' name='miete" + mietentwjahr + "jahr' readonly />";
  mietenewTD2.innerHTML = "<input type='text' id='mietejahr" + mietentwjahr + "wfl' name='mietejahr" + mietentwjahr + "wfl' readonly />";
  mietenewTD3.innerHTML = "<input type='text' id='stellpljahr" + mietentwjahr + "' name='stellpljahr" + mietentwjahr + "' readonly />";
  mietenewTD4.innerHTML = "<input type='text' id='mietejahr" + mietentwjahr + "mtl' name='mietejahr" + mietentwjahr + "mtl' readonly />";
  mietenewTD5.innerHTML = "<input type='text' id='mietejahr" + mietentwjahr + "pa' name='mietejahr" + mietentwjahr + "pa' readonly />";
  mietenewTD6.innerHTML = "<input type='text' id='mietejahr" + mietentwjahr + "basis' name='mietejahr" + mietentwjahr + "basis' readonly />";
  mietenewTD7.innerHTML = "<input type='text' id='mietejahr" + mietentwjahr + "diff' name='mietejahr" + mietentwjahr + "diff' readonly />";

  // Neue Tabellenzelle an Zeile "anhängen"
  mietenewTR.appendChild(mietenewTD1);
  mietenewTR.appendChild(mietenewTD2);
  mietenewTR.appendChild(mietenewTD3);
  mietenewTR.appendChild(mietenewTD4);
  mietenewTR.appendChild(mietenewTD5);
  mietenewTR.appendChild(mietenewTD6);
  mietenewTR.appendChild(mietenewTD7);

  // Neue Zeile in Tabelle "einhängen"
  document.getElementById("mietpreisentwickl").appendChild(mietenewTR);

  //Input-Felder füllen
  document.getElementById("miete" + mietentwjahr + "jahr").value = mietentwjahr;
  document.getElementById("mietejahr" + mietentwjahr + "wfl").value = mietejahrwflarray[jahre8-1];;
  document.getElementById("stellpljahr" + mietentwjahr + "").value = stellpljahrarray[jahre8-1];
  document.getElementById("mietejahr" + mietentwjahr + "mtl").value = mietejahrmtlarray[jahre8-1].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
  document.getElementById("mietejahr" + mietentwjahr + "pa").value = mietejahrpaarray[jahre8-1].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
  document.getElementById("mietejahr" + mietentwjahr + "basis").value = mietegesjahr.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
  document.getElementById("mietejahr" + mietentwjahr + "diff").value = mietejahrdiffarray[jahre8-1];
}
}

    annu = annu.toFixed(2);
// Darlehensverlauf in Array
    var darljahr = darl;
    var darljahrarray = new Array(30);
    var zinsjahrarray = new Array(30);
    var tilgjahrarray = new Array(30);
    var stverljahrarray = new Array(30);
    var stvortjahrarray = new Array(30);
    var aufwnachsteuerjahrarray = new Array(30);
    var einnahmgesjahrarray = new Array(30);
for (jahre3 = 0; jahre3 <= 30; jahre3++)
{
darljahrarray[jahre3] = darljahr
zinsjahrarray[jahre3] = darljahr * zinssatz / 100
if (tilgaussetzvalue == 1)
{
    tilgjahrarray[jahre3] = bsvwertjahr
}
else
{
    tilgjahrarray[jahre3] = annu - zinsjahrarray[jahre3]
    darljahr = darljahr - tilgjahrarray[jahre3]
}
einnahmgesjahrarray[jahre3] = parseFloat(mietejahrpaarray[jahre3]) + parseFloat(sonsteinjahrarray[jahre3])
stverljahrarray[jahre3] = parseFloat(einnahmgesjahrarray[jahre3]) + parseFloat(zuschjahrarray[jahre3]) - parseFloat(afaarray[jahre3 + 1]) - parseFloat(zinsjahrarray[jahre3])
stvortjahrarray[jahre3] = stverljahrarray[jahre3] * steuersatz / 100
if (tilgaussetzvalue == 1)
{
    aufwnachsteuerjahrarray[jahre3] = parseFloat(annu) + stvortjahrarray[jahre3] - einnahmgesjahrarray[jahre3] + tilgjahrarray[jahre3]
}
else
{
    aufwnachsteuerjahrarray[jahre3] = parseFloat(annu) + stvortjahrarray[jahre3] - einnahmgesjahrarray[jahre3]
}
zinsjahrarray[jahre3] = zinsjahrarray[jahre3].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC"
tilgjahrarray[jahre3] = tilgjahrarray[jahre3].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC"
stverljahrarray[jahre3] = stverljahrarray[jahre3].toFixed(2) + " \u20AC"
stvortjahrarray[jahre3] = stvortjahrarray[jahre3].toFixed(2) + " \u20AC"
aufwnachsteuerjahrarray[jahre3] = aufwnachsteuerjahrarray[jahre3].toFixed(2) + " \u20AC"
zuschjahrarray[jahre3] = zuschjahrarray[jahre3] + " \u20AC"
einnahmgesjahrarray[jahre3] = einnahmgesjahrarray[jahre3].toFixed(2) + " \u20AC"
afaarray[jahre3] = afaarray[jahre3] + " \u20AC"
}
annu = annu + " \u20AC";

// Aufwand vor Steuer in Array summiert
   var aufwvorsteuerarray = new Array(30);
for (jahre5 = 0; jahre5 <= 30; jahre5++)
{
if (jahre5 == 0)
{
aufwvorsteuerarray[jahre5] = parseFloat(annu) + bsvwertjahr - parseFloat(einnahmgesjahrarray[jahre5])
}
else
{
aufwvorsteuerarray[jahre5] = parseFloat(annu) + bsvwertjahr - parseFloat(einnahmgesjahrarray[jahre5])
aufwvorsteuerarray[jahre5] = aufwvorsteuerarray[jahre5] + aufwvorsteuerarray[jahre5 - 1]
}
}

// Aufwand vor Steuer gem. Mietfestschreibung ausgeben
if (mietefestvalue == "15")
{
    document.getElementById("aufwvorsteuer").value = aufwvorsteuerarray[14].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
}
else if (mietefestvalue == "25")
{
    document.getElementById("aufwvorsteuer").value = aufwvorsteuerarray[24].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
}
else
{
    document.getElementById("aufwvorsteuer").value = aufwvorsteuerarray[29].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
}

// Aufwand vor Steuer in Array einzeln
   var aufwvorsteuereinzarray = new Array(30);
for (jahre6 = 0; jahre6 <= 30; jahre6++)
{
aufwvorsteuereinzarray[jahre6] = parseFloat(annu) + bsvwertjahr - parseFloat(einnahmgesjahrarray[jahre6])
aufwvorsteuereinzarray[jahre6] = aufwvorsteuereinzarray[jahre6].toFixed(2) + " \u20AC"
}
// Summe benötigter Kapitaldienst vor/nach Steuern berechnen
var kapitaldienstvorsteuer = 0;
var kapitaldienstnachsteuer = 0;
if (mietefestvalue == "15")
{
for (jahre10 = 0; jahre10 <= 14; jahre10++)
{
if (parseFloat(aufwvorsteuereinzarray[jahre10]) >= 0)
{
kapitaldienstvorsteuer = kapitaldienstvorsteuer + parseFloat(aufwvorsteuereinzarray[jahre10])
}
if (parseFloat(aufwnachsteuerjahrarray[jahre10]) >= 0)
{
kapitaldienstnachsteuer = kapitaldienstnachsteuer + parseFloat(aufwnachsteuerjahrarray[jahre10])
}
}
}
else if (mietefestvalue == "25")
{
for (jahre10 = 0; jahre10 <= 24; jahre10++)
{
if (parseFloat(aufwvorsteuereinzarray[jahre10]) >= 0)
{
kapitaldienstvorsteuer = kapitaldienstvorsteuer + parseFloat(aufwvorsteuereinzarray[jahre10])
}
if (parseFloat(aufwnachsteuerjahrarray[jahre10]) >= 0)
{
kapitaldienstnachsteuer = kapitaldienstnachsteuer + parseFloat(aufwnachsteuerjahrarray[jahre10])
}
}
}
else
{
for (jahre10 = 0; jahre10 <= 29; jahre10++)
{
if (parseFloat(aufwvorsteuereinzarray[jahre10]) >= 0)
{
kapitaldienstvorsteuer = kapitaldienstvorsteuer + parseFloat(aufwvorsteuereinzarray[jahre10])
}
if (parseFloat(aufwnachsteuerjahrarray[jahre10]) >= 0)
{
kapitaldienstnachsteuer = kapitaldienstnachsteuer + parseFloat(aufwnachsteuerjahrarray[jahre10])
}
}
}
var zuskapproz = kapitaldienstvorsteuer * 100 / gesamtkosten;
document.getElementById("zuskapproz").value = zuskapproz.toFixed(2) + " \u0025";
var beleihungswert = 100 - parseFloat(zuschussproz) - parseFloat(zuskapproz);
document.getElementById("beleihungswert").value = beleihungswert.toFixed(2) + " \u0025";
document.getElementById("kapitaldienstvorsteuer").value = kapitaldienstvorsteuer.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
document.getElementById("kapitaldienstnachsteuer").value = kapitaldienstnachsteuer.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
//------------------------------------------------------------

// Aufwand nach Steuer summiert in Array
   var aufwnachsteuerarray = new Array(30);
for (jahre6 = 0; jahre6 <= 30; jahre6++)
{
if (jahre6 == 0)
{
aufwnachsteuerarray[jahre6] = parseFloat(aufwnachsteuerjahrarray[jahre6])
}
else
{
aufwnachsteuerarray[jahre6] = aufwnachsteuerarray[jahre6 - 1] + parseFloat(aufwnachsteuerjahrarray[jahre6])
}
}

// Aufwand nach Steuern gem. Mietfestschreibung ausgeben
if (mietefestvalue == "15")
{
    document.getElementById("aufwnachsteuer").value = aufwnachsteuerarray[14].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
    var gewinn = parseFloat(wertsteigarray[14]) - parseFloat(darljahrarray[14]) - parseFloat(aufwnachsteuerarray[14]);
}
else if (mietefestvalue == "25")
{
    document.getElementById("aufwnachsteuer").value = aufwnachsteuerarray[24].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
    var gewinn = parseFloat(wertsteigarray[24]) - parseFloat(darljahrarray[24]) - parseFloat(aufwnachsteuerarray[24]);
}
else
{
    document.getElementById("aufwnachsteuer").value = aufwnachsteuerarray[29].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
    var gewinn = parseFloat(wertsteigarray[29]) - parseFloat(darljahrarray[29]) - parseFloat(aufwnachsteuerarray[29]);
}

    document.getElementById("gewinn").value = gewinn.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
var bsveinzges = parseFloat(tilgjahrarray[0]) * 15;
    document.getElementById("bsveinzges").value = bsveinzges.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
var tilgausgewinn = parseFloat(wertsteigarray[14]) - parseFloat(darljahrarray[13]) - parseFloat(aufwnachsteuerarray[14]) + bsveinzges + parseFloat(zuschussges);
    document.getElementById("tilgausgewinn").value = tilgausgewinn.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";

annu = parseFloat(annu);
annu = annu.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";

// Tabelle Steuerliche Entwicklung erzeugen

if (mietefestvalue == "15")
{

//Vorhandene Tabellenzeilen-Objekte löschen
  document.getElementById("steuerlentw").innerHTML = "";

for (jahre7 = 1; jahre7 <= 15; jahre7++)
{
  var steuerjahr = [jahre7];
  darljahrarray[jahre7-1] = darljahrarray[jahre7-1].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
  einnahmgesjahrarray[jahre7-1] = parseFloat(einnahmgesjahrarray[jahre7-1]);
  einnahmgesjahrarray[jahre7-1] = einnahmgesjahrarray[jahre7-1].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
  aufwvorsteuereinzarray[jahre7-1] = parseFloat(aufwvorsteuereinzarray[jahre7-1]);
  aufwvorsteuereinzarray[jahre7-1] = aufwvorsteuereinzarray[jahre7-1].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
  afaarray[jahre7-1] = parseFloat(afaarray[jahre7-1]);
  afaarray[jahre7-1] = afaarray[jahre7-1].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
  zuschjahrarray[jahre7-1] = parseFloat(zuschjahrarray[jahre7-1]);
  zuschjahrarray[jahre7-1] = zuschjahrarray[jahre7-1].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
  stverljahrarray[jahre7-1] = parseFloat(stverljahrarray[jahre7-1]);
  stverljahrarray[jahre7-1] = stverljahrarray[jahre7-1].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
  stvortjahrarray[jahre7-1] = parseFloat(stvortjahrarray[jahre7-1]);
  stvortjahrarray[jahre7-1] = stvortjahrarray[jahre7-1].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
  aufwnachsteuerjahrarray[jahre7-1] = parseFloat(aufwnachsteuerjahrarray[jahre7-1]);
  aufwnachsteuerjahrarray[jahre7-1] = aufwnachsteuerjahrarray[jahre7-1].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";

// Neues Tabellenzeilen-Objekt erstellen
  var newTR = document.createElement("tr");
  // Neues Tabellenzellen-Objekt erstellen
  var newTD1 = document.createElement("td");
  var newTD2 = document.createElement("td");
  var newTD3 = document.createElement("td");
  var newTD4 = document.createElement("td");
  var newTD5 = document.createElement("td");
  var newTD6 = document.createElement("td");
  var newTD7 = document.createElement("td");
  var newTD8 = document.createElement("td");
  var newTD9 = document.createElement("td");
  var newTD10 = document.createElement("td");
  var newTD11 = document.createElement("td");
  var newTD12 = document.createElement("td");

  // HTML einfügen
  newTD1.innerHTML = steuerjahr;
  newTD2.innerHTML = "<input type='text' id='darljahr" + steuerjahr + "' name='darljahr" + steuerjahr + "' readonly />";
  newTD3.innerHTML = "<input type='text' id='annujahr" + steuerjahr + "' name='annujahr" + steuerjahr + "' readonly />";
  newTD4.innerHTML = "<input type='text' id='zinsjahr" + steuerjahr + "' name='zinsjahr" + steuerjahr + "' readonly />";
  newTD5.innerHTML = "<input type='text' id='tilgjahr" + steuerjahr + "' name='tilgjahr" + steuerjahr + "' readonly />";
  newTD6.innerHTML = "<input type='text' id='mietejahr" + steuerjahr + "' name='mietejahr" + steuerjahr + "' readonly />";
  newTD7.innerHTML = "<input type='text' id='aufwvorsteuereinz" + steuerjahr + "' name='aufwvorsteuereinz" + steuerjahr + "' readonly />";
  newTD8.innerHTML = "<input type='text' id='afajahr" + steuerjahr + "' name='afajahr" + steuerjahr + "' readonly />";
  newTD9.innerHTML = "<input type='text' id='zuschjahr" + steuerjahr + "' name='zuschjahr" + steuerjahr + "' readonly />";
  newTD10.innerHTML = "<input type='text' id='stverljahr" + steuerjahr + "' name='stverljahr" + steuerjahr + "' readonly />";
  newTD11.innerHTML = "<input type='text' id='stvortjahr" + steuerjahr + "' name='stvortjahr" + steuerjahr + "' readonly />";
  newTD12.innerHTML = "<input type='text' id='aufwnachsteuerjahr" + steuerjahr + "' name='aufwnachsteuerjahr" + steuerjahr + "' readonly />";

  // Neue Tabellenzelle an Zeile "anhängen"
  newTR.appendChild(newTD1);
  newTR.appendChild(newTD2);
  newTR.appendChild(newTD3);
  newTR.appendChild(newTD4);
  newTR.appendChild(newTD5);
  newTR.appendChild(newTD6);
  newTR.appendChild(newTD7);
  newTR.appendChild(newTD8);
  newTR.appendChild(newTD9);
  newTR.appendChild(newTD10);
  newTR.appendChild(newTD11);
  newTR.appendChild(newTD12);

  // Neue Zeile in Tabelle "einhängen"
  document.getElementById("steuerlentw").appendChild(newTR);

  //Input-Felder füllen
  document.getElementById("darljahr" + steuerjahr + "").value = darljahrarray[jahre7-1];
  document.getElementById("annujahr" + steuerjahr + "").value = annu;
  document.getElementById("zinsjahr" + steuerjahr + "").value = zinsjahrarray[jahre7-1];
  document.getElementById("tilgjahr" + steuerjahr + "").value = tilgjahrarray[jahre7-1];
  document.getElementById("mietejahr" + steuerjahr + "").value = einnahmgesjahrarray[jahre7-1];
  document.getElementById("aufwvorsteuereinz" + steuerjahr + "").value = aufwvorsteuereinzarray[jahre7-1];
  document.getElementById("afajahr" + steuerjahr + "").value = afaarray[jahre7-1];
  document.getElementById("zuschjahr" + steuerjahr + "").value = zuschjahrarray[jahre7-1];
  document.getElementById("stverljahr" + steuerjahr + "").value = stverljahrarray[jahre7-1];
  document.getElementById("stvortjahr" + steuerjahr + "").value = stvortjahrarray[jahre7-1];
  document.getElementById("aufwnachsteuerjahr" + steuerjahr + "").value = aufwnachsteuerjahrarray[jahre7-1];
}
}
else if (mietefestvalue == "25")
{

//Vorhandene Tabellenzeilen-Objekte löschen
  document.getElementById("steuerlentw").innerHTML = "";

for (jahre7 = 1; jahre7 <= 25; jahre7++)
{
  var steuerjahr = [jahre7];
  darljahrarray[jahre7-1] = darljahrarray[jahre7-1].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
  einnahmgesjahrarray[jahre7-1] = parseFloat(einnahmgesjahrarray[jahre7-1]);
  einnahmgesjahrarray[jahre7-1] = einnahmgesjahrarray[jahre7-1].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
  aufwvorsteuereinzarray[jahre7-1] = parseFloat(aufwvorsteuereinzarray[jahre7-1]);
  aufwvorsteuereinzarray[jahre7-1] = aufwvorsteuereinzarray[jahre7-1].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
  afaarray[jahre7-1] = parseFloat(afaarray[jahre7-1]);
  afaarray[jahre7-1] = afaarray[jahre7-1].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
  zuschjahrarray[jahre7-1] = parseFloat(zuschjahrarray[jahre7-1]);
  zuschjahrarray[jahre7-1] = zuschjahrarray[jahre7-1].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
  stverljahrarray[jahre7-1] = parseFloat(stverljahrarray[jahre7-1]);
  stverljahrarray[jahre7-1] = stverljahrarray[jahre7-1].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
  stvortjahrarray[jahre7-1] = parseFloat(stvortjahrarray[jahre7-1]);
  stvortjahrarray[jahre7-1] = stvortjahrarray[jahre7-1].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
  aufwnachsteuerjahrarray[jahre7-1] = parseFloat(aufwnachsteuerjahrarray[jahre7-1]);
  aufwnachsteuerjahrarray[jahre7-1] = aufwnachsteuerjahrarray[jahre7-1].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";

// Neues Tabellenzeilen-Objekt erstellen
  var newTR = document.createElement("tr");
  // Neues Tabellenzellen-Objekt erstellen
  var newTD1 = document.createElement("td");
  var newTD2 = document.createElement("td");
  var newTD3 = document.createElement("td");
  var newTD4 = document.createElement("td");
  var newTD5 = document.createElement("td");
  var newTD6 = document.createElement("td");
  var newTD7 = document.createElement("td");
  var newTD8 = document.createElement("td");
  var newTD9 = document.createElement("td");
  var newTD10 = document.createElement("td");
  var newTD11 = document.createElement("td");
  var newTD12 = document.createElement("td");

  // HTML einfügen
  newTD1.innerHTML = steuerjahr;
  newTD2.innerHTML = "<input type='text' id='darljahr" + steuerjahr + "' name='darljahr" + steuerjahr + "' readonly />";
  newTD3.innerHTML = "<input type='text' id='annujahr" + steuerjahr + "' name='annujahr" + steuerjahr + "' readonly />";
  newTD4.innerHTML = "<input type='text' id='zinsjahr" + steuerjahr + "' name='zinsjahr" + steuerjahr + "' readonly />";
  newTD5.innerHTML = "<input type='text' id='tilgjahr" + steuerjahr + "' name='tilgjahr" + steuerjahr + "' readonly />";
  newTD6.innerHTML = "<input type='text' id='mietejahr" + steuerjahr + "' name='mietejahr" + steuerjahr + "' readonly />";
  newTD7.innerHTML = "<input type='text' id='aufwvorsteuereinz" + steuerjahr + "' name='aufwvorsteuereinz" + steuerjahr + "' readonly />";
  newTD8.innerHTML = "<input type='text' id='afajahr" + steuerjahr + "' name='afajahr" + steuerjahr + "' readonly />";
  newTD9.innerHTML = "<input type='text' id='zuschjahr" + steuerjahr + "' name='zuschjahr" + steuerjahr + "' readonly />";
  newTD10.innerHTML = "<input type='text' id='stverljahr" + steuerjahr + "' name='stverljahr" + steuerjahr + "' readonly />";
  newTD11.innerHTML = "<input type='text' id='stvortjahr" + steuerjahr + "' name='stvortjahr" + steuerjahr + "' readonly />";
  newTD12.innerHTML = "<input type='text' id='aufwnachsteuerjahr" + steuerjahr + "' name='aufwnachsteuerjahr" + steuerjahr + "' readonly />";

  // Neue Tabellenzelle an Zeile "anhängen"
  newTR.appendChild(newTD1);
  newTR.appendChild(newTD2);
  newTR.appendChild(newTD3);
  newTR.appendChild(newTD4);
  newTR.appendChild(newTD5);
  newTR.appendChild(newTD6);
  newTR.appendChild(newTD7);
  newTR.appendChild(newTD8);
  newTR.appendChild(newTD9);
  newTR.appendChild(newTD10);
  newTR.appendChild(newTD11);
  newTR.appendChild(newTD12);

  // Neue Zeile in Tabelle "einhängen"
  document.getElementById("steuerlentw").appendChild(newTR);

  //Input-Felder füllen
  document.getElementById("darljahr" + steuerjahr + "").value = darljahrarray[jahre7-1];
  document.getElementById("annujahr" + steuerjahr + "").value = annu;
  document.getElementById("zinsjahr" + steuerjahr + "").value = zinsjahrarray[jahre7-1];
  document.getElementById("tilgjahr" + steuerjahr + "").value = tilgjahrarray[jahre7-1];
  document.getElementById("mietejahr" + steuerjahr + "").value = einnahmgesjahrarray[jahre7-1];
  document.getElementById("aufwvorsteuereinz" + steuerjahr + "").value = aufwvorsteuereinzarray[jahre7-1];
  document.getElementById("afajahr" + steuerjahr + "").value = afaarray[jahre7-1];
  document.getElementById("zuschjahr" + steuerjahr + "").value = zuschjahrarray[jahre7-1];
  document.getElementById("stverljahr" + steuerjahr + "").value = stverljahrarray[jahre7-1];
  document.getElementById("stvortjahr" + steuerjahr + "").value = stvortjahrarray[jahre7-1];
  document.getElementById("aufwnachsteuerjahr" + steuerjahr + "").value = aufwnachsteuerjahrarray[jahre7-1];
}
}
else
{

//Vorhandene Tabellenzeilen-Objekte löschen
  document.getElementById("steuerlentw").innerHTML = "";

for (jahre7 = 1; jahre7 <= 30; jahre7++)
{
  var steuerjahr = [jahre7];
  darljahrarray[jahre7-1] = darljahrarray[jahre7-1].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
  einnahmgesjahrarray[jahre7-1] = parseFloat(einnahmgesjahrarray[jahre7-1]);
  einnahmgesjahrarray[jahre7-1] = einnahmgesjahrarray[jahre7-1].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
  aufwvorsteuereinzarray[jahre7-1] = parseFloat(aufwvorsteuereinzarray[jahre7-1]);
  aufwvorsteuereinzarray[jahre7-1] = aufwvorsteuereinzarray[jahre7-1].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
  afaarray[jahre7-1] = parseFloat(afaarray[jahre7-1]);
  afaarray[jahre7-1] = afaarray[jahre7-1].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
  zuschjahrarray[jahre7-1] = parseFloat(zuschjahrarray[jahre7-1]);
  zuschjahrarray[jahre7-1] = zuschjahrarray[jahre7-1].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
  stverljahrarray[jahre7-1] = parseFloat(stverljahrarray[jahre7-1]);
  stverljahrarray[jahre7-1] = stverljahrarray[jahre7-1].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
  stvortjahrarray[jahre7-1] = parseFloat(stvortjahrarray[jahre7-1]);
  stvortjahrarray[jahre7-1] = stvortjahrarray[jahre7-1].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";
  aufwnachsteuerjahrarray[jahre7-1] = parseFloat(aufwnachsteuerjahrarray[jahre7-1]);
  aufwnachsteuerjahrarray[jahre7-1] = aufwnachsteuerjahrarray[jahre7-1].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " \u20AC";

// Neues Tabellenzeilen-Objekt erstellen
  var newTR = document.createElement("tr");
  // Neues Tabellenzellen-Objekt erstellen
  var newTD1 = document.createElement("td");
  var newTD2 = document.createElement("td");
  var newTD3 = document.createElement("td");
  var newTD4 = document.createElement("td");
  var newTD5 = document.createElement("td");
  var newTD6 = document.createElement("td");
  var newTD7 = document.createElement("td");
  var newTD8 = document.createElement("td");
  var newTD9 = document.createElement("td");
  var newTD10 = document.createElement("td");
  var newTD11 = document.createElement("td");
  var newTD12 = document.createElement("td");

  // HTML einfügen
  newTD1.innerHTML = steuerjahr;
  newTD2.innerHTML = "<input type='text' id='darljahr" + steuerjahr + "' name='darljahr" + steuerjahr + "' readonly />";
  newTD3.innerHTML = "<input type='text' id='annujahr" + steuerjahr + "' name='annujahr" + steuerjahr + "' readonly />";
  newTD4.innerHTML = "<input type='text' id='zinsjahr" + steuerjahr + "' name='zinsjahr" + steuerjahr + "' readonly />";
  newTD5.innerHTML = "<input type='text' id='tilgjahr" + steuerjahr + "' name='tilgjahr" + steuerjahr + "' readonly />";
  newTD6.innerHTML = "<input type='text' id='mietejahr" + steuerjahr + "' name='mietejahr" + steuerjahr + "' readonly />";
  newTD7.innerHTML = "<input type='text' id='aufwvorsteuereinz" + steuerjahr + "' name='aufwvorsteuereinz" + steuerjahr + "' readonly />";
  newTD8.innerHTML = "<input type='text' id='afajahr" + steuerjahr + "' name='afajahr" + steuerjahr + "' readonly />";
  newTD9.innerHTML = "<input type='text' id='zuschjahr" + steuerjahr + "' name='zuschjahr" + steuerjahr + "' readonly />";
  newTD10.innerHTML = "<input type='text' id='stverljahr" + steuerjahr + "' name='stverljahr" + steuerjahr + "' readonly />";
  newTD11.innerHTML = "<input type='text' id='stvortjahr" + steuerjahr + "' name='stvortjahr" + steuerjahr + "' readonly />";
  newTD12.innerHTML = "<input type='text' id='aufwnachsteuerjahr" + steuerjahr + "' name='aufwnachsteuerjahr" + steuerjahr + "' readonly />";

  // Neue Tabellenzelle an Zeile "anhängen"
  newTR.appendChild(newTD1);
  newTR.appendChild(newTD2);
  newTR.appendChild(newTD3);
  newTR.appendChild(newTD4);
  newTR.appendChild(newTD5);
  newTR.appendChild(newTD6);
  newTR.appendChild(newTD7);
  newTR.appendChild(newTD8);
  newTR.appendChild(newTD9);
  newTR.appendChild(newTD10);
  newTR.appendChild(newTD11);
  newTR.appendChild(newTD12);

  // Neue Zeile in Tabelle "einhängen"
  document.getElementById("steuerlentw").appendChild(newTR);

  //Input-Felder füllen
  document.getElementById("darljahr" + steuerjahr + "").value = darljahrarray[jahre7-1];
  document.getElementById("annujahr" + steuerjahr + "").value = annu;
  document.getElementById("zinsjahr" + steuerjahr + "").value = zinsjahrarray[jahre7-1];
  document.getElementById("tilgjahr" + steuerjahr + "").value = tilgjahrarray[jahre7-1];
  document.getElementById("mietejahr" + steuerjahr + "").value = einnahmgesjahrarray[jahre7-1];
  document.getElementById("aufwvorsteuereinz" + steuerjahr + "").value = aufwvorsteuereinzarray[jahre7-1];
  document.getElementById("afajahr" + steuerjahr + "").value = afaarray[jahre7-1];
  document.getElementById("zuschjahr" + steuerjahr + "").value = zuschjahrarray[jahre7-1];
  document.getElementById("stverljahr" + steuerjahr + "").value = stverljahrarray[jahre7-1];
  document.getElementById("stvortjahr" + steuerjahr + "").value = stvortjahrarray[jahre7-1];
  document.getElementById("aufwnachsteuerjahr" + steuerjahr + "").value = aufwnachsteuerjahrarray[jahre7-1];
}
}

//Arrays für Übergabe an PDF-Ausgabe in Hidden-Felder schreiben
document.getElementById("darljahrarray").value = JSON.stringify(darljahrarray);
document.getElementById("annujahrarray").value = annu;
document.getElementById("zinsjahrarray").value = JSON.stringify(zinsjahrarray);
document.getElementById("tilgjahrarray").value = JSON.stringify(tilgjahrarray);
document.getElementById("mietejahrarray").value = JSON.stringify(einnahmgesjahrarray);
document.getElementById("aufwvorsteuereinzarray").value = JSON.stringify(aufwvorsteuereinzarray);
document.getElementById("afajahrarray").value = JSON.stringify(afaarray);
document.getElementById("zuschjahrarray").value = JSON.stringify(zuschjahrarray);
document.getElementById("stverljahrarray").value = JSON.stringify(stverljahrarray);
document.getElementById("stvortjahrarray").value = JSON.stringify(stvortjahrarray);
document.getElementById("aufwnachsteuerjahrarray").value = JSON.stringify(aufwnachsteuerjahrarray);

}