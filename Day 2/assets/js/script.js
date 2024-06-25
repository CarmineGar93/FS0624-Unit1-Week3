let arrayTabella = [
  {
    immagine: "../assets/img/PC.png",
    nomeProdotto: "PC",
    qty: 2,
    prezzo: 1000,
  },
  {
    immagine: "../assets/img/Telefono.png",
    nomeProdotto: "Cellulare",
    qty: 10,
    prezzo: 600,
  },
  {
    immagine: "../assets/img/Tablet.png",
    nomeProdotto: "Tablet",
    qty: 5,
    prezzo: 800,
  },
  {
    immagine: "../assets/img/Mouse.png",
    nomeProdotto: "Mouse",
    qty: 20,
    prezzo: 50,
  },
  {
    immagine: "../assets/img/Tastiera.png",
    nomeProdotto: "Tastiera",
    qty: 20,
    prezzo: 100,
  },
];

/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */
const title = document.querySelector("h1");
const changeTitle = function () {
  title.innerText = "Questo è il nuovo titolo della pagina";
};

changeTitle();

/* ESERCIZIO 2
 Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/

const addClassToTitle = function () {
  title.setAttribute("class", "myHeading");
};

addClassToTitle();

/* ESERCIZIO 3
 Scrivi una funzione che cambi il testo dei p figli di un div
*/

const changePcontent = function () {
  const paragraph = document.querySelectorAll("div p");
  paragraph.forEach(
    (item) => (item.innerText = "Questi sono i nuovi paragrafi")
  );
};

changePcontent();

/* ESERCIZIO 4
 Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
*/

const changeUrls = function () {
  const links = document.querySelectorAll("a:not(footer a)");
  links.forEach((item) => item.setAttribute("href", "https://www.google.com"));
};

changeUrls();

/* ESERCIZIO 5
 Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
*/

const addToTheSecond = function () {
  const secondaLista = document.getElementById("secondList");
  const nuovoElemento = document.createElement("li");
  nuovoElemento.innerText = "4th";
  secondaLista.appendChild(nuovoElemento);
};

addToTheSecond();

/* ESERCIZIO 6
 Scrivi una funzione che aggiunga un paragrafo al primo div
*/

const addParagraph = function () {
  const primoDiv = document.querySelector("div");
  const nuovoP = document.createElement("p");
  primoDiv.appendChild(nuovoP);
};

addParagraph();

/* ESERCIZIO 7
 Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/

const hideFirstUl = function () {
  const primaLista = document.getElementById("firstList");
  primaLista.style.display = "none";
};

hideFirstUl();

/* ESERCIZIO 8 
 Scrivi una funzione che renda verde il background di ogni lista non ordinata
*/

const paintItGreen = function () {
  const liste = document.querySelectorAll("ul");
  liste.forEach((item) => (item.style.backgroundColor = "green"));
};

paintItGreen();

/* ESERCIZIO 9
 Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
*/
function makeItClickable() {
  const contenuto = title.textContent;
  let sliced = contenuto;
  title.addEventListener("click", function () {
    if (sliced.length > 1) {
      sliced = sliced.slice(0, -1);
      title.textContent = sliced;
    } else {
      sliced = contenuto;
      title.textContent = sliced;
    }
  });
}

makeItClickable();

/* ESERCIZIO 10
 Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
*/

const footer = document.querySelector("footer");
const revealFooterLink = function () {
  const link = footer.querySelector("a");
  const linkhref = link.getAttribute("href");
  footer.addEventListener("click", function () {
    alert(linkhref);
  });
};

revealFooterLink();

/* ESERCIZIO 11
 Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
 La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
*/

const divtabella = document.getElementById("tableArea");
const generateTable = function () {
  const table = document.createElement("table");
  const tableHead = document.createElement("thead");
  const tableBody = document.createElement("tbody");
  const rowHead = document.createElement("tr");
  let array = ["immagine", "nome prodotto", "quantità", "prezzo"];
  array.forEach((item) => {
    let cellHead = document.createElement("th");
    cellHead.innerText = item;
    rowHead.appendChild(cellHead);
  });
  tableHead.appendChild(rowHead);
  arrayTabella.forEach((item) => {
    const rowBody = document.createElement("tr");
    let cellImg = document.createElement("td");
    let img = document.createElement("img");
    img.setAttribute("src", item.immagine);
    let cellName = document.createElement("td");
    cellName.innerText = item.nomeProdotto;
    let cellQty = document.createElement("td");
    cellQty.innerText = item.qty;
    let cellPrice = document.createElement("td");
    cellPrice.innerText = item.prezzo;
    cellImg.appendChild(img);
    rowBody.appendChild(cellImg);
    rowBody.appendChild(cellName);
    rowBody.appendChild(cellQty);
    rowBody.appendChild(cellPrice);
    tableBody.appendChild(rowBody);
  });
  table.appendChild(tableHead);
  table.appendChild(tableBody);
  divtabella.appendChild(table);
};

generateTable();

/* ESERCIZIO 12
 Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
*/

let newObj = {
  immagine: "../assets/img/Stampante.png",
  nomeProdotto: "Stampante",
  qty: 3,
  prezzo: 200,
};

const addRow = function (obj) {
  arrayTabella.push(obj);
  divtabella.innerHTML = "";
  generateTable();
};

addRow(newObj);

/* ESERCIZIO 14
Crea una funzione che nasconda le immagini della tabella quando eseguita
*/

const hideAllImages = function () {
  divtabella.addEventListener("click", function () {
    let immagini = document.querySelectorAll("#tableArea img");
    immagini.forEach((item) => {
      let classes = item.classList;
      classes.toggle('hidden');  
      
    });
  });
};

hideAllImages();

/* EXTRA ESERCIZIO 15
Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/
const heading2 = document.querySelector("h2");
const changeColorWithRandom = function () {
  heading2.addEventListener("click", function () {
    /* OPZIONE 1
        let a = Math.floor((Math.random()) * 256);
        let b = Math.floor((Math.random()) * 256);
        let c = Math.floor((Math.random()) * 256);
        let randomcolor = `rgb(${a}, ${b}, ${c})`;
        heading2.style.color = randomcolor;
        */

    //OPZIONE2
    let letters = "0123456789ABCDEF";
    letters = letters.split("");
    let colorRandom = "#";
    for (i = 0; i < 6; i++) {
      colorRandom += letters[Math.floor(Math.random() * 16)];
    }
    heading2.style.color = colorRandom;
  });
};

changeColorWithRandom();
