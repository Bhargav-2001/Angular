function primenumber(n) {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
numbers = [23,33,45,44,2,7,13,29];
primenumbers = numbers.filter(primenumber);
console.log(primenumbers);