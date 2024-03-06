// @todo: Темплейт карточки
let cardTemplate = document.querySelector('#card-template').content;
//let card = cardTemplate.querySelector('.card').cloneNode(true);

// @todo: DOM узлы

let cardsField = document.querySelector('.places__list');
let places = initialCards;
let cards = [];

// @todo: Функция создания карточки

function createCard(image, text) {
    let card = cardTemplate.querySelector('.card').cloneNode(true);
    card.querySelector('.card__image').src = image;
    card.querySelector('.card__title').textContent = text;
    cards.push(card);
    const deleteButton = card.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', deleteCard);
}

// @todo: Функция удаления карточки

function deleteCard(event) {
    console.log(event.target.parentElement);
    event.target.parentElement.remove();
}

// @todo: Вывести карточки на страницу

places.forEach(function (item)
{
    let cardImage = item.link;
    let cardText = item.name;
    createCard(cardImage, cardText);
});

cards.forEach(function (item) {
    cardsField.append(item);
    console.log(item);
})
