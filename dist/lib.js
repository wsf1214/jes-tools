(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.MyLibrary = {}));
})(this, (function (exports) { 'use strict';

  var EventBus = /** @class */ (function () {
      function EventBus() {
          this.listeners = {};
      }
      /**
       * 监听事件 只监听一次
       * @param event 时间名字
       * @param callback 回调
       */
      EventBus.prototype.once = function (event, callback) {
          var _this = this;
          console.log("once", event);
          if (!this.listeners[event]) {
              this.listeners[event] = [];
          }
          this.listeners[event].push(function () {
              var arg = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                  arg[_i] = arguments[_i];
              }
              console.log("111", arg, callback);
              callback.apply(void 0, arg);
              _this.off(event, callback);
          });
      };
      /**
       * 监听事件
       * @param event 时间名字
       * @param callback 回调
       */
      EventBus.prototype.on = function (event, callback) {
          if (!this.listeners[event]) {
              this.listeners[event] = [];
          }
          this.listeners[event].push(callback);
      };
      /**
       * 解绑监听事件
       * @param event 事件名字
       * @param callback 回调
       */
      EventBus.prototype.off = function (event, callback) {
          console.log("off", event, callback);
          if (this.listeners[event]) {
              this.listeners[event] = this.listeners[event].filter(function (listener) { return listener !== callback; });
          }
      };
      /**
       * 触发事件
       * @param event 事件名字
       * @param args 参数
       */
      EventBus.prototype.emit = function (event) {
          var args = [];
          for (var _i = 1; _i < arguments.length; _i++) {
              args[_i - 1] = arguments[_i];
          }
          if (this.listeners[event]) {
              this.listeners[event].forEach(function (callback) {
                  callback.apply(void 0, args);
              });
          }
      };
      return EventBus;
  }());
  var eventBus = new EventBus();
  /**
  使用:
  ComponentA.tsx

  import eventBus from '@/utils/EventBus';
  eventBus.emit("test", Math.random())

  ComponentB.tsx

  import eventBus from '@/utils/EventBus';

  componentDidMount(): void {
    eventBus.on("test",this.getTest)
  }
  componentWillUnmount(): void {
      eventBus.off("test",this.getTest)
  }
  getTest(e){
    console.log(e);
  }
   */

  function sum(a, b) {
      return a + b;
  }
  function isNull(anything) {
      return anything === null || anything === undefined || anything === "";
  }

  exports.eventBus = eventBus;
  exports.isNull = isNull;
  exports.sum = sum;

}));
