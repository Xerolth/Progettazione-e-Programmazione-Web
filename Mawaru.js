//MENù

function gestoreMenù (event) {
	try {
		if (this.id == "apriMenù") {
			nodoMenù.style.width = "250px";
		} else {
			nodoMenù.style.width = "0";
		}
	} catch ( e ) {
		alert("gestoreMenù " + e);
	}
}

//TRAMA

function gestoreTrama (event) {
	try {
		if (nodoParagrafo.childNodes.length > 0) {
			nodoParagrafo.removeChild(nodoParagrafo.firstChild);
			while (nodoGalleria0.childNodes.length > 0) {
				nodoGalleria0.removeChild(nodoGalleria0.lastChild);
			}
			while (nodoGalleria1.childNodes.length > 0) {
				nodoGalleria1.removeChild(nodoGalleria1.lastChild);
			}
		}
		var numParte = this.id[(this.id).length-1]; //prendo solo l'ultimo carattere dell'id, che è il numero
		//aggiungo la trama al paragrafo
		var p = document.createElement("P");
		p.style.margin = "0";
		var testo = document.createTextNode(trama[numParte].plot);
		p.appendChild(testo);
		nodoParagrafo.appendChild(p);
		//aggiungo le foto alle gallerie laterali
		for (var i = 0; i < trama[numParte].gallery0.length; i++) { //prima galleria
			var img = document.createElement("IMG");
			img.setAttribute("id", trama[numParte].gallery0[i]);
			img.setAttribute("alt", trama[numParte].gallery0[i]);
			img.setAttribute("src", "img/" + trama[numParte].gallery0[i] + ".png");
			img.style.cssFloat = "left";
			img.style.width = "100%";
			nodoGalleria0.appendChild(img);
		}
		for (var i = 0; i < trama[numParte].gallery1.length; i++) { //seconda galleria
			var img = document.createElement("IMG");
			img.setAttribute("id", trama[numParte].gallery1[i]);
			img.setAttribute("alt", trama[numParte].gallery1[i]);
			img.setAttribute("src", "img/" + trama[numParte].gallery1[i] + ".png");
			img.style.cssFloat = "left";
			img.style.width = "100%";
			nodoGalleria1.appendChild(img);
		}
	} catch ( e ) {
		alert("gestoreTrama " + e);
	}
}

//PERSONAGGI

function gestoreGriglia(event){
	try {
		if (nodoImmagine.childNodes.length > 0) {
			nodoImmagine.removeChild(nodoImmagine.firstChild);
		}
		if (nodoNomePg.childNodes.length > 0) {
			nodoNomePg.removeChild(nodoNomePg.firstChild);
		}
		if (nodoDescrizionePg.childNodes.length > 0) {
			nodoDescrizionePg.removeChild(nodoDescrizionePg.firstChild);
		}
		if (nodoTrasformazione.childNodes.length > 0) {
			while (nodoTrasformazione.childNodes.length > 0) {
				nodoTrasformazione.removeChild(nodoTrasformazione.lastChild);
			}
		}
		if (nodoStrategia.childNodes.length > 0) {
			for (var i = nodoStrategia.childNodes.length; i > 0; i--) {
				nodoStrategia.removeChild(nodoStrategia.childNodes[i-1]);
			}
		}
		var foto = document.createElement("IMG");
		if (nodoSlidePg.style.display == "none") {
			nodoSlidePg.style.display = "block";
		}
		foto.setAttribute("id", pg[this.id].img);
		foto.setAttribute("alt", pg[this.id].img);
		foto.setAttribute("src", "img/" + pg[this.id].img + ".png");
		if (this.id == 0) {
			if (nodoImmagine.style.display == "block" && nodoTrasformazione.style.display == "none" || nodoImmagine.childNodes.length == 0) {
				nodoImmagine.style.display = "none";
				nodoTrasformazione.style.display = "block";
				nodoStrategia.style.display = "block";
			}
			nodoTrasformazione.appendChild(foto);
			var principessa = document.createElement("IMG");
			principessa.setAttribute("id", "principessa");
			principessa.setAttribute("alt", "principessa");
			principessa.setAttribute("src", "img/principessa.png");
			nodoTrasformazione.appendChild(principessa);
			var crystal = document.createElement("IMG");
			crystal.setAttribute("id", "crystal");
			crystal.setAttribute("alt", "crystal");
			crystal.setAttribute("src", "img/crystal.png");
			nodoStrategia.appendChild(crystal);
			var clicca = document.createElement("P");
			var cliccaTesto = document.createTextNode("Clicca qui!");
			clicca.appendChild(cliccaTesto);
			strategia.appendChild(clicca);
			
			nodoHimari = document.getElementById("himari");
			nodoHimari.style.opacity = "1";
			nodoHimari.addEventListener("animationend", fineRotazione);
			nodoPrincipessa = document.getElementById("principessa");
			nodoPrincipessa.style.opacity = "0";
			nodoPrincipessa.addEventListener("animationend", fineRotazione);
			nodoCrystal = document.getElementById("crystal");
	
			nodoCrystal.onclick = strategiaSopravvivenza;
			
		} else {
			if (nodoTrasformazione.style.display == "block" && nodoImmagine.style.display == "none" || nodoImmagine.childNodes.length == 0) {
				nodoTrasformazione.style.display = "none";
				nodoStrategia.style.display = "none";
				nodoImmagine.style.display = "block";
			}
			nodoImmagine.appendChild(foto);
		}
		var nome = document.createTextNode(pg[this.id].nome);
		nodoNomePg.appendChild(nome);
		var descrizione = document.createTextNode(pg[this.id].descrizione);
		nodoDescrizionePg.appendChild(descrizione);
	} catch(e) {
		alert("gestoreGriglia " + e);
	}
}

function strategiaSopravvivenza() {
		nodoTrasformazione.style.animation = "rotazione 2s linear";
		if (nodoHimari.style.opacity == "1" && nodoPrincipessa.style.opacity == "0") {
			nodoHimari.style.animation = "sparizione 1.5s linear 0.5s";
			nodoPrincipessa.style.animation = "apparizione 1.5s linear 0.5s";
		} else {
			nodoHimari.style.animation = "apparizione 1.5s linear 0.5s";
			nodoPrincipessa.style.animation = "sparizione 1.5s linear 0.5s";
		}
}

function fineRotazione() {
	nodoTrasformazione.style.animation = "";
	nodoHimari.style.animation = "";
	nodoPrincipessa.style.animation = "";
	if (nodoHimari.style.opacity == "1" && nodoPrincipessa.style.opacity == "0") {
		nodoHimari.style.opacity = "0";
		nodoPrincipessa.style.opacity = "1";
		nodoNomePg.removeChild(nodoNomePg.firstChild);
		nodoDescrizionePg.removeChild(nodoDescrizionePg.firstChild);
		var nome = document.createTextNode("Principessa del Cristallo");
		nodoNomePg.appendChild(nome);
		var descrizione = document.createTextNode("Al grido di 'Strategia di sopravvivenza!' Himari si trasforma nella Principessa del Cristallo, e trasporta i malcapitati vicino a lei nel Mondo del Cristallo. Obbliga Kanba e Shoma a cercare il Penguindrum, anche se nemmeno lei sa di cosa si tratta...");
		nodoDescrizionePg.appendChild(descrizione);
	} else {
		nodoHimari.style.opacity = "1";
		nodoPrincipessa.style.opacity = "0";
		nodoNomePg.removeChild(nodoNomePg.firstChild);
		nodoDescrizionePg.removeChild(nodoDescrizionePg.firstChild);
		var nome = document.createTextNode(pg[0].nome);
		nodoNomePg.appendChild(nome);
		var descrizione = document.createTextNode(pg[0].descrizione);
		nodoDescrizionePg.appendChild(descrizione);
	}
}


//MUSICA

function gestoreDragStart (event) {
    try {
		event.dataTransfer.setData("text", this.id);
    } catch ( e ) {
		alert("gestoreDragStart " + e);
    }
}

function gestoreDragOver (event) {
    try {
		event.preventDefault();
    } catch ( e ) {
		alert("gestoreDragOver " + e);
    }
}

function gestoreDropGiradischi (event) {
    try {
		event.preventDefault();
		var dati = event.dataTransfer.getData("text");
		var disco = document.getElementById(dati);
		disco.style.width = "100%";
		disco.style.margin = 0;
		disco.style.animation = "giradisco 1s infinite linear running";
		nodoPiatto.style.paddingBottom = 0;
		var titolo = document.createTextNode(canzoni[disco.id]);
		nodoTitoloCanzone.removeChild(nodoTitoloCanzone.firstChild);
		nodoTitoloCanzone.appendChild(titolo);
		if (this.childNodes.length > 0 ) {
			var id = this.firstChild.id;
			if (id != disco.id) {
				nodoPiatto.removeChild(nodoPiatto.firstChild);
				var nodoDisco = document.createElement("IMG");
				nodoDisco.setAttribute("id", id);
				nodoDisco.setAttribute("alt", id);
				nodoDisco.setAttribute("src", "img/" + id + ".png");
				nodoDisco.setAttribute("width", "50%");
				nodoDisco.style.display = "block";
				nodoDisco.style.margin = "0 auto 2% auto";
				nodoDisco.setAttribute("draggable", "true");
				nodoDisco.ondragstart = gestoreDragStart;
				nodoScaffale.appendChild(nodoDisco);
			}
		}
		if (nodoAudio.childNodes.length > 0) {
			nodoAudio.removeChild(nodoAudio.firstChild);
			while (nodoControlli.childNodes.length > 0) {
				nodoControlli.removeChild(nodoControlli.lastChild);
			}
		}
		// droppando il disco si aggiungono la canzone e il player
		// aggiungo la canzone
		var audio = document.createElement("AUDIO");
		audio.setAttribute("src", "music/" + canzoni[disco.id] + ".mp3");
		audio.setAttribute("autoplay", "autoplay");
		audio.addEventListener("timeupdate", movimentoCursore);
		audio.addEventListener("ended", fineCanzone);
		nodoAudio.appendChild(audio);
		// aggiungo il tasto play
		var play = document.createElement("IMG");
		play.setAttribute("id", "play");
		play.setAttribute("alt", "play");
		play.setAttribute("src", "img/pause.png");
		play.style.cssFloat = "left";
		play.style.margin = "0 3% 0 27%";
		play.style.width = "6.19%"
		play.onclick = playPausa;
		nodoControlli.appendChild(play);
		// creo la timeline
		var timeline = document.createElement("DIV");
		timeline.setAttribute("id", "timeline");
		timeline.setAttribute("alt", "timeline");
		timeline.style.cssFloat = "left";
		timeline.style.margin = "2.2% 0 0 0";
		timeline.style.paddingRight = "2%";
		timeline.style.width = "35%";
		timeline.style.background = "#e6b3ff";
		timeline.style.borderRadius = "15px";
		// aggiungo il cursore nella timeline
		var cursor = document.createElement("DIV");
		cursor.setAttribute("id", "cursor");
		cursor.setAttribute("alt", "cursor");
		cursor.style.width = "5%";
		cursor.style.paddingBottom = "5%";
		cursor.style.background = "black";
		cursor.style.borderRadius = "50%";
		timeline.appendChild(cursor);
		nodoControlli.appendChild(timeline);
		this.appendChild(disco);
	} catch ( e ) {
		alert("gestoreDropGiradischi " + e);
    }
}

function gestoreDropScaffale (event) {
    try {
		event.preventDefault();
		var dati = event.dataTransfer.getData("text");
		var disco = document.getElementById(dati);
		disco.style.width = "50%";
		disco.style.margin = "0 auto 2% auto";
		disco.style.animation = "";
		this.appendChild(disco);
		if (nodoPiatto.childNodes.length == 0) {
			if (nodoTitoloCanzone.firstChild.nodeValue != "Trascina qui un disco!") {
				var titolo = document.createTextNode("Trascina qui un disco!");
				nodoTitoloCanzone.removeChild(nodoTitoloCanzone.firstChild);
				nodoTitoloCanzone.appendChild(titolo);
			}
			nodoPiatto.style.paddingBottom = "100%";
			if (nodoAudio.childNodes.length > 0) {
				nodoAudio.removeChild(nodoAudio.firstChild);
				while (nodoControlli.childNodes.length > 0) {
					nodoControlli.removeChild(nodoControlli.lastChild);
				}
			}
		}
    } catch ( e ) {
		alert("gestoreDropScaffale " + e);
    }
}

function playPausa () {
	if (nodoPiatto.childNodes.length > 0) {
		if (nodoAudio.firstChild.paused) {
			nodoAudio.firstChild.play();
			this.setAttribute("src", "img/pause.png");
			nodoPiatto.firstChild.style.animationPlayState = "running";
		} else {
			nodoAudio.firstChild.pause();
			this.setAttribute("src", "img/play.png");
			nodoPiatto.firstChild.style.animationPlayState = "paused";
		}
	}
}

function fineCanzone () {
	var play = document.getElementById("play");
	play.setAttribute("src", "img/play.png");
	nodoPiatto.firstChild.style.animationPlayState = "paused";
	var cursore = document.getElementById("cursor");
	cursore.style.marginLeft = "";
}

function movimentoCursore () { //regola il movimento del cursore nella timeline durante la canzone
	var cursore = document.getElementById("cursor");
	var canzone = nodoAudio.firstChild;
	var durataCanzone = canzone.duration;
	var minutaggio = canzone.currentTime;
	var spostaPercent = (minutaggio/durataCanzone) * 100; 
	cursore.style.marginLeft = spostaPercent + "%"; //si sposta del valore trovato dall'operazione
}

//QUIZ

function nuovoQuiz () {         //fa partire il quiz
   nodoRiprova.style.display = "none";
   nodoCompleta.style.display = "none";
   numeroDomandaCorrente = 0;
   aggiornaDomanda(numeroDomandaCorrente);
   scriviMessaggio(nodoRisultato, "");
   risposteDate = [];
}

function aggiornaDomanda (i) {
   var parte = quiz[i];
   scriviMessaggio(nodoTestoDomanda, parte.domanda)
   scriviMessaggio(nodoTestoRisposta0, parte.risposte[0]);
   scriviMessaggio(nodoTestoRisposta1, parte.risposte[1]);
   scriviMessaggio(nodoTestoRisposta2, parte.risposte[2]);
   nodoRisposta0.checked = false;
   nodoRisposta1.checked = false;
   nodoRisposta2.checked = false;
   if (nodoFotoDomanda.childNodes.length > 0) {
	   nodoFotoDomanda.removeChild(nodoFotoDomanda.firstChild);
   }
   var foto = document.createElement("IMG");
   foto.setAttribute("id", parte.img);
   foto.setAttribute("alt", parte.img);
   foto.setAttribute("src", "img/" + parte.img + ".png");
   nodoFotoDomanda.appendChild(foto);
}

function gestoreMuoviQuiz () {
	try {
		nodoSuccQuiz.style.display = "block";
		nodoRiprova.style.display = "none";
		nodoCompleta.style.display = "none";
		if (numeroDomandaCorrente == numeroDomande) {
			return;
		}
		if (nodoRisposta0.checked) {
			risposteDate[numeroDomandaCorrente] = 0;
        } else if (nodoRisposta1.checked) {
            risposteDate[numeroDomandaCorrente] = 1;
        } else if (nodoRisposta2.checked) {
            risposteDate[numeroDomandaCorrente] = 2;
        } else {
            risposteDate[numeroDomandaCorrente] = -1;
        }
        numeroDomandaCorrente++;
		if (numeroDomandaCorrente >= numeroDomande-1) {
			nodoCompleta.style.display = "block";
			nodoSuccQuiz.style.display = "none";
		}
        if (numeroDomandaCorrente == numeroDomande) {
			nodoCompleta.style.display = "none";
			nodoRiprova.style.display = "block";
			nodoQuiz.style.display = "none";
			nodoSchedaRisultato.style.display = "block";
			var esito = calcolaEsito();
            var s;
            if (esito == 1) {
				s = "1 risposta esatta su " + numeroDomande + "!";
			} else {
                s = esito + " risposte esatte su " + numeroDomande + "!";
			}
			scriviMessaggio(nodoRisultato, s);
		} else {
			aggiornaDomanda(numeroDomandaCorrente);
		}
	} catch ( e ) {
		alert ("gestoreClickAvanti " + e);
	}
}

function scriviMessaggio (nodo, messaggio) {
   var nodoTesto = document.createTextNode(messaggio);
   if (nodo.childNodes.length == 0) {
      nodo.appendChild(nodoTesto);
   } else {
      nodo.replaceChild(nodoTesto, nodo.firstChild);
   }
}

function calcolaEsito () {
	var numeroRisposteEsatte = 0;
	for (var i = 0; i < quiz.length; i++) {
		var parte = quiz[i];
		if (parte.rispostaEsatta == risposteDate[i]) {
		numeroRisposteEsatte++;
		}
	}
	return numeroRisposteEsatte;
}

function gestoreClickInizia () {
	try {
		nodoSchedaStart.style.display = "none";
		nodoQuiz.style.display = "block";
		nodoSuccQuiz.style.display = "block";
		nuovoQuiz();
	} catch ( e ) {
		alert ("gestoreClickInizia " + e);
	}
}

var nodoMenù;
var NodoApriMenù;
var NodoChiudiMenù;

var nodoTrama;
var nodoParagrafo;
var nodoGalleria0;
var nodoGalleria1;

var nodoImgGriglia;
var nodoNomeGriglia;
var nodoSlidePg;
var nodoNomePg;
var nodoDescrizionePg;
var nodoImmagine;
var nodoPersonaggio0;
var nodoPersonaggio1;
var nodoPersonaggio2;
var nodoPersonaggio3;
var nodoPersonaggio4;
var nodoPersonaggio5;
var nodoPersonaggio6;
var nodoPersonaggio7;

var nodoStrategia;
var nodoCrystal;
var nodoHimari;
var nodoPrincipessa;
var nodoTrasformazione;
var nodoDescrizione;

var nodoScaffale;
var nodoPlayer;
var nodoTitoloCanzone;
var nodoGiradischi;
var nodoPiatto;
var nodoAudio;
var nodoControlli;

var nodoSchedaStart;
var nodoSchedaRisultato;
var nodoInizia;
var nodoQuiz;
var nodoNumeroDomanda;
var nodoTestoDomanda;
var nodoRisposta0;
var nodoTestoRisposta0;
var nodoRisposta1;
var nodoTestoRisposta1;
var nodoRisposta2;
var nodoTestoRisposta2;
var nodoFotoDomanda;
var nodoRisultato;
var nodoRiprova;
var nodoCompleta;
var numeroDomande;
var numeroDomandaCorrente;
var risposteDate;

var nodoSuccQuiz;

var trama = [
	{
		plot : "I fratelli Kanba e Shoma Takakura hanno perso l'amata sorella minore Himari. Affranti, all'obitorio non riescono a trattenere il proprio dolore innanzi alle spoglie della sorellina. Poi, inaspettatamente, Himari torna in vita. Sulla sua testa svetta un buffo copricapo a forma di pinguino. \"Il luogo da cui provengo io è il vostro capolinea del destino\". Chi sarà mai la misteriosa ragazza che si rivolge a Kanba e Shoma con parole tanto oscure?",
		gallery0 : ["0", "1", "2"],
		gallery1 : ["3", "4", "5"]
	},
	{
		plot : "Come mai Himari, che doveva essere morta all'acquario, è tornata in vita? In quel giorno decisivo, una descrizione dai contorni sfumati e surreali, quasi un sogno. All'interno di una suggestiva biblioteca dotata di una collezione sterminata di libri, Sanetoshi Watase, il bibliotecario, tira fuori dai meandri più nascosti del cuore di Himari i suoi ricordi più profondi. Triple-H, macella-bambini, copricapo a forma di pinguino, una mela rossa, il capolinea del destino...",
		gallery0 : ["6", "7", "8"],
		gallery1 : ["9", "10", "11"]
	},
	{
		plot : "Himari giace in un letto d'ospedale al confine tra la vita e la morte. Kanba è al suo capezzale, mentre Ringo e Shoma attendono l'inevitabile fuori dalla camera, in cui è presente anche il \"Dottor\" Sanetoshi. Il misterioso personaggio propone a Kanba un accordo: somministrerà ad Himari un farmaco sperimentale, in grado di risvegliare la ragazza, in cambio di un prezzo molto alto... Qual'è il vero scopo di Sanetoshi? Da dove viene? Il \"destino\", che ha determinato gli avvenimenti nella vita dei fratelli Takakura e di Ringo, è davvero un principio impossibile da sovvertire?",
		gallery0 : ["12", "13", "14"],
		gallery1 : ["15", "16", "17"]
	},
	{
		plot : "\"Un amore incapace di generare frutti non può che svuotarti. E quando sei vuota, il tuo destino è quello di essere gettata via. Proprio come un gattino che qualcuno ha accudito per un po' e poi abbandonato, perché aveva esaurito il suo scopo\". Questi sono i pensieri che albergano nell'animo di Himari. Malgrado le apparenze, infatti, anche la giovane nasconde un doloroso segreto...",
		gallery0 : ["18", "19", "20"],
		gallery1 : ["21", "22", "23"]
	}
]

var pg = [
	{
		nome : "Himari Takakura",
		descrizione : "Ragazza molto solare, vuole un gran bene ai suoi fratelli e cerca di non fargli pesare la sua condizione di salute. Il cappello magico è ciò la tiene ancora in vita.",
		img: "himari"
	},
	{
		nome : "Kanba Takakura",
		descrizione : "Ha un carattere freddo e la nomea di donnaiolo. Per salvare Himari è disposto a fare qualsiasi cosa, usando ogni mezzo necessario.",
		img: "kanba"
	},
	{
		nome : "Shoma Takakura",
		descrizione : "Ragazzo sensibile e amichevole, in netto contrasto col fratello. Anche lui vuole salvare Himari, però non vorrebbe ricorrere a metodi drastici.",
		img: "shoma"
	},
	{
		nome : "Ringo Oginome",
		descrizione : "Possiede il diario, appartenuto a sua sorella Momoka, che si pensa essere il Penguindrum, per questo viene sempre seguita da Kanba e Shoma. Cerca ostinatamente di far accadere gli eventi scritti nel diario, pensando che sia l'unico modo per rimettere insieme la sua famiglia.",
		img: "ringo"
	},
	{
		nome : "Keiju Tabuki",
		descrizione : "Insegnante di Kanba e Shoma e appassionato di birdwatching, è stato grande amico di Momoka. Ringo è ossessionata da lui, infatti lo segue in ogni suo spostamento.",
		img: "tabuki"
	},
	{
		nome : "Yuri Tokikago",
		descrizione : "È la ragazza di Tabuki ed è una famosa attrice teatrale. Anche lei, durante la sua infanzia, è stata grande amica di Momoka.",
		img: "yuri"
	},
	{
		nome : "Masako Natsume",
		descrizione : "Erede della Natsume Corporation, cerca di conquistare Kanba con la forza. Anche lei è alla ricerca del Penguindrum, poiché anche il suo fratellino Mario è tenuto in vita da un cappello a forma di pinguino.",
		img: "masako"
	},
	{
		nome : "Sanetoshi Watase",
		descrizione : "Uomo misterioso che nutre un certo interesse per Himari. Chissà quali sono le sue intenzioni...",
		img: "sanetoshi"
	},
]

var quiz = [
	{ // domanda 0
		domanda : "Il pinguino sta leggendo un libro. A quale famoso film fa riferimento la copertina?",
		risposte : [
			"Interstellar",
			"2001: Odissea nello spazio",
			"2010: L'anno del contatto"
		],
		rispostaEsatta : 1,
		img: "pinguinolibro"
	},
	{ // domanda 1
		domanda : "A quale famosa costruzione è ispirato questo edificio?",
		risposte : [
			"Edificio Mirador a Madrid, Spagna",
			"Stadio nazionale di Pechino, China",
			"Centro Georges Pompidou a Parigi, Francia"
		],
		rispostaEsatta : 2,
		img: "ospedale"
	},
	{ // domanda 2
		domanda : "Quale famosa statua rappresenta?",
		risposte : [
			"David di Donatello",
			"Pietà di Michelangelo",
			"David di Michelangelo"
		],
		rispostaEsatta : 2,
		img: "scultura"
	},
	{ // domanda 3
		domanda : "A quale famoso quadro di Klimt è ispirata questa immagine?",
		risposte : [
			"Il bacio",
			"Le tre età della madre",
			"Danae"
		],
		rispostaEsatta : 0,
		img: "klimt"
	},
	{ // domanda 4
		domanda : "A quale concept si sono ispirati per realizzare questa biblioteca?",
		risposte : [
			"Concept per la biblioteca di Stoccolma, Svezia",
			"Concept per la biblioteca di Aarhus, Danimarca",
			"Concept per la biblioteca Obama a Chicago, USA"
		],
		rispostaEsatta : 1,
		img: "bibliotecahimari"
	},
	{ // domanda 5
		domanda : "Di quale artista è il quadro a cui fa riferimento l'immagine?",
		risposte : [
			"Monet",
			"Manet",
			"Magritte"
		],
		rispostaEsatta : 0,
		img: "madretabuki"
	}
]

var canzoni = {
	"disc0" : "Nornir",
	"disc1" : "Shōnen yo ware ni kaere",
	"disc2" : "DEAR FUTURE",
	"disc3" : "ROCK OVER JAPAN",
	"disc4" : "Hai iro no Suiyoubi",
	"disc5" : "Daddy's Shoes"
}

function gestoreLoad(){
	try{
		nodoMenù = document.getElementById("menù");
		NodoApriMenù = document.getElementById("apriMenù");
		NodoApriMenù.onclick = gestoreMenù;
		NodoChiudiMenù = document.getElementById("chiudiMenù");
		NodoChiudiMenù.onclick = gestoreMenù;

		var nodoTrama = document.getElementsByClassName("parteTrama");
		for (var i = 0; i < nodoTrama.length; i++) {
			nodoTrama[i].onclick = gestoreTrama;
		}
		nodoParagrafo = document.getElementById("paragrafo");
		nodoGalleria0 = document.getElementById("galleria0");
		nodoGalleria1 = document.getElementById("galleria1");

		nodoImgGriglia = document.getElementsByClassName("immagineGriglia");
		nodoNomeGriglia = document.getElementsByClassName("nomeGriglia");
		for (var i = 0; i < nodoImgGriglia.length; i++) {
			var nodoImg = document.createElement("IMG");
			nodoImg.setAttribute("id", pg[i].img + "ico");
			nodoImg.setAttribute("alt", pg[i].img + "ico");
			nodoImg.setAttribute("src", "img/" + pg[i].img + "ico.png");
			nodoImgGriglia[i].appendChild(nodoImg);
			var nodoNome = document.createTextNode(pg[i].nome);
			nodoNomeGriglia[i].appendChild(nodoNome);
		}
		nodoSlidePg = document.getElementById("slidePg");
		nodoSlidePg.style.display = "none";
		nodoNomePg = document.getElementById("nomePg");
		nodoDescrizionePg = document.getElementById("descrizionePg");
		nodoImmagine = document.getElementById("immaginePg");
		nodoPersonaggio0 = document.getElementById("0");
		nodoPersonaggio0.onclick = gestoreGriglia;
		nodoPersonaggio1 = document.getElementById("1");
		nodoPersonaggio1.onclick = gestoreGriglia;
		nodoPersonaggio2 = document.getElementById("2");
		nodoPersonaggio2.onclick = gestoreGriglia;
		nodoPersonaggio3 = document.getElementById("3");
		nodoPersonaggio3.onclick = gestoreGriglia;
		nodoPersonaggio4 = document.getElementById("4");
		nodoPersonaggio4.onclick = gestoreGriglia;
		nodoPersonaggio5 = document.getElementById("5");
		nodoPersonaggio5.onclick = gestoreGriglia;
		nodoPersonaggio6 = document.getElementById("6");
		nodoPersonaggio6.onclick = gestoreGriglia;
		nodoPersonaggio7 = document.getElementById("7");
		nodoPersonaggio7.onclick = gestoreGriglia;
		
		nodoStrategia = document.getElementById("strategia");
		nodoTrasformazione = document.getElementById("trasformazione");
		nodoTrasformazione.addEventListener("animationend", fineRotazione);
		nodoDescrizione = document.getElementsByClassName("descrizione");
		
		nodoScaffale = document.getElementById("scaffale");
		nodoScaffale.ondragover = gestoreDragOver;
		nodoScaffale.ondrop = gestoreDropScaffale;
		nodoPlayer = document.getElementById("player");
		nodoTitoloCanzone = document.getElementById("titoloCanzone");
		nodoGiradischi = document.getElementById("giradischi");
		nodoPiatto = document.getElementById("piatto");
		nodoPiatto.ondragover = gestoreDragOver;
		nodoPiatto.ondrop = gestoreDropGiradischi;
		nodoAudio = document.getElementById("audio")
		nodoControlli = document.getElementById("controlli");
		
		for (var i in canzoni) {
			var nodoDisco = document.createElement("IMG");
			nodoDisco.setAttribute("id", i);
			nodoDisco.setAttribute("alt", i);
			nodoDisco.setAttribute("src", "img/" + i + ".png");
			nodoDisco.setAttribute("width", "50%");
			nodoDisco.style.display = "block";
			nodoDisco.style.margin = "0 auto 2% auto";
			nodoDisco.setAttribute("draggable", "true");
			nodoDisco.ondragstart = gestoreDragStart;
			nodoScaffale.appendChild(nodoDisco);
		}
		
		nodoSchedaStart = document.getElementById("start");
		nodoSchedaRisultato = document.getElementById("result");
		nodoInizia = document.getElementById("inizia");
		nodoInizia.onclick = gestoreClickInizia;
		nodoQuiz = document.getElementById("quiz");
		nodoTestoDomanda = document.getElementById("testoDomanda");
		nodoRisposta0 = document.getElementById("risposta0");
		nodoTestoRisposta0 = document.getElementById("testoRisposta0");
		nodoRisposta1 = document.getElementById("risposta1");
		nodoTestoRisposta1 = document.getElementById("testoRisposta1");
		nodoRisposta2 = document.getElementById("risposta2");
		nodoTestoRisposta2 = document.getElementById("testoRisposta2");
		nodoFotoDomanda = document.getElementById("fotoDomanda");
		nodoRisultato = document.getElementById("risultato");
		nodoRiprova = document.getElementById("riprova");
		nodoRiprova.onclick = gestoreClickInizia;
		nodoCompleta = document.getElementById("completa");
		nodoCompleta.onclick = gestoreMuoviQuiz;
		numeroDomande = quiz.length;
		
		nodoSuccQuiz = document.getElementById("quiz+");
		nodoSuccQuiz.onclick = gestoreMuoviQuiz;
	}catch(e){
		alert("gestoreLoad" + e);
	}
}

window.onload = gestoreLoad;