(function(){
    "use strict";



    const detailsForm=document.getElementById('destination_detail_form');
     detailsForm.addEventListener('submit',handleFormSubmit);
        function handleFormSubmit(evt){   //submit form
    evt.preventDefault();

    const destName=evt.target.elements['name'].value;
    const destLocation=evt.target.elements['location'].value;
    const destPhoto=evt.target.elements['photo'].value;
    const destDesc=evt.target.elements['description'].value; //getting the values

//a for loop for going through and clearing out each element in the form
    for(let i=0; i<detailsForm.length; i++){
        detailsForm.elements[i].value="";

    }
    // run a funtion expression that creates card here
    const destCard=createDestinationCard(destName,destLocation,destPhoto,destDesc);

    const wishListContainer=document.getElementById('destination_container');
    if(wishListContainer.children.length===1){  //still don't know why 0 didn't  
        document.getElementById('title').innerHTML = 'My Wish List';
    }
    document.querySelector('#destination_container').appendChild(destCard);
    
    
    //5.add the card
}
function createDestinationCard(name,location,photoURL,description){
    const card=document.createElement('div');
    card.className='card';


    const img =document.createElement('img');
    img.setAttribute('alt',name);
     const constantPhotoUrl= "images/signpost.jpg";

     if(photoURL.length===0){
         img.setAttribute('src',constantPhotoUrl);
     }
     else{
         img.setAttribute('src',photoURL);
     }
     card.appendChild(img);
     const cardBody=document.createElement('div');
     cardBody.className='card-body';

     const cardTitle= document.createElement('h3');
     cardTitle.innerHTML=name;
     cardBody.appendChild(cardTitle); //adding cardTitle to the cardBody

     const cardSubtitle= document.createElement('h4');
     cardSubtitle.innerHTML=location;
     cardBody.appendChild(cardSubtitle);

     if(description.length !==0){    //description.length is longer than nothing
         const cardText= document.createElement('p');
         cardText.className= "card-text";
         cardText.innerText= description;
         cardBody.appendChild(cardText);
     }
     const cardDeletebtn= document.createElement('button');
     cardDeletebtn.innerText='Remove';

     cardDeletebtn.addEventListener('click',removeDestination);
     cardBody.appendChild(cardDeletebtn);

     card.appendChild(cardBody);

     return card;



}


    function removeDestination(evt){
        const card=evt.target.parentElement.parentElement;  //manipulating the dom by targetting the parentElement parent whis is the entire card #1

        card.remove(); //removes card from the dom
    }
})();