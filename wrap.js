const wrap = (text, maxLen) => {
  if (text.length <= maxLen) {
    return text;
  } else {
    let newText = '';
    let currentEl;
    for (let i = 0; i < text.length; i++) {
      currentEl = text[i]
      if (i % maxLen === 0 && i !== 0) {
        newText = newText + '\n' + currentEl;
      } else {
        newText += currentEl;
      }
    }
    return newText;
  }

};

// console.log('test \ntest');

module.exports = wrap;
