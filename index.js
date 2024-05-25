import EventEmitter from 'events';

// var obj = {
//   foo: function () {
//     return 'foo';
//   },
//   bar: function () {
//     var that = this;
//     const emitter = new EventEmitter();
//     emitter.on('click', function (event) {
//       console.log(that.foo());
//     });

//     emitter.emit('click');
//   },
// };

// var obj = {
//   foo: function () {
//     return 'foo';
//   },
//   bar: function () {
//     const emitter = new EventEmitter();
//     emitter.on(
//       'click',
//       function (event) {
//         console.log(this.foo());
//       }.bind(this)
//     );

//     emitter.emit('click');
//   },
// };

var obj = {
  foo: function () {
    return 'foo';
  },
  bar: function () {
    const emitter = new EventEmitter();
    emitter.on('click', (event) => {
      console.log(this.foo());
    });

    emitter.emit('click');
  },
};

obj.bar();
