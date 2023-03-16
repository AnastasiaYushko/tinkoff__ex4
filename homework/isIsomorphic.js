// TODO  прописать биекцию для изоморфизма
/**
 * Напишите функцию isIsomorphic(left, right), определяющую,
 * являются ли строки left и right изоморфными.
 *
 * Две строки называются изоморфными, если в строке A можно заменить
 * символы таким образом, чтобы получилась строка B.
 *
 * Каждый конкретный символ может заменяться только на один конкретный
 * символ, в том числе на самого себя. При этом все вхождения символа N
 * могут быть заменены только на символ M.
 *
 * Порядок символов должен остаться неизменным.
 *
 * Пример:
 * isIsomorphic('egg', 'foo') === true
 * isIsomorphic('foo', 'bar') === false
 *
 * @param  {string} left
 * @param  {string} right
 * @return {boolean}
 */
export function isIsomorphic(left, right) {
  function symbolsToMap(str) {
    const myMap = new Map();

    for (const s of str) {
      if (!myMap.has(s)) {
        myMap.set(s, 1);
      } else {
        myMap.set(s, myMap.get(s) + 1);
      }
    }
    return myMap;
  }

  const quantitySymbolsLeft = new Map(symbolsToMap(left));

  const quantitySymbolsRight = new Map(symbolsToMap(right));

  return [...quantitySymbolsRight.values()].toString() === [...quantitySymbolsLeft.values()].toString();
}
