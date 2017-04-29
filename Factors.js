(function (factors,number) {

  for(var i = 0; i <= number; i++){
    number % i === 0 ? factors.push(i) : null;
  }
   alert(`The factors of ${number} are ${factors}`);
})([],parseInt(prompt("num?")));
