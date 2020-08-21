let app = new Vue({
    el:'#app',
    data: {

        nameInput: '',
        list: []

    },

    methods: {


        createContact: function() {

            if(this.nameInput.length > 0) {

                this.list.push(this.nameInput);

                this.nameInput = '';

            }

        }
        


    }


})