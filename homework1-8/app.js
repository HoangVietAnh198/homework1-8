// Bài 1.
// for (let i=1; i<=100; i++){
//     if (i===99){
//         alert(`Đã hoàn thành`)
//     }
// }
// Bài 2.
// let outPut1 = 0;
// let outPut2 = 1;
// let A = 0;
// let B ='';
//     for (i=1 ; i<=20; i++) {
//         B = B+outPut1
//         A = outPut2+outPut1
//         outPut1 = outPut2
//         outPut2 = A
//         if (i<20) {
//         B = B +`,`
//         } else {
//         B = B
//         }
//     } 
//     console.log(B)
// Bài 3
// let outPut1 = 1;
// let outPut2 = 2;
// let A = 0;
// let B ='';
// let i = 0;
// let state = true;
// while (state) {
//     i=i++
//     B = B+outPut1
//     A = outPut2+outPut1
//     outPut1 = outPut2
//     outPut2 = A
//     if(B%5===0) {
//         state=false
//         alert(B)
//     }
// }
// Bài 4.
// let outPut1 = 0;
// let outPut2 = 1;
// let A = 0;
// let B ='';
// let C = 0;
//     for (i=1 ; i<=20; i++) {
//         B = B+outPut1
//         A = outPut2+outPut1
//         outPut1 = outPut2
//         outPut2 = A
//         C = Number(C)+Number(B)
//     } 
//     console.log(C)
// Bài 5.
// let i = 0;
// let state=true;
// let tong = 0;
// while (state) {
//     i=i+7
//     tong = tong+i
//     if (i===30*7) {
//         state=false;
//         alert(`${tong}`)
//     }
// }
// Baif 6
// for (let i=1 ; i<=100;i++) {
//     if (i%3===0 && i%5===0) {
//         console.log(`FizzBuzz`);
//     } else if (i%3===0) {
//         console.log(`Fizz`);
//     } else if (i%5===0) {
//         console.log(`Buzz`);
//     }
//     else {
//         console.log(i);
//     }
// }
// Bai 7 
// let inPut = Number(prompt(`Hãy nhập số bạn muốn tính giai thừa`));
// let Tong = 1;
// for (let i=1; i<=inPut; i++) {
//     Tong = Tong*i
// } console.log(Tong);