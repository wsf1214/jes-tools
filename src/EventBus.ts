class EventBus {
  public listeners: { [k: string]: any };

  constructor() {
    this.listeners = {};
  }

  /**
   * 监听事件 只监听一次
   * @param event 时间名字
   * @param callback 回调
   */
  once(event: string, callback: any) {
    console.log("once",event);
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push((...arg:any)=>{
      console.log("111",arg,callback)
      callback(...arg);
      this.off(event,callback);
    });
  }

  /**
   * 监听事件
   * @param event 时间名字
   * @param callback 回调
   */
  on(event: string, callback: any) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  /**
   * 解绑监听事件
   * @param event 事件名字
   * @param callback 回调
   */
  off(event: string, callback: any) {
    console.log("off",event,callback);
    if (this.listeners[event]) {
      this.listeners[event] = this.listeners[event].filter(
        (listener: any) => listener !== callback
      );
    }
  }
  /**
   * 触发事件
   * @param event 事件名字
   * @param args 参数
   */
  emit(event: string, ...args: any) {
    if (this.listeners[event]) {
      this.listeners[event].forEach((callback: any) => {
        callback(...args);
      });
    }
  }
}
const eventBus = new EventBus();
export default eventBus;
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