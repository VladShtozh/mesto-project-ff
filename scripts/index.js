// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы

const cardsField = document.querySelector('.places__list');

// @todo: Функция создания карточки

function createCard(image, text, deleteHandler) {
    const card = cardTemplate.querySelector('.card').cloneNode(true);
    card.querySelector('.card__image').src = image;
    card.querySelector('.card__image').alt = text;
    card.querySelector('.card__title').textContent = text;
    const deleteButton = card.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', deleteHandler);
    return card;
}

// @todo: Функция удаления карточки

function deleteCard(event) {
    event.target.closest('.card').remove();
}

// @todo: Вывести карточки на страницу

initialCards.forEach(function (item)
{
    card = createCard(item.link, item.name, deleteCard);
    cardsField.append(card);
});