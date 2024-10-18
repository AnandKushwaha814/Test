function removeVowel(str) {
  const vowels = "aeiouAEIOU";
  return str
    .split("")
    .filter((char) => !vowels.includes(char))
    .join();
}
console.log(removeVowel("Hello World"));
