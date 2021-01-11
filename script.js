function makeList() {
    // Establish the array which acts as a data source for the list
    let listData = [
    {
        imgSrc:'images/zara_logo.png',
        location: "Prishtin&euml;",
        category: "Asistent/e t&euml; shitjes"
    },
    {
        imgSrc:'images/aztech_logo.png',
        location: "Fush&euml; Kosov&euml;",
        category: "Shit&euml;s/e"
    },
    {
        imgSrc:'images/besa_security_logo.png',
        location: "Pej&euml;",
        category: "Sigurim"
    },
    {
        imgSrc:'images/sach_pizza_logo.png',
        location: "Lipjan",
        category: "Gastronomi"
    },
    {
        imgSrc:'images/konstruktori_ing_logo.png',
        location: "Podujev&euml;",
        category: "Nd&euml;rtimtari"
    },
    {
        imgSrc:'images/neptun_logo.png',
        location: "Ferizaj",
        category: "Shit&euml;s/e"
    }   
    ],
 
    // Set up a loop that goes through the items in listItems one at a time
    numberOfListItems = listData.length,
    listItem,
    i;

    // Add it to the page

    for (i = 0; i < numberOfListItems; ++i) {
        // create an item for each one
        card = document.createElement('div');
        cardWrapper = document.createElement('div');
        cardWrapper.appendChild(card);
        card.className += "card";
        cardWrapper.className += "cardWrapper";


        img = document.createElement('img');
        img.src = listData[i]['imgSrc'];
        img.style.height='150px';
        img.style.width='150px';
        img.style.objectFit='contain';
        img.className += "image";


        container = document.createElement('div');
        container.className += "container";

        heading = document.createElement('h4');
        heading.innerHTML = listData[i]['category'];
        heading.style.color='black';
        heading.style.textDecoration='none'; 

        paragraph = document.createElement('p');
        paragraph.innerHTML = listData[i]['location'];
        paragraph.style.color='black';

        container.appendChild(heading);
        container.appendChild(paragraph);
        card.appendChild(img);
        card.appendChild(container);


        
        document.getElementById('card-container').appendChild(cardWrapper);

    }
}

