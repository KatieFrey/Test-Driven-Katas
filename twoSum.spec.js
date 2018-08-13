const { expect } = require("chai");
const TwoSum = require("./twoSum");

describe("TwoSum", () => {
  it("Returns an empty array if no numbers sum to target", () => {
    expect(TwoSum([], 5).length).to.equal(0);
  });
  it("Returns empty array if single lengthed array doesn't equal target", () => {
    expect(TwoSum([5], 5)).to.equal([0]);
    expect(TwoSum([4], 5).length).to.equal(0);
  });
  it("Returns two indices if their sum equals target", () => {
    expect(TwoSum([2, 3], 5)).to.equal([0, 1]);
    expect(TwoSum([4, 1], 5)).to.equal([0, 1]);
    expect(TwoSum([1, 6], 5).length).to.equal(0);
  });
});
