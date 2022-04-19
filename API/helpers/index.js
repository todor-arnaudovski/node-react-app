const capitalize = (term) => {
  const termArr = term.split(' ');
  const termArrCapitalized = [];

  for (let word of termArr) {
    const wordCapitalized = word.charAt(0).toUpperCase() + word.slice(1);
    termArrCapitalized.push(wordCapitalized);
  }

  return termArrCapitalized.join(' ');
};

const createUrl = (term) => {
  const slug = term
    .split(' ')
    .map((word) => {
      return word.toLowerCase();
    })
    .join('-');

  return slug;
};

module.exports = { createUrl, capitalize };
