/*
남자 m 여자 n 만큼 있을때 3명당 한 팀인 조를 이루려고한다. 남자와 여자가 골고루 섞여서 몇 개의 조를 만들 수 있는지
(남자만 있고 여자만 있는 조는 만들 수 없다.)
*/

// const men = ['m1', 'm2', 'm3'];
// const women = ['w1', 'w2', 'w3'];

// const array_reset = (menOrWomen,second,third) => {
//     for(let i=0; i<third; i++){
//         let a = second === true ? men[Math.floor(Math.random()*men.length)] : women[Math.floor(Math.random()*women.length)]
//         menOrWomen.push(a);
//         if(menOrWomen.filter(b => b===a).length > 1){
//             menOrWomen.splice(i,third)
//             i=0;
//         }
//     }
// }

// const m = 3;
// const w = 2;

// function solution(m,w){
//     const men_array = [];
//     const women_array = [];

//    array_reset(men_array,true,m);
//    array_reset(women_array,'',w);

//    const new_array = new Array(men_array.join(), women_array.join());

//     return new_array
// }

// console.log(solution(m,w)) <--- 너무 어렵게 생각하고 풀이 했던것 같음

const m = 9;
const w = 3;

function solution(m, w) {
  let men = 0;
  let women = 0;
  for (let i = 1; i < m; i++) {
    men += i;
  }

  men = men * w;

  for (let i = 1; i < w; i++) {
    women += i;
  }

  women = women * m;

  return men + women;
}

console.log(solution(m, w));
