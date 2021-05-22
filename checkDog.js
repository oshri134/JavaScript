const checkDog = function (dogsJulia, dogsKate) {
  const juliaRightDog = dogsJulia.slice();
  juliaRightDog.splice(0, 1);
  console.log(juliaRightDog);
  juliaRightDog.splice(-2);
  console.log(juliaRightDog);
  const dogsJuliaDogsKate = juliaRightDog.concat(dogsKate);
  console.log(dogsJuliaDogsKate);
  dogsJuliaDogsKate.forEach(function (dog, i) {
    if (dog >= 5) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is an pappay, and is ${dog} years old`);
    }
  });
};

checkDog([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDog([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
