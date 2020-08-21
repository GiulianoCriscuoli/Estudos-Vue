let app = new Vue({

    el: '#app',
    data: {

        calculate: '',
        warning: '',
        result: '',
        timer: null

    },
    methods: {

        doCalculate: function() {

            this.warning = '';

            this.result = eval(this.calculate);

        }

    },
    watch: {

        calculate:function() {

            this.warning = ' Digitando...';   

            if(this.timer != null) {

                clearTimeout(this.timer);

            }

            this.timer = setTimeout(this.doCalculate, 1000);

        }

    }

});