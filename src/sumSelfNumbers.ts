export function sumSelfNumbers(limit: number = 5000): number {
  const calculateD = (num: number): number => {
    const numAsString = num.toString();
    let sumOfDigits = 0;

    for (let i = 0; i < numAsString.length; i++) {
      sumOfDigits += parseInt(numAsString[i]);
    }

    return num + sumOfDigits;
  };

  const generatedNumbers = new Set<number>();

  for (let i = 1; i < limit; i++) {
    const generated = calculateD(i);

    if (generated < limit) {
      generatedNumbers.add(generated);
    }
  }

  const selfNumbers: number[] = [];

  for (let num = 1; num < limit; num++) {
    if (!generatedNumbers.has(num)) {
      selfNumbers.push(num);
    }
  }

  let totalSum = 0;
  for (const num of selfNumbers) {
    totalSum += num;
  }

  return totalSum;
}
