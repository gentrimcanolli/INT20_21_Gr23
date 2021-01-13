function makeList() {
    // Establish the array which acts as a data source for the list
    let listData = [
    {
        imgSrc:'images/zara_logo.png',
        location: "Prishtinë",
        category: "Asistent/e të shitjes"
    },
    {
        imgSrc:'images/aztech_logo.png',
        location: "Fushë Kosovë",
        category: "Shitës/e"
    },
    {
        imgSrc:'images/besa_security_logo.png',
        location: "Pejë",
        category: "Sigurim"
    },
    {
        imgSrc:'images/sach_pizza_logo.png',
        location: "Lipjan",
        category: "Gastronomi"
    },
    {
        imgSrc:'images/konstruktori_ing_logo.png',
        location: "Podujevë",
        category: "Ndërtimtari"
    },
    {
        imgSrc:'images/neptun_logo.png',
        location: "Ferizaj",
        category: "Shitës/e"
    }   
    ],
 
    // Set up a loop that goes through the items in listItems one at a time
    numberOfListItems = listData.length,
    listItem,
    i;

    // Add it to the page
  var g = document.getElementById('card-container');
    for (let i = 0; i < numberOfListItems; i++) {
        // create an item for each one
        card = document.createElement('div');
        cardWrapper = document.createElement('div');
        cardWrapper.appendChild(card);
        card.className += "card";
        cardWrapper.className += "cardWrapper";
      /*  document.getElementById("card-container").onclick = function () {
        localStorage.setItem("item",i);
        localStorage.setItem("imgSrc", listData[i]['imgSrc']);
        localStorage.setItem("location", listData[i]['location']);
        localStorage.setItem("category", listData[i]['category']);
        window.open("Details.html", "_self");
    };*/
         

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
         (function(index){
        g.children[i].onclick = function(){
        localStorage.setItem("item",index);
        localStorage.setItem("imgSrc", listData[index]['imgSrc']);
        localStorage.setItem("location", listData[index]['location']);
        localStorage.setItem("category", listData[index]['category']);
        window.open("Details.html", "_self");
        }    
        })(i);
    }
}

