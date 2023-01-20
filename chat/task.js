const chatWidget = document.querySelector('.chat-widget');
const messages = document.querySelector( '.chat-widget__messages' );
const message = document.querySelector('.message');

const roboAnswers = () => {
    let currentdate = new Date();
    let roboAnswersArray = 
    [
    `<div class="message">
    <div class="message__time">${currentdate.getHours() + ":" + ('0' + currentdate.getMinutes()).slice(-2)}</div>
    <div class="message__text">Все операторы заняты, но мы про вас точно не забудем!</div>
    </div>`,
    `<div class="message">
    <div class="message__time">${currentdate.getHours() + ":" + ('0' + currentdate.getMinutes()).slice(-2)}</div>
    <div class="message__text">Ваше обращение для нас важно, обратитесь позже!</div>
    </div>`,
    `<div class="message">
    <div class="message__time">${currentdate.getHours() + ":" + ('0' + currentdate.getMinutes()).slice(-2)}</div>
    <div class="message__text">Рады будем вас услушать в ближайшем будущем!</div>
    </div>`,
    ];
    return roboAnswersArray[Math.floor(Math.random() * 3)]
}

chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active')
});

window.addEventListener('keydown', (e) => {
let currentdate = new Date();
if (e.key === 'Enter' && document.getElementById('chat-widget__input').value !== "") {
    messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${currentdate.getHours() + ":" + ('0' + currentdate.getMinutes()).slice(-2)}</div>
            <div class="message__text">${document.getElementById('chat-widget__input').value}</div>
        </div> `;
    messages.innerHTML += roboAnswers();
    document.getElementById('chat-widget__input').value = ""
} 
})