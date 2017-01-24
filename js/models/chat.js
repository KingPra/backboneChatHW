module.exports = Backbone.Model.extend({

    defaults: {
        name: null,
        message: null,
        id: null, 
        added: null,
    },

    changeName(name) {
        this.set('name', name);
        console.log('changeName func kicked in ');
        console.log(changeName());
    },

});