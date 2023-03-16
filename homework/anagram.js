/**
 * Напишите функцию anagram(first, second), определяющую,
 * являются ли переданные строки first и second анаграммами.
 *
 * Пример:
 * anagram('просветитель', 'терпеливость') === true
 *
 * Больше примеров в тестах.
 *
 * @param  {string} first первая строка
 * @param  {string} second вторая строка
 * @return {boolean}
 */
export function anagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const arr = [];

  const firstLowerCase = first.toLowerCase();
  const secondLowerCase = second.toLowerCase();

  for (const symbol of firstLowerCase) {
    arr.push(symbol);
  }

  for (let i = 0; i < first.length; i++) {
    const index = arr.indexOf(secondLowerCase[i]);

    if (index > -1) {
      delete arr[index];
    } else {
      return false;
    }
  }

  return true;
}
