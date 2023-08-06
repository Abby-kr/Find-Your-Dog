document.addEventListener('DOMContentLoaded',function(){
    const apiKey = "live_XhpHA3enm3yUGX6cYUZoKQuJzL5OxAMqKmuoMWpCsQ1noiWzW2w6Rt026lPkqXx2"
function getData(){
    fetch('http://localhost:3000/dogs')
    .then(response => response.json())
    .then(data =>{ 
        console.log(dogs.imageUrl)
        const cardContainer = document.querySelector('.dogcards')
        data.forEach(dogs => {
            const card = document.createElement('div')
            card.classList.add('card') 
            const name = document.createElement('h2') 
            name.textContent = dogs.name          
            const image = document.createElement('img') 
            image.src = dogs.imageUrl    
            const details = document.createElement('p') 
            details.textContent = dogs.description
            card.appendChild(image)
            card.appendChild(name)           
            card.appendChild(details)
            cardContainer.appendChild(card)
        });
    })
    .catch(error => {
        console.error('Error:',error)
    })
}
getData()
})