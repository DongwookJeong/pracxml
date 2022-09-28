// let first = setTimeout(()=>{
//     console.log('첫번째 setTimeout입니다. 3초뒤에 실행됩니다.');
//     let second = setTimeout(()=>{
//         console.log('두번째 setTimeout입니다. 2초뒤에 실행됩니다.');
//         let third = setTimeout(()=>{
//             console.log('세번째 setTimeout입니다. 1초뒤에 실행됩니다');
//             let fourth = setTimeout(()=>{
//                 console.log('네번째 setTimeout입니다. 1초뒤에 실행됩니다');
//                 let fifth = setTimeout(()=>{
//                     console.log('다섯번째 setTimeout입니다. 1초뒤에 실행됩니다');
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 2000);
// }, 3000);


let test = new Promise(function(resolve, reject){
    console.log(typeof resolve)
    console.log(typeof reject)
    console.dir(resolve)
});
console.dir(test);