
import eventBus from './src/EventBus';

export function sum(a: number, b: number) {
  return a + b;
}

export function isNull(anything: any) {
  return anything === null || anything === undefined || anything === "";
}
export {
  eventBus
}