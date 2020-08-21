let app = new Vue({
	el:'#app',
	data:{  
        name: '',
        list: []

    },
    methods: {

        createContact: function(){

            if(this.name.length > 0) {

                this.list.push(this.name);

                this.name = '';
            }
        }

    }
});