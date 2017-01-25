// importing model to access the data
const ChatModel = require('./chat');

module.exports = Backbone.Collection.extend({
    model: ChatModel,

    createNew: function (name, msg) {
        console.log('createNew func ' + msg)
        const newChat = new ChatModel();
        newChat.set('name', name);
        newChat.set('message', msg);
        this.add(newChat);
        newChat.save();
        ;
    }, 

});