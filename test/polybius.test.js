const { expect } = require("chai");
const polybiusModule = require("../src/polybius");

describe("polybius", () => {
  it("is a function", () => {
    expect(polybiusModule.polybius).to.be.a("function");
  })
  it("output should be a string", () =>{
    const input = "thinkful";
    
    const expected = "4432423352125413";
    const actual = polybiusModule.polybius(input);
    expect(actual).to.equal(expected);
  });
});
