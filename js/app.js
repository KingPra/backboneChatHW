const ChatModel = require('./models/chat');
const ChatView = require('./views/chat');

window.addEventListener('load', function () {
    const event = new ChatModel();

    const view = new ChatView({
    el: document.querySelector('body'),
    model: event,
    });
    
    view.render();
    console.log('ready to rock');
});