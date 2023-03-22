	function inputval( feld )
	{
		feld = parseFloat(feld);
		//Zielzeichenkette zuweisen
		document.getElementById('pvertrjahrinp').value = feld.toLocaleString('de-DE', { minimumFractionDigits: 2 });
	}	