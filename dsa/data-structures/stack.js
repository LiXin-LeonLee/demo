function Stack() {
    this.items = [];

    // 定义原型对象
    if (typeof this.push !== 'function') {
        var pro = Stack.prototype;

        // 定义访问器属性（《JS 高程》7.1节）
        // num --> 栈内元素数量，isEmpty --> 栈是否为空
        Object.defineProperties(pro, {
            num: {
                get: function() {
                    return this.items.length;
                }
            },
            isEmpty: {
                get: function() {
                    return this.items.length === 0;
                }
            }
        });

        // 入栈
        pro.push = function(element) {
            this.items.push(element);
            return this.items.length;
        };

        // 出栈
        pro.pop = function() {
            return this.items.pop();
        };

        // 获取栈顶元素
        pro.peek = function() {
            return this.num > 0 ? this.items[this.items.length - 1] : null;
        };

        // 清空
        pro.clear = function() {
            this.items = [];
        };

        // 打印
        pro.print = function() {
            console.log(this.num > 0 ? this.items.toString() : 'The stack is empty.');
        };
    }
}

// auto test
(function() {
    
})();

// test stacK() by eyes
(function() {
    var i, e, t, s = new Stack();
    for (i = 0; i < 10; i++) {
        console.group(i+1);
        e = Math.floor(Math.random() * 100);
        t = Math.random();
        if (t < 0.4 && s.num > 0) {
            console.log(s.pop() + ' is out. Current number of stack is: ' + s.num);
            s.print();
            console.log('top of the stack: ' + s.peek());
        } else {
            s.push(e);
            console.log(e + ' is in. Current number of stack is: ' + s.num);
            s.print();
            console.log('top of the stack: ' + s.peek());
        }
        console.groupEnd(i+1);
    }
    console.log('Clear up the stack...');
    s.clear();
    s.print();
})();
