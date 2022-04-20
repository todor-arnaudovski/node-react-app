const capitalize = (term) => {
  if (!term) throw new Error('Helpers: trying to capitalize empty string');

  const termArr = term.split(' ');
  const termArrCapitalized = [];

  for (let word of termArr) {
    const wordCapitalized = word.charAt(0).toUpperCase() + word.slice(1);
    termArrCapitalized.push(wordCapitalized);
  }

  return termArrCapitalized.join(' ');
};

const createUrl = (term) => {
  if (!term) throw new Error('Helpers: trying to crete URL from empty string');

  const slug = term
    .split(' ')
    .map((word) => {
      return word.toLowerCase();
    })
    .join('-');

  return slug;
};

module.exports = { createUrl, capitalize };
