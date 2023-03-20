/**
 * Напишите функцию promiseAll(promises), поведение
 * которой аналогично поведению Promise.all(promises).
 *
 * @param  {Promise[]} promises массив с исходными промисами
 * @return {Promise}
 */
export const promiseAll = promises => new Promise((resolve, reject) => {
  let count = promises.length;

  let isError = false;
  const resolves = [];

  function isPromise(x) {
    return (typeof x === 'object' && typeof x.then === 'function');
  }

  if (!promises.some(isPromise)) {
    resolve(promises);
  } else {
    promises.forEach((p, index) => {
      p.then(value => {
        resolves[index] = value;
        count -= 1;
        if (count === 0 && !isError) {
          resolve(resolves);
        }
      }).catch(error => {
        isError = true;
        reject(error);
      });
    });
  }
});
