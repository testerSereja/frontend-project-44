// const user = {name:'ania',adress:'gatchinskaia1/56',age:23};
// const data = { name: 'Tirion 2', age: 33 };

const fruits = [
    'apple', 'banana', 'pear',
    'apricot', 'apple', 'banana',
    'apple', 'orange', 'pear',
  ];
  function countFruits (fruits){
    const result = {}
    for (const name of fruits) {
       
        // Проверка на существование
        if (Object.hasOwn(result, name)) {
          result[name] += 1;
        } else {
          result[name] = 1;
        }
      }
    
      return result;
    };
   
//   for (const name of fruits) {
//     result[name] = (result[name] ?? 0) + 1;
//   }
 
// }
console.log( countFruits())

