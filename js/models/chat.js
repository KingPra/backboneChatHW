Backbone.sync = function (method, model) {
    if (method === 'create' || method === 'update') {
        const request = new XMLHttpRequest();
        request.open('POST', 'http://api.queencityiron.com/chats');

        let message = {
            from: model.get('name'),
            message: model.get('message'),
            id: model.get('id'),
            added: null,
        };

        request.send(JSON.stringify(message));
    }

    if (method === 'read') {
        console.log('get func E')
        const request = new XMLHttpRequest();
        request.open('GET', 'http://api.queencityiron.com/chats');
        request.addEventListener('load', function () {
            const response = JSON.parse(request.responseText);

            for (let i = 0; i < response.chats.length; i++) {
                msg = new ChatModel();
                msg.set('name', response.chats[i].from);
                model.add(msg);
            }
                model.set('name', response.name);
                model.trigger('change');
                console.log(ressponse.chat[i].from);
            
        });
        request.send();
    }
}



module.exports = Backbone.Model.extend({

    defaults: {
        name: 'test default name',
        message: null,
        id: null, 
        added: null,
    },

    setMessage (name) {
        this.set('name', name);
        //this.set('message', msg);
        this.save();
    },
    

});