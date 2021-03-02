const createGameUrl = () => {
  // Create a random string that matches ^[a-zA-Z0-9]{8}$
  let string = "";
  const characters =
    "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789";

  for (let i = 0; i < 8; i++) {
    const index = Math.floor(Math.random() * characters.length);
    const char = characters.charAt(index);
    string += characters.charAt(index);
  }
  return string;
};

module.exports = {
  createGameUrl,
};
