
function makeList() {
	let listDataDetails = [
		{
			name:'Zara',
			status: 'Full Time',
			position: '<b>Zara hapë vend të lirë të punës për:</b><br></br>Pozita e kërkuar: Asistent/e të Shitjes<br></br>',
			conditions:"<b>Kushtet që punëtori do të ketë:</b><br></br><ul><li>Punonjës: i rregulltë</li> <li>Orari i punës: i plotë</li><li>Vendi i punës: Prishtinë</li><li>Afati për aplikim deri më: 11/01/2021</li></ul><br></br>",
			responsibilities:"<b>Detyrat e punëtorit:</b><br></br><ul><li>Mirëpret dhe shërben klientët, njofton klientët rreth ofertave dhe arritjeve të reja të artikujve</li><li>Përkujdeset për sektorin e caktuar, bënë organizimin vizuel të mallit</li><li>Përcjellë artikujt e shitur, evidenton mungesat e artikujve dhe i raporton tek menaxheri i dyqanit</li></ul><br></br>",
			qualification:"<b>Kualifikimet:</b><br></br><ul><li>Arsimimi i mesëm ose i lartë</li><li>Shkathtësi të mira matematikore / numerike</li><li>Shkathtësi të mira komunikuese</li><li>Njohuri të mira të programeve kompjuterike dhe të gjuhës angleze</li><li>Njohuri mbi principet e shitjes dhe përvojë pune paraprake</li></ul><br></br>",
			applicationForm: '<b>Mënyra e aplikimit:</b><br></br>Të interesuarit mund të aplikojnë duke dërguar CV, në email: zara@gmail.com'
		},
		{
			name:'Aztech',
			status: 'Full Time',
			position: '<b>Aztech hapë vend të lirë të punës për:</b><br></br>Pozita e kërkuar: Shitës/e<br></br>',
			conditions: "<b>Kushtet që punëtori do të ketë:</b><br></br><ul><li>Punonjës: i rregulltë</li><li>Orari i punës: i plotë</li><li>Vendi i punës: Fushë Kosovë</li><li>Afati për aplikim deri më: 31/01/2021</li></ul><br></br>",
			responsibilities: "<b>Detyrat e punëtorit:</b><br></br><ul><li>Mirëpret dhe shërben klientët, njofton klientët rreth ofertave dhe arritjeve të reja të artikujve</li><li>Përkujdeset për sektorin e caktuar, bënë organizimin vizuel të mallit</li><li>Percjellë artikujt e shitur, evidenton mungesat e artikujve dhe i raporton tek menaxheri i dyqanit</li></ul><br></br>",
			qualification: "<b>Kualifikimet:</b><br></br><ul><li>Arsimimi i lartë</li><li>Preferohet përvojë pune relevante</li><li>Të jetë metodik dhe i/e organizuar, fleksibil dhe i/e shpejtë zgjidhjen e problemeve</li><li>Shkathtësi të mira komunikuese</li><li>Njohuri të mira të programeve kompjuterike dhe produkteve që shet kompania</li><li>Preferohet leje e vozitjes (kategoria B) dhe të jenë me vendbanim afër pikave të shitjes</li></ul><br></br>",
			applicationForm:'<b>Mënyra e aplikimit:</b><br></br>Të interesuarit mund të aplikojnë duke dërguar CV, në email: puna@aztech-ks.com'
		},
		{
			name:'Besa Security',
			status: 'Full Time',
			position: '<b>Besa Security hapë vende të lira të punës për:</b><br></br>Pozitat e kërkuar: Oficer Patrullues – 15 persona<br></br>',
			conditions: "<b>Kushtet që punëtori do të ketë:</b><br></br><ul><li>Punonjës: i rregulltë</li><li>Orari i punës: i plotë</li><li>Vendi i punës: Prishtinë</li><li>Afati për aplikim deri më: 23/01/2021</li></ul><br></br>",
			responsibilities: '<b>Detyrat e punëtorve:</b><br></br>Sigurime të objekteve<br></br>',
			qualification: "<b>Kualifikimet:</b><br></br><ul><li>Arsimimi i lartë</li><li>Preferohet përvojë pune paraprake</li><li>Të posedojë patentë shofer (kategoria B);Mos të jenë të dënuar apo të ndjekur penalisht</li><li>Shkathtësi të mira komunikuese, raportuese dhe të qasjes në punë;Aftësi për të punuar i pavarur dhe në punë ekipore në ambiente dinamike</li></ul><br></br>",
			applicationForm:"<b>Mënyra e aplikimit:</b><br></br><ul><li>Në zyrën qendrore të Besa Security</li><li>Të interesuarit mund të aplikojnë duke dërguar CV, në email: besasecurity@gmail.com</li></ul>"
		},
		{
			name:'Sach Pizza',
			status: 'Full Time',
			position: "<b>Sach Pizza hapë vende të lira të punës për:</b><br></br>Pozitat e kërkuar: <ul><li>Kuzhinier</li><li>Ndihmës kuzhine</li><li>Barist/e</li><li>Banakiere</li><li>Arkatare</li><li>Kamarier/e;Delivery</li></ul><br></br>",
			conditions: "<b>Kushtet që punëtori do të ketë:</b><br></br><ul><li>Punonjës: i rregulltë</li><li>Orari i punës: i plotë</li><li>Vendi i punës: Lipjan</li><li>Afati për aplikim deri më: 03/02/2021</li></ul><br></br>",
			responsibilities: "<b>Detyrat e punëtorve:</b><br></br><ul><li>Mirëpret dhe shërben klientët</li><li>Mirëmbajtja e lokalit</li><li>Kryerja e pagesave</li></ul><br></br>",
			qualification: "<b>Kualifikimet:</b><br></br><ul><li>Arsimimi i mesëm</li><li>Preferohet përvojë pune paraprake</li><li>Të posedojë patentë shofer (kategoria B) për pozitën delivery</li><li>Shkathtësi të mira komunikuese dhe kuptimi i kërkesave të klientit</li><li>Preferohet njohja e gjuhës angleze</li></ul><br></br>",
			applicationForm:'<b>Mënyra e aplikimit:</b><br></br>Të interesuarit mund të aplikojnë duke dërguar CV, në email: info@sachpizza.com'
		},
		{
			name:'Konstruktori ING',
			status: 'Full Time',
			position: '<b>Konstruktori ING hapë vend të lirë të punës për:</b><br></br>Pozita e kërkuar: Arktiekt/e<br></br>',
			conditions: "<b>Kushtet që punëtori do të ketë:</b><br></br><ul><li>Punonjës: i rregulltë</li><li>Orari i punës: i plotë</li><li>Vendi i punës: Podujevë</li><li>Afati për aplikim deri më: 25/02/2021</li></ul><br></br><br></br>",
			responsibilities: '<b>Detyrat e punëtorit:</b><br></br>Të projekton dhe menaxhon projektet<br></br>',
			qualification: "<b>Kualifikimet:</b><br></br><ul><li>Arsimimi i lartë</li><li>Njohuri të mira të programeve kompjuterike dhe të gjuhës angleze</li><li>Përvojë pune paraprake së paku 5 vjet</li></ul><br></br>",
			applicationForm:'<b>Mënyra e aplikimit:</b><br></br>Të interesuarit mund të aplikojnë duke dërguar CV, në email: konstruktoriing@hotmail.com'
		},
		{
			name:'Neptun',
			status: 'Full Time',
			position: '<b>Neptun hapë vend të lirë të punës për:</b><br></br>Pozita e kërkuar: Shitës/e<br></br>',
			conditions: "<b>Kushtet që punëtori do të ketë:</b><br></br><ul><li>Punonjës: i rregulltë</li><li>Orari i punës: i plotë</li><li>Vendi i punës: Ferizaj</li><li>Afati për aplikim deri më: 31/02/2021</li></ul><br></br>",
			responsibilities: "<b>Detyrat e punëtort:</b><br></br><ul><li>Mirëpret dhe shërben klientët, njofton klientët rreth ofertave dhe arritjeve të reja të artikujve</li><li>Përkujdeset për sektorin e caktuar, bënë organizimin vizuel të malli</li><li>Përcjellë artikujt e shitur, evidenton mungesat e artikujve dhe i raporton tek menaxheri i dyqanit</li></ul><br></br>",
			qualification: "<b>Kualifikimet:</b><br></br><ul><li>Arsimimi i mesëm ose i lartë</li><li>Preferohet përvojë pune relevante</li><li>Të jetë dhe i/e organizuar dhe i/e shpejtë zgjidhjen e problemeve</li><li>Shkathtësi të mira komunikuese</li><li>Njohuri të mira të programeve kompjuterike</li><li>Preferohet të jenë me vendbanim afër pikave të shitjes</li></ul><br></br>",
			applicationForm:'<b>Mënyra e aplikimit:</b><br></br>Të interesuarit mund të aplikojnë duke dërguar CV, në email: neptun@hotmail.com'
		}
	],

	 numberOfListItems = listDataDetails.length,
    i;


    let item = localStorage.getItem("item");
    let imgSrc = localStorage.getItem("imgSrc");
    let location = localStorage.getItem("location");
    let category = localStorage.getItem("category");

    var integer = parseInt(item, 10);

    //fotoja
    document.getElementById('itemImage').src = imgSrc;
    //kategoria
    var cat = document.createTextNode(category); // Create a text element 
    document.getElementById('itemCategory').appendChild(cat); // Append the text node to the H1 element 
    //emri
    var nameT = document.createTextNode(listDataDetails[integer]['name']);
    document.getElementById('itemName').appendChild(nameT);
    //lokacioni
    var locationT = document.createTextNode(location);
    document.getElementById('itemLocation').appendChild(locationT);





    card = document.createElement('div');
    card.className += "card";
    cardWrapper = document.createElement('div');
    cardWrapper.appendChild(card);
    cardWrapper.className += "cardWrapper";
   

    container = document.createElement('div');
    container.className += "container";

    paragraph2 = document.createElement('p');
    paragraph2.innerHTML = listDataDetails[integer]['position'];
    paragraph2.style.color='black';

    paragraph3 = document.createElement('p');
    paragraph3.innerHTML = listDataDetails[integer]['conditions'];
    paragraph3.style.color='black';

    paragraph4 = document.createElement('p');
    paragraph4.innerHTML = listDataDetails[integer]['responsibilities'];
    paragraph4.style.color='black';

    paragraph5 = document.createElement('p');
    paragraph5.innerHTML = listDataDetails[integer]['qualification'];
    paragraph5.style.color='black';

    paragraph6 = document.createElement('p');
    paragraph6.innerHTML = listDataDetails[integer]['applicationForm'];
    paragraph6.style.color='black';

    container.appendChild(paragraph2);
    container.appendChild(paragraph3);
    container.appendChild(paragraph4);
    container.appendChild(paragraph5);
    container.appendChild(paragraph6);
    card.appendChild(container);

    document.getElementById('body-container').appendChild(cardWrapper);
     //};
}