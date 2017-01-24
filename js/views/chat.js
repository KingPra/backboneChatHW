module.exports = Backbone.View.extend({

    initialize: function () {
        this.model.on('change', this.render, this);
        this.model.on('add', this.render, this);
        console.log('initialize func from \'views\' just happened');
    },

    events: {
        //when id is clicked, call this event
        'click #sendbtn': 'updateMsg',
    },

    updateMsg: function () {
        // might be where I put incoming messages
        const newMsg = this.el.querySelector('#message').value;
        const username = this.el.querySelector('#username').value;
        console.log('updateMsg function from views just kicked in');
        console.log(newMsg + ' ' + username);
    },

    render: function () {

        // //this line calls the mustache template from html script
        const template = document.querySelector('#message-template').innerHTML;
        this.el.querySelector('#incoming-msg').innerHTML = '';
        this.el.querySelector('#message').innerHTML = '';
        const li = document.createElement('li');
        li.innerHTML = Mustache.render(
            template,
            {
                username: 'name',
                message: 'the message',
            }
        );
        const parent = this.el.querySelector('#incoming-msg');
        parent.appendChild(li);
        console.log('render func on ' + parent);
    },
});