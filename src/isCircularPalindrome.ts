export function isCircularPalindrome(w: string) {
  const normalizedWord = w.toLocaleLowerCase();
  if (normalizedWord.length < 2) {
    return false;
  }

  function checkPalindrome(s: string): boolean {
    const resevered = s.split("").reverse().join("");
    if (s === resevered) {
      return true;
    } else {
      return false;
    }
  }

  for (let i = 0; i < normalizedWord.length; i++) {
    const front = normalizedWord.slice(i);
    const back = normalizedWord.slice(0, i);
    const rotated = front + back;

    const result = checkPalindrome(rotated);
    if (result === true) {
      return true;
    }
  }

  return false;
}
