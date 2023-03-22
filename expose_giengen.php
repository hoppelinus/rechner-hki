<?php

$pdfName = "Expose_Giengen.pdf";

/*
$tilgtext = $_POST['tilgtext'];
$tilgungssatz = $_POST['tilgungssatz'] . " %";
$zuschusstext = "blabla:";
$mietsteigamtvalue = $_POST['mietsteigamtvalue'];
if ($mietsteigamtvalue == "1")
{
$mietsteigamttext = "Mietsteigerung";
}
else
{
$mietsteigamttext = "Keine Mietsteigerung";
}

$mietefestvalue = $_POST['mietefestvalue'];
if ($mietefestvalue == "15")
{
$darljahr = $_POST['darljahr15'];
}
else if ($mietefestvalue == "25")
{
$darljahr = $_POST['darljahr25'];
}
else
{
$darljahr = $_POST['darljahr30'];
}
if ($tilgtext == "Tilgung")
{
$tilgtextausg = "Anf. Tilgungsbetrag";
}
else
{
$tilgtextausg = $tilgtext;
$zuschusstext = "Miete:";
$tilgungssatz = "";
}

$gewinn = $_POST['gewinn'];
$zuschussges = $_POST['zuschussges'];
$steuersatz = $_POST['steuersatz'];
$aufwnachsteuer = $_POST['aufwnachsteuer'];

if ($tilgtext == "Tilgung")
{
$gewinntilgung = <<<EOD
<table>
<tr>
<td colspan="2" style="width: 36.5%; border-left: solid 0.5px #686666;"> (in $mietefestvalue Jahren)</td>
<td style="width: 12.8%; border-right: solid 0.5px #686666;"></td>
<td style="width: 0.9%;"></td>
<td colspan="2" style="width: 35.5%; border-left: solid 0.5px #686666;"> Gewinn steuerfrei:</td>
<td style="text-align: right; border-right: solid 0.5px #686666; border-top: solid 0.5px black;">$gewinn<span style="color: white;">a</span></td>
</tr>
<tr>
<td colspan="2" style="border-left: solid 0.5px #686666;"> Gesamtaufwand nach Steuern <span style="font-size: 8px;">(Steuersatz: $steuersatz %)</span>:</td>
<td style="text-align: right; border-right: solid 0.5px #686666;">$aufwnachsteuer<span style="color: white;">a</span></td>
<td></td>
<td colspan="3" style="border-left: solid 0.5px #686666; border-right: solid 0.5px #686666;"></td>
</tr>
<tr>
<td colspan="3" style="border-left: solid 0.5px #686666; border-right: solid 0.5px #686666; border-bottom: solid 0.5px #686666;"> (in $mietefestvalue Jahren)</td>
<td></td>
<td colspan="3" style="border-left: solid 0.5px #686666; border-right: solid 0.5px #686666; border-bottom: solid 0.5px #686666;"></td>
</tr>
</table>
EOD;
}
else
{
$bsveinzges = $_POST['bsveinzges'];
$tilgausgewinn = $_POST['tilgausgewinn'];
$gewinntilgung = <<<EOD
<table>
<tr>
<td colspan="2" style="width: 36.5%; border-left: solid 0.5px #686666;"> (in $mietefestvalue Jahren)</td>
<td style="width: 12.8%; border-right: solid 0.5px #686666;"></td>
<td style="width: 0.9%;"></td>
<td colspan="2" style="width: 35.5%; border-left: solid 0.5px #686666;"> Zzgl. Einzahlung:</td>
<td style="text-align: right; border-right: solid 0.5px #686666;">$bsveinzges<span style="color: white;">a</span></td>
</tr>
<tr>
<td colspan="2" style="border-left: solid 0.5px #686666;"> Gesamtaufwand nach Steuern <span style="font-size: 8px;">(Steuersatz: $steuersatz %)</span>:</td>
<td style="text-align: right; border-right: solid 0.5px #686666;">$aufwnachsteuer<span style="color: white;">a</span></td>
<td></td>
<td colspan="2" style="border-left: solid 0.5px #686666;"> Zzgl. .....:</td>
<td style="text-align: right; border-right: solid 0.5px #686666;">$zuschussges<span style="color: white;">a</span></td>
</tr>
<tr>
<td colspan="3" style="border-left: solid 0.5px #686666; border-right: solid 0.5px #686666; border-bottom: solid 0.5px #686666;"> (in $mietefestvalue Jahren)</td>
<td></td>
<td colspan="2" style="border-left: solid 0.5px #686666; border-bottom: solid 0.5px #686666;"> Gewinn steuerfrei:</td>
<td style="text-align: right; border-right: solid 0.5px #686666; border-bottom: solid 0.5px #686666; border-top: solid 0.5px black;">$tilgausgewinn<span style="color: white;">a</span></td>
</tr>
</table>
EOD;
}

while ($jahre > $mietefestvalue - 1 && $jahre < 35)
{
$liqui[$jahre] = '';
$jahre++;
}
*/

$darljahrpdf = json_decode($_POST['darljahrpdf'], true);
$zinsjahrpdf = json_decode($_POST['zinsjahrpdf'], true);
$tilgjahrpdf = json_decode($_POST['tilgjahrpdf'], true);
$pvnkerwjpdf = $_POST['pvnkerwjpdf'];
$pvnkpdf = json_decode($_POST['pvnkpdf'], true);
$einngeserwjpdf = $_POST['einngeserwjpdf'];
$einngespdf = json_decode($_POST['einngespdf'], true);
$liquivorstpdf = json_decode($_POST['liquivorstpdf'], true);
$afagespdf = json_decode($_POST['afagespdf'], true);
$iabpdf = $_POST['iabpdf'];
$iabpdf = number_format($iabpdf, 2, ',', '.');
$steuervortpdf = json_decode($_POST['steuervortpdf'], true);
$steuervortpdf[0] = number_format($steuervortpdf[0], 2, ',', '.');
$zuverstumspdf = json_decode($_POST['zuverstumspdf'], true);
$liquinachstpdf = json_decode($_POST['liquinachstpdf'], true);
$liquinachstpdf[0] = number_format($liquinachstpdf[0], 2, ',', '.');
$liquinachstkummpdf = json_decode($_POST['liquinachstkummpdf'], true);
$liquinachstkummpdf[0] = number_format($liquinachstkummpdf[0], 2, ',', '.');
$liqui[0] = <<<EOD
	<tr>
			<td>VJ</td>
			<td>0,00</td>
			<td>0,00</td>
			<td>0,00</td>
			<td>0,00</td>
			<td>0,00</td>
			<td>0,00</td>
			<td>0,00</td>
			<td>$iabpdf</td>
			<td>$iabpdf</td>
			<td>$steuervortpdf[0]</td>
			<td>$liquinachstpdf[0]</td>
			<td>$liquinachstkummpdf[0]</td>
	</tr>
EOD;
$darljahrpdf[1] = number_format($darljahrpdf[1], 2, ',', '.');
$zinsjahrpdf[1] = number_format($zinsjahrpdf[1], 2, ',', '.');
$tilgjahrpdf[1] = number_format($tilgjahrpdf[1], 2, ',', '.');
$pvnkerwjpdf = number_format($pvnkerwjpdf, 2, ',', '.');
$einngeserwjpdf = number_format($einngeserwjpdf, 2, ',', '.');
$liquivorstpdf[1] = number_format($liquivorstpdf[1], 2, ',', '.');
$afagespdf[1] = number_format($afagespdf[1], 2, ',', '.');
$steuervortpdf[1] = number_format($steuervortpdf[1], 2, ',', '.');
$zuverstumspdf[1] = number_format($zuverstumspdf[1], 2, ',', '.');
$liquinachstpdf[1] = number_format($liquinachstpdf[1], 2, ',', '.');
$liquinachstkummpdf[1] = number_format($liquinachstkummpdf[1], 2, ',', '.');
$liqui[1] = <<<EOD
	<tr>
			<td>1</td>
			<td>$darljahrpdf[1]</td>
			<td>$zinsjahrpdf[1]</td>
			<td>$tilgjahrpdf[1]</td>
			<td>$pvnkerwjpdf</td>
			<td>$einngeserwjpdf</td>
			<td>$liquivorstpdf[1]</td>
			<td>$afagespdf[1]</td>
			<td>0,00</td>
			<td>$zuverstumspdf[1]</td>
			<td>$steuervortpdf[1]</td>
			<td>$liquinachstpdf[1]</td>
			<td>$liquinachstkummpdf[1]</td>
	</tr>
EOD;
for ($jahre=2; $jahre < 31; $jahre++)
{	
	$darljahrpdf[$jahre] = number_format($darljahrpdf[$jahre], 2, ',', '.');
	$zinsjahrpdf[$jahre] = number_format($zinsjahrpdf[$jahre], 2, ',', '.');
	$tilgjahrpdf[$jahre] = number_format($tilgjahrpdf[$jahre], 2, ',', '.');
	$pvnkpdf[$jahre] = number_format($pvnkpdf[$jahre], 2, ',', '.');
	$einngespdf[$jahre] = number_format($einngespdf[$jahre], 2, ',', '.');
	$liquivorstpdf[$jahre] = number_format($liquivorstpdf[$jahre], 2, ',', '.');
	$afagespdf[$jahre] = number_format($afagespdf[$jahre], 2, ',', '.');
	$steuervortpdf[$jahre] = number_format($steuervortpdf[$jahre], 2, ',', '.');
	$zuverstumspdf[$jahre] = number_format($zuverstumspdf[$jahre], 2, ',', '.');
	$liquinachstpdf[$jahre] = number_format($liquinachstpdf[$jahre], 2, ',', '.');
	$liquinachstkummpdf[$jahre] = number_format($liquinachstkummpdf[$jahre], 2, ',', '.');
	$liqui[$jahre] = <<<EOD
	<tr>
			<td>$jahre</td>
			<td>$darljahrpdf[$jahre]</td>
			<td>$zinsjahrpdf[$jahre]</td>
			<td>$tilgjahrpdf[$jahre]</td>
			<td>$pvnkpdf[$jahre]</td>
			<td>$einngespdf[$jahre]</td>
			<td>$liquivorstpdf[$jahre]</td>
			<td>$afagespdf[$jahre]</td>
			<td>0,00</td>
			<td>$zuverstumspdf[$jahre]</td>
			<td>$steuervortpdf[$jahre]</td>
			<td>$liquinachstpdf[$jahre]</td>
			<td>$liquinachstkummpdf[$jahre]</td>
	</tr>
EOD;
}

$html = '	
	
    <table cellpadding="0" border="0" cellspacing="0" id="table" style="font-family: Helvetica, Arial, Geneva, sans-serif; font-size: 10.5px; width: 100%;">
        <tr>
                 <td colspan="7" style="height: 5px;"></td>
        </tr>
		<tr style="text-align: center;">
                 <td colspan="2" style="width: 33%;"><img src="img/lphallen_giengen.png" alt="Lageplan" width="721px" height="718px"></td>
				 <td style="width: 1%;"></td>
				 <td colspan="4" style="width: 66%;"><img src="img/hallenbild_giengen.png" alt="Hallen" width="912px" height="454px"></td>
        </tr>
        <tr>
                 <td colspan="7" style="height: 5px;"></td>
        </tr>
		<tr>
                 <td colspan="7" style="background-color: #767676; color: white; font-size: 16px; font-weight: bold; border-top: solid 0.5px #686666; border-left: solid 0.5px #686666; border-right: solid 0.5px #686666;"> Allgemeine Hinweise</td>
        </tr>        
		<tr>
                <td colspan="7" style="height: 15px; border-left: solid 0.5px #686666; border-right: solid 0.5px #686666;"><span style="color: white;">a</span>Sehr geehrter Interessent,<br><span style="color: white;">i</span>
				das nachfolgende Berechnungsbeispiel wurde aufgrund Ihrer pers&ouml;nlichen Eingaben in unserem Berechnungstool unter der Internet-<br><span style="color: white;">a</span>Adresse:
				http://www.dc-ag.net/berechnung/index_giengen.html erstellt.<br><span style="color: white;">a</span>Zu Ihrer Sicherheit werden Ihre pers&ouml;nlichen Einstellungen nachfolgend nochmals aufgef&uuml;hrt:</td>
        </tr>
		<tr>
                <td colspan="7" style="height: 15px; border-left: solid 0.5px #686666; border-right: solid 0.5px #686666;"></td>
        </tr>
		<tr>
                <td style="height: 15px; border-left: solid 0.5px #686666;"> Monatsmiete / m<sup>2</sup>:</td>
                <td style="text-align: right;">'.$_POST['mietemonpdf'].' EUR</td>
				<td><span style="color: white;">a</span></td>
				<td style="height: 15px;"> Stromerl&ouml;s PV:</td>
                <td style="text-align: right;">'.$_POST['einspeispvpdf'].' ct/kWh<span style="color: white;">aa</span></td>
				<td style="height: 15px;"> </td>
                <td style="text-align: right; border-right: solid 0.5px #686666;"> <span style="color: white;">a</span></td>
        </tr>
		<tr>
                <td style="height: 15px; border-left: solid 0.5px #686666;"> Steuersatz:</td>
                <td style="text-align: right;">'.$_POST['steuersatzpdf'].' %</td>
				<td><span style="color: white;">a</span></td>
				<td style="height: 15px;"> Eigenkapital:</td>
                <td style="text-align: right;">'.$_POST['ekprozpdf'].' %<span style="color: white;">aa</span></td>
				<td style="height: 15px;"> </td>
                <td style="text-align: right; border-right: solid 0.5px #686666;"><span style="color: white;">a</span></td>
        </tr>
		<tr>
                <td style="height: 15px; border-left: solid 0.5px #686666;"> Zins Darlehen:</td>
                <td style="text-align: right;">'.$_POST['zinsprozpdf'].' %</td>
				<td><span style="color: white;">a</span></td>
				<td style="height: 15px;"> Tilgung Darlehen:</td>
                <td style="text-align: right;">'.$_POST['tilgprozpdf'].' %<span style="color: white;">aa</span></td>
				<td style="height: 15px;"> Laufzeit Darlehen:</td>
                <td style="text-align: right; border-right: solid 0.5px #686666;">'.$_POST['darllzpdf'].'<span style="color: white;">a</span></td>
        </tr>
		<tr>
                <td style="height: 15px; border-left: solid 0.5px #686666; border-bottom: solid 0.5px #686666;"> Kaufvertragsmonat:</td>
                <td style="text-align: right; border-bottom: solid 0.5px #686666;">'.$_POST['erwmonpdf'].'.2022</td>
				<td style="border-bottom: solid 0.5px #686666;"><span style="color: white;">a</span></td>
				<td style="height: 15px; border-bottom: solid 0.5px #686666;"> Sonder-AfA verteilt:</td>
                <td style="text-align: right; border-bottom: solid 0.5px #686666;">'.$_POST['sonderafaauswpdf'].' Jahre<span style="color: white;">aa</span></td>
				<td style="height: 15px; border-bottom: solid 0.5px #686666;"> IAB H&ouml;he:</td>
                <td style="text-align: right; border-right: solid 0.5px #686666; border-bottom: solid 0.5px #686666;">'.$_POST['iabpdf'].' %<span style="color: white;">a</span></td>
        </tr>		
		<tr>
                 <td colspan="7" style="height: 5px;"></td>
        </tr>
		<tr>
                 <td colspan="7" style="height: 5px;"></td>
        </tr>
		<tr>
                 <td colspan="7" style="height: 5px;"></td>
        </tr>
		<tr>
                 <td colspan="7" style="background-color: #87af2b; color: white; font-size: 16px; font-weight: bold; border-top: solid 0.5px #686666; border-left: solid 0.5px #686666; border-right: solid 0.5px #686666;"> '.$_POST['keyfactsheader'].'</td>
        </tr>        
		<tr>
                <td colspan="6" style="height: 15px; border-left: solid 0.5px #686666;"> Eigenkapital:</td>
                <td style="text-align: right; border-right: solid 0.5px #686666;">'.$_POST['ekpdf'].'<span style="color: white;">a</span></td>                
        </tr>
		<tr>
                <td colspan="6" style="height: 15px; border-left: solid 0.5px #686666;"> '.$_POST['chart3text1pdf'].'</td>
                <td style="text-align: right; border-right: solid 0.5px #686666;">'.$_POST['chart3data1pdf'].'<span style="color: white;">a</span></td>                
        </tr>
		<tr>
                <td colspan="6" style="height: 15px; border-left: solid 0.5px #686666;"> '.$_POST['chart2text1pdf'].'</td>
                <td style="text-align: right; border-right: solid 0.5px #686666;">'.$_POST['chart2data1pdf'].'<span style="color: white;">a</span></td>                
        </tr>
		<tr>
                <td colspan="6" style="height: 15px; border-left: solid 0.5px #686666;"> '.$_POST['liquitext1pdf'].'</td>
                <td style="text-align: right; border-right: solid 0.5px #686666;">'.$_POST['liquidata1pdf'].'<span style="color: white;">a</span></td>                
        </tr>
		<tr>
                <td colspan="6" style="height: 15px; border-left: solid 0.5px #686666; border-bottom: solid 0.5px #686666;"> Reingewinn nach Abzug Eigenkapital ca.:</td>
                <td style="text-align: right; border-right: solid 0.5px #686666; border-bottom: solid 0.5px #686666;">'.$_POST['reingewdata1pdf'].'<span style="color: white;">a</span></td>                
        </tr>
        <tr>
                 <td colspan="7"></td>
        </tr>		
		<tr>
                 <td colspan="7"></td>
        </tr>		
        <tr>
                <td style="width: 49.5%; background-color: #87af2b; color: white; font-size: 14px; font-weight: bold; border-top: solid 0.5px #686666; border-left: solid 0.5px #686666; border-right: solid 0.5px #686666;"> Hallendaten</td>
                <td style="width: 1%;"></td>
                <td rowspan="12" style="width: 49.5%; color: #5aa23a; font-size: 14px; font-weight: bold; border: solid 0.5px grey;">'.$_POST['pngchart1'].'</td>
        </tr>
        <tr>
                <td style="width: 13%; height: 15px; border-left: solid 0.5px #686666;"> Hallenfl&auml;che:</td>
                <td style="width: 11.75%; text-align: right;">'.$_POST['hallenflaeche'].' m<sup>2</sup><span style="color: white;">a</span></td>
				<td style="width: 12%; height: 15px;"> PV-Leistung:</td>
				<td style="width: 12.75%; text-align: right; border-right: solid 0.5px #686666;">'.$_POST['leistungpv'].' kWp<span style="color: white;">a</span></td>
				<td></td>
				<td></td>
				<td></td>
        </tr>		
		<tr>
                 <td colspan="4" style="border-left: solid 0.5px #686666; border-right: solid 0.5px #686666;"></td>
				 <td></td>
				 <td></td>
				 <td></td>
        </tr>        
        <tr>
                <td colspan="2" style="height: 15px; border-left: solid 0.5px #686666;"> Kaufpreis Grundst&uuml;ck:</td>
                <td colspan="2" style="text-align: right; border-right: solid 0.5px #686666;">'.$_POST['kpgrundstueck'].' EUR<span style="color: white;">a</span></td>				
				<td></td>
				<td></td>
				<td></td>
        </tr>
		<tr>
                <td colspan="2" style="height: 15px; border-left: solid 0.5px #686666;"> Kaufpreis Halle(n):</td>
                <td colspan="2" style="text-align: right; border-right: solid 0.5px #686666;">'.$_POST['kphallen'].' EUR<span style="color: white;">a</span></td>				
				<td></td>
				<td></td>
				<td></td>
        </tr>
		<tr>
                <td colspan="2" style="height: 15px; border-left: solid 0.5px #686666;"> Kaufpreis Parkierung:</td>
                <td colspan="2" style="text-align: right; border-right: solid 0.5px #686666;">'.$_POST['kpstellpl'].' EUR<span style="color: white;">a</span></td>				
				<td></td>
				<td></td>
				<td></td>
        </tr>
		<tr>
                <td colspan="2" style="height: 15px; border-left: solid 0.5px #686666; border-bottom: solid 0.5px black;"> Kaufpreis Photovoltaik:</td>
                <td colspan="2" style="text-align: right; border-right: solid 0.5px #686666; border-bottom: solid 0.5px black;">'.$_POST['kppv'].' EUR<span style="color: white;">a</span></td>				
				<td></td>
				<td></td>
				<td></td>
        </tr>
		<tr>
                <td colspan="2" style="height: 15px; border-left: solid 0.5px #686666;"> Gesamtinvestition:</td>
                <td colspan="2" style="text-align: right; border-right: solid 0.5px #686666;">'.$_POST['gesamtinvest'].' EUR<span style="color: white;">a</span></td>				
				<td></td>
				<td></td>
				<td></td>
        </tr>
		<tr>
                <td colspan="2" style="height: 15px; border-left: solid 0.5px #686666;"> zzgl. Nebenkosten:</td>
                <td colspan="2" style="text-align: right; border-right: solid 0.5px #686666;">'.$_POST['nk'].' EUR<span style="color: white;">a</span></td>				
				<td></td>
				<td></td>
				<td></td>
        </tr>
		<tr>
                <td colspan="2" style="height: 15px; border-left: solid 0.5px #686666; border-bottom: solid 0.5px black;"> abzgl. Eigenkapital ('.$_POST['ekprozpdf'].' %):</td>                
				<td colspan="2" style="text-align: right; border-right: solid 0.5px #686666; border-bottom: solid 0.5px black;">'.$_POST['ekaus'].' EUR<span style="color: white;">a</span></td>				
				<td></td>
				<td></td>
				<td></td>
        </tr>
		<tr>
                <td colspan="2" style="height: 15px; border-left: solid 0.5px #686666; border-bottom: solid 0.5px #686666;"> Finanzierung:</td>
                <td colspan="2" style="text-align: right; border-right: solid 0.5px #686666; border-bottom: solid 0.5px #686666;">'.$_POST['finsum'].' EUR<span style="color: white;">a</span></td>				
				<td></td>
				<td></td>
				<td></td>
        </tr>
		<tr>
                 <td colspan="7"></td>
        </tr>
		<tr>
                 <td colspan="7"></td>
        </tr>		
		<tr>
                <td style="width: 49.5%; background-color: #87af2b; color: white; font-size: 14px; font-weight: bold; border-top: solid 0.5px #686666; border-left: solid 0.5px #686666; border-right: solid 0.5px #686666;"> Finanzierung + Instandhaltung</td>
                <td style="width: 1%;"></td>
                <td></td>
        </tr>        
        <tr>
                <td style="width: 35%; height: 15px; border-left: solid 0.5px #686666;"> Kreditbetrag:</td>
                <td style="width: 14.5%; text-align: right; border-right: solid 0.5px #686666;">'.$_POST['finsum'].' EUR<span style="color: white;">a</span></td>				
				<td style="width: 1%;"></td>
				<td rowspan="12" style="width: 49.5%; color: #5aa23a; font-size: 14px; font-weight: bold; border: solid 0.5px grey;">'.$_POST['pngchart2'].'</td>
        </tr>		
		<tr>
                <td style="width: 27%; height: 15px; border-left: solid 0.5px #686666;"> anf&auml;nglicher Zinsbetrag mtl.:</td>                
				<td style="width: 5.5%;">'.$_POST['zinsprozpdf'].' %</td>
				<td style="width: 17%; text-align: right; border-right: solid 0.5px #686666;">'.$_POST['zinswertpdf'].' EUR<span style="color: white;">a</span></td>				
				<td></td>
				<td></td>
        </tr>
		<tr>
                <td style="width: 27%; height: 15px; border-left: solid 0.5px #686666;"> anf&auml;nglicher Tilgungsbetrag mtl.:</td>
                <td style="width: 5.5%;">'.$_POST['tilgprozpdf'].' %</td>
				<td style="width: 17%; text-align: right; border-right: solid 0.5px #686666;">'.$_POST['tilgwertpdf'].' EUR<span style="color: white;">a</span></td>				
				<td></td>
				<td></td>				
        </tr>
		<tr>
                <td style="width: 35%; height: 15px; border-left: solid 0.5px #686666;"> Darlehensrate (Annuit&auml;t) mtl.:</td>
                <td style="width: 14.5%; text-align: right; border-right: solid 0.5px #686666;">'.$_POST['darlratemtl'].' EUR<span style="color: white;">a</span></td>				
				<td></td>
				<td></td>				
        </tr>		
		<tr>
                <td style="height: 15px; border-left: solid 0.5px #686666; border-bottom: solid 0.5px #686666;"> Techn. + Kfm. Betreuung mtl.:</td>
                <td style="text-align: right; border-right: solid 0.5px #686666; border-bottom: solid 0.5px #686666;">'.$_POST['pvnebenmtl'].' EUR<span style="color: white;">a</span></td>				
				<td></td>
				<td></td>
				<td></td>
				<td></td>
        </tr>
		<tr>
                 <td colspan="7"></td>
        </tr>
		<tr>
                 <td colspan="7"></td>
        </tr>		
		<tr>
                <td style="width: 49.5%; background-color: #87af2b; color: white; font-size: 14px; font-weight: bold; border-top: solid 0.5px #686666; border-left: solid 0.5px #686666; border-right: solid 0.5px #686666;"> Vermietung, Photovoltaik + Steuervorteile</td>
                <td style="width: 1%;"></td>
                <td style="width: 49.5%;"></td>
        </tr>        
        <tr>
                <td style="width: 35%; height: 15px; border-left: solid 0.5px #686666;"> Mieteinnahmen mtl.:</td>
                <td style="width: 14.5%; text-align: right; border-right: solid 0.5px #686666;">'.$_POST['mietemtl'].' EUR<span style="color: white;">a</span></td>				
				<td></td>
				<td></td>				
        </tr>
		<tr>
                <td style="width: 35%; height: 15px; border-left: solid 0.5px #686666;"> Verg&uuml;tung Photovoltaik mtl.:</td>
                <td style="width: 14.5%; text-align: right; border-right: solid 0.5px #686666;">'.$_POST['einspeispvmtl'].' EUR<span style="color: white;">a</span></td>				
				<td></td>
				<td></td>				
        </tr>
		<tr>
                <td style="width: 35%; height: 15px; border-left: solid 0.5px #686666; border-bottom: solid 0.5px #686666;"> Steuervorteil mtl.:</td>
                <td style="width: 14.5%; text-align: right; border-right: solid 0.5px #686666; border-bottom: solid 0.5px #686666;">'.$_POST['steuervortmtl'].' EUR<span style="color: white;">a</span></td>				
				<td></td>
				<td></td>				
        </tr>
		<tr>
                 <td colspan="7"></td>
        </tr>
		<tr>
                 <td colspan="7"></td>
        </tr>		
		<tr>
                 <td colspan="7"></td>
        </tr>		
		<tr>
                <td style="width: 49.5%; background-color: #87af2b; color: white; font-size: 14px; font-weight: bold; border-top: solid 0.5px #686666; border-left: solid 0.5px #686666; border-right: solid 0.5px #686666;"> &Uuml;berschuss / Aufwand nach Steuern</td>
                <td style="width: 1%;"></td>                
				<td rowspan="12" style="width: 49.5%; color: #5aa23a; font-size: 14px; font-weight: bold; border: solid 0.5px grey;">'.$_POST['pngchart3'].'</td>
        </tr>        
        <tr>
                <td style="width: 35%; height: 15px; border-left: solid 0.5px #686666;"> Jahr vor Anschaffung mtl.:</td>
                <td style="width: 14.5%; text-align: right; border-right: solid 0.5px #686666;">'.$_POST['liquinachstpdfvj'].' EUR<span style="color: white;">a</span></td>				
				<td></td>
				<td></td>				
        </tr>
		<tr>
                <td style="width: 35%; height: 15px; border-left: solid 0.5px #686666;"> Im Erwerbsjahr mtl.:</td>
                <td style="width: 14.5%; text-align: right; border-right: solid 0.5px #686666;">'.$_POST['liquinachstpdf1'].' EUR<span style="color: white;">a</span></td>				
				<td></td>
				<td></td>
        </tr>
		<tr>
                <td style="width: 35%; height: 15px; border-left: solid 0.5px #686666;"> Im 2. Jahr mtl.:</td>
                <td style="width: 14.5%; text-align: right; border-right: solid 0.5px #686666;">'.$_POST['liquinachstpdf2'].' EUR<span style="color: white;">a</span></td>				
				<td></td>
				<td></td>				
        </tr>
		<tr>
                <td style="width: 35%; height: 15px; border-left: solid 0.5px #686666;"> Im 3. Jahr mtl.:</td>
                <td style="width: 14.5%; text-align: right; border-right: solid 0.5px #686666;">'.$_POST['liquinachstpdf3'].' EUR<span style="color: white;">a</span></td>				
				<td></td>
				<td></td>				
        </tr>
		<tr>
                <td style="width: 35%; height: 15px; border-left: solid 0.5px #686666;"> Im 4. Jahr mtl.:</td>
                <td style="width: 14.5%; text-align: right; border-right: solid 0.5px #686666;">'.$_POST['liquinachstpdf4'].' EUR<span style="color: white;">a</span></td>				
				<td></td>
				<td></td>
        </tr>
		<tr>
                <td style="width: 35%; height: 15px; border-left: solid 0.5px #686666;"> Im 5. Jahr mtl.:</td>
                <td style="width: 14.5%; text-align: right; border-right: solid 0.5px #686666;">'.$_POST['liquinachstpdf5'].' EUR<span style="color: white;">a</span></td>				
				<td></td>
				<td></td>				
        </tr>
		<tr>
                <td style="width: 35%; height: 15px; border-left: solid 0.5px #686666;"> Im 6. Jahr mtl.:</td>
                <td style="width: 14.5%; text-align: right; border-right: solid 0.5px #686666;">'.$_POST['liquinachstpdf6'].' EUR<span style="color: white;">a</span></td>				
				<td></td>
				<td></td>				
        </tr>
		<tr>
                <td style="width: 35%; height: 15px; border-left: solid 0.5px #686666;"> Im 7. Jahr mtl.:</td>
                <td style="width: 14.5%; text-align: right; border-right: solid 0.5px #686666;">'.$_POST['liquinachstpdf7'].' EUR<span style="color: white;">a</span></td>				
				<td></td>
				<td></td>				
        </tr>
		<tr>
                <td style="width: 35%; height: 15px; border-left: solid 0.5px #686666;"> Im 8. Jahr mtl.:</td>
                <td style="width: 14.5%; text-align: right; border-right: solid 0.5px #686666;">'.$_POST['liquinachstpdf8'].' EUR<span style="color: white;">a</span></td>				
				<td></td>
				<td></td>				
        </tr>
		<tr>
                <td style="width: 35%; height: 15px; border-left: solid 0.5px #686666;"> Im 9. Jahr mtl.:</td>
                <td style="width: 14.5%; text-align: right; border-right: solid 0.5px #686666;">'.$_POST['liquinachstpdf9'].' EUR<span style="color: white;">a</span></td>				
				<td></td>
				<td></td>				
        </tr>
		<tr>
                <td style="width: 35%; height: 15px; border-left: solid 0.5px #686666;"> Im 10. Jahr mtl.:</td>
                <td style="width: 14.5%; text-align: right; border-right: solid 0.5px #686666;">'.$_POST['liquinachstpdf10'].' EUR<span style="color: white;">a</span></td>				
				<td></td>
				<td></td>				
        </tr>
		<tr>
                <td style="width: 35%; height: 15px; border-left: solid 0.5px #686666;"> Im 11. Jahr mtl.:</td>
                <td style="width: 14.5%; text-align: right; border-right: solid 0.5px #686666;">'.$_POST['liquinachstpdf11'].' EUR<span style="color: white;">a</span></td>				
				<td></td>
				<td></td>				
        </tr>
		<tr>
                <td style="width: 35%; height: 15px; border-left: solid 0.5px #686666;"> Im 12. Jahr mtl.:</td>
                <td style="width: 14.5%; text-align: right; border-right: solid 0.5px #686666;">'.$_POST['liquinachstpdf12'].' EUR<span style="color: white;">a</span></td>				
				<td></td>
				<td></td>				
        </tr>
		<tr>
                <td style="width: 35%; height: 15px; border-left: solid 0.5px #686666;"> Im 13. Jahr mtl.:</td>
                <td style="width: 14.5%; text-align: right; border-right: solid 0.5px #686666;">'.$_POST['liquinachstpdf13'].' EUR<span style="color: white;">a</span></td>				
				<td></td>
				<td></td>				
        </tr>
		<tr>
                <td style="width: 35%; height: 15px; border-left: solid 0.5px #686666; border-bottom: solid 0.5px #686666;"> Im 14. Jahr mtl.:</td>
                <td style="width: 14.5%; text-align: right; border-right: solid 0.5px #686666; border-bottom: solid 0.5px #686666;">'.$_POST['liquinachstpdf14'].' EUR<span style="color: white;">a</span></td>				
				<td></td>
				<td></td>				
        </tr>
		<tr>
                 <td colspan="7"></td>
        </tr>
		<tr>
                 <td colspan="7"></td>
        </tr>		
</table>
<table cellpadding="2" border="0" cellspacing="0" style="font-family: Helvetica, Arial, Geneva, sans-serif; font-size: 7px; width: 100%; text-align: right;">

        <tr>
                <td colspan="12" style="background-color: #87af2b; color: white; font-size: 14px; font-weight: bold; border-top: solid 1px #686666; text-align: left;">Liquiditaetsbetrachtung (alle Betr&auml;ge in EUR)</td>
        </tr>
        <tr>
                 <td colspan="12"></td>
        </tr>
        <tr style="text-align: center;">
                <td style="width: 2.8%; border-bottom: 0.5px solid grey;">Jahr</td>
                <td style="width: 8.6%; border-bottom: 0.5px solid grey;">Darlehensstand</td>
                <td style="border-bottom: 0.5px solid grey;">Zins</td>
                <td style="border-bottom: 0.5px solid grey;">Tilgung</td>
                <td style="width: 8%; border-bottom: 0.5px solid grey;">Techn. + Kfm. Betreuung</td>
                <td style="width: 8%; border-bottom: 0.5px solid grey;">Miete + Stromerl&ouml;s</td>
                <td style="width: 7.6%; border-bottom: 0.5px solid grey;">&Uuml;berschuss / Aufwand vor Steuern</td>
                <td style="border-bottom: 0.5px solid grey;">AfA<br />(inkl.<br />Sonder-AfA)</td>
                <td style="border-bottom: 0.5px solid grey;">IAB</td>
                <td style="width: 7.4%; border-bottom: 0.5px solid grey;">zu versteuernder &Uuml;berschuss / Aufwand</td>
                <td style="border-bottom: 0.5px solid grey;">Steuervorteil</td>
                <td style="border-bottom: 0.5px solid grey;">&Uuml;berschuss / Aufwand nach Steuern</td>
                <td style="border-bottom: 0.5px solid grey;">Kummulierter &Uuml;berschuss / Aufwand nach Steuern</td>
        </tr>
        '.$liqui[0].'
        '.$liqui[1].'
        '.$liqui[2].'
        '.$liqui[3].'
        '.$liqui[4].'
        '.$liqui[5].'
        '.$liqui[6].'
        '.$liqui[7].'
        '.$liqui[8].'
        '.$liqui[9].'
        '.$liqui[10].'
        '.$liqui[11].'
        '.$liqui[12].'
        '.$liqui[13].'
        '.$liqui[14].'
        '.$liqui[15].'
        '.$liqui[16].'
        '.$liqui[17].'
        '.$liqui[18].'
        '.$liqui[19].'
        '.$liqui[20].'
        '.$liqui[21].'
        '.$liqui[22].'
        '.$liqui[23].'
        '.$liqui[24].'
        '.$liqui[25].'
        '.$liqui[26].'
        '.$liqui[27].'
        '.$liqui[28].'
        '.$liqui[29].'
		'.$liqui[30].'
		<tr>
                 <td colspan="13"></td>
        </tr>
		<tr>
                 <td colspan="13"></td>
        </tr>
</table>
<table cellpadding="2" border="0" cellspacing="0" style="font-family: Helvetica, Arial, Geneva, sans-serif; font-size: 8px; width: 100%; text-align: left;">		
		<tr>
                 <td style="background-color: #87af2b; color: white; font-size: 14px; font-weight: bold; border-top: solid 1px #686666;">Hinweis</td>
        </tr>
		<tr>
                 <td align="justify">Die vorstehenden Ausf&uuml;hrungen dienen der Orientierung. Diese Ausf&uuml;hrungen und Berechnungen erheben keinen Anspruch auf Vollst&auml;ndigkeit. Sie sind unverbindlich 
					 und erfolgen nach bestem Wissen und Gewissen. Sie basieren auf subjektiven Bewertungen und ber&uuml;cksichtigen den derzeitigen Kenntnisstand sowie die derzeitige Gesetzeslage.</td>
        </tr>
		<tr>
                 <td align="justify">Die Berechnungen sind als reine Orientierung zu sehen und beanspruchen keine absolute Gew&auml;hr. Sie ersetzen keine ausf&uuml;hrliche Beratung.</td>
        </tr>
		<tr>
                 <td align="justify">Es wurden bestimmte Annahmen getroffen, die von den tats&auml;chlichen Gegebenheiten abweichen k&ouml;nnen und h&ouml;chst wahrscheinlich auch abweichen werden.</td>
        </tr>
		<tr>
                 <td align="justify">Von daher wird eine Haftung, mit Ausnahme einer solchen wegen Vorsatzes oder grober Fahrl&auml;ssigkeit, f&uuml;r jegliche Sch&auml;den, insbesondere auch mittelbare oder Folgesch&auml;den 
									gegen&uuml;ber dem Benutzer der Software sowie gegen&uuml;ber Dritten ausgeschlossen.</td>
        </tr>
		<tr>
                 <td align="justify">Die steuerrechtlichen Auswirkungen basieren auf dem bei Erstellung des Beratungsprogramms bekannten Steuerrecht, erheben aber nicht den Anspruch auf Vollst&auml;ndigkeit in allen 
									steuerlichen Belangen. Alle steuerlichen Hinweise auf dieser Auswertung stellen keine Steuerberatung dar. Es handelt sich lediglich um Anregungen, die auf keinen Fall eine 
									qualifizierte und individuelle Beratung durch Ihren Steuerberater ersetzen. F&uuml;r unerw&uuml;nschte steuerliche Folgen wird daher ausdr&uuml;cklich keine Haftung &uuml;bernommen.</td>
        </tr>
		<tr>
                 <td align="justify">Im Rahmen der Einkommensteuerveranlagung kann es zu Abweichungen kommen. In Steuerfragen wenden Sie sich bitte an Ihren Steuerberater.</td>
        </tr>		
</table>
';

//////////////////////////// Erzeugung des PDF Dokuments \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// TCPDF Library laden
require_once('tcpdf/tcpdf.php');

// Header-Class erweitern um Header ändern zu können
class MYPDF extends TCPDF {

    //Page header
    public function Header() {        
		// Set font
        $this->SetFont('helvetica', '', 14);
        // Title        
		//$this->Cell(0, 15, 'Kurzexpose<br />aaaaa', 0, false, 'L', 0, '', 0, false, 'M', 'M');
		$this->MultiCell(0, 15, $_POST['pdfheader'], 'B', 'L', 0, 1, '', '', true, 0, true, true, 0);
		// Logo
        $image_file = K_PATH_IMAGES.'logo_herzkraft.jpg';
        $this->Image($image_file, 5, 5, 50, '', 'JPG', '', 'M', false, 300, 'R', false, false, 0, false, false, false);
    }

    // Page footer
    public function Footer() {
        // Position at 13 mm from bottom
        $this->SetY(-13);
        // Set font
        $this->SetFont('helvetica', 'I', 8);
        // Page number
        $this->Cell(0, 10, 'Seite '.$this->getAliasNumPage().'/'.$this->getAliasNbPages(), 0, false, 'C', 0, '', 0, false, 'T', 'M');
    }
}

// Erstellung des PDF Dokuments und Header beschriften
$pdf = new MYPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

// Dokumenteninformationen
$pdf->SetCreator(PDF_CREATOR);
$pdf->SetAuthor('DCAG');
$pdf->SetTitle('Expose ');
$pdf->SetSubject('Expose ');

// set default header data
$pdf->SetHeaderData(PDF_HEADER_LOGO, PDF_HEADER_LOGO_WIDTH, PDF_HEADER_TITLE, PDF_HEADER_STRING);

// set header and footer fonts
$pdf->setHeaderFont(Array(PDF_FONT_NAME_MAIN, '', PDF_FONT_SIZE_MAIN));
$pdf->setFooterFont(Array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));

// Auswahl des Font
$pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);

// Auswahl der MArgins
$pdf->SetMargins(15, 20, 15, true);
$pdf->SetHeaderMargin(4);
$pdf->SetFooterMargin(PDF_MARGIN_FOOTER);

// Automatisches Autobreak der Seiten
$pdf->SetAutoPageBreak(TRUE, 8);

// Image Scale
$pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);

// Schriftart
$pdf->SetFont('dejavusans', '', 10);

// Neue Seite
$pdf->AddPage();

// FÃ¼gt den HTML Code in das PDF Dokument ein
$pdf->writeHTML($html, true, false, true, false, '');

//Ausgabe der PDF

//Variante 1: PDF direkt an den Benutzer senden:
$pdf->Output($pdfName, 'I');

//Variante 2: PDF im Verzeichnis abspeichern:
//$pdf->Output(dirname(__FILE__).'/'.$pdfName, 'F');
//echo 'PDF herunterladen: <a href="'.$pdfName.'">'.$pdfName.'</a>';

?>