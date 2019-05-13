//Объект калькулятор.   
const calculator = new Vue({
    el: '#calculator',
    data: {
        //Значение первого поля ввода.
        first_number: '0.1',
        //Значение второго поля ввода.
        second_number: '0.2'
    },
    methods:{
        //Получение результата сложения.
        result: function(){             
            alert('Результат:\n'+  Number(( Number(this.first_number) + Number(this.second_number) ).toFixed(10)) );
        }
    }
});