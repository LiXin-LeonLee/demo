var app1 = new Vue({
    el: '#app-1',
    data: {
        message: 'Hello Vue!'
    }
});
var app2 = new Vue({
    el: '#app-2',
    data: {
        msg: `Page is loaded at ${new Date().toLocaleString()}`
    }
});
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});
var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn' },
            { text: 'Work' },
            { text: 'Rest' }
        ]
    }
});
var app5 = new Vue({
    el: '#app-5',
    data: {
        msg: '习主席 李总理'
    },
    methods: {
        // error: 箭头函数不绑定 this
        // reverseMsg: () => { this.msg = this.msg.split('').reverse().join('') }

        // 对象方法调用函数
        reverseMsg: function() {
            this.msg = this.msg.split('').reverse().join('');
        }
    }
});
var app6 = new Vue({
    el: '#app-6',
    data: {
        msg: 'input Vue'
    }
});

// conponent
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            {id: 0, text: 'vegetable'},
            {id: 1, text: 'fruit'},
            {id: 2, text: 'clothes'}
        ]
    },
    methods: {
        addItem: () => {
            app7.groceryList.push({
                id: app7.groceryList.length - 1,
                text: `第 ${app7.groceryList.length + 1} 项`
            })
        },
        removeLastItem: () => {
            app7.groceryList.pop();
        }
    }
});