// нашли инпут автора
const inputAuthor = document.querySelector('.form__input__author');

//  нашли инпут заголовка
const inputTitle = document.querySelector('.form__input__title');

// нашли текстовое поле 
const inputText = document.querySelector(".form__input__text");

// нашли куда падает предпросмотр
const preViewTitle = document.querySelector('.preview__title__bubble');
const preViewAuthor = document.querySelector('.preview__author__bubble');
const preViewText = document.querySelector('.preview__text__bubble');
const buttonSend =  document.querySelector('.send__form__buttons');



// нашли кнопку отправить
const buttonPreview = document.querySelector('.button__preview');


// создание Предпросмотра
function doPreview(event){
    event.preventDefault() ;
// Получаем в предпросмотр автора
    let preAuthor = inputAuthor.value;
    let newViewAuthor = document.createElement('h3');
        newViewAuthor.innerText = preAuthor;
        newViewAuthor.className = 'form__preview__author';
        preViewAuthor.appendChild(newViewAuthor)
// Получаем в предпросмотр заголовок
    let viewTitle = inputTitle.value;
    let newTitleView = document.createElement('h2');
        newTitleView.innerText = viewTitle;
        newTitleView.className = 'form__preview__title';
        preViewTitle.appendChild(newTitleView);
// Получаем в предпросмотр текст сообщения
    let viewText = inputText.value;
    let newViewText = document.createElement('p');
        newViewText.innerText = viewText;
        newViewText.className = 'form__preview__text';
        preViewText.appendChild(newViewText); 
// Получаем в предпросмотр кнопку "Отправить"
    let newButton = document.createElement('button');
        newButton.className = 'button__form';
        newButton.textContent = 'Отправить';
        buttonSend.appendChild(newButton);
    const buttonForm = document.querySelector('.button__form');
        buttonForm.addEventListener('click', addMessage);
       
} 

function addMessage(event) { 
    event.preventDefault(); 
    // Создаем документ "workMessage.html" в новой вкладке браузера 
    let newWindow = window.open('workMessage.html');     
// newWindow.onload = function () {
    // Нашли куда будет отправляться готовый текст
    const titleDone = document.querySelector('.form__done__header');
    const authorDone = document.querySelector('.form__done__author');
    const textDone = document.querySelector('.form__done__text');

// Получаем в рабочий раздел автора
    let author = inputAuthor.innerText;
    let newAuthor = document.createElement('h3');  
        newAuthor.innerText = author;
        newAuthor.className = 'form__done__author'
        authorDone.appendChild(newAuthor);
        console.log(newAuthor)
// Получаем в рабочий раздел заголовок    
    let title = inputTitle.innerText;
    let newTitle = document.createElement('h2');
        newTitle.innerText = title;
        newTitle.className = 'form__done__header'
        titleDone.appendChild(newTitle);
        console.log(titleDone)
// Получаем в рабочий раздел текст сообщения
    let message = inputText.innerText;
    let newMessage = document.createElement('p');
        newMessage.innerText = message;
        newMessage.className = 'form__done__text';
        textDone.appendChild(newMessage);
        console.log(textDone)
   
}
    // Очищаем поля и удаляем предварительный просмотр
    preViewTitle.innerHTML = '';
    preViewText.innerHTML = '';
    buttonSend.innerHTML = '';
    preViewAuthor.innerHTML = '';
    inputAuthor.value = '';
    inputTitle.value = '';
    inputText.value = '';



buttonPreview.addEventListener('click', doPreview);