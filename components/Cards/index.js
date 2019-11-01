// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


// axios.get("https://lambda-times-backend.herokuapp.com/articles")
//     .then(response => {
//         const topics = response.data.articles;
//         console.log(response.data.articles);
//         const cardContainer = document.querySelector('.cards-container')

//         data.values(topics).map(topic => {
//         console.log(topic);
//         topic.map(article => {
//         console.log(article.headline)
//         cardContainer.appendChild(articleCard(article));
//             })
//         })
//     })
//     .catch(error => {
//     console.log('The data was not returned', error)
//     })

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
    // console.log(response.data.articles);
    const cardContainer = document.querySelector(".cards-container");

    const topics = response.data.articles;

    Object.values(topics).forEach(topic => {
        // console.log(topic);
        topic.forEach(article => {
        // console.log(article.headline)
        cardContainer.appendChild(articleCard(article));
        })
    });
});

function articleCard(data){
    const card = document.createElement('div');
    const headLine = document.createElement('div');
    const author = document.createElement('div');
    const imageContainer = document.createElement('div');
    const picture = document.createElement('img');
    const authorName = document.createElement('span')

    //textContent
    headLine.textContent = data.headline;
    picture.src = data.authorPhoto;
    authorName.textContent = `By ${data.authorName}`;

    //classList
    card.classList.add('card');
    headLine.classList.add('headline');
    author.classList.add('author');
    imageContainer.classList.add('img-container');

    //appendChild
    card.appendChild(headLine);
    card.appendChild(author);
    card.appendChild(authorName);
    author.appendChild(imageContainer);
    imageContainer.appendChild(picture);

    return card;
}