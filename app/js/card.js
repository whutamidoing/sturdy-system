const createCard = (name, imageURL, platforms) => {
    const article_card = document.createElement('div');
    article_card.classList.add('article-card');

    const hyperReference = document.createElement('a');

    


    const platformsContainer = document.createElement('div');
    platformsContainer.classList.add('platforms-container');

    const nameP = document.createElement('div');
    nameP.textContent = `Name: ${name}`;
    platforms.forEach(platform => {
            const platformsP = document.createElement('div');
            platformsP.textContent = `platforms: ${platform.name}`;
            platformsContainer.appendChild(platformsP);
    });

    article_card.appendChild(hyperReference);

    hyperReference.appendChild(cardImg);
    cardImg.appendChild(img);

    hyperReference.appendChild(article_details);
    article_details.appendChild(title);
    article_details.appendChild(platform_section);

    article_card.classList = "card-container"

    return article_card;
}

export default createcard;