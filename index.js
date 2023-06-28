//=================HW15==================
/*Вам потрібно написати функцію, яка як параметр приймає функцію і додає їй можливість кешувати дзвінки. Ідея полягає в тому, що при виклику функції з однаковими аргументами немає сенсу викликати функцію щоразу, достатньо зберігати дані про результати виклику.

Зберігати потрібно останні 10 дзвінків.*/
function memoize(func) {
  let cache = [];

  return function(...args) {
    const key = JSON.stringify(args);
    
    // Пошук результату в кеші
    const cachedResult = cache.find(entry => entry.key === key);
   
    if (cachedResult) {
      return cachedResult.value;
    }
    
    // Виклик функції і збереження результату
    const result = func.apply(this, args);
    cache.push({ key, value: result });

    // Зберігання останніх 10 результатів
    if (cache.length > 10) {
      cache.shift();
    }

    return result;
  };
  
}
