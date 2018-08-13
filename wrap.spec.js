const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  })
  it('Returns the original string if string length is less than column number provided', () => {
    expect(wrap('test', 5)).to.equal('test');
  })
  it('Returns string with linebreak if string is longer than column number', () => {
    expect(wrap('test test', 5)).to.equal('test \ntest')
  })
  it('Returns string with multiple linebreaks', () => {
    expect(wrap('test test test', 5)).to.equal('test \ntest \ntest')
  })
  it('Returns string of different words with multiple linebreaks', () => {
    expect(wrap('test testing test', 7)).to.equal('test \ntesting \ntest')
  })
})

// mocha wrap.spec.js


