// // // // // // // const countChars = (str, char) => {
// // // // // // //     let i = 0;
// // // // // // //     let count = 0;
// // // // // // //     while (i < str.length) {
        
// // // // // // //       if (str[i].toLowerCase() === char.toLowerCase()) {
// // // // // // //         count = count + 1;
// // // // // // //       }
// // // // // // //       i = i + 1;
// // // // // // //     }
  
// // // // // // //     return count;
// // // // // // //   };
// // // // // // //   console.log(countChars('vorOogi','o'))
// // // // // // // const reverse = (str)=>{
// // // // // // //     let i =0;
// // // // // // //     let result = '';
// // // // // // //     while(i < str.length){
// // // // // // //         result = `${str[i]}${result}`
// // // // // // //         i ++
// // // // // // //     }
// // // // // // //     return result;
// // // // // // // }
// // // // // // // console.log(reverse('bravos'))
// // // // // // // const even =(str)=>{
// // // // // // //     let result ='';
// // // // // // // //     for(let i = 0;i<=str.length-1;i++){
// // // // // // // //       if(i % 2 !== 0){

// // // // // // // //         result = result +str[i]
// // // // // // // //       }
      
// // // // // // // //       console.log(str[i])
// // // // // // // //       console.log(result)
// // // // // // // //     }
// // // // // // // //     return result;
// // // // // // // //     }
// // // // // // // //     console.log(even('123456'))

// // // // // // //     const filterString =(str,simb)=>{
// // // // // // //     let result = ''
// // // // // // //         for(let i =0;i<=str.length-1;i++){
// // // // // // //           const  currentChar = str[i]
// // // // // // //           if(currentChar !== simb){
// // // // // // //             result =result + currentChar
// // // // // // //           }
       
// // // // // // //         }
// // // // // // //         return result;
// // // // // // //     }
// // // // // // //     console.log(filterString('ordo','r'))

// // // // //     const makeItFunny=(str,n)=>{
// // // // //         let result ='';
// // // // //         for(let i =0;i<str.length;i++){
// // // // //          const curChar = str[i] 
          
// // // // //           if((i+1)% n=== 0){
// // // // //             result = `${result}${curChar.toUpperCase()}`
// // // // //           }else{
// // // // //           result = `${result}${curChar}`;
// // // // //         }  
// // // // //     }
// // // // //         return result
// // // // //         }
// // // // //         console.log(makeItFunny('ZZ zorro','z'))
// // // // //         const makeItFunny1 = (str, n) => {
// // // // //             let i = 0;
// // // // //             let result = '';
// // // // //             while (i < str.length) {
// // // // //               const current = str[i];
// // // // //               if ((i + 1) % n === 0) {
// // // // //                 result = `${result}${current.toUpperCase()}`;
// // // // //               } else {
// // // // //                 result = `${result}${current}`;
// // // // //               }
// // // // //               i++;
            
// // // // //             }
// // // // //             return result;
// // // // //         }
// // // // //         console.log(makeItFunny1('I never look back','N'))
// // // // // const joinNumbersFromRange=(start,finish)=>{
// // // // //     let result ='';
// // // // //     for(let i =start;i<finish.length;i++){
// // // // //       console.log(i)
// // // // //       result = result * i
// // // // //     }
// // // // //     return result
// // // // //     }
// // // // //     console.log(joinNumbersFromRange(3,5))//не выводит..

// // // // // const reverse =(str)=>{
// // // // // let i = 0;
// // // // // let result ='';
// // // // // while(i < str.length){
// // // // //     result =`${str[i]}${result}`;
// // // // //  i=i+1;
// // // // // }
// // // // // return result;
// // // // // }
// // // // // console.log(reverse('urok'))
// // // // const encrypt =(str)=>{
// // // //   let shifr ='';
 
  
// // // //   for(let i =0;i<str.length;i+=2){
// // // //     const nextsimb = str[i+1] || ''
// // // //      shifr = `${nextsimb}${shifr}${str[i]}`
// // // //   }
// // // //   //console,log(str[i])
// // // //     return shifr;
// // // //   }
// // // // console.log(encrypt('move'));   // 'omev'
// // // // console.log(encrypt('attack')); // 'taatkc'
// // // // console.log(encrypt('car!')); // 'ac!r'
// // // // console.log(encrypt('go!')); // 'og!'

// // // //ARRAYS

// // // // const getWeekends =(x)=>{
// // // //   let long = ['saturday','sunday'];
// // // //   let short = ['sat','sun'];

// // // //   if(x === 'short'){
// // // //     return short;
// // // //   }else{
// // // //   return long;
// // // //   }
// // // // }
// // // // console.log(getWeekends('long'))

// // // // const arr =['Один','второй']
// // // // arr[1]='alen'
// // // // arr.push('true')
// // // // arr.unshift('first')
// // // // console.log(arr)




// // // const swap =(arr)=>{
// // // let first = arr[0];
// // // let last = arr[arr.length -1]

// // // if(arr.length < 2){
// // //   return arr
// // // }
// // // let bable = first;
// // // arr[0]  = last
// // // arr[arr.length-1] = bable
// // // return arr
// // // }


// // // console.log(swap([])); // []
// // // console.log(swap([1])); // [1]
// // // console.log(swap([1, 2])); // [2, 1]
// // // console.log(swap(['one', 'two', 'three'])); // ['three', 'two', 'one']

// // const cities = ['moscow', 'london', 'berlin', 'porto', '', null, undefined];
// //  const get =(arr,ind,def = null)=>{
// // if(ind >= arr.length || ind < 0){
// // return def
// // }
// // return arr[ind]
// //  }

// // console.log(get(cities, 1)); // 'london'
// // get(cities, 4); // ''
// // get(cities, 10, 'paris'); // 'paris'
// // get(cities, -1, 'oops'); // 'oops'
// // get(cities, 5, 'oops'); // null
// // console.log(get(cities, 6, 'oops')); // undefined
// // console.log(get(cities, 7)); // null
// const user =['pet','vsa','vas'];

// for(let i = user.length-1;i>=0;i--){
//   const index = (user.length -1)-i;
//   console.log(user[index])
// }
// const emails = ['VASYA@gmAil.com', 'iGoR@yandex.RU', 'netiD@hot.CoM'];

// // for(let i =0;i<=emails.length-1;i++){
// //   const email =emails[i]
// //   const normEmail = email.toLowerCase();
// //   emails[i] = normEmail//заменяем значение,перезапись элемента под индексом i
// // }
// // console.log(emails)
// // const userNames = ['petya', 'vasya', 'evgeny'];
 
// // for (let i = userNames.length; i >= 0; i -= 1) {
// //   console.log(userNames[i]);
// //}


// for(let i = 0;i<=emails.length-1;i++){
//   const email = emails[i];
//   const normEmail =email.toLowerCase();
//   emails[i] = normEmail
  
// }
// console.log(emails)

 const names = ['john', 'smith', 'karl'];
 
// //const newNames = addPrefix(names, 'Mr');
// const newNames=(str,pref)=>{
//   const newArr = [];
//   for( let i = 0;i<=str.length-1;i++){
//  newArr[i] = `${pref} ${str[i]}`  
//   }
//   return newArr
// }
// console.log(newNames(names,'ustavshiy'));


const Anyta =(arr)=>{

let popa = []
for(let i= 0; i <= arr.length-1;i++){
  console.log(arr.length)
 
    popa[i] = names[i].toUpperCase()
    console.log(popa[i])
}
return popa
}
 console.log(Anyta(names))

const sum =(a,b)=>{

  return a+b
}
console.log(sum(1,1))

const createPrinter =()=>{
  const name = 'king'
  const printName =()=>{
    console.log(name)
  }
  return printName
}
const myPrinter = createPrinter()
console.log(myPrinter())

const ddrays =['a','b','c']
for(let i =0;i<=ddrays.length -1;i++){
  console.log(ddrays[i])
}
for(let i =ddrays.length -1;i>=0;i --){
  console.log(ddrays[i])
}

const emails = ['VASYA@gmAil.com', 'iGoR@yandex.RU', 'netiD@hot.CoM'];
for(let i = 0;i <=emails.length-1;i++){
  const email = emails[i];
  const normEmail = email.toLowerCase()
  emails[i]= normEmail//Ключевая строчка: emails[i] = normalizedEmail;. В ней происходит перезапись элемента под индексом i.

}
console.log(emails)

//const items =[1,2]
// const items2 = items;
// items2.push(3)
// console.log(items)
// console.log(items2)

const f = (coll) => coll.push('wow');
const items = ['one']
f(items)
console.log((items))
f(items)
console.log((items))
// const f = (coll) => coll.push('wow');
// const items = ['one'];
// f(items);
// console.log(items); // => ['one', 'wow'] 
// f(items);
// console.log(items); // => ['one', 'wow', 'wow'] 
const num = [1,2,3,7,-1]
const calculateMax =(coll)=>{
if(coll.length === 0){
  return null
}
let max = coll[0]
for(let i = 1;max<coll.length;i++){
  const currentElement = coll[i]
  if(max<currentElement){
    
    max = currentElement
  }
}
return max
}
console.log(calculateMax(num))

const calculateSum =(coll)=>{
let sum = 0;
for(let i = 0;i<=coll.length-1;i++){
  sum = sum + coll[i]
}
return sum
}
console.log(calculateSum(num))

for(const nam of names){
  console.log(nam)
}
const calcSum =(coll)=>{
  let sum = 0;
  for(const n of coll){
    sum = sum+ n
  }
  return sum
}
console.log(calcSum(num))

const greeting = 'hello'
for(const sim of greeting){
  console.log(sim)
}
const arrn = [0, 1, false, null, true, 'wow', null]
const compact =(coll)=>{
const newar = []
for(const val of arrn){
  if(val !==null){
    newar.push(val)
  }
}
return newar
}
console.log(compact(arrn))