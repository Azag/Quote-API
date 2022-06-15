const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
}
const getByAuthor = (arr, author) => {
  return arr.filter(el => el.person === author)
}

module.exports = {
  getRandomElement, getByAuthor
};
