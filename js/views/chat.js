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
        const newMsg = this.el.querySelector('#message').value;
        const username = this.el.querySelector('#username').value;
        console.log('updateMsg function from views just kicked in');
        //this.model.setMessage(newMsg, username);
        this.model.createNew(username, newMsg);
    },

    render: function () {

        // //this line calls the mustache template from html script
        const template = document.querySelector('#message-template').innerHTML;

        this.el.querySelector('#incoming-msg').innerHTML = '';
        // looping through chat list
        for (let i = 0; i <this.model.models.length; i++) {
            const m = this.model.models[i];

        const child = document.createElement('li');
        child.innerHTML = Mustache.render(
            template,
            {
                username: 'from: ' + m.get('name'),
                message: m.get('message'),
            }
        );
        const parent = document.querySelector('#incoming-msg');
        parent.appendChild(child);
        console.log('name ' + m.get('name'));
        }
    },
});