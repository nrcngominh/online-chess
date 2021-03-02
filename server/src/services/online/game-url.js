// Create a random string that matches ^[a-zA-Z0-9]{8}$
const createGameUrl = () => {
  const ascii = { a: "a".charCodeAt(0), z: "z".charCodeAt(0) };
  const numOfLetters = ascii.z - ascii.a + 1;
  const lowercases = [...Array(numOfLetters).keys()].map((i) =>
    String.fromCharCode(i + ascii.a)
  );

  const uppercases = lowercases.map((lower) => lower.toUpperCase());
  const digits = [...Array(10).keys()].map((digit) => digit.toString());
  const allChars = [...lowercases, ...uppercases, ...digits];

  return [...Array(8).keys()].reduce((acc, cur) => {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    return acc + allChars[randomIndex];
  }, "");
};

module.exports = {
  createGameUrl,
};
