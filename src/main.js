import Target from './modules/target';

const myTarget = new Target(30, 30, 10);

// eslint-disable-next-line
console.log(myTarget.hit(10, 10));

// const start = new Date();
// const ln = 10000000;
// for (let cnt = 0; cnt < ln; cnt += 1) {
//   myTarget.hit(
//     Math.random() * 100,
//     Math.random() * 100,
//   );
// }
//  console.log(new Date() - start);
