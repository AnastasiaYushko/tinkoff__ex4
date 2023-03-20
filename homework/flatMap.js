/**
 * Напишите функцию, добавляющую полифил метода flatMap
 * к прототипу Array. Полифил должен полностью реализовывать
 * метод (обратите внимание на передачу контекста, индексы и так далее).
 *
 * Описание метода:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
 *
 * @param  {*} ArrayConstructor конструктор Array
 * @return {Array} Тот же конструктор с добавленным методом flatMap
 */

export const flatMapPolyfill = (ArrayConstructor = Array) => {
  const concat = (x, y) => x.concat(y);

  function flatMap(f, xs) {
    return xs.map(f).reduce(concat, []);
  }

  Object.defineProperty(ArrayConstructor.prototype, 'flatMap', {
    value: ArrayConstructor.prototype.flatMap = function(f) {
      return flatMap(f, this);
    },
    writable: true,
    enumerable: false,
    configurable: true
  });
};
